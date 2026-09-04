import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const RouteProgressBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setActive(true);
    const timeout = window.setTimeout(() => setActive(false), 420);
    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[90] h-[3px] pointer-events-none">
      <AnimatePresence>
        {active && (
          <motion.div
            className="h-full bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]"
            initial={{ width: '0%', opacity: 1 }}
            animate={{ width: '75%', transition: { duration: 0.4, ease: 'easeOut' } }}
            exit={{ width: '100%', opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RouteProgressBar;
