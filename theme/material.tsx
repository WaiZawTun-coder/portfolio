import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#ff6b00",
      dark: "#e85d04",
      light: "#ffa62b",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#ffa62b",
      contrastText: "#0d0d0d",
    },

    background: {
      default: "#0d0d0d",
      paper: "#1a1a1a",
    },

    text: {
      primary: "#f5f5f5",
      secondary: "#b3b3b3",
    },

    divider: "#333333",
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: [
      "Inter",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 800,
      fontSize: "4rem",
    },

    h2: {
      fontWeight: 700,
      fontSize: "3rem",
    },

    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
    },

    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },

    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },

    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "0.875rem",
      color: "#b3b3b3",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0d0d0d",
          color: "#f5f5f5",
          scrollBehavior: "smooth",
        },

        "*::-webkit-scrollbar": {
          width: "8px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#1a1a1a",
        },

        "*::-webkit-scrollbar-thumb": {
          background: "#ff6b00",
          borderRadius: "10px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          fontWeight: 600,
          transition: "all 0.2s ease-in-out",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#ff6b00",

            "&:hover": {
              backgroundColor: "#e85d04",
              transform: "translateY(-2px)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#ff6b00",

            "&:hover": {
              borderColor: "#ffa62b",
              backgroundColor: "rgba(255,107,0,0.08)",
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
          border: "1px solid #333333",
          boxShadow: "none",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",

          "& fieldset": {
            borderColor: "#333333",
          },

          "&:hover fieldset": {
            borderColor: "#ff6b00",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#ff6b00",
          },
        },

        input: {
          color: "#f5f5f5",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(13,13,13,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #333333",
          boxShadow: "none",
        },
      },
    },
  },
});
