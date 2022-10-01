import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input placeholder="Descrição" required type="text" />
          <input placeholder="Preço" required type="number" />
          <input placeholder="Categoria" required type="text" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
