/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode, e.which);
    switch (e.keyCode) {
        case 38:
            {
                console.log('góra');
            }
        case 40:
            {
                console.log('dół');
            }
    }

}

window.addEventListener('keydown', changeColor)