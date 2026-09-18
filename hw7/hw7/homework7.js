document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.register-form');
    
    // غیرفعال کردن اعتبارسنجی نیتیو HTML5 تا کنترل کاملاً دست JS باشد
    form.setAttribute('novalidate', true);

    // لیست‌های پیش‌فرض برای بخش ویژه ۱
    const registeredEmails = ['exist@word.word', 'test@test.com'];
    const registeredUsernames = ['admin', 'user123'];
    const weakPasswords = ['12345678', 'Password123', 'Qwerty123'];

    let isSubmittedOnce = false;

    // المان‌های ورودی
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const cityInput = document.getElementById('city');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const interestInputs = document.querySelectorAll('input[name="interests"]');

    // توابع کمکی برای نمایش/پاک‌کردن خطا
    function setError(elementId, message) {
        const errorSpan = document.getElementById(elementId);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }

    function clearError(elementId) {
        const errorSpan = document.getElementById(elementId);
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }

    // --- توابع اعتبارسنجی هر فیلد ---

    function validateUsername() {
        const val = usernameInput.value.trim();
        if (!val) {
            setError('username-error', 'نام کاربری الزامی است.');
            return false;
        }
        if (/[!\s?#\t]/.test(val)) {
            setError('username-error', 'نام کاربری نباید شامل !، space، ?، # یا tab باشد.');
            return false;
        }
        if (registeredUsernames.includes(val)) {
            setError('username-error', 'این نام کاربری قبلاً ثبت شده است.');
            return false;
        }
        clearError('username-error');
        return true;
    }

    function validateEmail() {
        const val = emailInput.value.trim();
        if (!val) {
            setError('email-error', 'ایمیل الزامی است.');
            return false;
        }
        // فرمت: word@word.word (دارای یک @ و حداقل یک نقطه بعد از آن)
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        if (!emailRegex.test(val)) {
            setError('email-error', 'ساختار ایمیل معتبر نیست (نمونه معتبر: word@word.word).');
            return false;
        }
        if (registeredEmails.includes(val)) {
            setError('email-error', 'این ایمیل قبلاً ثبت شده است.');
            return false;
        }
        clearError('email-error');
        return true;
    }

    function validatePassword() {
        const val = passwordInput.value;
        if (!val) {
            setError('password-error', 'کلمه عبور الزامی است.');
            return false;
        }
        if (val.length < 8) {
            setError('password-error', 'کلمه عبور باید حداقل ۸ حرف باشد.');
            return false;
        }
        if (!/[a-z]/.test(val) || !/[A-Z]/.test(val)) {
            setError('password-error', 'کلمه عبور باید شامل حداقل یک حرف کوچک و یک حرف بزرگ انگلیسی باشد.');
            return false;
        }
        if (!/[0-9]/.test(val)) {
            setError('password-error', 'کلمه عبور باید حداقل شامل یک عدد باشد.');
            return false;
        }
        if (/[\s\t]/.test(val)) {
            setError('password-error', 'کلمه عبور نباید شامل space یا tab باشد.');
            return false;
        }
        if (weakPasswords.includes(val)) {
            setError('password-error', 'این کلمه عبور بسیار ساده است.');
            return false;
        }
        clearError('password-error');
        return true;
    }

    function validateConfirmPassword() {
        const val = confirmPasswordInput.value;
        const passVal = passwordInput.value;
        if (!val) {
            setError('confirm-password-error', 'تکرار کلمه عبور الزامی است.');
            return false;
        }
        if (val !== passVal) {
            setError('confirm-password-error', 'تکرار کلمه عبور با کلمه عبور یکسان نیست.');
            return false;
        }
        clearError('confirm-password-error');
        return true;
    }

    function validateCity() {
        const val = cityInput.value;
        if (!val) {
            setError('city-error', 'انتخاب شهر الزامی است.');
            return false;
        }
        clearError('city-error');
        return true;
    }

    function validateGender() {
        // جنسیت اختیاری است، اما طبق متن سوال اگر انتخاب شود باید مقدار معتبر باشد
        clearError('gender-error');
        return true;
    }

    function validateInterests() {
        const selectedInterests = Array.from(interestInputs)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selectedInterests.length === 0) {
            setError('interests-error', 'انتخاب حداقل یک علاقه الزامی است.');
            return false;
        }

        const city = cityInput.value;

        // بخش‌های ویژه - محدودیت‌های وابسته به شهر
        if (city === 'mashhad' && selectedInterests.includes('music')) {
            setError('interests-error', 'با انتخاب شهر مشهد، نمی‌توانید علاقه‌مندی Music را انتخاب کنید.');
            return false;
        }

        if (city === 'isfahan' || city === 'shiraz') {
            const hasOtherInterests = selectedInterests.some(item => item !== 'travel' && item !== 'music');
            if (hasOtherInterests) {
                setError('interests-error', 'در شهرهای اصفهان و شیراز، فقط می‌توانید Travel یا Music یا هر دو را انتخاب کنید.');
                return false;
            }
        }

        if (city === 'tehran' && selectedInterests.length === interestInputs.length) {
            setError('interests-error', 'در شهر تهران، نمی‌توان تمام علایق را انتخاب کرد.');
            return false;
        }

        clearError('interests-error');
        return true;
    }

    // تابع اعتبارسنجی کلی
    function validateForm() {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isCityValid = validateCity();
        const isGenderValid = validateGender();
        const isInterestsValid = validateInterests();

        return isUsernameValid && isEmailValid && isPasswordValid && 
               isConfirmPasswordValid && isCityValid && isGenderValid && isInterestsValid;
    }

    // افزودن Event Listener برای اعتبارسنجی زنده پس از اولین سابمیت (بخش ویژه ۲)
    function attachLiveValidation() {
        const inputs = [usernameInput, emailInput, passwordInput, confirmPasswordInput];
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (isSubmittedOnce) {
                    validateForm();
                }
            });
        });

        cityInput.addEventListener('change', () => {
            if (isSubmittedOnce) {
                validateForm();
            }
        });

        genderInputs.forEach(radio => {
            radio.addEventListener('change', () => {
                if (isSubmittedOnce) {
                    validateForm();
                }
            });
        });

        interestInputs.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (isSubmittedOnce) {
                    validateForm();
                }
            });
        });
    }

    // مدیریت ارسال فرم (Submit)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!isSubmittedOnce) {
            isSubmittedOnce = true;
            attachLiveValidation();
        }

        const isValid = validateForm();

        if (isValid) {
            const selectedGender = Array.from(genderInputs).find(r => r.checked)?.value || null;
            const selectedInterests = Array.from(interestInputs).filter(cb => cb.checked).map(cb => cb.value);

            const formData = {
                username: usernameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value,
                city: cityInput.value,
                gender: selectedGender,
                interests: selectedInterests
            };

            console.log('Registered', formData);
        }
    });
});