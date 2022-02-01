import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div role="header" className="container">
        <Link href="/" passHref={true}>
          <span data-testid="heading-title" className="navbar-brand mb-0 h1">
            Todos App
          </span>
        </Link>
        {router.pathname === "/" && (
          <Link href="/add-todo" passHref={true}>
            <button
              data-testid="add-button"
              className="btn btn-outline-primary"
              type="button"
            >
              Add todo
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
