import React, { ReactElement, PropsWithChildren } from 'react'
import { ConfigProviderProps } from 'antd'
import { ConfigProvider, theme } from 'antd'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const themeObject: ConfigProviderProps['theme'] = {
 token: {
  colorPrimary: '#55dab8',
  colorBorder: '#d9d9d9',
  colorText: '#000000',
  colorBgBase: '#ffffff',
  colorBorderBg: '#bfb6b6',
  green: '#2dce32',
  orange: '#ff9f00',
  red: '#ec4c4c',
  fontFamily: 'Aeonik, sans-serif',
  fontSize: 14,
  controlHeight: 45,
 },

 components: {
    Slider: {
        handleColor: '#55dab8',
        railBg: '#d9d9d9',
        trackBg: '#55dab8',
    },
    Layout: {
        siderBg: '#ffffff',
        colorBgLayout: '#ffffff',
    }
 }
}

export const ThemeProvider = ({
 children,
}: PropsWithChildren): ReactElement => {
 return (
  <ConfigProvider theme={themeObject}>
   <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
  </ConfigProvider>
 )
}

const StyledComponentsThemeProvider = ({
 children,
}: PropsWithChildren): ReactElement => {
 const { token } = theme.useToken()

 return (
  <StyledThemeProvider theme={{ antd: token }}>{children}</StyledThemeProvider>
 )
}
