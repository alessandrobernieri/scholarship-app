import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import ConnectWalletButton from '../helpers/Aptos/ConnectWalletButton';
import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";
import {
  Category,
  Question,
  AddressForm,
  Follow,
} from "../components/Forms";
import FormCompleted from "../components/FormCompleted";


async function clickHandler2(walletAddress) {
  const response = await 
  fetch("http://localhost:3000/api/getmongo", {
    method: "POST",
    body: JSON.stringify(walletAddress),
    headers: 
    {
      "Content-Type": 
      "application/json",
    },
  });
  const data = await response.json();

  return data;
 }

const App = () => {
  const wallet = useWallet();
  useEffect(() => {
    if (!wallet.autoConnect && wallet.wallet?.adapter) {
        wallet.connect();
    }
  }, [wallet.autoConnect, wallet.wallet, wallet.connect]);

  var walletAddress='Not connected'
  const [data, setData] = useState(null)
  const [needFetching, setNeedFetching] = useState(true);

  if(wallet.connected)
  {
    walletAddress = wallet.account?.address?.toString();
    if (needFetching) {
      const callData = async () => {
        var data = await clickHandler2(walletAddress).then(data => data)
        setData(data)
        setNeedFetching(false);
      }
      callData();
    } 
  }
  var status = data;

  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  if(wallet.connected & status===null) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Scholarship Application</title>
        </Head>
        <div className={styles.topcorner}>
          <ConnectWalletButton connectButton={!wallet.connected} className="d-flex" />
        </div>
        <h1>Scholarship Application</h1>
        <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep >= 0 && (
            <AddressForm formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 1 && (
            <Category formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 2 && (
            <Question formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 3 && (
            <Follow formStep={formStep} nextFormStep={nextFormStep} />
          )}
  
          {formStep > 3 && <FormCompleted />}
        </FormCard>
      </div>
    );
  }
  if(wallet.connected & status!==null) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Scholarship Application</title>
        </Head>
        <div className={styles.topcorner}>
          <ConnectWalletButton connectButton={!wallet.connected} className="d-flex" />
        </div>
        <h1>Scholarship Application</h1>
        <FormCard>
          <h2>Hey {status.twitter}, you applied for Scholarship! 🎉</h2>
          <pre>Your application will be reviewed in 24-48h. 
        <br></br>
        Keep an eye on <a href="https://twitter.com">@Scholarship</a> to know if you have been chosen. 
      </pre>
          <br></br><h3>Your status: </h3>
          {status.status}
        </FormCard>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Scholarship Application</title>
      </Head>
      <h1>Scholarship Application</h1>
      <FormCard>
        <h3>Connect your Wallet to start the application!</h3>
        <br></br>
        <ConnectWalletButton connectButton={!wallet.connected} className="d-flex" />
      </FormCard>
    </div>
  );
};

export default App;
