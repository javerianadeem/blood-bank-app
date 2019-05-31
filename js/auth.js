var loginDiv = document.getElementById('login-div');
var welcomeDiv = document.getElementById('welcome-div');

//signup
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-register')
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    });
});

// //logout
const logout = document.querySelector('logout');
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
console.log('hello')
    });
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();
        alert('helo')
    });
});