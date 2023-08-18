const checkboxPassword = document.getElementById('checkbox-password');
const password = document.getElementById('password');
function showPassword() {
    if( password.type == 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}
checkboxPassword.onclick = showPassword;