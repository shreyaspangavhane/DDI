"use client"

import React from 'react';
import PrescriptionInput from '@/components/prescription/PrescriptionInput';

const PrescriptionAnalysisPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-950 to-gray-900 text-white p-4">
      <PrescriptionInput />
    </div>
  );
};

export default PrescriptionAnalysisPage;
