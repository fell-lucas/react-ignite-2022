import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components';
import { RemoveButton } from './styles';

export function SelectedItemActions() {
  return (
    <div>
      <QuantityInput />
      <RemoveButton>
        <Trash size={16} />
        <p>Remover</p>
      </RemoveButton>
    </div>
  );
}
