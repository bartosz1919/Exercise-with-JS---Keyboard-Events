/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let grey = 100;

document.body.style.backgroundColor = `rgb(${gray}, ${green}, ${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode, e.which);
    switch (e.keyCode) {
        case 38:
            {
                console.log('up');
            }
            break;
        case 40:
            {
                console.log('down');
            }
            break;
    }

}

window.addEventListener('keydown', changeColor)