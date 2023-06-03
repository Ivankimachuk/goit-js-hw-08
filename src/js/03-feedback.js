import throttle from 'lodash.throttle';

const KEY_LOCAL = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(onInputChange, 500));
messageTextarea.addEventListener('input', throttle(onInputChange, 500));

loadFormData();

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };

  console.log(formData);

  resetForm();
  clearLocalStorage();
}

function onInputChange() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };

  saveFormData(formData);
}

function loadFormData() {
  const formData = getFormDataFromLocalStorage();

  if (formData) {
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

function saveFormData(formData) {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}

function getFormDataFromLocalStorage() {
  const formDataString = localStorage.getItem(KEY_LOCAL);

  if (formDataString) {
    return JSON.parse(formDataString);
  }

  return null;
}

function resetForm() {
  form.reset();
}

function clearLocalStorage() {
  localStorage.removeItem(KEY_LOCAL);
}
