import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useEffect,
} from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Fab,
  Zoom,
  useScrollTrigger,
  Snackbar,
  Alert,
  LinearProgress,
  CircularProgress,
  Typography,
  Fade,
} from "@mui/material";
import { KeyboardArrowUp, DarkMode, LightMode } from "@mui/icons-material";
import MainRoutes from "./Routes/MainRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const useColorMode = () => useContext(ColorModeContext);

const ToastContext = createContext({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: 240, // moved upward to avoid overlap with social buttons
          right: 24,
          zIndex: 1200,
          boxShadow: 6,
          "&:hover": {
            transform: "scale(1.1)",
          },
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

const DarkModeToggle = () => {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Fab
      onClick={toggleColorMode}
      size="small"
      aria-label="toggle dark mode"
      sx={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 1200,
        bgcolor: mode === "dark" ? "#ffc107" : "#424242",
        color: mode === "dark" ? "#000" : "#fff",
        "&:hover": {
          bgcolor: mode === "dark" ? "#ffca28" : "#616161",
          transform: "rotate(180deg)",
        },
        transition: "all 0.4s ease-in-out",
      }}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </Fab>
  );
};

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 300);
          return 100;
        }
        return Math.min(prev + Math.random() * 25 + 10, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <Fade in={progress < 100}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          gap: 3,
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography
          variant="h5"
          fontWeight={700}
          color="primary"
          sx={{ letterSpacing: 2 }}
        >
          RUSTEC
        </Typography>
        <Box sx={{ width: 220 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: "action.hover",
              "& .MuiLinearProgress-bar": {
                borderRadius: 3,
              },
            }}
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          Loading Rustec....
        </Typography>
      </Box>
    </Fade>
  );
};

function App() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("rustec-theme-mode");
    return saved || "light";
  });

  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
    duration: 4000,
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("rustec-theme-mode", newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode],
  );

  const toastContextValue = useMemo(
    () => ({
      showToast: (message, severity = "success", duration = 4000) => {
        setToast({ open: true, message, severity, duration });
      },
    }),
    [],
  );

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") return;
    setToast((prev) => ({ ...prev, open: false }));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#1565c0",
                  light: "#1976d2",
                  dark: "#0d47a1",
                },
                secondary: {
                  main: "#00897b",
                },
                background: {
                  default: "#fafafa",
                  paper: "#ffffff",
                },
              }
            : {
                primary: {
                  main: "#90caf9",
                  light: "#bbdefb",
                  dark: "#42a5f5",
                },
                secondary: {
                  main: "#80cbc4",
                },
                background: {
                  default: "#0a1929",
                  paper: "#112240",
                },
              }),
        },
        typography: {
          fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          h1: { fontWeight: 800 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 700 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
          button: { textTransform: "none", fontWeight: 600 },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: "8px 20px",
              },
              contained: {
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: 8,
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                  width: 8,
                },
                "&::-webkit-scrollbar-track": {
                  background: mode === "dark" ? "#0a1929" : "#f1f1f1",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: mode === "dark" ? "#1976d2" : "#888",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: mode === "dark" ? "#42a5f5" : "#555",
                },
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ToastContext.Provider value={toastContextValue}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

          {!loading && (
            <Fade in timeout={600}>
              <Box
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "background.default",
                  transition: "background-color 0.4s ease",
                }}
              >
                <MainRoutes />
                <ScrollToTop />
                <DarkModeToggle />

                <Snackbar
                  open={toast.open}
                  autoHideDuration={toast.duration}
                  onClose={handleToastClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  sx={{ mb: 2 }}
                >
                  <Alert
                    onClose={handleToastClose}
                    severity={toast.severity}
                    variant="filled"
                    elevation={6}
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      fontWeight: 500,
                    }}
                  >
                    {toast.message}
                  </Alert>
                </Snackbar>
              </Box>
            </Fade>
          )}
        </ThemeProvider>
      </ToastContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
