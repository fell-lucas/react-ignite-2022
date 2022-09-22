import IntroImage from '../../assets/intro-image.png';
import { IntroList } from './components';
import { IntroBackground, IntroContainer, Subtitle, Title } from './styles';

export function Home() {
  return (
    <>
      <IntroBackground />
      <IntroContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Subtitle>
          <IntroList />
        </div>
        <img alt="" src={IntroImage} />
      </IntroContainer>
    </>
  );
}
