import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: navy;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

max-width: 1240px;
margin: 0 auto;
padding: 0 2rem;
height: 60px;
`

export const HeaderTitle = styled.h1 `
color: white;
font-size: 1.6rem;`

export const ButtonWrapper = styled.div`
display: flex;
gap: 1rem;`

interface AuthButtonProps {
    isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
border: none;
border-radius: 5px;
height: 30px;
padding: 0 1rem;
background-color: ${(props) => (props.isLogged ? "red" : "green") };
color: white;
display: flex;
align-items: center;
gap: 0.3rem;
`

export const CartButton = styled.button`
border: none;
border-radius: 5px;
height: 30px;
padding: 0 1rem;
background-color: violet;
color: black;
display: flex;
align-items: center;
gap: 0.3rem;`