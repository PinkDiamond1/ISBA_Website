import { ExpandButton } from 'dtl-react-components';
import BlockLink from '../../BlockLink';

export default function ApprovalChainExpandButton() {
  return (
    <BlockLink href="approvalchain">
      <ExpandButton
        backgroundImage="linear-gradient(90deg, rgba(78,189,129,1) 0%, rgba(33,167,40,1) 100%)"
        text="ApprovalChain"
      >
        <img
          style={{
            height: '24px',
            pointerEvents: 'none',
          }}
          src="/images/approvalchain/approvalchain-logo-white.svg"
          alt="White ApprovalChain logo"
        />

      </ExpandButton>
    </BlockLink>
  );
}
