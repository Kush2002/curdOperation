import { login, addForm } from './form';

$(document).on('submit', '#add_form', function (e) {
  e.preventDefault();
  let name = $(this).find('input[name=name]').val();
  let email = $(this).find('input[name=email]').val();
  let password = $(this).find('input[name=password]').val();
  let passwordConfirm = $(this).find('input[name=passwordConfirm]').val();
  console.log(name, email, password, passwordConfirm);
  addForm(name, email, password, passwordConfirm);
});

// LOGIN
$(document).on('submit', '#login_form', function (e) {
  e.preventDefault();
  let email = $(this).find('input[name=email]').val();
  let password = $(this).find('input[name=password]').val();
  console.log(email, password);
  login(email, password);
});
