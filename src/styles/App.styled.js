import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
background: #fff;
padding: 0 30px 30px 30px;
`

export const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster', cursive;
`

export const Nav = styled.div`
padding: 4rem 0;
display: flex;
justify-content: center;
align-items: center;

svg {
    font-size: 2rem;
}
`