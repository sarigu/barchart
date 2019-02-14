let arr = [];
let i = 0;
let bar;

loop();
function loop() {
  const height = getRandomNumber() + "px";
  arr.push(height);

  if (arr.length >= 40) {
    arr.shift();

    bar = document.createElement("div");
    bar.style.height = arr[4];
    bar.style.backgroundColor = "lightblue";
    container.appendChild(bar);

    container.removeChild(container.childNodes[0]);
  } else {
    bar = document.createElement("div");
    bar.style.height = arr[i];
    container.appendChild(bar);
  }

  i += 1;

  setTimeout(loop, 630);
}

function getRandomNumber() {
  const num = Math.random() * 35;
  return num;
}
