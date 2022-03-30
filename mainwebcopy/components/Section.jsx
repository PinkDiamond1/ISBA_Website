import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { createElement } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    position: ({ fullWidthRelativePosition }) => (
      fullWidthRelativePosition
        ? 'relative'
        : 'static'
    ),
  },
  subContainer: {
    position: ({ subContainerRelativePosition }) => (
      subContainerRelativePosition
        ? 'relative'
        : 'static'
    ),
    width: '100% !important',
    padding: `${theme.spacing(6)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      width: `${theme.sizes.content.small} !important`,
      padding: `${theme.spacing(8)}px ${theme.spacing(2)}px`,
    },
    [theme.breakpoints.up('md')]: {
      width: `${theme.sizes.content.medium} !important`,
      padding: `${theme.spacing(9)}px ${theme.spacing(2)}px`,
    },
    [theme.breakpoints.up('lg')]: {
      width: `${theme.sizes.content.large} !important`,
    },
    [theme.breakpoints.up('xl')]: {
      width: `${theme.sizes.content.xlarge} !important`,
    },
  },
}));

export default function Section({
  id,
  component,
  className,
  containerRef,
  subContainerClassName,
  fullWidthRelativePosition,
  subContainerRelativePosition,
  children,
  afterChildren,
  spacingTop,
  spacingBottom,
}) {
  const classes = useStyles({ fullWidthRelativePosition, subContainerRelativePosition });
  const theme = useTheme();

  return createElement(
    'div',
    {
      id: (id || undefined),
      className: `${className} ${classes.container}`,
      ref: containerRef,
      style: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: `${theme.spacing(spacingTop)}px`,
        paddingBottom: `${theme.spacing(spacingBottom)}px`,
      },
    },
    createElement(
      component,
      {
        className: `${subContainerClassName} ${classes.subContainer}`,
      },
      children,
    ),
    afterChildren && afterChildren(),
  );
}

Section.propTypes = {
  id: PropTypes.string,
  component: PropTypes.string,
  subContainerClassName: PropTypes.string,
  fullWidthRelativePosition: PropTypes.bool,
  subContainerRelativePosition: PropTypes.bool,
  className: PropTypes.string,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType })
  ]),
  children: PropTypes.node.isRequired,
  afterChildren: PropTypes.func,
  spacingTop: PropTypes.number,
  spacingBottom: PropTypes.number,
};

Section.defaultProps = {
  id: undefined,
  component: 'div',
  subContainerClassName: undefined,
  fullWidthRelativePosition: true,
  subContainerRelativePosition: false,
  className: undefined,
  containerRef: undefined,
  afterChildren: null,
  spacingTop: 0,
  spacingBottom: 0,
};
