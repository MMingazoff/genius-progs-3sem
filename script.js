function checkLogin() {
    let login = document.getElementById("login")
    if (login.value.length < 6) {
        login.style.borderColor = "red"
        alert("Логин должен содержать не менее 6 символов")
        return false;
    }
    login.style.borderColor = ""
    return true;
}

function checkPasswords() {
    let password = document.getElementById("password")
    let passwordTwo = document.getElementById("password_two")
    if (password.value !== passwordTwo.value && password.value !== "") {
        alert("Пароли не совпадают")
        password.style.borderColor = "red"
        passwordTwo.style.borderColor = "red"
        return false;
    }
    password.style.borderColor = ""
    passwordTwo.style.borderColor = ""
    return true;
}

function checkEmail() {
    let email = document.getElementById("email")
    if (
        !String(email.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
        alert("Электронная почта неверного формата")
        email.style.borderColor = "red"
        return false;
    }
    email.style.borderColor = ""
    return true;
}

function checkAge(){
    let rawAge = document.getElementById("birth_date")
    let birthDate = new Date(rawAge.value)
    let today = new Date()
    let day = birthDate.getDate()
    let month = birthDate.getMonth()
    let year = birthDate.getFullYear()
    let age = today.getFullYear() - year
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--
    }
    if (age < 18) {
        alert("Извините, регистрация возможно только для лиц старше 18 лет")
        rawAge.style.borderColor = "red"
        return false;
    }
    rawAge.style.borderColor = ""
    return true;
}

function checkRegistration() {
    if (checkLogin() && checkPasswords() && checkEmail() && checkAge()) {
        alert("Вы успешно зарегистрировались")
    }
}
