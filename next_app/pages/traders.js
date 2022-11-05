
import Layout from "/components/Layout";
import TradersTables from "/components/TradersTable"

export default function Home(props) {

  return (
    <Layout >
      <div className="content_container">
        <TradersTables />
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
      `}</style>
    </Layout>
  );
}
