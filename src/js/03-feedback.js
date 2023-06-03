import throttle from 'lodash.throttle';

const KEY_LOCAL = 'feedback-form-state';
const KEY_LOCAL_EMAIL = 'feedback-form-state-email';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input[name="email"]'),
  textarea: document.querySelector('.feedback-form textarea[name="message"]')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.emailInput.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onMessageInput, 500));

dataFromLocalStorage();

function onFormSubmit(event) {
  event.preventDefault();

  const resultForm = {
    email: refs.emailInput.value,
    message: refs.textarea.value
  };
  console.log(resultForm);
 
  event.target.reset();
  localStorage.removeItem(KEY_LOCAL);
  localStorage.removeItem(KEY_LOCAL_EMAIL);

 
}

function onEmailInput(event) {
  const email = event.target.value;
  localStorage.setItem(KEY_LOCAL_EMAIL, JSON.stringify(email));
  
}

function onMessageInput(event) {
  const message = event.target.value;
  localStorage.setItem(KEY_LOCAL, JSON.stringify(message)); 
}

function dataFromLocalStorage() {
  const emailLocalSt = localStorage.getItem(KEY_LOCAL_EMAIL);
  const messageLocalSt = localStorage.getItem(KEY_LOCAL);

  if (emailLocalSt) {
    refs.emailInput.value = emailLocalSt;
  }

  if (messageLocalSt) {
    refs.textarea.value = messageLocalSt;
  }
}
