// React
import React from "react";

// Material UI Components
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

  return (
    <ThemeProvider theme={theme}>
      <body className="bg-gt-main-green-50">
        <div className="grid grid-cols-2">
          <section className="h-screen bg-gradient-to-b from-[#C2F3C3] to-[#8CDF8F] flex justify-center items-center">
            <div className="bg-white rounded-md w-8/12 p-8">
              <div className="flex flex-col items-center">
                <img src={Logo} className="mx-auto mb-4" alt="Logo" />
                <Divider variant="middle" />
                <div className="w-full mt-7">
                  <div className="mb-4">
                    <TextField
                      id="outlined-basic"
                      label="Nome de Usuário"
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
                </div>
              </div>
            </div>
          </section>
          <section>
            <img src={PlantBG} className="h-screen w-full" alt="Background" />
          </section>
        </div>
      </body>
    </ThemeProvider>
  );
}

export default Login;
