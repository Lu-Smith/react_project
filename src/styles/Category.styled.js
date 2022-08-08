import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const List = styled.div`
display: flex;
justify-content:center;
margin: 2rem 0rem;
`;

export const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
`;