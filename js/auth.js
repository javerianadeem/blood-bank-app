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
    }).catch(err =>
        signupForm.querySelector(".errorSignup").innerHTML = err.message
    )
});

// // //logout
// const logout = document.querySelector('.logout');
// logout.addEventListener('click', (e) => {
//     auth.signOut().then(function() {
//         window.location = "signup.html"
// console.log('hello')
//     });
// });
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();
    }).catch(err => {
        loginForm.querySelector('.errorLogin').innerHTML = err.message;
        
    })
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        window.location = "donote.html"
        console.log("User Signed In")
    }
    
});