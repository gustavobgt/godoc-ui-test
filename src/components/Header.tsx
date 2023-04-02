import styled, { css } from "styled-components";
import { AppBar, Button, Link } from "@gustavobgt/godoc-ui";
const DESKTOP_LOGO_URL = "/images/desktop-logo.png";
const MOBILE_LOGO_URL = "/images/mobile-logo.png";

const DesktopLogo = styled.img`
  ${({ theme: { breakpoints } }) => css`
    display: none;

    @media screen and (min-width: ${breakpoints.md}px) {
      display: flex;
    }
  `}
`;

const MobileLogo = styled.img`
  ${({ theme: { breakpoints } }) => css`
    display: flex;

    @media screen and (min-width: ${breakpoints.md}px) {
      display: none;
    }
  `}
`;

const Toolbar = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.primary};
    display: flex;
    justify-content: space-between;
  `}
`;

const Menu = styled.ul`
  ${({ theme: { breakpoints, space } }) => css`
    display: none;
    align-items: center;
    gap: ${space[3]};
    margin-left: ${space[2]};
    list-style: none;

    @media screen and (min-width: ${breakpoints.xl}px) {
      display: flex;
    }
  `}
`;

const MenuItem = styled.li``;

const items = [
  {
    id: 1,
    title: "Início",
    link: "godoc.com.br",
  },
  {
    id: 2,
    title: "Vantagens",
    link: "godoc.com.br",
  },
  {
    id: 3,
    title: "Para quem?",
    link: "godoc.com.br",
  },
  {
    id: 4,
    title: "Depoimentos",
    link: "godoc.com.br",
  },
  {
    id: 5,
    title: "Quem usa",
    link: "godoc.com.br",
  },
  {
    id: 6,
    title: "Fale conosco",
    link: "godoc.com.br",
  },
];

export const Header = () => {
  return (
    <AppBar p={2}>
      <Toolbar>
        <DesktopLogo src={DESKTOP_LOGO_URL} />

        <MobileLogo src={MOBILE_LOGO_URL} />

        <Button
          variant="text"
          sx={{ display: { xs: "flex", xl: "none" } }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#444444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#444444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#444444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <Menu>
          {items.map(({ id, title, link }) => (
            <MenuItem key={id}>
              <Link fontSize="2xl" lineHeight="xl" href={link}>
                {title}
              </Link>
            </MenuItem>
          ))}

          <Button variant="contained" color="secondary">
            Testar Agora
          </Button>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
