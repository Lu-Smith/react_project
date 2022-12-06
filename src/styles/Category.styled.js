import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const List = styled.div`
display: flex;
justify-content:center;
margin: 1.5rem 0 1.5rem 0;
`;

export const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin: 0 1rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: #fff;
    font-size: 0.9rem;
}

svg {
    color: #fff;
    font-size: 2rem;
}

&.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
        color: #fff;
    }

    h4 {
        color: #fff;
    }
}

@media screen and (max-width: 820px) {
    margin: 0 0.8rem;
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;

    h4 {
    font-size: 0.75rem;
}
}

@media screen and (max-width: 480px) {
    margin: 0 0.5rem;
    width: 4rem;
    height: 4rem;
    padding: 1rem;

    h4 {
        font-size: 0.6rem;
        margin-top: 0.3rem;
    }
}
`;
