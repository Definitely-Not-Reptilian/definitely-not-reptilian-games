function onContactSubmit(token) {
  document.getElementById('captchaResponse').value = token
  document.getElementById('contact-form').submit()
}
