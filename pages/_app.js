import FormProvider from "../context";
import "../styles/globals.css";
import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter
} from '@manahippo/aptos-wallet-adapter';

function MyApp({ Component, pageProps }) {
  const wallets = [
    new RiseWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    new FletchWalletAdapter()
  ];
  return (
    
    <FormProvider>
      <WalletProvider
      wallets={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log('Handle Error Message', error);
      }}>
      <Component {...pageProps} />
      </WalletProvider>
    </FormProvider>

  );
}

export default MyApp;
