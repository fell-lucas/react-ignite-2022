import { CircleWavyQuestion, Translate } from 'phosphor-react';
import { useCallback, useRef, useState } from 'react';
import {
  ChangeLanguageButton,
  ProjectInformationButton,
  ProjectInformationContainer,
} from './styles';
import { useClickAway } from 'react-use';
import { useTranslation } from 'react-i18next';

export function ProjectInformation() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const { t, i18n } = useTranslation('layout');

  useClickAway(
    containerRef,
    () => {
      setSelected(false);
    },
    ['mouseup'],
  );

  const handleChangeLanguage = useCallback(() => {
    void i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR');
  }, [i18n]);

  return (
    <>
      <ProjectInformationButton onClick={() => setSelected(true)} selected={selected}>
        <CircleWavyQuestion size={48} weight="fill" />
      </ProjectInformationButton>
      <ProjectInformationContainer ref={containerRef} show={selected}>
        <ChangeLanguageButton onClick={handleChangeLanguage} type="button">
          <Translate size={24} weight="fill" />
          {t('info.change-language')}
        </ChangeLanguageButton>
        <p>
          {t('info.developed-by')}{' '}
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
          {t('info.designed-by')}{' '}
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
