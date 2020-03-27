/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let gray = 100;

document.body.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;

const changeColor = (e) => {
    console.log(e.keyCode, e.which);
    switch (e.keyCode) {
        case 38:
            {
                console.log('up');
                if (gray < 255) {
                    gray += 5;
                    document.body.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
                }
            }
            break;
        case 40:
            {
                console.log('down');
                if (gray < 0) {
                    gray -= 5;
                    document.body.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
                }
            }
            break;
    }
    return gray;

}

window.addEventListener('keydown', changeColor)