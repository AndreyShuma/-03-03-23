'use strict';

const fname = document.querySelector('input[name="fname"]');
const surname = document.querySelector('input[name="surname"]');
const birthday = document.querySelector('input[name="birthday"]');
const render = document.querySelector('.render');
const PUSH = document.querySelector('.btn');

const result = [];

PUSH.addEventListener('click', () => {
    let nameValue = fname.value ? fname.value : 'undefined';
    let surnameValue = surname.value ? surname.value : undefined;
    let birthdayValue = birthday.value;
    
    const info = {
        name: nameValue,
        surname: surnameValue,
        birthday: birthdayValue,
    };
 
    fname.value = '';
    surname.value = '';
    // birthday.value = '';

    result.push(info);
    return result
});

PUSH.addEventListener('click', () => {
    const renderFunc = result.map( item => {
        if( item.name  === 'undefined') {return};
        if( item.surname  === undefined) {return};
        let capsName = `${item.name[0].toUpperCase()}${item.name.slice(1).toLowerCase()}`;
        let capsSurname = `${item.surname[0].toUpperCase()}${item.surname.slice(1).toLowerCase()}`;
        let capsBirthday = `${item.birthday.slice(-2)}.${item.birthday.slice(-5, -3)}.${item.birthday.slice(0, 4)}`;
        let dataVisual = `<div>-${capsName} ${capsSurname}, ${capsBirthday}</div>`;
        return  dataVisual;
    })
    return render.innerHTML = renderFunc.join('')
})



