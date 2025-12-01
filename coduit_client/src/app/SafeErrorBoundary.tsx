// components/SafeErrorBoundary.tsx
"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class SafeErrorBoundary extends Component<Props, State> {
  // Initial state
  state: State = {
    hasError: false,
  };

  // Catch errors and update state
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // Optional: log error to Sentry, etc.
  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error("SafeErrorBoundary caught an error:", error, errorInfo);
    // You can send error to Sentry/Logflare here later
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-sapphire mb-4">
              Oops! Something broke
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Don&apos;t worry — our team has been notified.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-sapphire text-white font-bold rounded-xl hover:bg-sapphire/90 transition shadow-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    // Normal render
    return this.props.children;
  }
}