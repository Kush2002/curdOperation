import axios from 'axios';
import { showAlert } from './alert';

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
