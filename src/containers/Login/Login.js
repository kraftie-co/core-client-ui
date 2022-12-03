import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React from 'react';

import * as Styled from './Login.styled';
import styles from 'Login.module.css';

function Login() {
  const { t } = useTranslation();

  async function loginRequest() {
    axios({
      method: 'post',
      url: '/user/12345', // TODO: Change
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    });
  }

  return (
    <Styled.LoginContainer>
      <div className={styles.header}>
        <h1>{t('Hello and welcome!')}</h1>
      </div>
      <div className={styles.inputs}>
        <input type={'text'} className={styles.input} placeholder={'Username'} />
        <input type={'password'} className={styles.input} placeholder={'Password'} />
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={loginRequest}>
          <p>{t('Login')}</p>
        </button>
        <h4>
          {t('Do not have an account?')} <a href={'https://facebook.com'}>{t('Register.')}</a>
        </h4>
        <h4>
          {t('Forgot your password?')} <a href={'https://facebook.com'}>{t('Reset.')}</a>
        </h4>
      </div>
    </Styled.LoginContainer>
  );
}

export default Login;
