import Head from "next/head";

const Meta = ({ title, keywords, description, styleSheetExport }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" lang="en" />
      <link rel="icon" href="https://th.bing.com/th/id/OIP.X1zV3XCMO_LhBSQBBAOWoQHaCJ?pid=ImgDet&w=1000&h=291&rs=1" />
      <title>{title}</title>
      <link rel="icon" href="https://th.bing.com/th/id/OIP.X1zV3XCMO_LhBSQBBAOWoQHaCJ?pid=ImgDet&w=1000&h=291&rs=1" />

      {/* <!-- Font Awesome --> */}
      {styleSheetExport.fontAwesome && (
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
      )}

      {/* <!-- Google Fonts --> */}
      {/* {styleSheetExport.googleFont && (
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      )} */}
      {/* <!-- MDB --> */}
      {/* {styleSheetExport.MDB && (
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
          rel="stylesheet"
        />
      )} */}
    </Head>
  );
};

Meta.defaultProps = {
  title: "G chain",
  keywords: "security, findings, DevSecOps",
  description: "Security analysis tools for DevSecOps",
  styleSheetExport: {
    fontAwesome: true,
    googleFont: false,
    MDB: false,
    googleIcon: false,
  },
};

export default Meta;
