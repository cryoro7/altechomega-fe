import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./custom-navbar/LoginModal";

const links = [
  { text: "About", href: "/about" },
  { text: "Pricing", href: "/pricing" },
  { text: "Contact", href: "/contact" },
];

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        className="border-b"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to={`/`}>
              <Image src="/logo.png" alt="ERP" radius="sm" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {links.map((link) => (
            <NavbarItem key={`desktop-${link.href}`}>
              <Link color="foreground" to={link.href}>
                {link.text}
              </Link>
            </NavbarItem>
          ))}

          <NavbarItem>
            <LoginModal />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {links.map((link) => (
            <NavbarMenuItem key={`mobile-${link.href}`}>
              <Link
                className="w-full"
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
