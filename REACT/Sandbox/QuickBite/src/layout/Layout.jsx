import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav class="w3-top">
        <div
          class="w3-sidebar w3-padding w3-card w3-xxlarge"
       style={{display: "flex", flexDirection: "column", justifyContent: "space-between", fontWeight: "700"}} >

          <div>
            <Link class="w3-bar-item w3-button" to="/">
              Desk
            </Link>
            <Link class="w3-bar-item w3-button" to="/orders">
              Orders
            </Link>
            <Link class="w3-bar-item w3-button" to="/menus">
              Menus
            </Link>
            <Link class="w3-bar-item w3-button" to="/tables">
              Tables
            </Link>
            <Link class="w3-bar-item w3-button" to="/team">
              Team
            </Link>
            <Link class="w3-bar-item w3-button" to="/support">
              Support
            </Link>
          </div>
          <img src="https://i.postimg.cc/kGFbXsDQ/logo-Quick-Bite.png" style={{marginBottom: "1.6rem"}} alt="" />
        </div>
      </nav>

      <div class="w3-content" style={{ width: "100%" }}>
        <Outlet />
      </div> 
    </>
  );
};

