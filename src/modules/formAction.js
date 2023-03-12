import { userRequest } from './request';

const form = document.forms.form;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  userRequest(form.elements[0].value);
});

form.addEventListener('keydown', () => {
  const modal = document.querySelector('.modal');
  modal !== null && modal.remove();
});
