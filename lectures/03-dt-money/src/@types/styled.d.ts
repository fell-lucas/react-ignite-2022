import 'styled-components';
import { defaultTheme } from '../styles/themes';

export type DefaultThemeType = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends DefaultThemeType {}
}
