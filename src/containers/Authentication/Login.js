import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Flex, Box } from 'rebass';
import Input from '../../components-export/Input/Input';
import Button from '../../components-export/Button/Button';

import * as Styled from './Login.styled';
import Typography from '../../components-export/Typography';

function Login() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  async function loginRequest() {
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
          <Typography otherProps={theme.title}>{t('HELLO_KRAFTER')}</Typography>
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
      </Flex>
      <Flex flexDirection={'column'} justifyContent={'center'} height={'30vh'} style={{ marginTop: theme.spacing09 }}>
        <Button style={{ marginBottom: '10vh' }} onClick={loginRequest}>
          <p>{t('Login')}</p>
        </Button>
        <h4>
          {t('Do not have an account?')} <Link to={'/register'}>{t('Register.')}</Link>
        </h4>
        <h4>
          {t('Forgot your password?')} <Link to={'https://facebook.com'}>{t('Reset it.')}</Link>
        </h4>
      </Flex>
    </Styled.LoginContainer>
  );
}

export default Login;
