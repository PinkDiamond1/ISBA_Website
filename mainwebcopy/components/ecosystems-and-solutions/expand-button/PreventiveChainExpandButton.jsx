import { ExpandButton } from 'dtl-react-components';
import BlockLink from '../../BlockLink';

export default function PreventiveChainExpandButton() {
  return (
    <BlockLink href="preventivechain">
      <ExpandButton
        backgroundImage="linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(223,121,0,1) 100%)"
        text="PreventiveChain"
      >
        <img
          style={{
            height: '24px',
            pointerEvents: 'none',
          }}
          src="/images/preventivechain/preventivechain-logo-white.svg"
          alt="White PreventiveChain logo"
        />
      </ExpandButton>
    </BlockLink>
  );
}
