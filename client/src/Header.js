import React from "react";
import Link from "./router/Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        To do List
      </Link>
      <Link href="/metube" className="item">
        metube
      </Link>
      <Link href="/pictures" className="item">
        Pictures
      </Link>
      <Link href="/calculator" className="item">
        Calculator
      </Link>
    </div>
  );
};

export default Header;
