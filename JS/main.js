/*
console.log("Hello world");
console.log("This is a test JavaScript file.");
*/
//string,number,boolean,object,array

/*
let fname = "John"; //String
console.log("Name:", fname);
const PI = 3.14;

let age = 20; //number
let height = 170;//number

fname = "Alice";
console.log("Name:", fname);

fname = "Bob";
PI = 3145278;
console.log("Name:", fname);
console.log("Age:", age);
console.log("Height:", height);

/**
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
*/

let number1 = '10';
let number2 = '3';

let result1 = number1 + number2;
console.log("ผลบวก =", result1);

let number3 = 23;
let number4 = 21;
let condition = number3 <= number4; //Boolean ค่าความจริง

//if - else condition
let number5 = 5;
let number6 = 3;

if (number5 >= number6)
{
    console.log("number5 is greater than or equal to number6");
}
else if (number5 == number6)
{
    console.log("this is else if")
}
else
{
    console.log("this is else")
}

/**
Grade
>= 80 Grade A
>= 70 Grade B
>= 60 Grade C
>= 50 Grade D
<50 Grade F
*/

// Score 75 = Grade?
let score = prompt("Input Score: ") // แบบรับค่าจาก Keybroad
if (score >= 80)
{
    console.log("Grade A")
}
else if (score >= 70)
{
    console.log("Grade B")
}
else if (score >= 60)
{
    console.log("Grade C")
}
else if (score >= 50)
{
    console.log("Grade D")
}
else 
{
    console.log("Grade F")
}

/**
&& และ
|| หรือ
! Not ไม่
*/

let number7 = 5
let number8 = 10

let condition1 = (number7 > 0) && (number8 > 0) //True && True = True
console.log("Condition1:",condition1)

/**
สามารถใช้ && || ! ใน if ได้
*/

let age = 25
let gender = "female"
if (age >= 18 && gender == "female")
{
    console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
}

let number9 = 20

if (number9 % 2 == 0)
{
    console.log("เลขคู่")
}
else
{
    console.log("เลขคี่")
}

/**
while 
for 
*/

let counter = 0;
while (counter <= 4) // True
{
    counter += 1
    console.log("While",counter)
}

for (let i = 0; i <= 4; i++)
{
    console.log("For",i)
}