import React from "react";
import Meta from "./Meta";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
  styleSheetExport,
  title,
  keywords,
  description,
  currentRole,
}) {
  return (
    <div className="body">
      <Meta
        styleSheetExport={styleSheetExport}
        title={title}
        keywords={keywords}
        description={description}
      />
      <div className="main_container">
        <Sidebar />
        <div className="homepage_container">{children}</div>
      </div>

      <style jsx>
        {`
          * {
            overflow: hidden;
          }

          .body {
            height: 100vh;
            overflow: hidden;
          }
          .main_container {
            width: 100vw;
            height: 100%;
            background: #eee;
            display: flex;
            overflow: hidden;
          }

          .homepage_container {
            flex-grow: 1;
            background: #f7f8fc;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}

Layout.defaultProps = {

  keywords: "Green Green Green",
  description: "Go Green",
  styleSheetExport: {
    fontAwesome: true,
    googleFont: false,
    MDB: false,
    googleIcon: false,
  },
};
