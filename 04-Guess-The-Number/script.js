function random_number() {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let target = random_number();
console.log(target);

const submit = document.querySelector('.btn');
let remaining_chance = 10;
const previousArray = [];

submit.addEventListener('click', function() {
    const input = parseInt(document.querySelector('#guess').value);
    const result = document.querySelector('.result');
    const chance = document.querySelector('.chance');
    const previous = document.querySelector('.previous');
    const playagain = document.querySelector('#playagain');


    remaining_chance -= 1;

    if (target === input) {
        result.innerHTML = `You guessed right! The number is ${input}.`;
        const moves = 10 - remaining_chance;
        chance.innerHTML = `You guessed it in ${moves} moves.`;
        playagain.classList.remove('playagain');
        playagain.classList.add('playagain-btn');
    } else if (Math.abs(target - input) <= 3) {
        result.innerHTML = `Your guess is too close.`;
        chance.innerHTML = `remaining chances ${remaining_chance}`;
    } else if (input < target / 1.5) {
        result.innerHTML = `Your guess is too low. Try a much bigger number.`;
        chance.innerHTML = `remaining chances ${remaining_chance}`;
    } else if (input < target) {
        result.innerHTML = `Your guess is low. Try a bigger number.`;
        chance.innerHTML = `remaining chances ${remaining_chance}`;
    } else if (input > target * 1.5) {
        result.innerHTML = `Your guess is too high. Try a much smaller number.`;
        chance.innerHTML = `remaining chances ${remaining_chance}`;
    } else {
        result.innerHTML = `Your guess is high. Try a smaller number.`;
        chance.innerHTML = `remaining chances ${remaining_chance}`;
    }


    previousArray.push(input);
    previous.innerHTML = previousArray.join(", ");

    if (remaining_chance === 0 && target !== input) {
        result.innerHTML = `Game over! The correct number was ${target}.`;
        playagain.classList.remove('playagain');
        playagain.classList.add('playagain-btn');
    }

    playagain.addEventListener('click', function() {
        remaining_chance = 10;
        target = random_number();  // Generate a new random number
        console.log(target);  // Log the new target for debugging
        previousArray.length = 0;  // Clear the previous guesses
        chance.innerHTML = remaining_chance;
        result.innerHTML = "";
        previous.innerHTML = "";
        playagain.classList.remove('playagain-btn');
        playagain.classList.add('playagain');
        document.querySelector('#guess').value = "";  // Clear the input field
    });
    
});
