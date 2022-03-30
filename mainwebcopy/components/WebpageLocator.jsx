import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  newsroomText: {
    marginBottom: `${theme.spacing(4)}px`,
    color: '#000',
    fontWeight: '400',
  },
}));

export default function WebpageLocator() {
  const classes = useStyles();
  const router = useRouter();

  const capitalize = (route) => {
    const str = route.split('/');

    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join('/');
  };

  const replaceAllTxt = (txt, search, replace) => txt.split(search).join(replace);

  // Remove parameters, trailing and leading slashes
  let currentLocation = router.pathname.replace(/^\//, '').replace(/\[(.+?)\]/g, '').replace(/\/$/, '');
  // currentLocation = currentLocation.replaceAll('-', ' ');
  currentLocation = replaceAllTxt(currentLocation, '-', ' ');
  currentLocation = currentLocation.toLocaleUpperCase();
  // currentLocation = capitalize(currentLocation);

  return (
    <Typography variant="h3" className={classes.newsroomText}>
      {currentLocation}
    </Typography>
  );
}
