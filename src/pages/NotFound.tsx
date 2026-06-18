import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-6 bg-warm-beige px-6">
      <Helmet>
        <title>Page Not Found — Auden Landscape Architecture</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <span className="font-serif text-8xl font-bold text-golden-brown">404</span>
      <h1 className="font-serif text-3xl font-bold text-dark-brown text-center">Page Not Found</h1>
      <p className="text-sm text-warm-brown max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="rounded-full bg-golden-brown px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all"
      >
        Return to Studio
      </Link>
    </div>
  );
}
