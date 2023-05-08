import { MainNavigationBox, MainNavigationItem } from "./MainNavigationStyled";

export const MainNavigation = () => {
  return (
    <MainNavigationBox>
      <MainNavigationItem name="Home" to="/" />
      <MainNavigationItem name="Search" to="/search" />
      <MainNavigationItem name="Pocket" to="/pocket" />
      <MainNavigationItem name="User" to="/user" />
    </MainNavigationBox>
  );
};
