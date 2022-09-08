const alertMe = () => {
    alert('thanks for visiting our website')
}

const getUserInfo = () => {
    let input = document.getElementById('input-field');
    let sum = parseInt(input.value) + 200;
    return prompt(sum)
}

const userInfo = () => {
    const collect = parseFloat(prompt('give some numbers'));
    alert(collect + 200);
}