
import Layout from "/components/Layout";
import RequestedTable from "/components/RequestedTable"
import TransportedTable from "/components/TransportedTable"
export default function Home(props) {

  // console.log(props , "props from overview.js")
  return (
    <Layout >

      <div className="content_container">
        <div className="profile_container">
          <div className="title">Give ID here</div>
          <div className="requested_goods">
            {/* <div className="delivery_title">Requested Goods</div> */}
            <RequestedTable />
          </div>

          <div className="transported_goods">
            {/* <div className="delivery_title"> Transported Goods</div> */}
            <TransportedTable/>
          </div>
        </div>
      </div>
      <style jsx>{`
                .content_container {
                  display: flex;
                  flex-direction: column;
                  height: 92vh;
                }
                .profile_container{
                  margin-top:2rem;
                  row-gap:1rem;
                  width:80%;
                  margin:auto;
                  height:98%;
                  display:flex;
                  flex-direction:column;
                  border-radius:2rem;
                }
                
                .title{
                  flex:0.06;
                  text-align:center;
                  font-size:1.5rem;
                  color:black;
                }

                .delivery_title{
                  color:black;
                  font-size:1.25rem;
                  height:2%;
                  text-align:center;
                }


                .requested_goods{
                  flex:0.53;
                }

                .transported_goods{
                  flex:0.53;
                }

      `}</style>
    </Layout>
  );
}
