import { DetailedHTMLProps, useCallback, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { NewOrderSubmitType } from '../../../../contexts';
import { defaultTheme } from '../../../../styles/themes';
import { BaseInput } from './styles';

interface CheckoutInput
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  optional?: boolean;
  gridColumn: string;
  register: UseFormRegisterReturn<keyof NewOrderSubmitType>;
}

export function CheckoutInput({
  optional,
  gridColumn,
  children,
  register,
  ...rest
}: CheckoutInput) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused((state) => !state), []);

  return (
    <BaseInput
      style={{
        gridColumn: gridColumn,
        borderColor: isFocused
          ? defaultTheme.colors.brandYellowDark
          : defaultTheme.colors.baseButton,
      }}
    >
      <input {...rest} {...register} onBlur={handleFocus} onFocus={handleFocus} />
      {children}
      {optional && <p>Opcional</p>}
    </BaseInput>
  );
}

CheckoutInput.defaultProps = {
  optional: false,
};
