# Prescription OCR Documentation

## Overview

The prescription OCR system extracts drug information from prescription images using client-side Tesseract.js processing. This ensures privacy and fast processing without server-side dependencies.

## Architecture

### Client-Side Processing

```
┌─────────────────────┐
│  Image Upload       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Tesseract.js       │
│  (Browser Worker)   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Text Cleaning       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Drug Extraction    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  DDI Analysis       │
└─────────────────────┘
```

## Implementation

### Component Location
- **File**: `components/prescription/PrescriptionInput.tsx`
- **Function**: `performClientSideOcr()`

### OCR Configuration

```typescript
const worker = await createWorker('eng', 1, {
  logger: (m) => {
    if (m.status === 'recognizing text') {
      const progress = Math.round(m.progress * 100);
      setOcrProgress(progress);
    }
  }
});

await worker.setParameters({
  tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-%,./()[]:;+ ',
  preserve_interword_spaces: '1',
  tessedit_pageseg_mode: PSM.AUTO,
});
```

### Text Cleaning Process

1. **Whitespace Normalization**
   - Remove excessive spaces and tabs
   - Normalize line breaks

2. **Line Processing**
   - Split by newlines
   - Trim each line
   - Filter empty lines

3. **Final Output**
   - Join cleaned lines
   - Return normalized text

## Features

### Real-Time Progress
- Shows OCR progress (0-100%)
- Updates during processing
- Displayed in button: "Extracting text... X%"

### Error Handling
- Catches OCR errors gracefully
- Shows user-friendly error messages
- Falls back to manual text input

### Privacy
- All processing happens in browser
- No image data sent to server
- Only extracted text is analyzed

## Supported Formats

### Image Types
- JPEG/JPG
- PNG
- WebP
- Other browser-supported formats

### Prescription Types
- ✅ Printed prescriptions
- ✅ Typed prescriptions
- ✅ Handwritten prescriptions (with limitations)
- ✅ Scanned documents

## Limitations

### OCR Accuracy
- Handwriting quality affects accuracy
- Poor image quality reduces success rate
- Complex layouts may cause errors

### Recommendations
1. **Image Quality**
   - Use clear, well-lit images
   - Ensure good contrast
   - Avoid blurry or dark images

2. **Prescription Format**
   - Clear, readable text
   - Minimal background noise
   - Standard prescription layout

3. **Fallback Option**
   - Manual text input available
   - Copy-paste from extracted text
   - Direct typing for better accuracy

## Usage Flow

### Step-by-Step

1. **Upload Image**
   ```
   User → Selects image file → Uploads
   ```

2. **OCR Processing**
   ```
   Image → Tesseract.js → Extracted Text
   Progress: 0% → 100%
   ```

3. **Drug Extraction**
   ```
   Text → Parser → Drug Names
   ```

4. **Analysis**
   ```
   Drugs → DDI API → Results
   ```

## Code Example

```typescript
// Perform OCR
const performClientSideOcr = async (imageFile: File): Promise<string> => {
  const worker = await createWorker('eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text') {
        setOcrProgress(Math.round(m.progress * 100));
      }
    }
  });

  try {
    await worker.setParameters({
      tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-%,./()[]:;+ ',
      preserve_interword_spaces: '1',
      tessedit_pageseg_mode: PSM.AUTO,
    });

    const { data: { text } } = await worker.recognize(imageFile);
    
    // Clean text
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
```

## Troubleshooting

### Common Issues

1. **OCR Not Working**
   - Check browser console for errors
   - Verify Tesseract.js is loaded
   - Try refreshing the page

2. **Poor Extraction**
   - Improve image quality
   - Use manual text input
   - Check if text is readable

3. **Slow Processing**
   - Large images take longer
   - Consider image compression
   - Wait for processing to complete

## Future Enhancements

1. **Server-Side OCR**
   - Optional server processing for better accuracy
   - Support for more OCR engines

2. **Preprocessing**
   - Image enhancement before OCR
   - Noise reduction
   - Contrast adjustment

3. **Multi-Language**
   - Support for non-English prescriptions
   - Language detection

4. **Layout Analysis**
   - Better handling of structured prescriptions
   - Table and form recognition

