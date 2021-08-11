const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let id = null;

function changeColor () {
  const currentColorIndex = randomIntegerFromInterval(0, colors.length);
  refs.body.style.backgroundColor = colors[currentColorIndex];
}

function startColorChange () {
  id = setInterval(changeColor, 1000);
  refs.start.disabled = true;
}

function stopColorChange() {
  clearInterval(id);
  refs.start.disabled = false;
}

refs.start.addEventListener('click', startColorChange);
refs.stop.addEventListener('click', stopColorChange);