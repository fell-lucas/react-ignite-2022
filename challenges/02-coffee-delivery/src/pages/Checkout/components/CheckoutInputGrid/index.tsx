import { useFormContext } from 'react-hook-form';
import { CheckoutInput } from '../CheckoutInput';
import { CheckoutGrid } from './style';

export function CheckoutInputGrid() {
  const { register } = useFormContext();

  return (
    <CheckoutGrid>
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder="CEP"
        register={register('zipCode', { valueAsNumber: true })}
      />
      <CheckoutInput
        gridColumn="1 / span 9"
        placeholder="Rua"
        register={register('road')}
      />
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder="Número"
        register={register('houseNumber', { valueAsNumber: true })}
      />
      <CheckoutInput
        gridColumn="4 / span 6"
        optional
        placeholder="Complemento"
        register={register('complement')}
      />
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder="Bairro"
        register={register('neighborhood')}
      />
      <CheckoutInput
        gridColumn="4 / span 5"
        placeholder="Cidade"
        register={register('city')}
      />
      <CheckoutInput
        gridColumn="9 / span 1"
        placeholder="UF"
        register={register('regionCode')}
      />
    </CheckoutGrid>
  );
}
