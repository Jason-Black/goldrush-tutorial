import logo from './logo.svg';
import './App.css';
import { GoldRushProvider,
  NFTWalletCollectionList,
  TokenBalancesList,
  TokenTransfersList,
  AddressActivityList  } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";


function App() {
  return (
    <GoldRushProvider apikey={ProcessingInstruction.env.REACT_APP_COVALENT_API2}  >
           <TokenBalancesList
                    chain_names={[
                        "eth-mainnet",
                        "matic-mainnet",
                        "bsc-mainnet",
                        "avalanche-mainnet",
                        "optimism-mainnet",
                    ]}
                    hide_small_balances
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                />

                <TokenTransfersList
                    chain_name="eth-mainnet"
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                    contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                />

                <AddressActivityList address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de" />

                <NFTWalletCollectionList
                    address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
                    chain_name="eth-mainnet"
                />
            </GoldRushProvider>
   
    
  );
}

export default App;
