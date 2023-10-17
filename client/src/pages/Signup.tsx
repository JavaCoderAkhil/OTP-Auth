import React, { useState } from 'react'
import { Box, Select, MenuItem, Button, InputLabel, styled, FormControlLabel, Checkbox, Typography, createTheme, ThemeProvider, TextField } from '@mui/material'
import styles from '../styles/styles.module.css';
import InputComponent from '../components/InputComponent'
import EmailIcon from '@mui/icons-material/Email';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import toast from "react-hot-toast";
import { ButtonComponent } from '../components/ButtonComponent';
import { Link } from 'react-router-dom';

const Signup = () => {

    interface SignupState{
        name:string;
        number:null|number
        password:string;
    }

    const [form, setForm] = useState<SignupState>({ name: '',number:null, password: '' })
    const [showPassword, setShowPassword] = useState(false);
  
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const forLogin = (e: any) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value })
    }
  
    const forSubmit = () => {
      if (form.name && form.password) {
        console.log(form);
        setForm({ name: '', password: '' })
        toast.success('login');
      } else {
        toast.error("Please fill in all fields");
      }
    }

  return (
    <div>
         <Box
            component='main'
            className={styles.centeredContainer}
            sx={{ padding: '2rem', }}>
            <Box
              component={"div"}
              className={styles.container}>
              <Box component={"p"} className={styles.login}>
                Log in
              </Box>
              <Box component={"p"} className={styles.mintxt}>
                Enter your credential to access your account
              </Box>

              <Box component={'div'} className={styles.space}>
                <InputLabel>ENTER USERNAME</InputLabel>
                <InputComponent name='email' type='string' placeholder='Enter Username' value={form.name} forChange={forLogin} icon={null} togglePasswordVisibility={null} />
              </Box>

              <Box component={'div'} className={styles.space}>
                <InputLabel>ENTER PHONE</InputLabel>
                <InputComponent name='phone' type='number' placeholder='Enter Phone No' value={form.number} forChange={forLogin} icon={null} togglePasswordVisibility={null} />
              </Box>

              <Box component={'div'} className={styles.space}>
                <InputLabel>PASSWORD</InputLabel>
                <InputComponent name='password' type={showPassword ? "text" : "password"} placeholder='Enter Password' value={form.password} forChange={forLogin} icon={showPassword ? <VisibilityOff /> : <Visibility />} togglePasswordVisibility={togglePasswordVisibility} />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '1.6rem', alignItems: 'center' }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me for 30 days"
                />
                <Typography component={'span'} className={styles.accounttxt}>
                  Forgot password?
                </Typography>
              </Box>

              <ButtonComponent variant='contained' fullWidth onClick={forSubmit}>Sign Up</ButtonComponent>

              <Box component={"p"} className={styles.minchild}>
                Are you already user? <Link to={'/signin'} className={styles.accounttxt}>Log In</Link>
              </Box>

            </Box>
          </Box>
    </div>
  )
}

export default Signup