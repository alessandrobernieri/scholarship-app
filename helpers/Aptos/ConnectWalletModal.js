import {useWallet} from "@manahippo/aptos-wallet-adapter"
import aptosLogo from "../../public/aptosLogo.png"
import Modal from "react-bootstrap/Modal"
import styles from "../../styles/styles.module.scss";

const ConnectWalletModal = (props) => {
    const {show, onConnect} = props

    const wallet = useWallet()

    return (
        <Modal style={{position:'absolute'}} id={styles.connectWalletModal} show={show} onHide={onConnect} centered>
            <div className={styles.corner} style={{background:'#26a67f',borderRadius:'20px',marginTop:'260px'}}>
                {wallet.wallets.map((walletType) => {
                    const adapter = walletType.adapter;
                    return <button key={adapter.name} className={styles.walletAdapterOption} onClick={async () => {
                        await wallet.select(adapter.name);
                        onConnect();
                      }}>
                        <img src={adapter.icon} />
                        <h6 className="mb-0">{adapter.name}</h6>
                    </button>
                })}
            </div>
        </Modal>
    )
}

export default ConnectWalletModal;
