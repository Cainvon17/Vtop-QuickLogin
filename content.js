
console.log("VTOP Login Assistant Loaded!");

function fillCredentials() {
    const usernameField =
        document.querySelector("#username");
    const passwordField =
        document.querySelector("#password");

    if (!usernameField || !passwordField) {
        console.log("Login fields not found.");
        return;
    }

    if (!usernameField.value) {
        usernameField.value = VTOP_CONFIG.username;

        usernameField.dispatchEvent(
            new Event("input", { bubbles: true })
        );

        usernameField.dispatchEvent(
            new Event("change", { bubbles: true })
        );
    }

    if (!passwordField.value) {
        passwordField.value = VTOP_CONFIG.password;

        passwordField.dispatchEvent(
            new Event("input", { bubbles: true })
        );

        passwordField.dispatchEvent(
            new Event("change", { bubbles: true })
        );
    }

    console.log("Credential fields populated.");
    
}

fillCredentials();
function detectsubmitbutton(){
    const submitButton = document.querySelector(
    'button[onclick*="callBuiltValidation"], button[onclick*="callGoogleValidation"]'
);

    if (submitButton) {
        submitButton.disabled = false;
        console.log("Submit button detected and enabled!");
        setTimeout(() => {
            //time delay for the captcha extention to fill the field.
            submitButton.click();
        }, 300);
        
    } else {
        console.log("Submit button not found.");
    }
}
detectsubmitbutton();
function detectCaptchaError() {
    const error = document.querySelector(
        'span.text-danger[role="alert"]'
    );

    const failed = error &&
        error.textContent.trim().toLowerCase().includes("invalid captcha");

    console.log(
        "CAPTCHA error detected:",
        Boolean(failed)
    );

    return Boolean(failed);
}


