var i = 0;
var txt = 'Hi, I\'m Mfonido Mark. a Frontend Developer, Graphic designer based in Uyo and Ikot-Ekpene, Akwa-Ibom state, Nigeria.';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();