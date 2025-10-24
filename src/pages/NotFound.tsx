import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-sm text-muted-foreground">Error 404</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The page <span className="font-mono break-all">{location.pathname}</span> doesn’t exist or
          may have been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Go to homepage</Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
