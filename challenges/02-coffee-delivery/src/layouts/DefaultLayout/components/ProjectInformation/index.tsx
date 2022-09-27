import { CircleWavyQuestion, Translate, WarningCircle } from 'phosphor-react';
import { useCallback, useContext, useRef, useState } from 'react';
import {
  ChangeLanguageButton,
  ProjectInformationButton,
  ProjectInformationContainer,
} from './styles';
import { useClickAway } from 'react-use';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../../../../contexts';

export function ProjectInformation() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const [isEmptyCartWarningActive, setIsEmptyCartWarningActive] = useState(true);
  const { t, i18n } = useTranslation('layout');
  const { emptyCart } = useContext(CartContext);

  useClickAway(
    containerRef,
    () => {
      setSelected(false);
      setIsEmptyCartWarningActive(true);
    },
    ['mouseup'],
  );

  const handleChangeLanguage = useCallback(() => {
    if (!isEmptyCartWarningActive) {
      void i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR');
      emptyCart();
      setIsEmptyCartWarningActive(true);
    } else {
      setIsEmptyCartWarningActive(false);
    }
  }, [i18n, emptyCart, isEmptyCartWarningActive]);

  return (
    <>
      <ProjectInformationButton onClick={() => setSelected(true)} selected={selected}>
        <CircleWavyQuestion size={48} weight="fill" />
      </ProjectInformationButton>
      <ProjectInformationContainer ref={containerRef} show={selected}>
        <ChangeLanguageButton
          isWarnActive={isEmptyCartWarningActive}
          onClick={handleChangeLanguage}
          type="button"
        >
          {isEmptyCartWarningActive ? (
            <>
              <Translate size={24} weight="fill" />
              {t('info.change-language')}
            </>
          ) : (
            <>
              <WarningCircle size={24} weight="fill" />
              {t('info.warning')}
            </>
          )}
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
