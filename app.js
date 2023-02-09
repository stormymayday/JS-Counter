// setting inital count
let count = 0;

// selecting value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// adding event listener to all buttons
btns.forEach(function (item) {

    item.addEventListener('click', function (event) {

        // grabbing the classList
        const styles = event.currentTarget.classList;

        // Changing the count value
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        // Setting the color
        if (count > 0) {
            value.style.color = 'green';
        }

        if (count < 0) {
            value.style.color = 'red';
        }

        if (count === 0) {
            value.style.color = '#222';
        }

        // Setting the count value
        value.textContent = count;

    });

});

