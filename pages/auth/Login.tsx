// React
import React from "react";

// Material UI Components
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

// Images
import Logo from "../../src/assets/Logo.png";
import PlantBG from "../../src/assets/PlantBG.png";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#409845",
      },
      secondary: {
        main: "#225123",
      },
    },
  });

  const MainBtn = styled(Button)({
    margin: "15px 0",
    width: "100%",
    textTransform: "none",
    fontSize: 20,
    padding: "12px 80px",
    lineHeight: 1.5,
    backgroundColor: "#225123",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#1D481E",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1D481E",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #409845",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <body className="bg-gt-main-green-50">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <section className="h-screen bg-gradient-to-b from-[#C2F3C3] to-[#8CDF8F] flex justify-center items-center">
            <div className="bg-white rounded-md w-11/12 lg:w-8/12 p-8">
              <div className="flex flex-col items-center">
                <img src={Logo} className="mx-auto mb-4" alt="Logo" />
                <Divider variant="middle" className="w-full mb-4" />
                <div className="w-full mt-7">
                  <div className="mb-4">
                    <TextField
                      id="outlined-basic"
                      label="Nome de Usuário ou Email"
                      variant="outlined"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <FormControl variant="outlined" className="w-full">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Senha
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Senha"
                      />
                    </FormControl>
                  </div>
                  <div>
                    <FormControlLabel
                      value="keep-logged"
                      control={<Checkbox />}
                      label="Mantenha-me conectado"
                      labelPlacement="end"
                      color="success"
                      sx={{ color: "#3B8E3D" }}
                    />
                  </div>
                  <MainBtn color="secondary" size="large" variant="contained">
                    Entrar
                  </MainBtn>
                  <div className="my-5 text-center font-semibold text-gt-main-green-600 no-underline">
                    <a  className="hover:underline">
                      <p>Esqueceu a senha?</p>
                    </a>
                  </div>
                </div>
                <Divider variant="middle" className="w-full" />
              </div>
              <div className="my-5 text-center text-gt-main-green-600 no-underline">
                <a href="/signup" className="hover:underline">
                  <p>
                    Ainda não possui cadastro? <strong>Criar Conta</strong>
                  </p>
                </a>
              </div>
            </div>
          </section>
          <section className="hidden lg:block">
            <img src={PlantBG} className="lg:h-screen lg:w-full" alt="Background" />
          </section>
        </div>
      </body>
    </ThemeProvider>
  );
}

export default Login;
