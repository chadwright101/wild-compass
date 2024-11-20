module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: "#515558",
      white: "#FCFCFC",
      khaki: "#AE8F5F",
      linkBlue: "#0000FF",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          lineHeight: "21px",
          letterSpacing: "0.01rem",
          fontWeight: "400",
        },
      ],
      subheading: [
        "1rem",
        {
          lineHeight: "100%",
          letterSpacing: "0.02rem",
          fontWeight: "600",
        },
      ],
      heading: [
        "1.875rem",
        {
          fontWeight: "400",
        },
      ],
    },
    fontFamily: {
      afacad: "Afacad",
      raleway: "Raleway",
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
      gap: {
        15: "60px",
      },
    },
  },
};
