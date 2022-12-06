import styled from "styled-components";



export const DetailedWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
  background: linear-gradient(35deg, #494949, #313131);
  color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
    font-style: italic;
    font-family: 'Nerko One', cursive;
    letter-spacing: 2px;
    text-align: center;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

`

export const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: #fff;
border: 2px solid #000;
margin-right: 2rem;
font-weight: 600;
`
export const Info = styled.div`
margin-left: 10rem;
`
