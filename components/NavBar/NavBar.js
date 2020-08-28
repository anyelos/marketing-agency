import { Container, NavBox, Toggle, Logo, Hamburger } from "./style";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";
import { useState } from "react";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container>
      <Logo>
        <Link href="/">
          <p>Weppa</p>
          {/* <img src="/Icons/qualcomm-2.svg" width="34px" /> */}
        </Link>
      </Logo>

      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>

      {navbarOpen ? (
        <NavBox>
          <NavLinks />
        </NavBox>
      ) : (
        <NavBox open>
          <NavLinks />
        </NavBox>
      )}
    </Container>
  );
}
