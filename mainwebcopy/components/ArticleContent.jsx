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
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      width: `${theme.sizes.content.small} !important`,
      padding: `${theme.spacing(8)}px ${theme.spacing(2)}px`,
    },
    [theme.breakpoints.up('lg')]: {
      width: `${theme.sizes.content.medium} !important`,
      padding: `${theme.spacing(12)}px ${theme.spacing(2)}px`,
    },
  },
}));

export default function ArticleContent({
  id, className, subContainerClassName, fullWidthRelativePosition,
  subContainerRelativePosition, children, afterChildren, spacingTop,
}) {
  const theme = useTheme();

  const classes = useStyles({ fullWidthRelativePosition, subContainerRelativePosition });

  return createElement(
    'div',
    {
      id: (id || undefined),
      className: `${className} ${classes.container}`,
      style: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: `${theme.spacing(spacingTop)}px`,
      },
    },
    createElement(
      'article',
      {
        className: `${subContainerClassName} ${classes.subContainer}`,
      },
      children,
    ),
    afterChildren && afterChildren(),
  );
}

ArticleContent.propTypes = {
  id: PropTypes.string,
  subContainerClassName: PropTypes.string,
  fullWidthRelativePosition: PropTypes.bool,
  subContainerRelativePosition: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  afterChildren: PropTypes.func,
  spacingTop: PropTypes.number.isRequired,
};

ArticleContent.defaultProps = {
  id: undefined,
  subContainerClassName: undefined,
  fullWidthRelativePosition: true,
  subContainerRelativePosition: false,
  className: undefined,
  afterChildren: null,
};
