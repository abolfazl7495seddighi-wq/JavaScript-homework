////////////////////////////////////////////////
//Q1
// که خودم حل کردم


// let password = "sTrongP4ssword!";

// let score = 0;

// if (password.length < 8) {
//     score += 2;
// } else {
//     if (password.length > 12) {
//         score += 12;
//     } else {
//         score += password.length;
//     }
// }

// let hasUpper = false;
// let hasLower = false;
// let hasSpecial = false;
// let hasNumber = false;


// for (let i = 0; i < password.length; i++) {

//     let char = password[i];

//     if (char >= "A" && char <= "Z") {
//         hasUpper = true;
//     }

//     if (char >= "a" && char <= "z") {
//         hasLower = true;
//     }

//     if (char >= "0" && char <= "9") {
//         hasNumber = true;
//     }

//     if (char === "!" || char === "?" || char === "#") {
//         hasSpecial = true;
//     }
// }


// if (hasUpper) score += 2;
// if (hasLower) score += 2;
// if (hasSpecial) score += 2;
// if (hasNumber) score += 2;

// console.log(score);


// ---------------------------------------
// Q1 
// جناب سحاب رنجبر حل کرده

let A_ASCII = 65;
let Z_ASCII = 90;

let userPassword = "sTrongP4ssword!";

let q1_score = 0;


if(userPassword.length === 0){
    q1_score = 0
}else if (userPassword.length < 8){
    q1_score += 2
}else if(userPassword.length >= 12){
    q1_score += 12
}


for(let index = 0; index < userPassword.length - 1; index++){
   let charCode = userPassword.charCodeAt(index)
   console.log({charCode});

   if(charCode >= 65 && charCode <= 90){
    console.log("uppercase");
    
   }
   
}


console.log(q1_score);




////////////////////////////////////////////////
//Q2
// let input = "04 * 2";

// let parts = input.split(" ");

// let num1 = parseFloat(parts[0]);
// let operator = parts[1];
// let num2 = parseFloat(parts[2]);

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }

// else if (operator === "-") {
//     result = num1 - num2;
// }

// else if (operator === "*") {
//     result = num1 * num2;
// }

// else if (operator === "/") {
//     result = num1 / num2;
// }

// else if (operator === "%") {
//     result = num1 % num2;
// }

// console.log(result);


/////////////////////////////////////////////////
//Q3
// let q3InputText = "h3llo";

// let q3EncryptedText = "";


// for(let i = 0; i < q3InputText.length; i++){

//     let q3CurrentChar = q3InputText[i];


//     if(q3CurrentChar >= "a" && q3CurrentChar <= "z"){

//         let q3NewCharCode = "z".charCodeAt(0) - 
//                             (q3CurrentChar.charCodeAt(0) - "a".charCodeAt(0));

//         q3EncryptedText += String.fromCharCode(q3NewCharCode);

//     }


//     else if(q3CurrentChar >= "A" && q3CurrentChar <= "Z"){

//         let q3NewUpperCharCode = "Z".charCodeAt(0) -
//                                  (q3CurrentChar.charCodeAt(0) - "A".charCodeAt(0));

//         q3EncryptedText += String.fromCharCode(q3NewUpperCharCode);

//     }


//     else{

//         q3EncryptedText += q3CurrentChar;

//     }

// }


// console.log(q3EncryptedText);



///////////////////////////////////////////////
// Q4
// let q4EncryptedText = "s3vool";

// let q4DecryptedText = "";


// for(let i = 0; i < q4EncryptedText.length; i++){

//     let q4CurrentChar = q4EncryptedText[i];


//     if(q4CurrentChar >= "a" && q4CurrentChar <= "z"){

//         let q4NewCharCode = "z".charCodeAt(0) -
//                             (q4CurrentChar.charCodeAt(0) - "a".charCodeAt(0));

//         q4DecryptedText += String.fromCharCode(q4NewCharCode);

//     }


//     else if(q4CurrentChar >= "A" && q4CurrentChar <= "Z"){

//         let q4NewUpperCharCode = "Z".charCodeAt(0) -
//                                  (q4CurrentChar.charCodeAt(0) - "A".charCodeAt(0));

//         q4DecryptedText += String.fromCharCode(q4NewUpperCharCode);

//     }


//     else{

//         q4DecryptedText += q4CurrentChar;

//     }

// }


// console.log(q4DecryptedText);



///////////////////////////////////////////////
// Q5
// let q5InputNumberText = "27425365";

// let q5FormattedNumberText = "";

// let q5DigitCounter = 0;


// for(let i = q5InputNumberText.length - 1; i >= 0; i--){

//     q5FormattedNumberText = q5InputNumberText[i] + q5FormattedNumberText;

//     q5DigitCounter++;


//     if(q5DigitCounter === 3 && i !== 0){

//         q5FormattedNumberText = "," + q5FormattedNumberText;

//         q5DigitCounter = 0;

//     }

// }


// console.log(q5FormattedNumberText);



///////////////////////////////////////////////
// Q6
// سوال 7

let q7Emails = [
  "Webster_Rohan@gmail.com",
  "Mellie_Farrell@gmail.com",
  "Ethelyn.Boehm67@yahoo.com",
  "Duane_Collins@gmail.com",
  "Aurore2@gmail.com",
  "Lucio_Kemmer@gmail.com",
  "Everett.Brakus80@gmail.com",
  "Kaya_Kuhn78@yahoo.com",
  "Cleta.Bartoletti20@gmail.com",
  "Ashtyn_McDermott@yahoo.com",
  "Randy_Crona@yahoo.com",
  "Yasmine_Kunze23@gmail.com",
  "Darryl_Blick@yahoo.com",
  "Bertram_Torp63@gmail.com",
  "Susan_Jast54@gmail.com",
  "Vickie_Jones@yahoo.com",
  "Bonnie.Harvey@gmail.com",
  "Antonina.Dach@yahoo.com",
  "Russel9@yahoo.com",
  "Ivah_Sporer82@gmail.com",
  "Thea_Brakus85@yahoo.com",
  "Finn_Heller41@gmail.com",
  "Rylee.Stark@yahoo.com",
  "Jace12@gmail.com",
  "Edward.Bernhard@gmail.com",
  "Sally12@yahoo.com",
  "Onie.Durgan98@gmail.com",
  "Braxton.Roob@yahoo.com",
  "Harry_Schulist67@gmail.com",
  "Madilyn_Walter@gmail.com",
  "Jaida27@yahoo.com",
  "Rey_Wolf74@gmail.com",
  "Jaquelin16@yahoo.com",
  "Lessie.Lemke@gmail.com",
  "Sheridan_Renner86@yahoo.com",
  "Ron_Frami36@yahoo.com",
  "Francisco.Hilll@gmail.com",
  "Ila87@gmail.com",
  "Jena54@yahoo.com",
  "Leonie20@yahoo.com",
  "Florida_Witting18@gmail.com",
  "Dana.Kerluke@yahoo.com",
  "Cornell.Green52@gmail.com",
  "Ruben_Weissnat31@yahoo.com",
  "Chance_Turner@yahoo.com",
  "Constance_Oberbrunner@yahoo.com",
  "Chet91@gmail.com",
  "Kayley.Torphy@yahoo.com",
  "Hazel_Goodwin@yahoo.com",
  "Alberta36@yahoo.com",
  "Zella_Larkin@gmail.com",
  "Esmeralda25@yahoo.com",
  "Emiliano_Hagenes@yahoo.com",
  "Fredy_Johnston-Pfeffer15@yahoo.com",
  "Frederick_Hagenes11@gmail.com",
  "Zackary_Mayer@gmail.com",
  "Heloise.Collier9@gmail.com",
  "Ashly75@gmail.com",
  "Florencio.Wintheiser62@yahoo.com",
  "Carlie.Kunze-Hamill@gmail.com",
  "Eden10@gmail.com",
  "Kirstin.Williamson@gmail.com",
  "Torrance.Morissette@yahoo.com",
  "Kristoffer.Kirlin73@yahoo.com",
  "Mozelle.Smith@gmail.com",
  "Jacklyn.Heidenreich94@yahoo.com",
  "Abe39@gmail.com",
  "Nelda_White65@yahoo.com",
  "Demarcus77@yahoo.com",
  "Dejon30@yahoo.com",
  "Austen.Schamberger1@gmail.com",
  "Nicolas.Leannon53@gmail.com",
  "Elliott.Schneider@gmail.com",
  "Leon_Effertz58@gmail.com",
  "Weston_Grant51@yahoo.com",
  "Miracle35@yahoo.com",
  "Cleta_Lowe15@yahoo.com",
  "Tyson_Will@gmail.com",
  "Gideon_Pfannerstill43@gmail.com",
  "Maeve52@yahoo.com",
  "Chanel78@gmail.com",
  "Kirsten82@gmail.com",
  "Casimir.Dibbert23@yahoo.com",
  "Joshua_Bogisich@yahoo.com",
  "Lilian.Stiedemann-Runolfsdottir@yahoo.com",
  "Deon72@yahoo.com",
  "Aleen_Kihn-Crona0@yahoo.com",
  "Chase.Dach@yahoo.com",
  "Leopold_Haley@gmail.com",
  "Lonzo_Ratke@yahoo.com",
  "Marisa_Batz-Schneider42@gmail.com",
  "Adolphus_Mitchell22@yahoo.com",
  "Timmothy.Abernathy76@yahoo.com",
  "Erwin6@yahoo.com",
  "Zoe4@yahoo.com",
  "Hans_Hodkiewicz@yahoo.com",
  "Lucious.Bruen@yahoo.com",
  "Timmothy_Sauer77@yahoo.com",
  "Aliyah.Schamberger@gmail.com",
  "Addie98@yahoo.com",
  "Nettie.Langosh@gmail.com",
  "Winston_Witting@gmail.com",
  "Kristian.Heller-Botsford44@gmail.com",
  "Eleanora_Gutkowski58@yahoo.com",
  "Mina41@yahoo.com",
  "Roxanne_Ruecker96@gmail.com",
  "Shaun_Barton@yahoo.com",
  "Clark_Littel96@gmail.com",
  "Jeanie39@gmail.com",
  "Cristian92@gmail.com",
  "Angie94@yahoo.com",
  "Gudrun15@gmail.com",
  "Xavier88@yahoo.com",
  "Rene.Bode95@yahoo.com",
  "Raphael.Moore@yahoo.com",
  "Shanel.Boyer98@gmail.com",
  "Julius.Kub@gmail.com",
  "Barney_Jerde11@gmail.com",
  "Korey_Watsica4@yahoo.com",
  "Jerod_McLaughlin@gmail.com",
  "Ashley_Boehm91@gmail.com",
  "Garrison.Keebler@yahoo.com",
  "Kristina_Wintheiser@yahoo.com",
  "Cristian_Huels98@yahoo.com",
  "Rubie_Hettinger@gmail.com",
  "Lowell57@yahoo.com",
  "Sigrid.Marquardt@gmail.com",
  "Dayana12@gmail.com",
  "Freida.Rodriguez@yahoo.com",
  "Luz_Klocko@yahoo.com",
  "Shannon20@gmail.com",
  "Johanna_Dickinson@gmail.com",
  "Marcellus.Dicki@gmail.com",
  "Ford8@gmail.com",
  "Tess85@gmail.com",
  "Karlie_Bashirian26@gmail.com",
  "General63@gmail.com",
  "Fletcher_OConnell90@gmail.com",
  "Sophia_Quitzon@yahoo.com",
  "Abigale.OKeefe@gmail.com",
  "Aiden13@yahoo.com",
  "Ruthie55@gmail.com",
  "Stan25@gmail.com",
  "Emmett.Hessel47@yahoo.com",
  "Rubye_Metz65@yahoo.com",
  "Geovanni_Sauer35@yahoo.com",
  "Aurelio2@yahoo.com",
  "Malachi_Brekke97@yahoo.com",
  "Alford50@gmail.com",
  "Hermann.McCullough-Sawayn91@gmail.com",
  "Jairo.Ondricka8@yahoo.com",
  "Beulah.Dicki-Runte80@gmail.com",
  "Hermann6@yahoo.com",
  "Devyn76@gmail.com",
  "Shannon66@gmail.com",
  "Easter93@yahoo.com",
  "Dora55@yahoo.com",
  "Emile.Hessel52@gmail.com",
  "Jacklyn_Kuhn71@yahoo.com",
  "Theron.Schamberger@gmail.com",
  "Katharina_Herzog57@yahoo.com",
  "Delilah.Conn@yahoo.com",
  "Margarette.Kohler88@yahoo.com",
  "Jarrell.Pfannerstill@yahoo.com",
  "Sam.Conn41@yahoo.com",
  "Cullen_Flatley60@gmail.com",
  "Mittie15@gmail.com",
  "Pete_Koepp24@gmail.com",
  "Citlalli.Lynch@gmail.com",
  "Teagan.Hand@yahoo.com",
  "Estel.Romaguera14@gmail.com",
  "Frankie_Dickinson7@gmail.com",
  "Mya.Towne31@yahoo.com",
  "Newell.Rogahn@yahoo.com",
  "Tessie_Kautzer@yahoo.com",
  "Jeremy_Buckridge@yahoo.com",
  "Ed_Skiles37@yahoo.com",
  "Aurelio_Daniel@yahoo.com",
  "Eleonore.Mills54@gmail.com",
  "Madisen64@gmail.com",
  "Destin_Senger59@gmail.com",
  "Alberto_Weimann@gmail.com",
  "Phyllis_Hilpert@gmail.com",
  "Annabelle_Stark@yahoo.com",
  "Jedidiah.Wiegand@yahoo.com",
  "Maurice.Kuhlman@yahoo.com",
  "Araceli38@gmail.com",
  "Gerardo.Greenfelder85@yahoo.com",
  "Maxie.Raynor@gmail.com",
  "Emily15@gmail.com",
  "Cole_Upton36@gmail.com",
  "Dayton.Anderson@gmail.com",
  "Rose.Dach@yahoo.com",
  "Jamey44@yahoo.com",
  "Angelina_Bogisich@gmail.com",
  "Kobe_Jenkins81@yahoo.com",
  "Maximilian_Pacocha@gmail.com",
  "Kurtis.Bashirian93@yahoo.com",
  "Moriah.Bergnaum@gmail.com",
  "Liza79@yahoo.com",
  "Aliza95@yahoo.com",
  "Wyatt_Kutch44@gmail.com",
  "Eloisa_Franecki@gmail.com",
  "Joesph.Kunde@yahoo.com",
  "Devin.Willms0@gmail.com",
  "Grant23@yahoo.com",
  "Abner_Kling34@gmail.com",
  "Clinton55@yahoo.com",
  "Suzanne_Reinger78@yahoo.com",
  "Hilton.Kuphal50@gmail.com",
  "Daryl.Glover13@gmail.com",
  "Lynn_Auer89@yahoo.com",
  "Nellie.Lindgren32@gmail.com",
  "Dedric_Considine23@yahoo.com",
  "Odie.Mayert76@yahoo.com",
  "Gerardo.Frami1@yahoo.com",
  "Ines.Bartell@gmail.com",
  "Nikita27@yahoo.com",
  "Anne.Smith@yahoo.com",
  "Amber_Paucek82@yahoo.com",
  "Dino69@yahoo.com",
  "Geovany_Balistreri-Schaden@yahoo.com",
  "Dakota.Cassin@gmail.com",
  "Avis7@yahoo.com",
  "Robbie_Auer91@yahoo.com",
  "Raymond29@gmail.com",
  "Meggie.Grimes@yahoo.com",
  "Dayana_Schulist@yahoo.com",
  "Mozelle52@gmail.com",
  "Llewellyn_Baumbach61@yahoo.com",
  "Hildegard_Roob95@yahoo.com",
  "Sebastian.Gislason1@gmail.com",
  "Jennifer.Schinner@gmail.com",
  "Freeman_Leffler87@yahoo.com",
  "Randy32@gmail.com",
  "Linnea60@gmail.com",
  "Francisco3@yahoo.com",
  "Arnold53@gmail.com",
  "Douglas_Parisian@gmail.com",
  "Delmer_Kuvalis@gmail.com",
  "Ayana.Satterfield70@gmail.com",
  "Florine.Wisozk@gmail.com",
  "Emely48@gmail.com",
  "Mona6@gmail.com",
  "Lauryn_Fadel84@gmail.com",
  "Gabriel.Collier-Gutkowski99@gmail.com",
  "Jacinto.Willms43@gmail.com",
  "Horacio25@yahoo.com",
  "Birdie46@gmail.com",
  "Erwin42@gmail.com",
  "Elinore.Wisoky20@gmail.com",
  "Alvah_Hegmann90@gmail.com",
  "Blaze62@yahoo.com",
  "Jalyn.Hilll67@yahoo.com",
  "Norwood.Greenfelder69@yahoo.com",
  "Audreanne.DAmore@gmail.com",
  "Ruthie.Miller@yahoo.com",
  "Herminia75@yahoo.com",
  "Norval.Purdy6@yahoo.com",
  "Riley.Witting@gmail.com",
  "Dana71@yahoo.com",
  "Mustafa_Reinger@gmail.com",
  "Karlee_Kemmer@yahoo.com",
  "Loyal.Becker@gmail.com",
  "Gisselle41@yahoo.com",
  "Timmy_Botsford79@yahoo.com",
  "Jaylan49@yahoo.com",
  "Gabe48@yahoo.com",
  "Maverick36@gmail.com",
  "Arden.Effertz@yahoo.com",
  "Kyla_Corkery@gmail.com",
  "Marcelo32@gmail.com",
  "Palma77@yahoo.com",
  "Madilyn58@gmail.com",
  "Justice_Marks@yahoo.com",
  "Orville_Huels23@gmail.com",
  "Janice57@yahoo.com",
  "Jena_Reichel50@yahoo.com",
  "Hollie_Weissnat2@yahoo.com",
  "Elisha_Price@yahoo.com",
  "Bethel83@yahoo.com",
  "Ollie53@yahoo.com",
  "Scarlett_Bauch@gmail.com",
  "Darrion.Auer@gmail.com",
  "Antonetta4@yahoo.com",
  "Bianka.Howe42@yahoo.com",
  "Ayla4@yahoo.com",
  "Viola.Hackett8@gmail.com",
  "Zora54@gmail.com",
  "Abigail73@gmail.com",
  "Bryce_Gerhold@yahoo.com",
  "Katharina39@gmail.com",
  "David_Corkery16@gmail.com",
  "Warren_Jenkins12@yahoo.com",
  "Ernest_Nikolaus28@yahoo.com",
  "Everardo61@gmail.com",
  "Lupe.Davis87@yahoo.com",
  "Mekhi5@yahoo.com",
  "Kane_Bechtelar91@gmail.com",
  "Cordell_Nienow34@yahoo.com"
];

// let q7GmailCount = 0;

// let q7YahooCount = 0;


// for(let i = 0; i < q7Emails.length; i++){

//     let q7CurrentEmail = q7Emails[i];


//     if(q7CurrentEmail.includes("@gmail.com")){

//         q7GmailCount++;

//     }


//     if(q7CurrentEmail.includes("@yahoo.com")){

//         q7YahooCount++;

//     }

// }


// console.log(q7GmailCount);

// console.log(q7YahooCount);



///////////////////////////////////////////////
// Q8 
// let q8Usernames = [];


// for(let i = 0; i < q7Emails.length; i++){

//     let q8CurrentEmail = q7Emails[i];


//     let q8AtPosition = q8CurrentEmail.indexOf("@");


//     let q8Username = q8CurrentEmail.slice(0, q8AtPosition);


//     q8Usernames.push(q8Username);

// }


// console.log(q8Usernames);



///////////////////////////////////////////////
// Q9 
// let q9ShortestEmails = [];

// let q9ShortestLength = q7Emails[0].length;

// for(let i = 0; i < q7Emails.length; i++){


//     let q9CurrentEmail = q7Emails[i];


//     if(q9CurrentEmail.length < q9ShortestLength){


//         q9ShortestLength = q9CurrentEmail.length;


//         q9ShortestEmails = [];


//         q9ShortestEmails.push(q9CurrentEmail);


//     }


//     else if(q9CurrentEmail.length === q9ShortestLength){


//         q9ShortestEmails.push(q9CurrentEmail);


//     }


// }

// console.log(q9ShortestEmails);



////////////////////////////////////////////////
// Q10
// let q10ResultEmails=[];

// for(let i=0;i<q7Emails.length;i++){

// let q10Email=q7Emails[i];

// if(q10Email.includes("@gmail.com")){

// let q10HasNumber=false;

// for(let j=0;j<q10Email.length;j++){

// let q10Char=q10Email[j];

// if(q10Char>="0"&&q10Char<="9")q10HasNumber=true;

// }

// if(!q10HasNumber)q10ResultEmails.push(q10Email);

// }

// }

// console.log(q10ResultEmails);