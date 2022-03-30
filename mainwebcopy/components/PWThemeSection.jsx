import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Section from './Section';
import { PWThemeContext } from './PWThemeContext';

export default function FutureSection({
  children,
  className,
  subContainerClassName,
  background,
  afterChildren,
  spacingTop,
  spacingBottom,
}) {
  const containerRef = useRef(null);
  const { setBackground } = useContext(PWThemeContext);

  const handleEnter = () => {
    setBackground(background);
  };

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: handleEnter,
      onEnterBack: handleEnter,
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <Section
      containerRef={containerRef}
      className={className}
      subContainerClassName={subContainerClassName}
      afterChildren={afterChildren}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
    >
      { children }
    </Section>
  );
}

FutureSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  subContainerClassName: PropTypes.string,
  background: PropTypes.string,
  afterChildren: PropTypes.func,
  spacingTop: PropTypes.number,
  spacingBottom: PropTypes.number,
};

FutureSection.defaultProps = {
  background: null,
  className: null,
  subContainerClassName: null,
  afterChildren: null,
  spacingTop: undefined,
  spacingBottom: undefined,
};
