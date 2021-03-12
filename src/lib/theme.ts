interface ITheme {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  background: string;
  white: string;
  breakpoints: any;
  fontFamily1: string;
  fontFamily2: string;
}

const Theme = {
  white: "#ffffff",
  lightgray: "#EFEFEF",
  darkgray: "#333333",
  primary: "#603F83",
  secondary: "#2BAE66",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  heroFont: `'Hachi Maru Pop', cursive`,
  fontFamily1: `'Shadows Into Light', cursive`,
  fontFamily2: `'Open Sans', sans-serif`,
};

export { Theme };
