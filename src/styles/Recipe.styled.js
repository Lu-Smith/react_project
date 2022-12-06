import styled from "styled-components";



export const DetailedWrapper = styled.div`
  margin-top: 3rem;
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
    width: 300px;
  }
}

  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    h2 {
      margin-bottom: 1rem;
      letter-spacing: 1.5px;
      font-size: 1rem;
    }

     img {
      border: 1px solid red;
      border-radius: 10px;
      width: 150px;
    }

    h3 {
      font-size: 0.7rem;
      line-height: 1.2rem;
      margin-top: 0.5rem;
    }

    li {
      font-size: 0.8rem;
      line-height: 1.2rem;
      margin-top: 0.5rem;
      margin-left: 0.7rem;
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

@media screen and (max-width: 480px) {
  margin: 0.2rem;
  padding: 0.3rem 1rem;
  font-size: 0.5rem;
}
`
export const Info = styled.div`
margin-left: 2rem;
background-color: #ffcab0; 
padding: 5px 40px;
text-align: center;

@media screen and (max-width: 820px) {
  margin-left: 1rem;
  width: 100%;
  height: 50vh;
}

@media screen and (max-width: 480px) {
  padding: 5px 15px;
  margin-left: 0.8rem;
  width: 100%;
  height: 70vh;
}


`
