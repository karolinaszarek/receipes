import styled from "styled-components";
import { BackgroundColor, Logo } from "../Logo";
import { Navigation } from "../Navigation";


const Background = styled.div`
  background-color: ${BackgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Header = styled.header`
  width: 300px;
  height: 100%;
`;
const Main = styled.main`
`;


export const Root = () => {
  return (
    <>
      <Background>
        <Header>
          <Logo />
          <Navigation />
        </Header>
      </Background>
    </>

  );
}
