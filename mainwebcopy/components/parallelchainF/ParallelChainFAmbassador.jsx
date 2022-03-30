import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';
import BlockLink from '../BlockLink';

const useStyles = makeStyles((theme) => ({
  button: {
    transitionProperty: '-moz-filter, -ms-filter, -o-filter, -webkit-filter, filter',
    transitionDuration: '2s',
    '&:hover': {
      filter: 'brightness(120%)',
    },
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 'auto',
  },
}));

export default function ParallelChainFAmbassador() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={1}
      spacingBottom={2}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <div className={classes.button}>
              <BlockLink href="/parallelchain/ambassador">
                <Link>
                  <img src="/images/parallelchain/mainnet/ambassador.png" alt="litepaper" className={classes.btn} />
                </Link>
              </BlockLink>
            </div>
          </FadeIn>
        )}
      />
    </Section>
  );
}
