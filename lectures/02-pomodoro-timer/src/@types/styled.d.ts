import 'styled-components'
import { defaultTheme } from '../styles/themes'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends DefaultThemeType {}
}