import React, { useState } from 'react'
import { Box, Button, InputLabel, styled, createTheme, ThemeProvider, TextField } from '@mui/material'
import styles from '../styles/styles.module.css';
import InputComponent from '../components/InputComponent'
import toast from "react-hot-toast";
import { ButtonComponent } from '../components/ButtonComponent';


const LoginPage:React.FC = () => {

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#9080BA",
      },
      secondary: {
        main: "#9080BA",
      },
      text: {
        primary: "#000000",
      },
      typography: {
        fontFamily: "Inter",
      },
    },
  });



  //otp
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;

    if (event.target.value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const otpValue = parseInt(otp.join(''), 10);
    if (otpValue) {
      console.log(otpValue);
    }
  };

  //login
  const [num, setNum] = useState<number | null>(null);

  const forLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value ? Number(event.target.value) : null;
    setNum(newValue);
};

const forMobileSubmit = () => {
    if (num && num.toString().length === 10) {
        console.log(num);
    } else {
        if (!num) {
            toast.error('Please enter a number');
        } else {
            toast.error('Please enter a valid 10-digit number');
        }
    }
}



  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

          <Box
            component='main'
            className={styles.centeredContainer}
            sx={{ padding: '2rem', }}>
            <Box
              component={"div"}
              className={styles.superadmincontainer}>
              <Box component={"p"} className={styles.login}>
                Log in
              </Box>
              <Box component={"p"} className={styles.mintxt}>
                Enter your credential to access your account
              </Box>

              <Box component={'div'} className={styles.space}>
                <InputLabel>Phone</InputLabel>
                <InputComponent name='phone' type='number' placeholder='Enter Phone No' value={num} forChange={forLogin} icon={null} togglePasswordVisibility={null} />
              </Box>

              <ButtonComponent variant='contained' fullWidth onClick={forMobileSubmit}>Next</ButtonComponent>
            </Box>
          </Box>


          <Box
            component='main'
            className={styles.centeredContainer}
            sx={{ padding: '2rem', }}>
            <Box
              component={"div"}
              className={styles.superadmincontainer}>
              <Box component={"p"} className={styles.mintxt}>
                We have sent OTP to verify your number
              </Box>

              <Box component={'div'} className={styles.space} sx={{ mb: 10,textAlignLast:'center' }}>
                {otp.map((value, index) => (
                  <TextField autoComplete='off'
                    key={index}
                    id={`otp-input-${index}`}
                    variant="outlined"
                    size="small"
                    type="text"
                    value={value}
                    onChange={(e: any) => {
                      const pattern = /^[0-9]*$/;
                      if (pattern.test(e.target.value)) {
                        handleChange(index, e);
                      }
                    }}
                    onKeyDown={(e: any) => handleKeyDown(index, e)}
                    style={{ marginRight: '8px' }}
                    inputProps={{
                      maxLength: 1,
                      pattern: '\\d*',
                      title: 'Please enter only numbers',
                      sx: {
                        textAlign: 'center', width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        background: '#FFF',
                      },
                    }}
                    required
                  />
                ))}
              </Box>

              <ButtonComponent variant='contained' fullWidth onClick={handleSubmit}>Get Started</ButtonComponent>
            </Box>
          </Box>

      </ThemeProvider>
    </React.Fragment>
  )
}

export default LoginPage;