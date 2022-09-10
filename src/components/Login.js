import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./Login.css";
import { auth } from "./firebase";

export default function Login() {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "",
    profile_pix: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmedPassword: false,
  });

  const { name, profile_pix, email, password } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmedPassword: !values.showConfirmedPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginToApp = (e) => {
    if (values.password === values.confirmPassword) {
      setValues((prevValues) => {
        return { ...values, [e.target.name]: e.target.value };
      });
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) =>
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          )
        )
        .catch((error) => alert(error));
    } else {
      alert("Password Doesnt Match");
    }
  };

  const registerUser = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            /*Alway Use this first unique name before
           adding any other variable names (displayName, photoURL)
            you might need*/
            displayName: name,
            photoURL: profile_pix,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profile_pix,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login--body">
        <img src="./images/linkedin_login_image.png" alt="" />
        <div className="login--form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "55ch" },
            }}
            Validate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(values);
            }}
          >
            <div>
              <TextField
                name="name"
                onChange={handleChange("name")}
                // id="outlined-required"
                label="Full Name (required if registering)"
                defaultValue={values.fullname}
              />
            </div>
            <div>
              <TextField
                name="profile_pix"
                onChange={handleChange("profile_pix")}
                // id="outlined-required"
                label="Profile pic URL (optional)"
                defaultValue={values.profile_pix}
              />
            </div>
            <div>
              <TextField
                required
                autoComplete=""
                name="email"
                onChange={handleChange("email")}
                sx={{ color: "red" }}
                // id="outlined-required"
                label="Email"
                defaultValue={values.email}
              />
            </div>
            <div>
              <FormControl
                sx={{ m: 1, width: "55ch" }}
                variant="outlined"
                required
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  name="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{ m: 1, width: "55ch" }}
                variant="outlined"
                required
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  name="confirmPassword"
                  // id="outlined-adornment-password"
                  type={values.showConfirmedPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfirmedPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </div>
            <div>
              <Button
                sx={{ fontSize: 22, m: 1, width: "38ch" }}
                variant="contained"
                type="submit"
                onClick={loginToApp}
              >
                Login
              </Button>
            </div>
          </Box>
        </div>
        <div className="signup--text">
          Not a Member{" "}
          <span className="signup--register" onClick={registerUser}>
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
}
