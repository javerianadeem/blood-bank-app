
// DATABASE PART
var i = 0;
var addDonor = document.querySelector('#add-donor')
const form = document.querySelector('#donor-form')
// const updateForm = document.querySelector('#update-phone-form')
// creating contact function
function createContact(doc) {
    i++;
    addDonor.innerHTML = addDonor.innerHTML + `<div class="col s12 m6 l4">
    <div class="card hoverable donor-card z-depth-2">
        <div class="card-content">
            <span class="card-title">${doc.data().name}</span>
            <span>Email: ${doc.data().email}</span><br>
            <span>Blood Group: ${doc.data().bloodGroup}</span><br>
            <span>Address: ${doc.data().address}</span><br>
            <span>Number: ${doc.data().contact}</span><br>
        </div>
    </div>
</div>`
}
//saving data
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('donors').add({
        name: form.name.value,
        number: form.number.value,
        address: form.address.value,
        email : form.email.value,
        bloodGroup : form.bloodgroup.value,
    });
    form.reset()
});

// realtime listener
db.collection('donors').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            createContact(change.doc)
        }
        else if (change.type == 'removed') {
            let li = addDonor.querySelector('[data-id=' + change.doc.id + ']');
            addDonor.removeChild(li);
        }
    })
});
// // delete data
// function remove(i) {
//     var cross = document.querySelectorAll('.cross')
//         let id = cross[i-1].parentElement.parentElement.getAttribute('data-id');
//         db.collection('contacts').doc(id).delete()
// }
// //logout
// const logout = document.querySelector('logout');
// logout.addEventListener('click', (e) => {
//     auth.signOut().then(() => {
// console.log('hello')
//     });
// });