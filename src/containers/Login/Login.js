import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';

import * as Styled from './Login.styled';
import styles from 'Login.module.css';

function Login() {
  const { t } = useTranslation();
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
      <div className={styles.header}>
        <h1>{t('Hello, Krafter!')}</h1>
      </div>
      <div className={styles.inputs}>
        <input
          type={'text'}
          className={styles.input}
          onInput={(e) => setUsernameInput(e.target.value)}
          placeholder={'Username'}
        />
        <div className={styles.passwordContainer}>
          <input
            type={passwordShown ? 'text' : 'password'}
            className={styles.input}
            onInput={(e) => setPasswordInput(e.target.value)}
            placeholder={'Password'}
          />
          <button className={styles.passwordButton} onClick={togglePassword}>
            <VisibilityIcon />
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={loginRequest}>
          <p>{t('Login')}</p>
        </button>
        <h4>
          {t('Do not have an account?')} <a href={'/register'}>{t('Register.')}</a>
        </h4>
        <h4>
          {t('Forgot your password?')} <a href={'https://facebook.com'}>{t('Reset it.')}</a>
        </h4>
      </div>
    </Styled.LoginContainer>
  );
}

export default Login;
