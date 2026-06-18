import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-screen items-center justify-center flex-col gap-4 bg-warm-beige px-6">
          <h1 className="font-serif text-4xl font-bold text-dark-brown">Something went wrong</h1>
          <p className="text-sm text-warm-brown max-w-md text-center">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-golden-brown px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
