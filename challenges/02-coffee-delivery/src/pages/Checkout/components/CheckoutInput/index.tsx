import { DetailedHTMLProps, useRef, useState } from 'react';
import { defaultTheme } from '../../../../styles/themes';
import { BaseInput } from './styles';

interface CheckoutInput
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  optional?: boolean;
  gridColumn: string;
}

export function CheckoutInput({
  optional,
  gridColumn,
  children,
  ...rest
}: CheckoutInput) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(!isFocused);

  return (
    <BaseInput
      style={{
        gridColumn: gridColumn,
        borderColor: isFocused
          ? defaultTheme.colors.brandYellowDark
          : defaultTheme.colors.baseButton,
      }}
    >
      <input onBlur={handleFocus} onFocus={handleFocus} ref={ref} {...rest} />
      {children}
      {optional && <p>Opcional</p>}
    </BaseInput>
  );
}

CheckoutInput.defaultProps = {
  optional: false,
};
