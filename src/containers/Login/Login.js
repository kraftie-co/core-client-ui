import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';

import * as Styled from './Login.styled';
import styles from 'Login.module.css';

function Login() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);

  async function loginRequest() {
    await axios({
      method: 'post',
      url: '/user/12345', // TODO: Change
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
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
        <input type={'text'} className={styles.input} placeholder={'Username'} />
        <div className={styles.passwordContainer}>
          <input type={passwordShown ? 'text' : 'password'} className={styles.input} placeholder={'Password'} />
          <button onClick={togglePassword} style={{ marginLeft: '-4vw', background: 'none', border: 'none' }}>
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
