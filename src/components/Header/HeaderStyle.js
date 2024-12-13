import styled from 'styled-components';

export const Principal = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 1px 10px rgba(30, 57, 50, 0.7);

  @media (min-width: 250px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* Responsivo para tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }

  /* Responsivo para monitores até 1300px */
  @media (min-width: 901px) and (max-width: 1300px) {
    padding: 1rem 2rem;
  }

  /* Responsivo para monitores maiores */
  @media (min-width: 1301px) {
    padding: 1rem 3rem;
  }
`;

export const Figure = styled.figure`
  img {
    width: 100%;
    height: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  color: #000;
  margin-right: 6rem;

  /* Responsivo para celular */
  @media (min-width: 250px) and (max-width: 600px) {
    width: 40%;
    flex-direction: column;
    gap: 1rem;
    margin-right: 0;
  }

  /* Responsivo para tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 60%;
  }

  /* Responsivo para monitores até 1300px */
  @media (min-width: 901px) and (max-width: 1300px) {
    width: 50%;
  }

  /* Responsivo para monitores maiores */
  @media (min-width: 1301px) {
    width: 40%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 5rem;
  list-style: none;

  a {
    font-weight: normal;
    font-size: 1.5rem;
    text-decoration: none;
    color: rgb(30, 77, 50);

    &:hover {
      color: rgba(0, 211, 123, 0.8);
      text-decoration: underline;
    }
  }

  /* Responsivo para celular */
  @media (min-width: 250px) and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  /* Responsivo para tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 100%;
  }

  /* Responsivo para monitores até 1300px */
  @media (min-width: 901px) and (max-width: 1300px) {
    width: 50%;
  }

  /* Responsivo para monitores maiores */
  @media (min-width: 1301px) {
    width: 40%;
  }
`;