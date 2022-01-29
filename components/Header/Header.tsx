import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link href="/" passHref={true}>
          <span className="navbar-brand mb-0 h1">Todos App</span>
        </Link>

        <Link href="/add-todo" passHref={true}>
          <button className="btn btn-outline-primary" type="button">
            Add todo
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
