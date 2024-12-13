import styled from 'styled-components';

export default function Button() {
  const Button = styled.button`
    background-color: rgb(3, 113, 67);
    color: #fff;
    border: none;
    padding: 0.8rem;
    border-radius: 2rem;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1rem;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgb(3, 184, 108);
    }
  `;

  return <Button>SAIBA MAIS!</Button>;
}
