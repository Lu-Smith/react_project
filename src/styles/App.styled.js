import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
background: #fff;
padding: 0 30px 30px 30px;

@media screen and (max-width: 820px) {
  max-width: 800px;
  padding: 0 10px 10px 10px;
}
`
export const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 400;
font-family: 'Nerko One', cursive;
`
export const Nav = styled.div`
padding: 4rem 0;
display: flex;
justify-content: center;
align-items: center;

svg {
    font-size: 3rem;
}

@media screen and (max-width: 820px) {
    padding: 3rem 0;

    svg {
       font-size: 2.5rem;
    }
}

@media screen and (max-width: 480px) {
    padding: 2rem 0;

    svg {
       font-size: 2rem;
    }
}
`