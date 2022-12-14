import { DetailedHTMLProps, useCallback, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('checkout');
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
      {optional && <p>{t('personal-info.address.form.optional')}</p>}
    </BaseInput>
  );
}

CheckoutInput.defaultProps = {
  optional: false,
};
