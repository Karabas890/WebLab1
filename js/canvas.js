function changeR(){
  var R=document.getElementById('R').value;
  R=R*40;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Новые координаты точек относительно центра холста
  
 // Рисование оси X с стрелкой на конце
ctx.beginPath();
ctx.moveTo(20, centerY);
ctx.lineTo(canvas.width - 20, centerY);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width - 20, centerY);
ctx.lineTo(canvas.width - 30, centerY - 5);
ctx.lineTo(canvas.width - 30, centerY + 5);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси X
for (var x = 40; x < canvas.width - 30; x += 20) {
  ctx.moveTo(x, centerY - 3);
  ctx.lineTo(x, centerY + 3);
  ctx.stroke();
}

// Рисование оси Y с стрелкой на конце
ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX, canvas.height - 20);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX - 5, 30);
ctx.lineTo(centerX + 5, 30);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси Y
for (var y = 40; y < canvas.height - 30; y += 20) {
  ctx.moveTo(centerX - 3, y);
  ctx.lineTo(centerX + 3, y);
  ctx.stroke();
}

// Добавление меток
ctx.fillStyle = "black";
ctx.fillText("X", canvas.width - 20, centerY - 10);
ctx.fillText("Y", centerX + 20, 30);

ctx.fillText("R", centerX + R, centerY + R/3);

ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5
ctx.fillRect(centerX, centerY, R, R); // Координаты (50, 50) и размеры (200x100)



// Новые координаты точек относительно центра холста
var x1 = centerX; // Горизонтальная линия начинается в центре
var y1 = centerY; // Вниз

var x2 = centerX - R/2; // Влево
var y2 = centerY;

var x3 = centerX;
var y3 = centerY - R; // Вверх

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath();
ctx.fill();


ctx.beginPath();
ctx.arc(centerX, centerY, R/2, Math.PI / 2, Math.PI ); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
ctx.lineTo(centerX, centerY); // Соединить с центром для закрытия фигуры
ctx.closePath(); // Завершить четверть круга
ctx.fill();

}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var R=document.getElementById('R').value;
R=R*40;

// Рисование оси X с стрелкой на конце
ctx.beginPath();
ctx.moveTo(20, centerY);
ctx.lineTo(canvas.width - 20, centerY);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width - 20, centerY);
ctx.lineTo(canvas.width - 30, centerY - 5);
ctx.lineTo(canvas.width - 30, centerY + 5);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси X
for (var x = 40; x < canvas.width - 30; x += 20) {
  ctx.moveTo(x, centerY - 3);
  ctx.lineTo(x, centerY + 3);
  ctx.stroke();
}

// Рисование оси Y с стрелкой на конце
ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX, canvas.height - 20);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX - 5, 30);
ctx.lineTo(centerX + 5, 30);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси Y
for (var y = 40; y < canvas.height - 30; y += 20) {
  ctx.moveTo(centerX - 3, y);
  ctx.lineTo(centerX + 3, y);
  ctx.stroke();
}

// Добавление меток
ctx.fillStyle = "black";
ctx.fillText("X", canvas.width - 20, centerY - 10);
ctx.fillText("Y", centerX + 20, 30);

ctx.fillText("R", centerX + R, centerY + R/3);

ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5
ctx.fillRect(centerX, centerY, R, R); // Координаты (50, 50) и размеры (200x100)



// Новые координаты точек относительно центра холста
var x1 = centerX; // Горизонтальная линия начинается в центре
var y1 = centerY; // Вниз

var x2 = centerX - R/2; // Влево
var y2 = centerY;

var x3 = centerX;
var y3 = centerY - R; // Вверх

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath();
ctx.fill();


ctx.beginPath();
ctx.arc(centerX, centerY, R/2, Math.PI / 2, Math.PI ); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
ctx.lineTo(centerX, centerY); // Соединить с центром для закрытия фигуры
ctx.closePath(); // Завершить четверть круга
ctx.fill();