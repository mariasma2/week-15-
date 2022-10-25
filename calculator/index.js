let name = prompt("Как тебя зовут?", "");
alert("Привет, " +name+ "!");

  let op; 
  function func() {
    let result;
    
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
        case '/':
        if (num2 == 0) {
          alert('А на 0 делить нельзя!')
        } else {
          result = num1 / num2;
        }
    }

document.getElementById("result").innerHTML = result;
  }
  
