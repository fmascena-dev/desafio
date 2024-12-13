import styled from 'styled-components';

export const MainStyle = styled.main`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  height: 85vh;
  margin-left: 4rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    align-items: center;
    margin-left: 0;
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 0px;
  }
`;

export const SectionText = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  color: rgba(30, 50, 50, 1);
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: rgba(30, 50, 50, 1);
  font-weight: normal;
  margin-bottom: 1rem;

  span {
    color: rgb(0, 112, 74);
    font-weight: bold;
    font-size: 3.8rem;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  color: rgba(30, 50, 50, 1);

  @media (max-width: 600px) {
    flex-direction: column;
    margin-right: 15px;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    margin-right: 3rem;
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  margin-right: -5rem;

  img {
    cursor: pointer;
    transition: transform 1s ease;

    &:hover {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    margin-right: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    margin-right: 6rem;
    margin-top: 3rem;
  }
`;

export const Section = styled.section`
  position: relative;
  margin-top: 4rem;
  width: 100%;
  z-index: -10;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    width: 100%;
  }
`;

export const Copo = styled.img`
  width: auto;
  z-index: 10;
`;
