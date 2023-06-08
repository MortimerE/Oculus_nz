import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: #000000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 80px;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const LogoContainer = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
