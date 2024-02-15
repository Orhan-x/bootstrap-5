let emailInput = document.getElementById('email')
// let form = document.getElementById("form")

function is_valid(email = '') {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) {
        return true
    }
    return false
}

emailInput.addEventListener('change', (e)=> {
    if (is_valid(emailInput.value)) {
        emailInput.classList.remove("is-invalid")
        emailInput.classList.add("is-valid")
    }else {
        emailInput.classList.add("is-invalid")
    }
})







