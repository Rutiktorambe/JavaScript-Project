const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const random_colour = () => {
    const hex = '1234567890ABCDEF';
    let color = '#';
    let min = 0;
    let max = hex.length - 1;

    for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * (max - min + 1)) + min;
        color = color + hex[index];
    }
    return color;
}

let change_background = setInterval(() => {
    const colour = random_colour();
    const background = document.getElementsByTagName('body')[0];
    background.style.background = colour;
}, 600);

stop.addEventListener('click', () => {
    clearInterval(change_background);
    change_background = null; 
    console.log('STOPPED');
});

start.addEventListener('click', () => {
    if (!change_background) { 
        console.log('STARTED');
        change_background = setInterval(() => {
            const colour = random_colour();
            const background = document.getElementsByTagName('body')[0];
            background.style.background = colour;
        }, 600);
    }
});
