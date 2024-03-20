import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8080/api/user/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Login Successfully');
      window.setTimeout(() => {
        location.assign('/home');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', `${err.response.data.message}`);
    window.setTimeout(() => {
      Location.assign('/');
    }, 1000);
  }
};

export const addForm = async (name, email, password, passwordConfirm) => {
  console.log(name, email, password, passwordConfirm);
  try {
    const result = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8080/api/user/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    // console.log(result);
    if (result.data.status === 'success') {
      showAlert('success', 'Created Successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', `${err.response.data.message}`);
  }
};
