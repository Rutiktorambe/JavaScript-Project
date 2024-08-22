const body = document.querySelector('body'); 
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const color = e.target.id;
        switch (color) {
            case 'red':
                body.style.backgroundColor = color;
                body.style.color = 'black';
                break;

            case 'yellow':
                body.style.backgroundColor = color;
                body.style.color = 'black';
                break;

            case 'orange':
                body.style.backgroundColor = color;
                body.style.color = 'black';
                break;

            case 'black':
                body.style.backgroundColor = color;
                body.style.color = 'white';
                break;
        
            default:
                body.style.backgroundColor = color;
                body.style.color = 'black';
                break;
        }
    });
});
