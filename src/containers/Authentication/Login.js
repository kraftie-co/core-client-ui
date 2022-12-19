import { useTranslation } from 'react-i18next';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTheme } from 'styled-components';
import { Flex, Box } from 'rebass';
import { ToastContainer, toast } from 'react-toastify';

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
    if (!isUsernameValid()) {
      toast(t('The username must contain at least one alphanumeric character and between 3 and 30 characters.'));
      return;
    }
    if (!isPasswordValid()) {
      toast(
        t(
          'Passwords are not valid. Check if they match and if they have at least eight characters, one number and one letter',
        ),
      );
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

  function isPasswordValid() {
    // Regex for a password with at least 8 characters, one number and one letter
    const regularExpression = new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$');
    return regularExpression.test(passwordInput);
  }

  function isUsernameValid() {
    //   ^                   Beginning of the string.
    //   (?=.*[A-Za-z0-9])   Must contain at least one alphanumeric (English) character.
    //   .{3,30}             Match any character (special or not) between 3 and 30 times.
    //   $                   End of string.
    const regularExpression = new RegExp('^(?=.*[A-Za-z0-9]).{3,30}$');
    return regularExpression.test(usernameInput);
  }

  return (
    <Styled.LoginContainer>
      <Flex style={{ paddingRight: theme.spacing09 }}>
        <Box
          style={{
            display: 'flex',
            backgroundColor: theme.ui01,
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: theme.spacing07,
            boxShadow: '0px 8px 8px rgba(0, 0, 0, .5)',
          }}
        >
          <ToastContainer position={'bottom-center'} />
          <Flex>
            <Box textAlign={'center'} width={'50vw'} boxShadow={'10px 10px 10px lightgray'}>
              <Typography otherProps={theme.title}>{t('LOGIN')}</Typography>
            </Box>
          </Flex>
          <Flex
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={'25vh'}
            width={'30vw'}
            style={{ marginTop: theme.spacing10 }}
          >
            <p color={theme.textColor04}>Username</p>
            <Input type={'text'} onInput={(e) => setUsernameInput(e.target.value)} />
            <p color={theme.textColor04}>Password</p>
            <Flex flexDirection={'row'} width={'30vw'}>
              <Input type={passwordShown ? 'text' : 'password'} onInput={(e) => setPasswordInput(e.target.value)} />
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
          <Flex
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'30vh'}
            style={{ marginTop: theme.spacing09 }}
          >
            <h4>
              <Link to={'/register'}>{t('LOGIN_TAG')}</Link>
            </h4>
            <Button style={{ marginTop: theme.spacing10, width: '40vw' }} onClick={loginRequest}>
              <p>{t('Login')}</p>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Styled.LoginContainer>
  );
}

export default Login;
