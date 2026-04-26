import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home   from '@/pages/Home';
import Resume from '@/pages/Resume';
import Academics from '@/pages/Academics';

// Page transition wrapper — wraps each route's content
function PageWrapper({ children }) {
  return (
    <main className="flex-1 pt-16">
      {children}
    </main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/resume"
            element={
              <PageWrapper>
                <Resume />
              </PageWrapper>
            }
          />
          <Route
            path="/academics"
            element={
              <PageWrapper>
                <Academics />
              </PageWrapper>
            }
          />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <PageWrapper>
                <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-6">
                  <span className="section-tag">// 404</span>
                  <h1 className="font-heading text-4xl font-semibold text-text-primary">
                    Page not found
                  </h1>
                  <p className="text-text-secondary max-w-sm">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  <a
                    href="/"
                    className="mt-2 text-sm text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
                  >
                    Back to home
                  </a>
                </div>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}