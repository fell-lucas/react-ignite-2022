import { CircleWavyQuestion, Translate } from 'phosphor-react';
import { useRef, useState } from 'react';
import {
  ChangeLanguageButton,
  ProjectInformationButton,
  ProjectInformationContainer,
} from './styles';
import { useClickAway } from 'react-use';

export function ProjectInformation() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(false);

  useClickAway(
    containerRef,
    () => {
      setSelected(false);
    },
    ['mouseup'],
  );

  return (
    <>
      <ProjectInformationButton onClick={() => setSelected(true)} selected={selected}>
        <CircleWavyQuestion size={48} weight="fill" />
      </ProjectInformationButton>
      <ProjectInformationContainer ref={containerRef} show={selected}>
        <ChangeLanguageButton type="button">
          <Translate size={24} weight="fill" />
          Alterar idioma
        </ChangeLanguageButton>
        <p>
          Desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/lucas-fell/"
            rel="noreferrer"
            target="_blank"
          >
            Lucas Fell
          </a>{' '}
          @ <a href="https://github.com/fell-lucas/react-ignite-2022/">Repo</a>
        </p>
        <p>
          Design feito por{' '}
          <a
            href="https://www.linkedin.com/in/millenakmartins/"
            rel="noreferrer"
            target="_blank"
          >
            Milena Martins
          </a>{' '}
          @{' '}
          <a href="https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate">
            Figma
          </a>
        </p>
      </ProjectInformationContainer>
    </>
  );
}
