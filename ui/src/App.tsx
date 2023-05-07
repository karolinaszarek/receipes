import styled from "styled-components";
import {BackgroundColor, Logo} from "./Logo";
import {Navigation} from "./Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";


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


export const App = () => {
    return (
        <BrowserRouter>

            <Background>
                <Header>
                    <Logo/>
                    <Navigation/>
                </Header>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/search" element={<Main/>}/>
                </Routes>
            </Background>
        </BrowserRouter>

    );
}
