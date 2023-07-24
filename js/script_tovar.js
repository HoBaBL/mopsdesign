var check = document.querySelector('#check'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    load_two = document.querySelector('#load_two'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    light = document.querySelector('#light'),
    lus = document.querySelector('#lus'),
    kg = 600,
    kub = 500,
    priseLight = 100,
    priseLus = 300,
    plus = 0;
let sum = 0;



// первые кнопки

load.addEventListener('click', () => {
    if (load.style.backgroundColor === 'rgb(255, 255, 255)') {
        load.style.backgroundColor = 'rgb(207, 9, 83)'
        load.style.color = '#FFF'
        load.style.border = '1px solid #FFF'
        load_two.style.backgroundColor = 'rgb(255, 255, 255)'
        load_three.style.backgroundColor = 'rgb(255, 255, 255)'
        load_four.style.backgroundColor = 'rgb(255, 255, 255)'
        load_three.style.color = '#6A7181'
        load_three.style.border = '1px solid #E5EAF3'
        load_two.style.color = '#6A7181'
        load_two.style.border = '1px solid #E5EAF3'
        load_four.style.color = '#6A7181'
        load_four.style.border = '1px solid #E5EAF3'
    }
    else if (load.style.backgroundColor === 'rgb(207, 9, 83)') {
        load.style.backgroundColor = 'rgb(255, 255, 255)'
        load.style.color = '#6A7181'
        load.style.border = '1px solid #E5EAF3'

    }
    if (load.style.backgroundColor === 'rgb(207, 9, 83)') {
        kg = 600;
        kub = 500;
    }
    else {
        kg = 0;
        kub = 0
    }
});

load_two.addEventListener('click', () => {
    if (load_two.style.backgroundColor === 'rgb(255, 255, 255)') {
        load_two.style.backgroundColor = 'rgb(207, 9, 83)'
        load_two.style.color = '#FFF'
        load_two.style.border = 'none'
        load.style.backgroundColor = 'rgb(255, 255, 255)'
        load_three.style.backgroundColor = 'rgb(255, 255, 255)'
        load_four.style.backgroundColor = 'rgb(255, 255, 255)'
        load.style.color = '#6A7181'
        load.style.border = '1px solid #E5EAF3'
        load_three.style.color = '#6A7181'
        load_three.style.border = '1px solid #E5EAF3'
        load_four.style.color = '#6A7181'
        load_four.style.border = '1px solid #E5EAF3'
    }
    else if (load_two.style.backgroundColor === 'rgb(207, 9, 83)') {
        load_two.style.backgroundColor = 'rgb(255, 255, 255)'
        load_two.style.color = '#6A7181'
        load_two.style.border = '1px solid #E5EAF3'

    }
    if (load_two.style.backgroundColor === 'rgb(207, 9, 83)') {
        kg = 1000;
        kub = 700;
    }
    else {
        kg = 0;
        kub = 0
    }
});

load_three.addEventListener('click', () => {
    if (load_three.style.backgroundColor === 'rgb(255, 255, 255)') {
        load_three.style.backgroundColor = 'rgb(207, 9, 83)'
        load_three.style.color = '#FFF'
        load_three.style.border = 'none'
        load_two.style.backgroundColor = 'rgb(255, 255, 255)'
        load.style.backgroundColor = 'rgb(255, 255, 255)'
        load_four.style.backgroundColor = 'rgb(255, 255, 255)'
        load.style.color = '#6A7181'
        load.style.border = '1px solid #E5EAF3'
        load_two.style.color = '#6A7181'
        load_two.style.border = '1px solid #E5EAF3'
        load_four.style.color = '#6A7181'
        load_four.style.border = '1px solid #E5EAF3'
    }
    else if (load_three.style.backgroundColor === 'rgb(207, 9, 83)') {
        load_three.style.backgroundColor = 'rgb(255, 255, 255)'
        load_three.style.color = '#6A7181'
        load_three.style.border = '1px solid #E5EAF3'

    }
    if (load_three.style.backgroundColor === 'rgb(207, 9, 83)') {
        kg = 1500;
        kub = 1000;
    }
    else {
        kg = 0;
        kub = 0
    }
});


load_four.addEventListener('click', () => {
    if (load_four.style.backgroundColor === 'rgb(255, 255, 255)') {
        load_four.style.backgroundColor = 'rgb(207, 9, 83)'
        load_four.style.color = '#FFF'
        load_four.style.border = 'none'
        load.style.backgroundColor = 'rgb(255, 255, 255)'
        load_two.style.backgroundColor = 'rgb(255, 255, 255)'
        load_three.style.backgroundColor = 'rgb(255, 255, 255)'
        load.style.color = '#6A7181'
        load.style.border = '1px solid #E5EAF3'
        load_two.style.color = '#6A7181'
        load_two.style.border = '1px solid #E5EAF3'
        load_three.style.color = '#6A7181'
        load_three.style.border = '1px solid #E5EAF3'
    }
    else if (load_four.style.backgroundColor === 'rgb(207, 9, 83)') {
        load_four.style.backgroundColor = 'rgb(255, 255, 255)'
        load_four.style.color = '#6A7181'
        load_four.style.border = '1px solid #E5EAF3'

    }
    if (load_four.style.backgroundColor === 'rgb(207, 9, 83)') {
        kg = 2000;
        kub = 1500;
    }
    else {
        kg = 0;
        kub = 0
    }
});


// вторые кнопки 

load1.addEventListener('click', () => {
    if (load1.style.backgroundColor === 'rgb(255, 255, 255)') {
        load1.style.backgroundColor = 'rgb(207, 9, 83)'
        load1.style.color = '#FFF'
        load1.style.border = '1px solid #FFF'
        load2.style.backgroundColor = 'rgb(255, 255, 255)'
        load3.style.backgroundColor = 'rgb(255, 255, 255)'
        load4.style.backgroundColor = 'rgb(255, 255, 255)'
        load3.style.color = '#6A7181'
        load3.style.border = '1px solid #E5EAF3'
        load2.style.color = '#6A7181'
        load2.style.border = '1px solid #E5EAF3'
        load4.style.color = '#6A7181'
        load4.style.border = '1px solid #E5EAF3'
    }
    else if (load1.style.backgroundColor === 'rgb(207, 9, 83)') {
        load1.style.backgroundColor = 'rgb(255, 255, 255)'
        load1.style.color = '#6A7181'
        load1.style.border = '1px solid #E5EAF3'

    }
    if (load1.style.backgroundColor === 'rgb(207, 9, 83)') {
        plus = 0
        kg = kg + plus;
    }
    else {
        kg = kg + 0;
    }
});

load2.addEventListener('click', () => {
    if (load2.style.backgroundColor === 'rgb(255, 255, 255)') {
        load2.style.backgroundColor = 'rgb(207, 9, 83)'
        load2.style.color = '#FFF'
        load2.style.border = 'none'
        load1.style.backgroundColor = 'rgb(255, 255, 255)'
        load3.style.backgroundColor = 'rgb(255, 255, 255)'
        load4.style.backgroundColor = 'rgb(255, 255, 255)'
        load1.style.color = '#6A7181'
        load1.style.border = '1px solid #E5EAF3'
        load3.style.color = '#6A7181'
        load3.style.border = '1px solid #E5EAF3'
        load4.style.color = '#6A7181'
        load4.style.border = '1px solid #E5EAF3'
    }
    else if (load2.style.backgroundColor === 'rgb(207, 9, 83)') {
        load2.style.backgroundColor = 'rgb(255, 255, 255)'
        load2.style.color = '#6A7181'
        load2.style.border = '1px solid #E5EAF3'

    }
    if (load2.style.backgroundColor === 'rgb(207, 9, 83)') {
        plus = 300
        kg = kg + plus;
    }
    else {
        kg = kg - 300;
    }
});

load3.addEventListener('click', () => {
    if (load3.style.backgroundColor === 'rgb(255, 255, 255)') {
        load3.style.backgroundColor = 'rgb(207, 9, 83)'
        load3.style.color = '#FFF'
        load3.style.border = 'none'
        load2.style.backgroundColor = 'rgb(255, 255, 255)'
        load1.style.backgroundColor = 'rgb(255, 255, 255)'
        load4.style.backgroundColor = 'rgb(255, 255, 255)'
        load1.style.color = '#6A7181'
        load1.style.border = '1px solid #E5EAF3'
        load2.style.color = '#6A7181'
        load2.style.border = '1px solid #E5EAF3'
        load4.style.color = '#6A7181'
        load4.style.border = '1px solid #E5EAF3'
    }
    else if (load3.style.backgroundColor === 'rgb(207, 9, 83)') {
        load3.style.backgroundColor = 'rgb(255, 255, 255)'
        load3.style.color = '#6A7181'
        load3.style.border = '1px solid #E5EAF3'

    }
    if (load3.style.backgroundColor === 'rgb(207, 9, 83)') {
        plus = 500
        kg = kg + plus;
    }
    else {
        kg = kg + 0;
    }
});

load4.addEventListener('click', () => {
    if (load4.style.backgroundColor === 'rgb(255, 255, 255)') {
        load4.style.backgroundColor = 'rgb(207, 9, 83)'
        load4.style.color = '#FFF'
        load4.style.border = 'none'
        load1.style.backgroundColor = 'rgb(255, 255, 255)'
        load2.style.backgroundColor = 'rgb(255, 255, 255)'
        load3.style.backgroundColor = 'rgb(255, 255, 255)'
        load1.style.color = '#6A7181'
        load1.style.border = '1px solid #E5EAF3'
        load2.style.color = '#6A7181'
        load2.style.border = '1px solid #E5EAF3'
        load3.style.color = '#6A7181'
        load3.style.border = '1px solid #E5EAF3'
    }
    else if (load4.style.backgroundColor === 'rgb(207, 9, 83)') {
        load4.style.backgroundColor = 'rgb(255, 255, 255)'
        load4.style.color = '#6A7181'
        load4.style.border = '1px solid #E5EAF3'

    }
    if (load4.style.backgroundColor === 'rgb(207, 9, 83)') {
        plus = 700
        kg = kg + plus;
    }
    else {
        kg = kg + 0;
    }
});



console.log(kg, kub);


document.querySelector('#load').onclick = function () {
    console.log(kg, kub);
}

document.querySelector('#load_two').onclick = function () {
    console.log(kg, kub);
}

document.querySelector('#load_three').onclick = function () {
    console.log(kg, kub);
}

document.querySelector('#load_four').onclick = function () {
    console.log(kg, kub);
}



document.querySelector('#check').onclick = function () {
    if (weight.value != '' && vol.value != '' && light.value != '' && lus.value != '') {
        sum = (weight.value * kg) + (vol.value * kub) + (light.value * priseLight) + (lus.value * priseLus);
        out.innerHTML = sum;
    } else {
        alert('Введите данные');
    }
}


