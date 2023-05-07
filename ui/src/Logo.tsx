import styled from "styled-components";

const LOGO_SIZE = "40px"
export const BackgroundColor = "#313131"

const LogoIcon = styled.img`
  height: ${LOGO_SIZE};
  width: auto;
  display: block;
  margin: 0px 8px;
  box-shadow: 0 0 8px 8px ${BackgroundColor};
`;

const AppName = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
`
const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = () => {
    return (
        <StyledLogo>
            <LogoIcon src="./assets/logo.jpeg"/>
            <AppName>
                Receipts handler
            </AppName>
        </StyledLogo>
    )
}