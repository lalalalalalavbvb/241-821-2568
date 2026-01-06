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

/* ***************
    วันที่ 6/01/2569 
   *************** */

/*
Array
*/

let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1, age2, age3); // 25 30 35

let ages = [25, 30, 35]
console.log(ages); //[25, 30, 35]
console.log(ages[1]); //[25, 30, 35] index ที่ 1

//แทนที่ค่าใน Array
ages = [40, 45, 50];
console.log(ages); //[40, 45, 50]

// ต่อ Array
ages.push(55)
console.log(ages); //[40, 45, 50, 55]

// ความยาวของ Array
console.log(ages.length); // ความยาว 4

// ลบสมาชิกตัวสุดท้ายของ Array
ages.pop();
console.log(ages); //[40, 45, 50]

// ใช้กับ if ได้
if (ages.includes(45)) // True
{
    console.log("พบ 45 ใน Array"); // พบ 45 ใน Array
}

// เรียงข้อมูลจากน้อยไปหามาก
let numbers = [90, 60, 80, 40, 50];
numbers.sort();
console.log(numbers); // [40,50, 60, 80, 90]

// Array เป็นคำก็ได้
let names = ["John", "Jane", "Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

// Loop เอาค่าใน Array ออกมา
for (let i =0; i< names.length; i++) //ถ้า Index ไม่มีอยู่จริงมันจะขึ้น undefined
{
    console.log(names[i]);
}

/*
Object (ใช้เก็บประเภทของข้อมูลหลายๆประเภท)
*/

let student =
[{
    age4 : 20,
    name1 : "Emma",
    grade : 'A'
},
{
    age4 : 22,
    name1 : "Liam",
    grade : 'B'
}];

student.pop();

for (let i = 0; i < student.length; i++)
{
    console.log("Student " + (i+1) + ":")
    console.log("Name: " + student[i].name1);
    console.log("Age: " + student[i].age4);
    console.log("Grade: " + student[i].grade);
}

student.push
({
    age4 : 21,
    name1 : "Olivia",
    grade : 'A'
});
console.log(student);

/*
Function
*/

// ประกาศฟังก์ชัน
function calculate_grade(score1)
{
    if (score1 >= 90)
    {
        grade1 = 'A'; // หรือ return 'A'; ก็ได้
    }
    else if (score >= 80)
    {
        grade1 = 'B';
    }
    else if (score >= 70)
    {
        grade1 = 'C';
    }
    else if (score >= 60)
    {
        grade1 = 'D';
    }
    else
    {
        grade1 = 'F';
    }
    return grade1;
}
//เรียกใช้ฟังก์ชัน
let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student's grade is: " + student_grade);

/*
Array + Function
*/

let score2 = [10, 20, 30, 40, 50];
for (let i = 0; i < score2.length; i++)
{
    // console.log('Score at index ' + i + ' is ' + score2[i]);
    console.log(`Score at index ${i} is ${score2[i]}`); // วิธีใช้อีกอย่าง
}

// Loop Array อีกแบบ
score2.forEach((s) => // คือตัวแปรที่วนไปเก็บค่า
{
    console.log('score2',s)
})

// อีกวิธีในการเข้าถึง Index ทุกๆตัว
score2[0] = score2[0] * 2

score2.forEach((s) =>
{
    console.log('new score2: ',s)
})

// อีกวิธีในการเข้าถึง Index ทุกๆตัว
score2 = score2.map((s) =>
{
    return s * 2
})

// การดึง Array เข้าไปใส่ใน Array ว่าง (เช็คเงื่อนไขด้วย) ! อาจจะออกสอบ !
let score3 = [10, 20, 30, 40, 50];

let newScore = []

for (let index = 0; index < score3.length; index++)
{
    console.log('score',score3[index])
    if (score3[index] >= 30)
    {
        newScore.push(score3[index]) // Copy Array ไปใส่ใน newScore
    }
}

console.log('newScore: ',newScore)

newScore.forEach((ns) =>
{
    console.log('new score: ',ns)
})

// การใช้ .filter เพื่อไป filter ใน Array เอามาแสดง
let newScore1 = score3.filter((s) => 
{
    if (s >= 30)
    {
        return true
    }
    else
    {
        return false
    }
})

/* หรือ
let newScore1 = score3.filter((s) => 
{
    return s >= 30
})
*/

/*
Object + Function
*/

let student1 = 
[
    {
        name2 : 'aa',
        score4 : '50',
        grade2 : 'A'
    },
    {
        name2 : 'bb',
        score4 : '60',
        grade2 : 'B'
    }
]

console.log('Student ; ',student1[0])

let student2 = student1.find((s) =>
{
    if (s.name2 == 'bb')
    {
        return true
    }
})

let doublescore_student = student1.map((s) =>
{
    s.score4 = s.score4 * 2
    return s
})

console.log('Student: ',student2)
console.log(doublescore_student)

// หาคะแนนสูงสุด
let highScore_student = student1.filter((s) =>
{
    if (s.score4 >= 110)
    {
        return true
    }
})

console.log('highScore_student ',highScore_student)