import { Navbar, Button } from "keep-react";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={false} className="bg-sky-300 text-end ">
      <Navbar.Container className="flex items-center  gap-10 justify-between  text-end">
        <Navbar.Container className=" flex  items-center">
          <Navbar.Brand>
            <Link to="/">
            <img
              src="\LOGO_LETRAS_SHASAM_PNG.png"
              alt="logo"
              width="150"
              height="40"
              
              />
              </Link>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex  hidden text-end items-end text-black text-base justify-end gap-5"
          >
            <Link to="">Tratamiento</Link>
            <Link to="/aboutus">Quiénes somos</Link>
          </Navbar.Container>
          <Navbar.Collapse className="bg-sky-300" collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link linkName="Tratamiento" />
              <Link linkName="Quiénes somos" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="px-5 flex m-2 justify-start gap-5">
          <Link to="/register">
            <Button
              className=" bg-black rounded-xl"
              size="xs"
              type="primary"
              variant="outline"
            >
              Registrate Gratis!
            </Button>
          </Link>
          <Link to="/register">
            <Button
              className="border-2 rounded-xl text-xs hover:invert border-black "
              size="xs"
              type="secondary"
              variant="outline"
            >
              Iniciar sesión
            </Button>
          </Link>

          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
