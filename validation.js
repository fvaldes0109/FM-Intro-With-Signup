let inputs, inputContainers, form, invalidTexts;

function init() {
    form = document.querySelector('form');
    inputs = document.querySelectorAll('input');
    inputContainers = document.querySelectorAll('.input-container');
    invalidTexts = document.querySelectorAll('.invalid-text');

    inputs.forEach((element, index) => {
        element.addEventListener('focus', (event) => onFocus(event, index));
        element.addEventListener('blur', (event) => onBlur(event, index));
    });
    form.addEventListener('submit', validationCheck);
}

function onFocus(event, index) {
    inputContainers[index].style.border = '1px solid #777777';
    invalidTexts[index].innerHTML = '';
}

function onBlur(event, index) {
    inputContainers[index].style.border = '1px solid hsl(245, 21%, 88%)';
}

function validationCheck(event) {
    event.preventDefault();
    let isValid = true;
    inputs.forEach((input, index) => {
        if (input.value.trim() == '') {
            isValid = false;
            inputContainers[index].style.border = '2px solid hsl(0, 100%, 74%)';
            invalidTexts[index].innerHTML = inputs[index].placeholder + ' cannot be empty';
        }
    });

    if (isValid) event.target.submit();
}

window.addEventListener('load', init);