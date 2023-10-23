
// Функция, которая сохраняет данные в localStorage
function saveDataToLocalStorage() {
   
  
    localStorage.setItem('tbody', document.getElementById("tbody").innerHTML);
  }
  
  // Функция, которая восстанавливает данные из localStorage
  function restoreDataFromLocalStorage() {
    document.getElementById("tbody").innerHTML=localStorage.getItem("tbody");
  }
  //restoreDataFromLocalStorage();
function onClickButton(){
    //localStorage.setItem('tbody', document.getElementById("tbody").innerHTML);
   
    var X = document.getElementById('X').value;
    var Y = document.getElementById('Y').value;
    var R = document.getElementById('R').value;

    //console.log(Y);
    var num = parseFloat(Y);
    var resultElement = document.getElementById("result");
    if (!isNaN(num) && num > -5 && num < 5) {
        resultElement.textContent = "Все ОК";
        resultElement.style.color="green";
        $.ajax({
            url: "main.php",
            type: "POST",
            cache: false,
            data: { x: X, y: Y, r: R },
            dataType: "html",
            success: function (data) {
                $("#tbody").append(data);
            }
        });
        //saveDataToLocalStorage();
        
    } else {
        resultElement.textContent = "Недопустимое значение";
        resultElement.style.color="red";
    }

}