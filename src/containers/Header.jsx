import MyLogo from "../components/MyLogo";
import Nav from "../components/Nav";
import HeaderWrapper from "../containers/wrappers/HeaderWrapper";

export default function Header() {
  return (
    <HeaderWrapper>
      <MyLogo />
      <Nav />
    </HeaderWrapper>
  );
}
