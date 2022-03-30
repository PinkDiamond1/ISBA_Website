import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '48px',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '4px',
    paddingRight: '8px',
  },
});

export default function UnderConstructionNotice() {
  const [isHidden, setHidden] = useState(false);
  const classes = useStyles({ isHidden });

  return (
    <Slide direction="down" in={!isHidden} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <IconButton onClick={() => setHidden(true)}>
          <CloseIcon />
        </IconButton>
        <Typography variant="body2">
          ⚒️ Our brand-new, revamped website is under construction. ⚒️
        </Typography>
      </Card>
    </Slide>
  );
}
