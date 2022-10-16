import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation('home');

  return (
    <HeaderContainer>
      <HeaderContent>
        <img alt="" src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>{t('nova-transacao')}</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
