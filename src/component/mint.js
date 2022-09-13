import { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Web3 from "web3";
import Web3Modal from "web3modal";
function Mint() {
  // ==========================mint valu ==================
  const [walletConnected, setWalletConnected] = useState(false);

  const [totalMinted, setTotalMinted] = useState(0);
  const [value, setValue] = useState(1);

  // Contract Info
  const CONTRACT_ADDRESS = "0x3a3138E49ac51255eDcB9A3C5cFcf8206160a042";
  const CONTRACT_ABI = [];

  // Connect Wallet
  const connectWallet = async () => {
    if (Web3.givenProvider) {
      const providerOptions = {};

      const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.net.getId();

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];

      const { ethereum } = window;

      const networkId = await ethereum.request({
        method: "net_version",
      });

      setWalletConnected(true);
    } else {
      window.open("https://metamask.io/download/");
    }
  };

  // Fetch
  useEffect(async () => {
    if (Web3.givenProvider) {
      if (walletConnected) {
        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();

        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        contract.methods
          .totalSupply()
          .call()
          .then((response) => {
            setTotalMinted(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [walletConnected]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x27caC31B750990Eea77EE1bAc612F60590A0195c&apikey=P65RXADWW83PQUNRMN4K7H2NTK8RZ1XPYS"
  //     )
  //     .then(function (response) {
  //       setTotalMinted(response.data.result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  // Mint
  const mint = async () => {
    if (value > 0) {
      if (Web3.givenProvider) {
        connectWallet();

        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();

        const price = 0 * value;
        var tokens = web3.utils.toWei(price.toString(), "ether");
        var bntokens = web3.utils.toBN(tokens);

        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        const addresses = await web3.eth.getAccounts();
        const address = addresses[0];

        contract.methods
          .mint(value)
          .send({ gasLimit: "300000", from: address, value: bntokens })
          .then((nft) => {
            alert(
              "Congratulations you have successfully minted your Wlcked Shark! Check Opensea."
            );

            contract.methods
              .totalSupply()
              .call()
              .then((response) => {
                setTotalMinted(response);
              })
              .catch((err) => {
                console.log(err);
              });

            console.log(nft);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.open("https://metamask.io/download/");
      }
    } else {
      alert("Please choose quantity");
    }
  };
  return (
    <div>
      <div className='mint-area'>
        <div className='container'>
          {/* <Bounce right> */}
          <div className='mint-wrapper'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='mint-inner'>
                  <div className='mint-content'>
                    <div className='mint-title'>
                      <img src='assets/img/mint.png' alt='' />
                    </div>
                    <div className='mint-des'>
                      <img src='assets/img/mint-img.png' alt='' />
                      <div className='mint-info'>
                        <p>Mint Now </p>
                        <p className='mint-price'>0.25 ETH Each</p>
                      </div>
                    </div>

                    <div className='mint-qunatity'>
                      <div className='quantity-inner'>
                        <div className='quantity-value'>
                          <div
                            className='button'
                            onClick={() => {
                              if (value > 1) {
                                setValue(value - 1);
                              }
                            }}
                          >
                            <img src='assets/img/minus.png' alt='' />
                          </div>
                          <p className='value'>{value}</p>
                          <div
                            className='button'
                            onClick={() => {
                              if (value < 5) {
                                setValue(value + 1);
                              }
                            }}
                          >
                            <img src='assets/img/plus.png' alt='' />
                          </div>
                        </div>
                      </div>
                      <p className='max-quantity'>5 MAX</p>
                    </div>

                    <div className='mint-btn' onClick={mint}>
                      <img src='assets/img/mint-btn.png' alt='' />
                    </div>
                  </div>
                  <img
                    src='assets/img/pow.png'
                    alt='Image not found'
                    className='pow'
                  />
                  <img
                    src='assets/img/clouda.png'
                    alt='Image not found'
                    className='clouda'
                  />
                  <img
                    src='assets/img/cloudb.png'
                    alt='Image not found'
                    className='cloutb'
                  />
                  <img
                    src='assets/img/yeah.png'
                    alt='Image not found'
                    className='yeah'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* </Bounce> */}
        </div>
      </div>
    </div>
  );
}

export default Mint;
