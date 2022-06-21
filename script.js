const emailContent = document.querySelector('.email-content');
const emailContainer = document.querySelector('.email-container');
const submitBtn = document.querySelector('.submit-btn');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const fullPage = document.querySelector('.full-page');



function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    return false;
}

fullPage.addEventListener('click', (e) => {
    if ((!e.target.closest('emailContainer')) && (e.target.className !== 'submit-btn') && (e.target.className !== 'arrow-submit')) {
        errorIcon.classList.remove('show-error');
        errorMessage.classList.remove('show-error');
    }
})

submitBtn.addEventListener('click', () => {
    const email = emailContent.value;
    if (ValidateEmail(email)) {
        emailContent.value = '';
    }
    else {
        errorIcon.classList.add('show-error');
        errorMessage.classList.add('show-error');
    }
});

emailContent.addEventListener('input', () => {
    errorIcon.classList.remove('show-error');
    errorMessage.classList.remove('show-error');
});


