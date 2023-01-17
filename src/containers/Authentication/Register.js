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
import { save } from '../../utils/localStorage';
import getHeaders from '../../utils/headerUtils';

function Register() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [arePasswordsValid, setArePasswordsValid] = useState(true);

  useEffect(() => {
    setArePasswordsValid(passwordInput !== confirmPasswordInput);
  }, [confirmPasswordInput, passwordInput]);

  async function registerRequest() {
    if (!isUsernameValid()) {
      toast(t('The username must contain at least one alphanumeric character and between 3 and 30 characters.'));
      return;
    }
    if (!determineIfPasswordsAreValid()) {
      toast(
        t(
          'Passwords are not valid. Check if they match and if they have at least eight characters, one number and one letter',
        ),
      );
      return;
    }

    const data = {
      username: usernameInput,
      password: passwordInput,
      email: emailInput,
    };
    axios
      .post('https://kraftie-api.azurewebsites.net/client/register', data, {
        headers: getHeaders(),
      })
      .then((response) => {
        save('user-token', response.headers.authorization);
      })
      .catch((error) => {
        toast(error.message);
      });
  }

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  function determineIfPasswordsAreValid() {
    if (passwordInput !== confirmPasswordInput) {
      return false;
    }
    //   ^                   Beginning of the string.
    //  [a-zA-Z0-9]{8,}      Must contain at least 8 from the mentioned characters.
    const regularExpression = new RegExp('^[a-zA-Z0-9]{8,}');
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
          <Flex>
            <Box textAlign={'center'} width={'50vw'} boxShadow={'10px 10px 10px lightgray'}>
              <Typography otherProps={theme.title}>{t('JOIN_US_KRAFTER')}</Typography>
            </Box>
          </Flex>
          <Flex
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={'32vh'}
            width={'30vw'}
            style={{ marginTop: theme.spacing10 }}
          >
            <p color={theme.textColor04}>Email</p>
            <Input type={'text'} onInput={(e) => setEmailInput(e.target.value)} />
            <p color={theme.textColor04}>Username</p>
            <Input type={'text'} onInput={(e) => setUsernameInput(e.target.value)} />
            <p color={theme.textColor04}>Password</p>
            <Flex flexDirection={'row'}>
              <Input
                type={passwordShown ? 'text' : 'password'}
                style={arePasswordsValid ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
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
            <p color={theme.textColor04}>Confirm Password</p>
            <Flex flexDirection={'row'}>
              <Input
                type={passwordShown ? 'text' : 'password'}
                style={arePasswordsValid ? { borderColor: 'red' } : { borderColor: theme.ui07 }}
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
          <Flex
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'30vh'}
            style={{ marginTop: theme.spacing09 }}
          >
            <h4>
              <Link to={'/login'}>{t('REGISTER_TAG')}</Link>
            </h4>
            <Button style={{ marginTop: '10vh', width: '40vw' }} onClick={registerRequest}>
              <p>{t('Register')}</p>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Styled.LoginContainer>
  );
}

export default Register;
