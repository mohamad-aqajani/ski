import React, { ReactElement, PropsWithChildren } from "react";
import { ConfigProviderProps } from "antd";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";

const themeObject: ConfigProviderProps["theme"] = {
  token: {
    colorPrimary: "#55dab8",
    colorBorder: "#d9d9d9",
    colorText: "#000000",
    colorBgBase: "#ffffff",
    fontFamily: "Aeonik, sans-serif",
    fontSize: 16,
    controlHeight: 45
  },
};

export const ThemeProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <ConfigProvider theme={themeObject}>
      <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
    </ConfigProvider>
  );
};

const StyledComponentsThemeProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { token } = theme.useToken();

  const px2rem = px2remTransformer({
    rootValue: 16,
  });
  return (
    <StyledThemeProvider theme={{ antd: token }}>
      <StyleProvider transformers={[px2rem]}>{children}</StyleProvider>
    </StyledThemeProvider>
  );
};
