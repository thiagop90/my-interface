import 'styled-components'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

export type ThemeType = typeof lightTheme & typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
