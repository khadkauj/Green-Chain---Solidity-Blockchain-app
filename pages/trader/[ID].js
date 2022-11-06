
import Layout from "/components/Layout";

export default function Home(props) {

    // console.log(props , "props from overview.js")
    return (
        <Layout >
            {/* <Navbar /> */}
            <div className="content_container">
                Hello
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
