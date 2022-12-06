import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Flex, Button } from 'rebass';

import * as Styled from './Login.styled';
import styles from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components-export/Input/Input';
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
      <Flex justifyContent={'center'} className={styles.header}>
        <Typography otherProps={theme.title}>{t('JOIN_US_KRAFTER')}</Typography>
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
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
            onInput={(e) => setPasswordInput(e.target.value)}
          />
          <Button marginLeft={'-4vw'} bg={theme.ui09} color={theme.ui05} onClick={togglePassword}>
            <VisibilityIcon />
          </Button>
        </Flex>
        <Flex flexDirection={'row'} className={styles.passwordContainer}>
          <Input
            placeholder={'Confirm Password'}
            type={passwordShown ? 'text' : 'password'}
            style={arePasswordsMatched ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
            onInput={(e) => setConfirmPasswordInput(e.target.value)}
          />
          <Button marginLeft={'-4vw'} bg={theme.ui09} color={theme.ui05} onClick={togglePassword}>
            <VisibilityIcon />
          </Button>
        </Flex>
        <ToastContainer position={'bottom-center'} />
      </Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        className={styles.footer}
        style={{ marginTop: theme.spacing09 }}
      >
        <button className={styles.button} onClick={registerRequest}>
          <p>{t('Register')}</p>
        </button>
        <h4>
          {t('Already have an account?')} <Link to={'/login'}>{t('Login.')}</Link>
        </h4>
      </Flex>
    </Styled.LoginContainer>
  );
}

export default Register;
