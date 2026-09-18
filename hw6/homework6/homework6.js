document.addEventListener("DOMContentLoaded", function () {

    // گرفتن عناصر ماشین حساب
    const calculator = document.querySelector(".calculator");
    const display = document.querySelector(".calculator__display");
    const keys = document.querySelector(".calculator__keys");

    // متغیرهای ماشین حساب
    let firstNumber = null;
    let operator = null;
    let waitingForSecondNumber = false;


    // ==========================================
    // وارد کردن عدد
    // ==========================================

    function inputNumber(number) {

        // اگر تازه یک عملگر انتخاب شده
        if (waitingForSecondNumber) {
            display.textContent = number;
            waitingForSecondNumber = false;
        }

        // اگر صفحه فقط 0 است
        else if (display.textContent === "0") {
            display.textContent = number;
        }

        // در غیر این صورت عدد را به انتهای عدد فعلی اضافه کن
        else {
            display.textContent += number;
        }
    }


    // ==========================================
    // وارد کردن اعشار
    // ==========================================

    function inputDecimal() {

        // اگر بعد از انتخاب عملگر هستیم
        if (waitingForSecondNumber) {
            display.textContent = "0.";
            waitingForSecondNumber = false;
            return;
        }

        // اگر قبلاً اعشار وارد شده، دوباره اضافه نکن
        if (display.textContent.includes(".")) {
            return;
        }

        display.textContent += ".";
    }


    // ==========================================
    // انتخاب عملگر
    // ==========================================

    function chooseOperator(nextOperator) {

        const currentNumber = parseFloat(display.textContent);

        // اگر کاربر پشت سر هم عملگر زد
        if (operator !== null && waitingForSecondNumber) {
            operator = nextOperator;
            return;
        }

        // اگر عدد اول هنوز ذخیره نشده
        if (firstNumber === null) {
            firstNumber = currentNumber;
        }

        // اگر قبلاً یک عملیات داریم
        else if (operator !== null) {

            const result = calculate(
                firstNumber,
                currentNumber,
                operator
            );

            display.textContent = result;

            firstNumber = result;
        }

        // ذخیره عملگر
        operator = nextOperator;

        // منتظر عدد دوم باش
        waitingForSecondNumber = true;
    }


    // ==========================================
    // انجام محاسبه
    // ==========================================

    function calculate(first, second, operation) {

        let result;

        switch (operation) {

            case "add":
                result = first + second;
                break;

            case "subtract":
                result = first - second;
                break;

            case "multiply":
                result = first * second;
                break;

            case "divide":

                // جلوگیری از تقسیم بر صفر
                if (second === 0) {
                    return "Error";
                }

                result = first / second;
                break;

            default:
                result = second;
        }

        // جلوگیری از نمایش اعشارهای خیلی طولانی
        if (typeof result === "number") {
            result = Number(result.toFixed(10));
        }

        return result;
    }


    // ==========================================
    // دکمه مساوی
    // ==========================================

    function performCalculation() {

        // اگر هنوز عملگری انتخاب نشده
        if (firstNumber === null || operator === null) {
            return;
        }

        const secondNumber = parseFloat(display.textContent);

        const result = calculate(
            firstNumber,
            secondNumber,
            operator
        );

        // نمایش نتیجه
        display.textContent = result;

        // ذخیره تاریخچه در Console
        console.log(
            firstNumber +
            " " +
            operator +
            " " +
            secondNumber +
            " = " +
            result
        );

        // ریست کردن وضعیت برای محاسبه بعدی
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = true;
    }


    // ==========================================
    // دکمه AC
    // ==========================================

    function clearCalculator() {

        display.textContent = "0";

        firstNumber = null;
        operator = null;
        waitingForSecondNumber = false;
    }


    // ==========================================
    // کلیک روی دکمه‌ها
    // ==========================================

    keys.addEventListener("click", function (event) {

        const button = event.target;

        // فقط button را قبول کن
        if (button.tagName !== "BUTTON") {
            return;
        }

        // مقدار data-action
        const action = button.dataset.action;

        // متن دکمه
        const value = button.textContent;


        // ======================================
        // دکمه‌های عددی
        // ======================================

        if (!action) {

            inputNumber(value);

            return;
        }


        // ======================================
        // عملگرها
        // ======================================

        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {

            chooseOperator(action);

            return;
        }


        // ======================================
        // اعشار
        // ======================================

        if (action === "decimal") {

            inputDecimal();

            return;
        }


        // ======================================
        // پاک کردن
        // ======================================

        if (action === "clear") {

            clearCalculator();

            return;
        }


        // ======================================
        // مساوی
        // ======================================

        if (action === "calculate") {

            performCalculation();

            return;
        }

    });


    // ==========================================
    // پشتیبانی از Keyboard
    // ==========================================

    document.addEventListener("keydown", function (event) {

        const key = event.key;


        // اعداد
        if (key >= "0" && key <= "9") {

            inputNumber(key);

            return;
        }


        // اعشار
        if (key === ".") {

            inputDecimal();

            return;
        }


        // جمع
        if (key === "+") {

            chooseOperator("add");

            return;
        }


        // تفریق
        if (key === "-") {

            chooseOperator("subtract");

            return;
        }


        // ضرب
        if (key === "*" || key.toLowerCase() === "x") {

            chooseOperator("multiply");

            return;
        }


        // تقسیم
        if (key === "/") {

            chooseOperator("divide");

            return;
        }


        // مساوی
        if (key === "Enter" || key === "=") {

            performCalculation();

            return;
        }


        // پاک کردن
        if (key === "Escape") {

            clearCalculator();

            return;
        }

    });

});