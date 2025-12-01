// src/components/ui/modals/TopicsSuccessModal.tsx
// (or wherever you keep your modals)
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  onClose?: () => void;
  redirectUrl?: string;
  loadingDuration?: number;
  messageDuration?: number;
  selectedTopicsCount?: number;
}

export default function TopicsSuccessModal({
  isOpen,
  onClose,
  redirectUrl = "/dashboard",
  loadingDuration = 3000,
  messageDuration = 2000,
  selectedTopicsCount = 0,
}: SuccessModalProps) {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Reset
    setProgress(0);
    setShowSuccess(false);
    setHasError(false);

    if (selectedTopicsCount === 0) {
      setHasError(true);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / (loadingDuration / 50);
      });
    }, 50);

    const loadingTimer = setTimeout(() => {
      setShowSuccess(true);
    }, loadingDuration);

    const redirectTimer = setTimeout(() => {
      router.push(redirectUrl);
      onClose?.();
    }, loadingDuration + messageDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
      clearTimeout(redirectTimer);
    };
  }, [isOpen, loadingDuration, messageDuration, redirectUrl, router, onClose, selectedTopicsCount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-800 rounded-xl p-6 max-w-md w-full mx-4 border border-sapphire/30">

        {/* ERROR STATE */}
        {hasError ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2 text-center">Oops!</h3>
            <p className="text-gray-300 text-center mb-4">
              You haven&apos;t selected any topics yet.
            </p>
            <p className="text-gray-400 text-sm text-center mb-6">
              Please select at least one topic to continue.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Go Back & Select Topics
            </button>
          </div>
        ) : !showSuccess ? (
          /* LOADING STATE */
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-sapphire/30 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-sapphire border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-4 text-center">Saving Your Preferences</h3>
            <div className="w-full bg-dark-700 rounded-full h-3 mb-2">
              <div
                className="bg-sapphire h-3 rounded-full transition-all duration-50 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-300 text-sm">{Math.round(progress)}% Complete</p>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Please wait while we save your topic preferences...
            </p>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2 text-center">Success!</h3>
            <p className="text-gray-300 text-center mb-6">
              Your {selectedTopicsCount} topic{selectedTopicsCount !== 1 ? "s" : ""} were successfully saved.
            </p>
            <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-2000 ease-linear w-full"></div>
            </div>
            <p className="text-gray-400 text-sm">Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}