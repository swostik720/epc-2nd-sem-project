$(document).ready(function () {
  console.log('DOM is loaded!')
})

$('#registerForm').submit(function (e) {
  e.preventDefault()

  if (validateForm()){
      console.log('Post form')
  }else console.log('Validation errors')
})

function validateForm() {
  const name = $('#name').val()
  const phone = $('#phone').val()
  const email = $('#email').val()
  const createPassword = $('#createPassword').val()
  const confirmPassword = $('#confirmPassword').val()
  // const checkBox = $('#checkBox').val()

  let errorCount = 0
  $('.color-red').remove()

  if (!name) {
      errorCount++
      $('#name').after(getErrorHtml('Please enter your name!'))
  } else $('#name').next($('.color-red')).remove()

  if (!phone) {
      errorCount++
      $('#phone').after(getErrorHtml('Please enter your number!'))
  }
  else if (phone.length !== 10){
      errorCount++
      $('#phone').after(getErrorHtml('Please enter 10 digit valid number!'))
  }
  else $('#phone').next($('.color-red')).remove()

  if (!email) {
      errorCount++
      $('#email').after(getErrorHtml('Please enter your valid email!'))
  } else $('#email').next($('.color-red')).remove()

  if (!createPassword) {
      errorCount++
      $('#createPassword').after(getErrorHtml('Please create a password!'))
  }
  else {
      const specialChars = ['@','!','$','%','^','*','(',')','-','+','=','#','.']

      if (!specialChars.some(character => createPassword.includes(character))){
          errorCount++
          $('#createPassword').after(getErrorHtml('Please include special character in password!'))
      }
      else $('#createPassword').next($('.color-red')).remove()
  }

  if (!confirmPassword) {
    errorCount++
    $('#confirmPassword').after(getErrorHtml('Please confirm your password!'))
  }
  else {
      if (createPassword != confirmPassword){
          errorCount++
          $('#confirmPassword').after(getErrorHtml('Please make sure your password matches'))
      }
      else $('#confirmPassword').next($('.color-red')).remove()
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