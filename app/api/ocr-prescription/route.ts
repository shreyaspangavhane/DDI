import { NextResponse } from 'next/server';
import { createWorker } from 'tesseract.js';
import { extractPrescriptionDrugs } from "@/lib/utils/prescriptionParser";

// Configure runtime for Node.js (required for tesseract.js)
export const runtime = 'nodejs';
export const maxDuration = 60; // Increase timeout for OCR processing

// Configure OCR for better prescription text extraction
async function performOcr(imageFile: File): Promise<string> {
  let worker;
  
  try {
    // For Next.js server-side, we need to configure Tesseract.js differently
    // Set environment to disable workers in server environment
    const originalEnv = process.env.TESSDATA_PREFIX;
    
    // Create worker with minimal configuration for server-side
    worker = await createWorker({
      langPath: undefined, // Let Tesseract.js handle language path automatically
      cachePath: undefined, // Disable cache to avoid path issues
      logger: (m) => {
        // Only log important progress updates
        if (m.status === 'recognizing text') {
          const progress = Math.round(m.progress * 100);
          if (progress % 25 === 0) {
            console.log(`OCR Progress: ${progress}%`);
          }
        }
      }
    });

    // Load English language
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    // Configure Tesseract for better medical text recognition
    await worker.setParameters({
      tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-%,./()[]:;+ ',
      preserve_interword_spaces: '1',
      tessedit_pageseg_mode: '6', // Assume uniform block of text
    });

    // Convert File to image buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Perform OCR
    const { data: { text } } = await worker.recognize(buffer);

    // Clean up the extracted text
    const cleanedText = cleanOcrText(text);

    return cleanedText;
  } catch (error) {
    console.error('Tesseract.js error details:', error);
    // Provide a more helpful error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (errorMessage.includes('worker') || errorMessage.includes('MODULE_NOT_FOUND') || errorMessage.includes('worker-script')) {
      throw new Error('OCR service configuration issue. Please try entering the prescription text manually.');
    }
    throw new Error(`OCR processing failed: ${errorMessage}`);
  } finally {
    if (worker) {
      try {
        await worker.terminate();
      } catch (terminateError) {
        console.error('Error terminating worker:', terminateError);
      }
    }
  }
}

// Clean and normalize OCR text for better drug extraction
function cleanOcrText(text: string): string {
  if (!text) return '';

  return text
    // Remove excessive whitespace but preserve line breaks
    .replace(/[ \t]+/g, ' ')
    // Normalize line breaks
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    // Remove multiple consecutive newlines (keep max 2)
    .replace(/\n{3,}/g, '\n\n')
    // Fix common OCR character recognition errors (be careful with these)
    // Note: These are context-dependent and might need adjustment
    // Fix common drug name OCR errors (numbers in drug names)
    .replace(/\bParacetam[0o]l\b/gi, 'Paracetamol')
    .replace(/\bIbupr[0o]fen\b/gi, 'Ibuprofen')
    .replace(/\bAspir[1i]n\b/gi, 'Aspirin')
    .replace(/\bWarfar[1i]n\b/gi, 'Warfarin')
    .replace(/\bMetf[0o]rmin\b/gi, 'Metformin')
    .replace(/\bAm[0o]xicillin\b/gi, 'Amoxicillin')
    .replace(/\bAt[0o]rvastatin\b/gi, 'Atorvastatin')
    .replace(/\b[0o]meprazole\b/gi, 'Omeprazole')
    // Normalize dosage units (remove spaces between number and unit)
    .replace(/\b(\d+(?:\.\d+)?)\s*(mg|mcg|g|ml|iu|units?|drops?|puffs?|tablets?|capsules?)\b/gi, '$1$2')
    // Fix common frequency abbreviations
    .replace(/\b(?:0|O|o)\s*d\b/gi, 'OD') // once daily
    .replace(/\bb\s*[1i]\s*d\b/gi, 'BID') // twice daily
    .replace(/\bt\s*[1i]\s*d\b/gi, 'TID') // thrice daily
    .replace(/\bq\s*[1i]\s*d\b/gi, 'QID') // four times daily
    // Trim each line
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    .trim();
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const prescriptionImage = formData.get("prescriptionImage") as File | null;

    if (!prescriptionImage) {
      return NextResponse.json({ 
        error: "No prescription image provided" 
      }, { status: 400 });
    }

    // Validate file type
    const fileType = prescriptionImage.type;
    if (!fileType.startsWith('image/')) {
      return NextResponse.json({ 
        error: "Invalid file type. Please upload an image file." 
      }, { status: 400 });
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (prescriptionImage.size > maxSize) {
      return NextResponse.json({ 
        error: "Image file is too large. Maximum size is 10MB." 
      }, { status: 400 });
    }

    // Perform OCR
    let extractedText = "";
    try {
      extractedText = await performOcr(prescriptionImage);
      
      if (!extractedText || extractedText.trim().length === 0) {
        return NextResponse.json({ 
          error: "Could not extract text from the image. Please ensure the image is clear and contains readable text.",
          extractedText: "",
          extractedDrugs: []
        }, { status: 200 }); // Return 200 but with error message
      }
    } catch (ocrError: any) {
      console.error("OCR processing error:", ocrError);
      return NextResponse.json({ 
        error: `OCR processing failed: ${ocrError.message || "Unknown error"}` 
      }, { status: 500 });
    }

    // Use the advanced prescription parser for better drug extraction
    let parsedDrugs = [];
    try {
      parsedDrugs = extractPrescriptionDrugs(extractedText);
    } catch (parseError: any) {
      console.error("Drug parsing error:", parseError);
      // Continue even if parsing fails - return the extracted text
    }

    return NextResponse.json({ 
      extractedText, 
      extractedDrugs: parsedDrugs 
    }, { status: 200 });
  } catch (error: any) {
    console.error("Error in OCR API route:", error);
    return NextResponse.json({ 
      error: error.message || "Internal Server Error",
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}
