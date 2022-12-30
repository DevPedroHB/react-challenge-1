import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      hue: number;
      dotColor: string;
      titleColor: string;
      textColor: string;
      textColorLight: string;
      bodyColor: string;
      scrollBarColor: string;
      scrollThumbColor: string;
    };
  }
}
