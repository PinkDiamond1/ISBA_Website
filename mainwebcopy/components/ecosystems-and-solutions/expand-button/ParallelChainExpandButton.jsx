import { ExpandButton } from 'dtl-react-components';
import BlockLink from '../../BlockLink';

export default function ParallelChainExpandButton() {
  return (
    <BlockLink href="parallelchain">
      <ExpandButton
        backgroundImage="linear-gradient(90deg, rgba(17,168,142,1) 10%, rgba(0,76,66,1) 100%)"
        text="ParallelChain"
      >
        <img
          style={{
            height: '24px',
            pointerEvents: 'none',
          }}
          src="/images/parallelchain/ParallelChain-icon-white.svg"
          alt="White ParallelChain logo"
        />
      </ExpandButton>
    </BlockLink>
  );
}
