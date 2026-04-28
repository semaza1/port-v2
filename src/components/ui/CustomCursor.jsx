import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor
 * ─────────────────────────────────────────────
 * - Small inner dot tracks mouse exactly (no lag)
 * - Larger outer ring lags behind with spring physics
 * - Expands on interactive elements (links, buttons)
 * - Expands more + glows on project cards
 * - Hidden on touch / mobile devices
 * - Uses pointer-events: none — never blocks clicks
 * - Uses will-change: transform for GPU compositing
 */

/* Spring config — controls the lag feel of the outer ring */
const SPRING = { stiffness: 180, damping: 22, mass: 0.8 };

/* Cursor states */
const STATES = {
  default:  { outerSize: 32, innerSize: 6,  glow: false },
  hover:    { outerSize: 44, innerSize: 6,  glow: false },
  card:     { outerSize: 64, innerSize: 6,  glow: true  },
  clicking: { outerSize: 28, innerSize: 4,  glow: false },
};

export default function CustomCursor() {
  /* ── Touch / mobile guard ── */
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Raw mouse position — inner dot follows this exactly */
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  /* Sprung position — outer ring lags behind */
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  /* Cursor state */
  const [cursorState, setCursorState] = useState('default');

  /* Ref for the observer — avoid re-attaching listeners constantly */
  const stateRef = useRef('default');

  /* ── Detect touch device once on mount ── */
  useEffect(() => {
    const hasTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  /* ── Mouse tracking ── */
  const onMouseMove = useCallback((e) => {
    rawX.set(e.clientX);
    rawY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [rawX, rawY, visible]);

  /* ── Cursor state detection via event delegation ── */
  const getTargetState = useCallback((target) => {
    if (target.closest('[data-cursor="card"]'))    return 'card';
    if (target.closest('a, button, [role="button"], [data-cursor="hover"], label, input, select, textarea')) return 'hover';
    return 'default';
  }, []);

  const onMouseOver  = useCallback((e) => {
    const s = getTargetState(e.target);
    if (s !== stateRef.current) { stateRef.current = s; setCursorState(s); }
  }, [getTargetState]);

  const onMouseDown  = useCallback(() => setCursorState('clicking'), []);
  const onMouseUp    = useCallback(() => {
    const s = stateRef.current;
    setCursorState(s);
  }, []);
  const onMouseLeave = useCallback(() => setVisible(false), []);
  const onMouseEnter = useCallback(() => setVisible(true),  []);

  useEffect(() => {
    if (isTouch) return;

    window.addEventListener('mousemove',  onMouseMove,  { passive: true });
    window.addEventListener('mouseover',  onMouseOver,  { passive: true });
    window.addEventListener('mousedown',  onMouseDown);
    window.addEventListener('mouseup',    onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mouseover',  onMouseOver);
      window.removeEventListener('mousedown',  onMouseDown);
      window.removeEventListener('mouseup',    onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isTouch, onMouseMove, onMouseOver, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter]);

  /* Don't render on touch devices */
  if (isTouch) return null;

  const { outerSize, innerSize, glow } = STATES[cursorState];

  return (
    <>
      {/* ── Outer ring — spring lagged ── */}
      <motion.div
        aria-hidden="true"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          x:              springX,
          y:              springY,
          translateX:     '-50%',
          translateY:     '-50%',
          pointerEvents:  'none',
          zIndex:         9999,
          willChange:     'transform',
        }}
      >
        <motion.div
          animate={{
            width:     outerSize,
            height:    outerSize,
            opacity:   visible ? 1 : 0,
            boxShadow: glow
              ? '0 0 16px rgba(59,130,246,0.35), 0 0 32px rgba(59,130,246,0.15)'
              : '0 0 0px rgba(59,130,246,0)',
          }}
          transition={{
            width:     { type: 'spring', stiffness: 260, damping: 24 },
            height:    { type: 'spring', stiffness: 260, damping: 24 },
            opacity:   { duration: 0.2 },
            boxShadow: { duration: 0.3 },
          }}
          style={{
            borderRadius:    '50%',
            border:          '1.5px solid rgba(59,130,246,0.55)',
            backgroundColor: glow ? 'rgba(59,130,246,0.06)' : 'transparent',
          }}
        />
      </motion.div>

      {/* ── Inner dot — exact mouse position, no lag ── */}
      <motion.div
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          x:             rawX,
          y:             rawY,
          translateX:    '-50%',
          translateY:    '-50%',
          pointerEvents: 'none',
          zIndex:        10000,
          willChange:    'transform',
        }}
      >
        <motion.div
          animate={{
            width:   innerSize,
            height:  innerSize,
            opacity: visible ? 1 : 0,
            scale:   cursorState === 'clicking' ? 0.6 : 1,
          }}
          transition={{
            width:   { type: 'spring', stiffness: 300, damping: 28 },
            height:  { type: 'spring', stiffness: 300, damping: 28 },
            scale:   { type: 'spring', stiffness: 400, damping: 20 },
            opacity: { duration: 0.15 },
          }}
          style={{
            borderRadius:    '50%',
            backgroundColor: '#3B82F6',
            boxShadow:       '0 0 6px rgba(59,130,246,0.6)',
          }}
        />
      </motion.div>
    </>
  );
}