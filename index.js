class ColorChanger {
  constructor() {
    this.colors = [
      '#FFFFFF',
      '#2196F3',
      '#4CAF50',
      '#FF9800',
      '#009688',
      '#795548',
    ];

    this.refs = {
      start: document.querySelector('[data-action="start"]'),
      stop: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body')
    };
    
    this.id = null;
    this.refs.start.addEventListener('click', this.startColorChange);
    this.refs.stop.addEventListener('click', this.stopColorChange);
  };

  changeColor = () => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const currentColorIndex = randomIntegerFromInterval(0, this.colors.length);
    this.refs.body.style.backgroundColor = this.colors[currentColorIndex];
  };

  startColorChange = () => {
    this.id = setInterval(this.changeColor, 1000);
    this.refs.start.disabled = true;
  };

  stopColorChange = () => {
    clearInterval(this.id);
    this.refs.start.disabled = false;
  };
}

const changer = new ColorChanger();
// console.log(changer);



// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];

// const refs = {
//     start: document.querySelector('[data-action="start"]'),
//     stop: document.querySelector('[data-action="stop"]'),
//     body: document.querySelector('body')
// }

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let id = null;

// function changeColor () {
//   const currentColorIndex = randomIntegerFromInterval(0, colors.length);
//   refs.body.style.backgroundColor = colors[currentColorIndex];
// }

// function startColorChange () {
//   id = setInterval(changeColor, 1000);
//   refs.start.disabled = true;
// }

// function stopColorChange() {
//   clearInterval(id);
//   refs.start.disabled = false;
// }

// refs.start.addEventListener('click', startColorChange);
// refs.stop.addEventListener('click', stopColorChange);