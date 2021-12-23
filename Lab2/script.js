var login = document.getElementById('login');
var password = document.getElementById('password');
var checkBox = document.getElementById('checkBox');
var signUpArea = document.getElementById('signUpArea');
var height = document.getElementById('inputArea');

function authorize()
{
  if(login.value.length > 5 && password.value.length > 5)
  {
    alert("Successfully authorized!");
  }
}

function register()
{
  if(login.value.length > 5 && password.value.length > 5)
  {
    alert("Successfully registered!");
  }
}

function hideOrShow()
{
  if(document.myForm.registerChecked.checked)
  {
    signUpArea.style.display = "inline";
    height.style.height = "49vh";
    document.getElementById('signUp').style.display = "inline";
    document.getElementById('signIn').style.display = "none";
  }
  else
  {
    signUpArea.style.display = "none";
    height.style.height = "28vh";
    document.getElementById('signUp').style.display = "none";
        document.getElementById('signIn').style.display = "inline";
  }
}
