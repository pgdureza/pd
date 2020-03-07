interface ITheme {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  background: string;
  white: string;
  breakpoints: any;
}

const Theme = {
  white: "#ffffff",
  color1: "#59949C",
  color2: "#3D7A87",
  color3: "#F58220",
  color4: "#E6B38A",
  color5: "#ECF7F8",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

export { Theme };
