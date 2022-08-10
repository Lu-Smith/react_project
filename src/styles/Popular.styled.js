import styled from 'styled-components';

 export const Wrapper = styled.div`
  margin: 4rem  0;

  @media screen and (max-width: 480px) {
    margin: 2rem  0;
        }
`

export const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 820px) {
        min-height: 15rem;
        border-radius: 1.5rem;
        }

    @media screen and (max-width: 480px) {
        min-height: 10rem;
        border-radius: 1rem;
        }


    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 30%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: italic;
        letter-spacing: 1px;

        @media screen and (max-width: 820px) {
            font-size: 0.8rem;
            font-weight: 500;
        }

        @media screen and (max-width: 480px) {
            font-size: 0.6rem;
            font-weight: 400;
        }
    }
`

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

`