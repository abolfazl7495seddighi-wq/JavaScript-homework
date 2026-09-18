// Q1 
let q1 = Math.floor(Math.random() * 50) + 10;
console.log(q1);


////////////////////////////////////////
// Q2 
let q2less = 0;
let q2more = 0;

for(let i = 0; i < 10_000; i++){
    let q2number = Math.floor(Math.random() * 50) + 10;
   
    if(q2number < 30){
        q2less++
    }else{
        q2more++
    }

}

console.log(q2less, q2more);
// or
// console.log(q2less);
// console.log(q2more);


// مثال دیگر 
// کمتر از 18 سال
let ages = [12, 25, 34, 17, 42, 19, 11, 28];
let adults = 0;
let children = 0;


for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        adults++;
    }else{
        children++;
    }

}

console.log(adults);
console.log(children);


// مثال دیگر
// let temperatures = [25, 32, 18, 40, 28, 35, 22];
// let hot = 0;
// let cold = 0;
// let hotDays = [];    // لیست روزهای گرم
// let coldDays = [];   // لیست روزهای سرد

// for(let i = 0; i < temperatures.length; i++) {
//     if(temperatures[i] > 30) {
//         hot++;
//         hotDays.push(temperatures[i] + "°C");   // اضافه کن به لیست گرم
//     } else {
//         cold++;
//         coldDays.push(temperatures[i] + "°C");  // اضافه کن به لیست سرد
//     }
// }

// console.log("تعداد روزهای گرم: " + hot);
// console.log("دمای روزهای گرم: " + hotDays.join(", "));   // 32°C, 40°C, 35°C

// console.log("تعداد روزهای سرد: " + cold);
// console.log("دمای روزهای سرد: " + coldDays.join(", "));  // 25°C, 18°C, 28°C, 22°C


////////////////////////////////////////
// Q3 
let q3less = 0;
let q3more = 0;

let q3_target = 30;

for(let i = 0; i < 10_000; i++){
    let q3number = Math.floor(Math.random() * 50) + 10;
   
    if(q3number > q3_target){
        q3less++
    }else{
        q3more++
    }

}

console.log(q3less, q3more);


//////////////////////////////////////////
// Q4 
let millisecond = 1718486618888;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let month = day * 30;
let year = day * 365;

let years = Math.floor(millisecond / year);
millisecond = millisecond % year;

let months = Math.floor(millisecond / month);
millisecond = millisecond % month;

let days = Math.floor(millisecond / day);
millisecond = millisecond % day;

let hours = Math.floor(millisecond / hour);
millisecond = millisecond % hour;

let minutes = Math.floor(millisecond / minute);
millisecond = millisecond % minute;

let seconds = Math.floor(millisecond / second);
millisecond = millisecond % second;

console.log(years, months, days, hours, minutes, seconds, millisecond);



/////////////////////////////////////////
// Q5
let number5 = 25000;

let zerocount = 0;

while (number5 % 10 === 0 && number5 !== 0){
  number5 = number5 / 10;
  zerocount++;
}

console.log(zerocount);


/////////////////////////////////////////
// Q6
let inputNumber = 1234;

let sum = 0;

while (inputNumber > 0){
    let digit = inputNumber % 10;
    sum = sum + digit;
    inputNumber = Math.floor(inputNumber / 10);
}

console.log(sum);

// ورودی = 1234
// مراحل = 1+2+3+4 
// خروجی = 10


///////////////////////////////////////
// Q7
let inputNumber7 = 27;

let isCube = false;

for (let i = 1; i * i * i <= inputNumber7; i++){
    if (i * i * i === inputNumber7){
        isCube = true;
        break;
    }
}

console.log(isCube);



////////////////////////////////////////
// Q8
let totalMoney = 30;
let childrenCount = 4;

// حداقل و حداکثر ممکن
let minNeeded = childrenCount * 2;
let maxPossible = childrenCount * 10;

let canDivide = true;

// بررسی محدودیت کلی
if (totalMoney < minNeeded || totalMoney > maxPossible) {
  canDivide = false;
}

console.log(canDivide);


/////////////////////////////////////////
// Q9
let numberq9 = 124000;

while (numberq9 % 10 === 0 && numberq9 !== 0){
    numberq9 = numberq9 /10;
}

console.log(numberq9);

// ورودی:
// 124000
// مراحل:
// 124000 → 12400 → 1240 → 124
// خروجی:
// 124



////////////////////////////////////////
// Q10
let x = 8;

let guess = 0;
let step = 0.001;

while (guess * guess <= x) {
  guess = guess + step;
}

// چون یک قدم از جواب رد شده، کمش می‌کنیم
guess = guess - step;

console.log(guess);


