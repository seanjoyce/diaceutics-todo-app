import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Todos App</span>
      </div>
    </nav>
  );
}

export default Header;
