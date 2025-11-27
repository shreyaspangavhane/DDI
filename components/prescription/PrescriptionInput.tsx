"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, FileText, XCircle, SearchIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DDIResult, PrescriptionDrug } from "@/lib/ddi/ddiTypes";
import { createWorker, PSM } from 'tesseract.js';

const PrescriptionInput = () => {
  const [prescriptionImage, setPrescriptionImage] = useState<File | null>(null);
  const [prescriptionText, setPrescriptionText] = useState<string>("");
  const [extractedDrugs, setExtractedDrugs] = useState<PrescriptionDrug[]>([]);
  const [ddiResults, setDdiResults] = useState<DDIResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [ocrProgress, setOcrProgress] = useState<number>(0);
  const [drugCombinationMessage, setDrugCombinationMessage] = useState<string | null>(null);
  const { toast } = useToast();

  // Client-side OCR function
  const performClientSideOcr = async (imageFile: File): Promise<string> => {
    const worker = await createWorker('eng', 1, {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          const progress = Math.round(m.progress * 100);
          setOcrProgress(progress);
        }
      }
    });

    try {
      // Configure Tesseract for better medical text recognition
      await worker.setParameters({
        tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-%,./()[]:;+ ',
        preserve_interword_spaces: '1',
        tessedit_pageseg_mode: PSM.AUTO,
      });

      // Perform OCR
      const { data: { text } } = await worker.recognize(imageFile);
      
      // Clean up the extracted text
      const cleanedText = text
        .replace(/[ \t]+/g, ' ')
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n')
        .trim();

      return cleanedText;
    } finally {
      await worker.terminate();
      setOcrProgress(0);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPrescriptionImage(event.target.files[0]);
      setPrescriptionText(""); // Clear text if image is uploaded
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrescriptionText(event.target.value);
    setPrescriptionImage(null); // Clear image if text is entered
  };

  const handleAnalyzePrescription = async () => {
    if (!prescriptionImage && !prescriptionText.trim()) {
      toast({
        title: "No Prescription Provided",
        description: "Please upload an image or enter text for analysis.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setExtractedDrugs([]);
    setDrugCombinationMessage(null);
    setDdiResults([]);

    try {
      let textToAnalyze = prescriptionText.trim();

      // Step 2: Client-side OCR Integration (if image is provided)
      if (prescriptionImage) {
        toast({
          title: "Processing Image",
          description: "Extracting text from your prescription... This may take a moment.",
        });
        
        try {
          // Perform OCR client-side (works much better than server-side)
          textToAnalyze = await performClientSideOcr(prescriptionImage);
          
          if (!textToAnalyze || textToAnalyze.trim().length === 0) {
            toast({
              title: "OCR Warning",
              description: "Could not extract text from the image. Please ensure the image is clear and contains readable text.",
              variant: "destructive",
            });
            setLoading(false);
            return;
          }
          
          toast({
            title: "Text Extracted",
            description: "Text successfully extracted from image. Now analyzing drugs...",
          });
        } catch (ocrError: unknown) {
          const errorMessage = ocrError instanceof Error ? ocrError.message : "OCR processing failed";
          toast({
            title: "OCR Error",
            description: errorMessage,
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
      }

      // Step 3: Drug Name Standardization & DDI Detection
      if (textToAnalyze) {
        toast({
          title: "Analyzing Drugs",
          description: "Standardizing drug names and detecting interactions...",
        });
        const ddiResponse = await fetch("/api/ddi-detection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prescriptionText: textToAnalyze }),
        });

        if (!ddiResponse.ok) {
          throw new Error("DDI detection failed");
        }
        const ddiData = await ddiResponse.json();
        const limitedDrugs: PrescriptionDrug[] = (ddiData.extractedDrugs || []).slice(0, 2);
        setExtractedDrugs(limitedDrugs);
        if (limitedDrugs.length === 2) {
          setDrugCombinationMessage(
            `Extracted Drug Combination:\nDrug 1: ${limitedDrugs[0].name}\nDrug 2: ${limitedDrugs[1].name}`
          );
        } else {
          setDrugCombinationMessage(null);
        }
        setDdiResults(ddiData.ddiResults || []);
        toast({
          title: "Analysis Complete",
          description: "Drug-Drug Interactions analyzed.",
        });
      }
    } catch (error: unknown) {
      console.error("Prescription analysis error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during analysis.";
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl bg-teal-900/30 border border-teal-700 shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-teal-300">Prescription Analysis</CardTitle>
        <p className="text-teal-200 mt-2">Upload a prescription image or enter text to detect drug interactions.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-teal-600 rounded-lg bg-teal-800/20">
          <Upload className="w-12 h-12 text-teal-400 mb-3" />
          <p className="text-teal-100 mb-2">Upload Prescription Image</p>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full max-w-xs text-teal-100 file:text-teal-500 file:bg-teal-900 file:border-teal-700 file:hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {prescriptionImage && (
            <div className="flex items-center mt-3 text-sm text-teal-300">
              <FileText className="w-4 h-4 mr-1" />
              <span>{prescriptionImage.name}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setPrescriptionImage(null)}
                className="ml-2 text-teal-400 hover:text-red-400"
              >
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-teal-900/30 px-2 text-teal-300">Or</span>
        </div>

        {/* Text Input Section */}
        <div className="space-y-3">
          <label htmlFor="prescriptionText" className="text-teal-100 text-sm">Enter Prescription Text</label>
          <Textarea
            id="prescriptionText"
            placeholder="e.g., Take Paracetamol 500mg twice daily with Ibuprofen 200mg once daily."
            value={prescriptionText}
            onChange={handleTextChange}
            rows={5}
            className="bg-teal-800/50 border border-teal-700 text-teal-100 placeholder-teal-400/70 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <Button
          onClick={handleAnalyzePrescription}
          disabled={loading || (!prescriptionImage && !prescriptionText.trim())}
          className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {ocrProgress > 0 ? `Extracting text... ${ocrProgress}%` : 'Analyzing...'}
            </>
          ) : (
            <>
              <SearchIcon className="w-5 h-5" /> Analyze Prescription
            </>
          )}
        </Button>

        {drugCombinationMessage && (
          <div className="mt-6 p-4 bg-teal-800/30 rounded-lg border border-teal-500">
            <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center gap-2">
              <span>🧪</span> Extracted Drug Combination
            </h3>
            <pre className="text-teal-100 whitespace-pre-wrap text-sm bg-teal-900/40 p-3 rounded-md border border-teal-700">
              {drugCombinationMessage}
            </pre>
          </div>
        )}

        {!drugCombinationMessage && extractedDrugs.length > 0 && (
          <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-500 text-yellow-200 text-sm">
            Unable to detect two valid medicines from the dataset. Please ensure the prescription includes recognizable drug names.
          </div>
        )}

        {/* Display DDI Results */}
        {ddiResults.length > 0 && (
          <div className="mt-6 space-y-4">
            {ddiResults.map((result, index) => {
              const normalizedLabel = (result.riskLabel || "").toLowerCase();
              const isLowRisk = normalizedLabel.includes("low");
              const isModerateRisk = normalizedLabel.includes("moderate");
              const isHighRisk = normalizedLabel.includes("high");

              const normalizeProbability = (value: number | undefined) => {
                if (!Number.isFinite(value ?? NaN)) {
                  return 0;
                }
                const safeValue = value as number;
                const normalized = safeValue > 1 ? safeValue / 1000 : safeValue;
                return Math.max(0, Math.min(1, normalized));
              };

              const rfProb = normalizeProbability(result.modelDetails?.randomForestProbability ?? result.yScore);
              const xgbProb = normalizeProbability(result.modelDetails?.xgboostProbability ?? result.yScore);
              const blendedProb = normalizeProbability(result.modelDetails?.finalProbability ?? result.yScore);

              return (
                <Card 
                  key={index} 
                  className={`border-2 ${
                    isHighRisk 
                      ? "border-red-500 bg-red-900/30" 
                      : isModerateRisk 
                      ? "border-yellow-500 bg-yellow-900/30" 
                      : "border-green-500 bg-green-900/30"
                  } bg-teal-800/30 shadow-lg`}
                >
                  <CardContent className="p-6">
                    {/* Low Risk Display */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="text-base font-semibold text-teal-200">🔹 Interaction Result</p>
                      <p className="text-xs text-teal-400 italic">(System prediction based on your model score)</p>
                    </div>

                    {isLowRisk && (
                      <div className="space-y-3 text-teal-100">
                        <p className="text-2xl">🟢 Safe Combination</p>
                        <p className="font-semibold flex items-center gap-2 text-green-300">
                          <span>✔️</span>
                          <span>Good to Go</span>
                        </p>
                        <p>This medicine pair looks safe with no harmful interactions predicted.</p>
                      </div>
                    )}

                    {isModerateRisk && (
                      <div className="space-y-3 text-teal-100">
                        <p className="text-2xl">🟡 Moderate Interaction</p>
                        <p className="font-semibold flex items-center gap-2 text-yellow-300">
                          <span>⚠️</span>
                          <span>Use With Caution</span>
                        </p>
                        <p>This combination may cause mild or moderate interactions.</p>
                      </div>
                    )}

                    {isHighRisk && (
                      <div className="space-y-3 text-teal-100">
                        <p className="text-2xl">🔴 Dangerous Interaction</p>
                        <p className="font-semibold flex items-center gap-2 text-red-300">
                          <span>⛔</span>
                          <span>Not a Good Mix</span>
                        </p>
                        <p>This medicine pair may cause harmful interactions and should be avoided.</p>
                      </div>
                    )}

                    <div className="space-y-1 text-teal-100">
                      <p className="font-semibold">This medicine pair:</p>
                      <p className="ml-4">{result.drug1} and {result.drug2}</p>
                    </div>
                  </div>

                    {/* Risk Score Display */}
                    <div className="mt-6 pt-4 border-t border-teal-700 space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-teal-300">🔹 Risk Score</p>
                        <div className="flex flex-wrap gap-4 text-sm ml-4">
                          <div>
                            <span className="text-teal-200">Risk Level: </span>
                            <span
                              className={`font-semibold ${
                                isHighRisk ? "text-red-400" : isModerateRisk ? "text-yellow-400" : "text-green-400"
                              }`}
                            >
                              {result.riskLabel}
                            </span>
                          </div>
                          <div>
                            <span className="text-teal-200">Model Score: </span>
                            <span
                              className={`font-semibold ${
                                isHighRisk ? "text-red-400" : isModerateRisk ? "text-yellow-400" : "text-green-400"
                              }`}
                            >
                              {blendedProb.toFixed(2)}
                            </span>
                            <span className="text-teal-300 text-xs ml-1">(0.00 – 1.00)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-900/40 border border-teal-700 rounded-lg p-3 text-sm text-teal-200 space-y-1">
                        <p className="text-sm font-semibold text-teal-300">🔹 Model Breakdown</p>
                        <p>Random Forest: {rfProb.toFixed(2)}</p>
                        <p>XGBoost: {xgbProb.toFixed(2)}</p>
                        <p>Blended Score: {blendedProb.toFixed(2)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Show message if no interactions found */}
        {extractedDrugs.length > 0 && ddiResults.length === 0 && (
          <div className="mt-6 p-4 bg-green-900/30 rounded-lg border-2 border-green-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟢</span>
              <h4 className="text-lg font-semibold text-green-300">No Interactions Detected</h4>
            </div>
            <p className="text-teal-100 ml-7">
              No harmful interactions were detected between the extracted medicines. However, always consult with your healthcare provider before combining medications.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrescriptionInput;
