import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopbarLarge from './TopbarLarge';
import TopbarSmall from './TopbarSmall';

export default function TheTopbar() {
  const large = useMediaQuery('(min-width:1200px)');
  const textColor = '#000000';

  if (large) {
    return (
      <TopbarLarge textColor={textColor} />
    );
  }
  return (
    <TopbarSmall textColor={textColor} />
  );
}
