/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import { useBackdrop } from 'use-backdrop';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Highlight from 'react-highlight';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Overtitle, FutureButton } from 'dtl-react-components';
import InteroperabilityPopup from './interoperability/InteroperabilityPopup';

// Highlight.js theme
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import Section from '../Section';

const useStyles = makeStyles((t) => ({
  background: {
    background: 'linear-gradient(180deg, rgba(215,235,244,1) 0%, #ffffff 100%)',
  },
  root: {
    color: t.palette.primary.dark,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  devhubButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${t.spacing(3)}px`,
    padding: `${t.spacing(2)}px`,
    color: t.palette.primary.dark,
  },
  tabsContainer: {
    display: 'flex',
  },
  tabIcon: {
    width: '16px',
    marginRight: '8px',
  },
  tabButton: {
    cursor: 'pointer',
    padding: `${t.spacing(1.5)}px ${t.spacing(1.5)}px`,
    borderRadius: '8px',
    [t.breakpoints.down('md')]: {
      flexBasis: 0,
      flexGrow: 1,
    },
  },
  tabButtonSelected: {
    background: t.palette.neutral.white,
    padding: `${t.spacing(1.5)}px ${t.spacing(2)}px`,
  },
  codeContainer: {
    width: '100%',
    maxHeight: '600px',
    boxShadow: `1px 0 6px ${t.palette.neutral.darkerGray} `,
    borderRadius: '8px',
    overflowY: 'hidden',
    backgroundColor: '#FAFCFD',
    position: 'relative',
  },
  codeHidingGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '50%',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(121,128,135,0.0) 0%, rgba(19,20,22,1.0) 100%)',
  },
  button: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: `${t.spacing(3)}px`,
    padding: `${t.spacing(2)}px ${t.spacing(2)}px`,
  },
  githubLogo: {
    marginRight: `${t.spacing(1)}px`,
  },
}));

export default function ParallelChainInteroperabilityPanel() {
  const [tab, setTab] = useState(0);

  const theme = useTheme();

  const classes = useStyles();

  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  const { displayBackdrop } = useBackdrop();

  const showPopup = () => displayBackdrop((closeBackdrop) => (
    <InteroperabilityPopup closeBackdrop={closeBackdrop} />
  ));

  return (
    <Section
      spacingBottom={15}
      className={classes.background}
      subContainerClassName={classes.root}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} classes={{ root: classes.textContainer }}>
          <div>
            <Overtitle>Seamless Migration from Hyperledger Fabric</Overtitle>
            <Typography variant="h4">
              Bring your blockchain applications
              up to the <b>speed of business</b>
            </Typography>
            {!mdOrSmaller && (
              <>
              <div className="push-bot6">
                <FutureButton
                  className={classes.devhubButton}
                  onClick={showPopup}
                >
                <CodeIcon style={{ marginRight: '8px' }} />
                <Typography variant="subtitle1">
                  Compare <b>smart contracts</b> written on ParallelChain® and Hyperledger Fabric
                </Typography>
                </FutureButton>
              </div>
              <div>
                <Overtitle>Build applications on ParallelChain®</Overtitle>
                <Typography variant="h4">
                  ParallelCore <b>Client Go</b> SDK
                </Typography>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/digital-transaction/parallelcore-client-sdk-go"
                  target="_blank"
                >
                <FutureButton className={classes.button}>
                  <GitHubIcon classes={{ root: classes.githubLogo }} />
                  <Typography variant="subtitle1">
                    Get Started
                  </Typography>
                </FutureButton>
                </a>
              </div>
              </>
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={`${classes.tabsContainer} push-bot1`}>
            <FutureButton
              onClick={() => setTab(0)}
              className={`${classes.tabButton} ${tab === 0 && classes.tabButtonSelected} push-right1`}
            >
              <img
                className={classes.tabIcon}
                src="/images/parallelchain/parallelchain-logo-only.svg"
                alt="ParallelChain"
              />
              <Typography variant="subtitle2">
                ParallelChain®
              </Typography>
            </FutureButton>
            <FutureButton
              onClick={() => setTab(1)}
              className={`${classes.tabButton} ${tab === 1 && classes.tabButtonSelected}`}
            >
              <img
                className={classes.tabIcon}
                src="/images/parallelchain/hyperledger-fabric-logo.png"
                alt="Hyperledger Fabric"
              />
              <Typography variant="subtitle2">
                Hyperledger Fabric
              </Typography>
            </FutureButton>
          </div>
          <div className={classes.codeContainer}>
            <div className={classes.codeHidingGradient} />

{tab === 0 && ( // ParallelChain
  <Highlight className="go">
{`package commercialpaper

import (
	"digital-transaction/pco/parallelcore-apps/apps/commercial-paper/contract/paper"
	"fmt"
	engine "parallelcore-smartcontract-sdk-go/smartcontract_engine"
	"strconv"
	"strings"
)

// MySC smart contract instance
type MySC struct{}

// Initialize does nothing in this case
func (sc MySC) Initialize(tr engine.Transaction, in []byte) ([]byte, error) {
	return nil, nil
}

// Handle calls do<ACTION> on invocation of this
// smart contract.
func (sc MySC) Handle(tr engine.Transaction, in []byte) ([]byte, error) {
	args := strings.Split(string(in), " ")
	action := args[0]

	switch action {
	case "List":
		paperStrRepr, err := doList(paper.TransactionContext{Transaction: tr})
		if err != nil {
			return nil, err
		}

		return paperStrRepr, nil

	case "Issue":
		faceValue, err := strconv.Atoi(args[5])
		if err != nil {
			return nil, fmt.Errorf("faceValue should be an integer. Received: %s \nError: %v", args[5], err)
		}
		err = issue(paper.TransactionContext{Transaction: tr}, IssueArgs{args[1], args[2], args[3], args[4], faceValue})
		if err != nil {
			return nil, err
		}

		return []byte(fmt.Sprintf("Paper successfully issued")), nil

	case "Buy":
		price, err := strconv.Atoi(args[5])
		if err != nil {
			return nil, fmt.Errorf("price should be an integer. Received: %s \nError: %v", args[5], err)
		}
		err = buy(paper.TransactionContext{Transaction: tr}, BuyArgs{args[1], args[2], args[3], args[4], price, args[6]})
		if err != nil {
			return nil, err
		}

		return []byte(fmt.Sprintf("Paper successfully bought")), nil

	case "BuyRequest":
		price, err := strconv.Atoi(args[5])
		if err != nil {
			return nil, fmt.Errorf("price should be an integer. Received: %s\n Error: %v", args[5], err)
		}
		err = buyRequest(paper.TransactionContext{Transaction: tr}, BuyRequestArgs{args[1], args[2], args[3], args[4], price, args[6]})
		if err != nil {
			return nil, err
		}

		return []byte(fmt.Sprintf("Paper successfully requested")), nil

	case "Transfer":
		err := transfer(paper.TransactionContext{Transaction: tr}, TransferArgs{args[1], args[2], args[3]})
		if err != nil {
			return nil, err
		}

		return []byte(fmt.Sprintf("Paper successfully transfered")), nil
}
`}
  </Highlight>
)}

{tab === 1 && (
  <Highlight className="go">
{`package commercialpaper

import (
	"fmt"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// Contract chaincode that defines
// the business logic for managing commercial
// paper
type Contract struct {
	contractapi.Contract
}

// Instantiate does nothing in this case
func (c *Contract) Instantiate() {
	fmt.Println("Instantiated")
}

// Issue creates a new commercial paper and stores it in the world state
func (c *Contract) Issue(ctx TransactionContextInterface, issuer string, paperNumber string, issueDateTime string, maturityDateTime string, faceValue int) (*CommercialPaper, error) {
	paper := CommercialPaper{PaperNumber: paperNumber, Issuer: issuer, IssueDateTime: issueDateTime, FaceValue: faceValue, MaturityDateTime: maturityDateTime, Owner: issuer}
	paper.SetIssued()

	err := ctx.GetPaperList().AddPaper(&paper)

	if err != nil {
		return nil, err
	}

	return &paper, nil
}

// Buy updates a commercial paper to be in trading status and sets the new owner
func (c *Contract) Buy(ctx TransactionContextInterface, issuer string, paperNumber string, currentOwner string, newOwner string, price int, purchaseDateTime string) (*CommercialPaper, error) {
	paper, err := ctx.GetPaperList().GetPaper(issuer, paperNumber)

	if err != nil {
		return nil, err
	}

	if paper.Owner != currentOwner {
		return nil, fmt.Errorf("Paper %s:%s is not owned by %s", issuer, paperNumber, currentOwner)
	}

	if paper.IsIssued() {
		paper.SetTrading()
	}
`}
  </Highlight>
)}

          </div>
        </Grid>
      </Grid>
        {mdOrSmaller && (
          <div>
            <FutureButton
              className={classes.devhubButton}
              onClick={showPopup}
            >
              <CodeIcon style={{ marginRight: '8px' }} />
              <Typography variant="subtitle1">
                Compare <b>smart contracts</b> written in ParallelChain® and Hyperledger Fabric
              </Typography>
            </FutureButton>
            <br />
            <br />
            <div>
              <Overtitle>Build applications on ParallelChain®</Overtitle>
              <Typography variant="h4">
                ParallelCore Client Go SDK
              </Typography>
             <a
               style={{ textDecoration: 'none' }}
               href="https://github.com/digital-transaction/parallelcore-client-sdk-go"
               target="_blank"
             >
              <FutureButton className={classes.button}>
                <GitHubIcon classes={{ root: classes.githubLogo }} />
                <Typography variant="subtitle1">
                  Get Started
                </Typography>
              </FutureButton>
             </a>
            </div>
          </div>
        )}
    </Section>
  );
}
