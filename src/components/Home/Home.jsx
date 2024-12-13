import {
  MainStyle,
  Copo,
  Section,
  SectionText,
  SubTitle,
  Title,
  Paragrafo,
  Images,
} from './HomeStyle';
import copoVerde from '../../assets/Images/Home/copo1.png';
import copoVermelho from '../../assets/Images/Home/copo2.png';
import copoAmarelo from '../../assets/Images/Home/copo3.png';
import copaoVerde from '../../assets/Images/Home/copao-verde.png';
import copaoVermelho from '../../assets/Images/Home/copao-red.png';
import copaoAmarelo from '../../assets/Images/Home/copao-amarelo.png';
import ellipseVerde from '../../assets/Images/Home/ellipse-green.png';
import ellipseVermelho from '../../assets/Images/Home/ellipse-red.png';
import ellipseAmarelo from '../../assets/Images/Home/ellipse-yellow.png';
import { useState } from 'react';
import Button from '../Button/Button';
import FooterHome from './FooterHome';

export default function Home() {
  const [corAtual, setCorAtual] = useState('verde');

  const cores = {
    verde: {
      backgroundImage: ellipseVerde,
      copo: copaoVerde,
      alternativo: 'Milkshake de Limão',
    },
    vermelho: {
      backgroundImage: ellipseVermelho,
      copo: copaoVermelho,
      alternativo: 'Milkshake de Morango',
    },
    amarelo: {
      backgroundImage: ellipseAmarelo,
      copo: copaoAmarelo,
      alternativo: 'Milkshake de Laranja',
    },
  };

  const handleChangeColor = (color) => {
    setCorAtual(color);
  };

  return (
    <>
      <MainStyle>
        <SectionText>
          <SubTitle>Mais que Café</SubTitle>
          <Title>
            Isso é <span>Starbucks</span>
          </Title>
          <Paragrafo>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Expresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </Paragrafo>
          <Button />
          <Images>
            <img
              src={copoVerde}
              alt={cores[corAtual].alternativo}
              onClick={() => handleChangeColor('verde')}
            />
            <img
              src={copoVermelho}
              alt={cores[corAtual].alternativo}
              onClick={() => handleChangeColor('vermelho')}
            />
            <img
              src={copoAmarelo}
              alt={cores[corAtual].alternativo}
              onClick={() => handleChangeColor('amarelo')}
            />
          </Images>
        </SectionText>
        <Section
          style={{
            backgroundImage: `url(${cores[corAtual].backgroundImage})`,
            backgroundSize: 'cover',
          }}
        >
          <Copo src={cores[corAtual].copo} alt={cores[corAtual].alternativo} />
        </Section>
      </MainStyle>
      <FooterHome />
    </>
  );
}
