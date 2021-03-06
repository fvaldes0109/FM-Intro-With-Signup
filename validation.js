let inputs, inputContainers, form, invalidTexts, icons;

function init() {
    form = document.querySelector('form');
    inputs = document.querySelectorAll('input');
    inputContainers = document.querySelectorAll('.input-container');
    invalidTexts = document.querySelectorAll('.invalid-text');
    icons = document.querySelectorAll('.icon-error');

    inputs.forEach((element, index) => {
        element.addEventListener('focus', (event) => onFocus(event, index));
        element.addEventListener('blur', (event) => onBlur(event, index));
    });
    form.addEventListener('submit', validationCheck);
}

function onFocus(event, index) {
    inputContainers[index].style.border = '1px solid #777777';
    invalidTexts[index].innerHTML = '';
    icons[index].style.visibility = 'hidden';
}

function onBlur(event, index) {
    inputContainers[index].style.border = '1px solid hsl(245, 21%, 88%)';
}

function validationCheck(event) {
    event.preventDefault();
    let isValid = true;
    
    const email = document.getElementById('email');
    const text = email.value;
    if (!text.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        isValid = false;
        inputContainers[2].style.border = '2px solid hsl(0, 100%, 74%)';
        invalidTexts[2].innerHTML = 'Looks like this is not an email';
        icons[2].style.visibility = 'visible';
    }

    inputs.forEach((input, index) => {
        if (input.value.trim() == '') {
            isValid = false;
            inputContainers[index].style.border = '2px solid hsl(0, 100%, 74%)';
            invalidTexts[index].innerHTML = inputs[index].placeholder + ' cannot be empty';
            icons[index].style.visibility = 'visible';
        }
    });

    if (isValid) event.target.submit();
}

window.addEventListener('load', init);