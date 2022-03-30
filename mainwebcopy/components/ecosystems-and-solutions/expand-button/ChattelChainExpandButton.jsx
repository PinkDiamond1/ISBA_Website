import { ExpandButton } from 'dtl-react-components';
import BlockLink from '../../BlockLink';

export default function ChattelChainExpandButton() {
  return (
    <BlockLink href="chattelchain">
      <ExpandButton
        backgroundImage="linear-gradient(90deg, rgba(0,230,232,1) 0%, rgba(0,179,172,1) 100%)"
        text="ChattelChain"
      >
        <img
          style={{
            height: '24px',
            pointerEvents: 'none',
          }}
          src="/images/chattelchain/chattelchain-logo-white.svg"
          alt="White ChattelChain logo"
        />

      </ExpandButton>
    </BlockLink>
  );
}
