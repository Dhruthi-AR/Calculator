const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;
        if (buttonValue === 'C') {
            display.value = '';
        } else if (buttonValue === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (buttonValue === 'enter') {
            try {
                let expression = display.value.replace(/√/g, 'Math.sqrt'); 
                let result = eval(expression); 
                display.value = result; 
            } catch (error) {
                display.value = "Error"; 
                setTimeout(() => { display.value = ''; }, 1500); 
            }
        } else {
            display.value += buttonValue;
        }
    });
});