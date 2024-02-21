

import { Outlet, Link } from "react-router-dom";

export default function Layout () {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> {"    "}
        <Link to="/orders">Orders</Link>{"    "}
        <Link to="/menus">Menus</Link> {"    "}
        <Link to="/tables">Tables</Link>{"    "}
        <Link to="/fakeData">Fake Data</Link> {"    "}
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </>
  );
};

