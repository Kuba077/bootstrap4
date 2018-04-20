/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width, wys = canvasElem.height;
// kolor wypełnienia
ctx.fillStyle = "#a0c73b";
// rysujemy prostokąt/kwadraty
  //x, y, width, height
ctx.fillRect(25, 25, 100, 100);

// kolor obrysu
ctx.fillStroke = "#d93907";
// drugi obrys prostokąta
ctx.strokeRect(30, 30, 100, 100);

// Czyszczenia obszaru
ctx.clearRect(45, 45, 60, 60);

// rysowanie linii
ctx.fillStroke = "gray";
ctx.moveTo(0, 0);
ctx.lineTo(canvasElem.width, canvasElem.height);
ctx.moveTo(0, canvasElem.height);
ctx.lineTo(canvasElem.width, 0);
ctx.stroke();

// rysowanie koła
ctx.beginPath();
// x, y, radius(promień), start, stop, true/false
ctx.arc(szer / 2, wys / 2, 100, 0, 2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(szer / 2, wys / 2, 90, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(200 ,100, 70, 0, 2* Math.PI);
ctx.lineWidth = 5;
ctx.stroke();

// tekst
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseLine = "middle";
ctx.textAlign = "left";
ctx.strokeText('Grafika w canvas', 70, 180);
