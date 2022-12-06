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

  img {
    border: 2px solid red;
    border-radius: 15px;
  }

  h3 {
    font-size: 1rem;
  }
  
  li {
    font-size: 1rem;
    line-height: 2.5rem;
    list-style: square;
  }

  @media screen and (max-width: 820px) {
    img {
    border: 2px solid red;
    border-radius: 15px;
    width: 400px;
  }
}

`

export const Button = styled.button`
padding: 0.8rem 1.8rem;
color: #313131;
background: #fff;
border: 2px solid #000;
margin: 1rem;
font-weight: 600;

@media screen and (max-width: 820px) {
  margin: 0.5rem;
  padding: 0.6rem 1.4rem;
}
`
export const Info = styled.div`
margin-left: 2rem;
background-color: #ffcab0; 
padding: 5px 40px;
text-align: center;

@media screen and (max-width: 820px) {
  margin-left: 1rem;
  padding: 5px 14px;
}
`
