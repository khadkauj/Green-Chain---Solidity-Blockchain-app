
import Layout from "/components/Layout";
import TradersTables from "/components/TradersTable"
import CardComponent from '/components/CardComponent'
import HeaderComponent from '/components/HeaderComponent'

export default function Home(props) {

  const connectWalletHandler = () => {}

  return (
    <Layout >
      < HeaderComponent />
      <button className="button-connect-metamask" onClick={connectWalletHandler}>Connect With Metamask</button>
      <div className=""  style={{padding:'14px'}} >
        {/* <TradersTables /> */}
        <CardComponent />
        {props.cont}
      </div>
      <style jsx>{`
                .content_container {
                  display: flex;
                  flex-direction: column;
                  height: 92vh;
                }
                .title {
                  font-size: 2vh;
                }
                .count {
                  font-size: 2.5vh;
                }
                .button-connect-metamask{
                  cursor: pointer;
                  position: absolute;
                  right: 24px;
                  top: 14px;
                  border-radius: 100px;
                  border: 1px solid #7e8489;
                  display: flex;
                  place-items: center;
                  padding: 8px;
                  font-size: initial;
                }
      `}</style>
    </Layout>
  );
}
