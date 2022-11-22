'use strict';

const box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.querySelectorAll('.circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
btns[1].style.borderRadius = '100%'
circles.forEach(item => {
    item.style.backgroundColor='green'
})

let div = document.createElement('div');
div.classList.add('black');
box.append(div);
hearts[0].replaceWith(circles[0])

div.innerHTML = "<h1>Hello</h1>"
circles[2].insertAdjacentHTML('afterbegin', '<h2>Hello</h2>')