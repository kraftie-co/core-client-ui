import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';

import * as Styled from './Login.styled';
import styles from 'Login.module.css';

function Register() {
  const { t } = useTranslation();
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
      alert(t('Passwords do not match. Please try again'));
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
      <div className={styles.header}>
        <h1>{t('Join us, Krafter!')}</h1>
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
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: '#034C65' }}
            onInput={(e) => setPasswordInput(e.target.value)}
            placeholder={'Password'}
          />
          <button className={styles.passwordButton} onClick={togglePassword}>
            <VisibilityIcon />
          </button>
        </div>
        <div className={styles.passwordContainer}>
          <input
            type={passwordShown ? 'text' : 'password'}
            className={styles.input}
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: '#034C65' }}
            onInput={(e) => setConfirmPasswordInput(e.target.value)}
            placeholder={'Confirm password'}
          />
          <button className={styles.passwordButton} onClick={togglePassword}>
            <VisibilityIcon />
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={registerRequest}>
          <p>{t('Register')}</p>
        </button>
        <h4>
          {t('Already have an account?')} <a href={'/login'}>{t('Login.')}</a>
        </h4>
      </div>
    </Styled.LoginContainer>
  );
}

export default Register;
