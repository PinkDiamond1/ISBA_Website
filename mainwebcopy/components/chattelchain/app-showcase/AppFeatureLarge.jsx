import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function AppFeatureLarge({ index, handleEnter, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => handleEnter(index),
      onEnterBack: () => handleEnter(index),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div style={{ marginTop: '10vh', marginBottom: '20vh' }} ref={containerRef}>
      { children }
    </div>
  );
}

AppFeatureLarge.propTypes = {
  index: PropTypes.number.isRequired,
  handleEnter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
