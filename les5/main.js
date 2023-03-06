loginInput = document.querySelector('#login')
passwordImput = document.querySelector('#password')
sendBtn = document.querySelector('#send')

// window.addEventListener('scroll', function () {
//     console.log('Scroll')
// })
function sendClick() {
    const userCred = {
        login: loginInput.value,
        password: passwordImput.value
    };
    // console.log('Click')
    console.log(userCred)

    loginInput.value = '';
    passwordImput.value = ''

}
sendBtn.addEventListener('click', sendClick)








// console.log(loginInput, passwordImput, sendBtn)

// function sendClick() {

//     console.log('Click');

// }

// sendBtn.addEventListener('click', function () {


//     console.log('Click')

// });
