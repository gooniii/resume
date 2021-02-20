const pixle = 984;

let body = document.getElementById('body');
let paintDiv = document.createElement('div');
paintDiv.setAttribute('class', 'fit-center');
body.appendChild(paintDiv);

for (var i = 0; i < pixle; i++) {
    let canvasDiv = document.getElementById('canvas');
    let span = document.createElement('span');
    span.setAttribute('id', 'select' + i);
    span.setAttribute('class', 'pixle');
    if (
        i == 28 ||
        i == 34 ||
        i == 68 ||
        i == 69 ||
        i == 70 ||
        i == 74 ||
        i == 75 ||
        i == 76 ||
        i == 108 ||
        i == 109 ||
        i == 111 ||
        i == 112 ||
        i == 114 ||
        i == 115 ||
        i == 117 ||
        i == 118 ||
        i == 149 ||
        i == 150 ||
        i == 152 ||
        i == 153 ||
        i == 155 ||
        i == 156 ||
        i == 158 ||
        i == 159 ||
        i == 190 ||
        i == 191 ||
        i == 193 ||
        i == 194 ||
        i == 196 ||
        i == 197 ||
        i == 199 ||
        i == 200 ||
        (i >= 231 && i <= 241) ||
        (i >= 271 && i <= 283) ||
        (i >= 311 && i <= 324) ||
        (i >= 352 && i <= 366) ||
        (i >= 392 && i <= 396) ||
        (i >= 399 && i <= 406) ||
        (i >= 431 && i <= 437) ||
        (i >= 440 && i <= 447) ||
        i == 472 ||
        (i >= 475 && i <= 487) ||
        i == 513 ||
        (i >= 515 && i <= 528) ||
        (i >= 555 && i <= 568) ||
        (i >= 597 && i <= 608) ||
        (i >= 641 && i <= 651) ||
        (i >= 684 && i <= 692) ||
        (i >= 725 && i <= 734) ||
        (i >= 766 && i <= 776) ||
        (i >= 806 && i <= 817) ||
        (i >= 846 && i <= 859) ||
        (i >= 887 && i <= 901) ||
        (i >= 927 && i <= 942) ||
        (i >= 967 && i <= 983)
    ) {
        span.textContent = '1';
    } else if (i == 110 || i == 116 || i == 151 || i == 157 || i == 192 || i == 198 || i == 473 || i == 474 || i == 514) {
        span.textContent = '2';
    } else if (i == 397 || i == 398 || i == 438 || i == 439) {
        span.textContent = '3';
    } else {
        span.textContent = '4';
        span.setAttribute('style', 'background:#030303;');
    }
    canvasDiv.appendChild(span);
}

$('.paint').click(function (arg) {
    let target = arg.target.id;

    switch (target) {
        case '1':
            for (var i = 0; i < pixle; i++) {
                $('#select' + i).click(function (arg) {
                    arg.target.style.background = '#dfe3e6';
                    arg.target.style.color = '#dfe3e6';
                });
            }
            break;
        case '2':
            for (var i = 0; i < pixle; i++) {
                $('#select' + i).click(function (arg) {
                    arg.target.style.background = '#938285';
                    arg.target.style.color = '#938285';
                });
            }
            break;
        case '3':
            for (var i = 0; i < pixle; i++) {
                $('#select' + i).click(function (arg) {
                    arg.target.style.background = '#2760aa';
                    arg.target.style.color = '#2760aa';
                });
            }
            break;
        case '4':
            for (var i = 0; i < pixle; i++) {
                $('#select' + i).click(function (arg) {
                    arg.target.style.background = '#030303';
                    arg.target.style.color = '#030303';
                });
            }
            break;
        case 'C':
            arg.target.style.background = '';
            for (var i = 0; i < pixle; i++) {
                $('#select' + i).click(function (arg) {
                    arg.target.style.background = '';
                    arg.target.style.color = '';
                });
            }
            break;
    }
});
