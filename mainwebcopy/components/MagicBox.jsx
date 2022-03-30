import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function MagicBox({ render }) {
  const boxRef = useRef(null);
  const [boxIn, setBoxIn] = useState(false);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: boxRef.current,
      once: true,
      start: 'top 70%',
      end: 'bottom center',
      onEnter: () => {
        setBoxIn(true);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <>
      { render(boxIn, boxRef) }
    </>
  );
}

MagicBox.propTypes = {
  render: PropTypes.func.isRequired,
};
