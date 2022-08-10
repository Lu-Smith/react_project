import styled from "styled-components";

export const FormStyle = styled.form`
margin: 0 20rem;

@media screen and (max-width: 820px) {
  min-width: 300px;
  margin: 0 auto;
}


div {
  position: relative;
  width: 100%;
  
}

input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}

svg {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -100%);
    color: #fff;
}
`