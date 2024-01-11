var arr = [0, 1, 2];

// Generate random hexadecimal color values
var color = getRandomHexColor();
document.getElementById("colorName").innerHTML = color;

var index = Math.floor(Math.random() * 3);
document.getElementById(index).style.backgroundColor = color;

arr.splice(index, 1);

var color1 = getRandomHexColor();
document.getElementById(arr[0]).style.backgroundColor = color1;

var color2 = getRandomHexColor();
document.getElementById(arr[1]).style.backgroundColor = color2;

function getRandomHexColor() {
  var hexColor = Math.floor(Math.random() * 16777215).toString(16);

  while (hexColor.length < 6) {
    hexColor = '0' + hexColor;
  }

  return '#' + hexColor;
}

function guess() {
  if (document.activeElement.id == index) {
    document.getElementById("colorName").innerHTML = "CORRECT!";
    document.getElementById("colorName").style.color = "black";
  } else {
    document.getElementById("colorName").innerHTML = "WRONG!";
    document.getElementById("colorName").style.color = "black		";
  }

  document.getElementsByClassName("btn")[0].removeAttribute("onclick");
  document.getElementsByClassName("btn")[1].removeAttribute("onclick");
  document.getElementsByClassName("btn")[2].removeAttribute("onclick");
}

function replay() {
  window.location.reload();
}
