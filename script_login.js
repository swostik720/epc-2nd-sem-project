$(document).ready(function () {
  console.log('DOM is loaded!')
})

$('#loginForm').submit(function (e) {
  e.preventDefault()

  if (validateForm()){
      console.log('Post form')
  }else console.log('Validation errors')
})

function validateForm() {
  const email = $('#email').val()
  const password = $('#password').val()
  // const checkBox = $('#checkBox').val()

  let errorCount = 0
  $('.color-red').remove()

  if (!email) {
      errorCount++
      $('#email').after(getErrorHtml('Please enter your email!'))
  } else $('#email').next($('.color-red')).remove()

  if (!password) {
      errorCount++
      $('#password').after(getErrorHtml('Please enter your password!'))
  }
  else {
      const specialChars = ['@','!','$','%','^','*','(',')','-','+','=','#','.']

      if (!specialChars.some(character => password.includes(character))){
          errorCount++
          $('#password').after(getErrorHtml('Please include special character in password!'))
      }
      else $('#password').next($('.color-red')).remove()
  }

  // if((checkBox != "accepted")) {
  //   errorCount++
  //   $('#checkBox').after(getErrorHtml('Please accept our terms and condition!'))
  // }else $('#checkBox').next($('.color-red')).remove()

  return !errorCount;
}

function getErrorHtml(message) {
  return '<span class="color-red">' + message + '</span>'
}
