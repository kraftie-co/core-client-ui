import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Flex, Button } from 'rebass';
import Input from '../../components-export/Input/Input';

import * as Styled from './Login.styled';
import styles from './Login.module.css';
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
      <Flex justifyContent={'center'} className={styles.header}>
        <Typography otherProps={theme.title}>{t('HELLO_KRAFTER')}</Typography>
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        className={styles.inputs}
        style={{ marginTop: theme.spacing10 }}
      >
        <Input type={'text'} onInput={(e) => setUsernameInput(e.target.value)} placeholder={'Username'} />
        <Flex flexDirection={'row'} className={styles.passwordContainer}>
          <Input
            placeholder={'Password'}
            type={passwordShown ? 'text' : 'password'}
            onInput={(e) => setPasswordInput(e.target.value)}
          />
          <Button marginLeft={'-4vw'} bg={theme.ui09} color={theme.ui05} onClick={togglePassword}>
            <VisibilityIcon />
          </Button>
        </Flex>
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        className={styles.footer}
        style={{ marginTop: theme.spacing09 }}
      >
        <button className={styles.button} onClick={loginRequest}>
          <p>{t('Login')}</p>
        </button>
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
