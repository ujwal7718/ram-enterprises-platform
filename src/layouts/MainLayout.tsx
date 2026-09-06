import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Preloader from '../components/ui/Preloader';
import RouteProgressBar from '../components/ui/RouteProgressBar';
import PageTransition from '../components/ui/PageTransition';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Return to the top of the page on every route change rather than
  // preserving scroll position from the previous page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <RouteProgressBar />
      <Header />
      <main className="flex-grow">
        {/* The route-progress bar above already signals loading, so no
            visible fallback is needed here — just don't unmount the shell. */}
        <Suspense fallback={null}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
