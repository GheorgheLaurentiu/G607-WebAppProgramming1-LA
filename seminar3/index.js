function signUp() {
    console.log("Congratulations! You have successfully created an account");
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        suma += i;
    }
    console.log("Sum of all numbers up to 50: " + suma)
}

function cancel() {
    console.log("Warning! You are about to reset your inputs. Are you sure you want to continue?")
}

function clear() {
    document.getElementsByClassName("sign-up-container-details-text").value = "";
}
function signButton() {
    clear();
    signUp();
}

document.querySelector(".sign-up-container-buttons-sign-up").onclick = signButton;
document.querySelector(".sign-up-container-buttons-cancel").onclick = cancel, clear;
