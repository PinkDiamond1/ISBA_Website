import { ExpandButton } from 'dtl-react-components';
import BlockLink from '../../BlockLink';

export default function EkycChainExpandButton() {
  return (
    <BlockLink href="ekyc-chain">
      <ExpandButton
        backgroundImage="linear-gradient(-90deg, rgba(39,73,109,1) 0%, rgba(0,144,158,1) 100%)"
        text="eKYC-Chain"
      >
        <img
          style={{
            height: '24px',
            pointerEvents: 'none',
          }}
          src="/images/ekycchain/ekycchain-logo-white.svg"
          alt="White EKYC-Logo"
        />

      </ExpandButton>
    </BlockLink>
  );
}
