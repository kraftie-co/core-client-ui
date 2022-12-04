import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Flex } from 'rebass';

import * as Styled from './Login.styled';
import styles from './Login.module.css';

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
        <h1>{t('Hello, Krafter!')}</h1>
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        className={styles.inputs}
        style={{ marginTop: theme.spacing10 }}
      >
        <input
          type={'text'}
          className={styles.input}
          onInput={(e) => setUsernameInput(e.target.value)}
          placeholder={'Username'}
        />
        <Flex flexDirection={'row'} className={styles.passwordContainer}>
          <input
            type={passwordShown ? 'text' : 'password'}
            className={styles.input}
            onInput={(e) => setPasswordInput(e.target.value)}
            placeholder={'Password'}
          />
          <button className={styles.passwordButton} onClick={togglePassword}>
            <VisibilityIcon />
          </button>
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
