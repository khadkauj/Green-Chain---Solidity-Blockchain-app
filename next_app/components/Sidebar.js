import { useRouter } from "next/router";
import Link from "next/link";

export default function Sidebar({ currentRole }) {
  const router = useRouter();


  return (
    <div className="sidebar">
      <div className="title" onClick={() => router.push("/traders")} style={{ cursor: "pointer" }}>
        <div className="img_container" >
          <i className="fas fa-link" color="green" style={{ color: "green", fontSize: "2.5rem" }}></i>
        </div>
        <div style={{ marginLeft: "1.5rem", fontSize: "1.75rem" }} >G chain</div>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link
              href="/traders"
            >
              <div
                className={
                  router.pathname.endsWith("traders")
                    ? ["button", "active"].join(" ")
                    : "button"
                }
              >
                <div className="button_icon">
                  {/* <i className="fas fa-chart-pie"></i> */}
                  <i className="far fa-building"></i>

                </div>
                <div>Traders</div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              href="action"
            >
              <div
                className={
                  router.pathname.endsWith("action")
                    ? ["button", "active"].join(" ")
                    : "button"
                }
              >
                <div className="button_icon">
                  {/* <i className="fas fa-chart-pie"></i> */}
                  <i className="fas fa-tools"></i>
                </div>
                <div>Action</div>
              </div>
            </Link>
          </li>

        </ul>


        <div>
          <Link
            href="profile"
          >
            <div
              className={
                router.pathname.endsWith("profile")
                  ? ["button", "active"].join(" ")
                  : "button"
              }
              style={{ padding: "0" }}
            >
              <div className="button_icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <div>Profile</div>
            </div>
          </Link>
        </div>

      </div>
      <style jsx>
        {`
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
          }

          .sidebar {
            background: #363740;
            color: #a4a6b3;
            min-width: 12rem;
            max-width:12rem;
            z-index:1;
          }

          .title {
            font-size: 1rem;
            display: flex;
            height: 5%;
            justify-content: center;
            align-items: center;
            column-gap: 0.2rem;
            margin: 1.5rem 0 2.5rem 0;
          }
          .img_container {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            overflow: hidden;
          }

          img {
            max-width: 100%;
            min-height: 100%;
          }

          .options {
            height:85%;
            display:flex;
            flex-direction:column;
            justify-content:space-between
          }

          .button,
          .setting {
            display: flex;
            align-items: center;
            column-gap: 1rem;
            justify-content: flex-start;
            padding: 0 0 0 1.5rem;
            height: 2.8rem;
          }

          .button:hover,
          .setting:hover {
            background: grey;
            cursor: pointer;
          }
          .active {
            border-left: 2px solid #dde2ff;
            color: #dde2ff;r
          }

          .button_icon {
            width: 1.5rem;
            height: 1.5rem;
            text-aligh: center;
            border-radius: 50%;
            color: inherit;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
