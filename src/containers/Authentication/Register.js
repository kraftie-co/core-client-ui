import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Box, Flex } from 'rebass';

import * as Styled from './Login.styled';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components-export/Input/Input';
import Button from '../../components-export/Button/Button';
import Typography from 'Root/components-export/Typography';

function Register() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [arePasswordsMatched, setArePasswordsMatched] = useState(true);

  useEffect(() => {
    setArePasswordsMatched(passwordInput !== confirmPasswordInput);
  }, [confirmPasswordInput, passwordInput]);

  async function registerRequest() {
    if (passwordInput !== confirmPasswordInput) {
      toast(t('Passwords do not match. Please try again'));
      return;
    }
    await axios({
      method: 'post',
      url: '/user/12345', // TODO: Change to actual URL
      data: {
        username: usernameInput,
        password: passwordInput,
      },
    });
  }

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  return (
    <Styled.LoginContainer>
      <Flex>
        <Box textAlign={'center'} bg={theme.ui11} width={'75vw'} boxShadow={'10px 10px 10px lightgray'}>
          <Typography otherProps={theme.title}>{t('JOIN_US_KRAFTER')}</Typography>
        </Box>
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        height={'25vh'}
        width={'50vw'}
        style={{ marginTop: theme.spacing10 }}
      >
        <Input type={'text'} onInput={(e) => setUsernameInput(e.target.value)} placeholder={'Username'} />
        <Flex flexDirection={'row'} width={'55vw'}>
          <Input
            placeholder={'Password'}
            type={passwordShown ? 'text' : 'password'}
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
            onInput={(e) => setPasswordInput(e.target.value)}
          />
          <Button
            style={{
              marginLeft: '-4vw',
              backgroundColor: theme.ui09,
              color: theme.ui05,
              border: 'none',
              boxShadow: 'none',
            }}
            onClick={togglePassword}
          >
            <VisibilityIcon />
          </Button>
        </Flex>
        <Flex flexDirection={'row'} width={'55vw'}>
          <Input
            placeholder={'Confirm Password'}
            type={passwordShown ? 'text' : 'password'}
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
            onInput={(e) => setConfirmPasswordInput(e.target.value)}
          />
          <Button
            style={{
              marginLeft: '-4vw',
              backgroundColor: theme.ui09,
              color: theme.ui05,
              border: 'none',
              boxShadow: 'none',
            }}
            onClick={togglePassword}
          >
            <VisibilityIcon />
          </Button>
        </Flex>
        <ToastContainer position={'bottom-center'} />
      </Flex>
      <Flex flexDirection={'column'} justifyContent={'center'} height={'30vh'} style={{ marginTop: theme.spacing09 }}>
        <Button style={{ marginBottom: '10vh' }} onClick={registerRequest}>
          <p>{t('Register')}</p>
        </Button>
        <h4>
          {t('Already have an account?')} <Link to={'/login'}>{t('Login.')}</Link>
        </h4>
      </Flex>
    </Styled.LoginContainer>
  );
}

export default Register;
