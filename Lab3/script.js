let login = document.getElementById('login');
let password = document.getElementById('password');

function authorize()
{
  if(login.value.length == 0 && password.value.length == 0)
  {
    alert("Enter the login and password!");
    return false;
  }
  else if(login.value.length > 5 && password.value.length > 5)
  {
    alert("Successfully authorized!");
  }
  else
  {
    alert("Login and password is to contain more than 5 characters");
    return false;
  }
}

function register()
{
  if(login.value.length == 0 && password.value.length == 0)
  {
    alert("Enter the login and password!");
    return false;
  }
  else if(login.value.length > 5 && password.value.length > 5)
  {
    alert("Successfully registered!");
  }
  else
  {
    alert("Login and password is to contain more than 5 characters");
    return false;
  }
}

function hideOrShow()
{
  var signUpArea = document.getElementById('signUpArea');
  var height = document.getElementById('inputArea');

  if(document.myForm.registerChecked.checked)
  {
    signUpArea.style.display = "inline";
    height.style.height = "47vh";
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

let count = 0;

function startTimer()
{
  count++;
  if(count == 1)
  {
    let time = 600;
    let timer = document.getElementById('timer');
    let interval = setInterval(updateTimer, 1000);

    function updateTimer()
    {
      console.log(time);
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      minutes = minutes < 10  ? "0" + minutes : minutes;
      seconds = seconds < 10  ? "0" + seconds : seconds;
      timer.innerHTML = `${minutes}:${seconds}`;
      time--;
      if(time < 0)
      {
        clearInterval(interval);
      }
    }
  }
}

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Queen', 'Rook', 'Bishop', 'Knight', 'King', 'Pawn'],
        datasets: [{
            label: 'Chess Figure',
            backgroundColor: '#e6912c',
            borderColor: '#e6912c',
            data: [0, 0, 0, 1, 2, 4]
        }]
    },

    // Configuration options go here
    options: {
    }
})

Chart.defaults.global.defaultFontColor = 'white';
