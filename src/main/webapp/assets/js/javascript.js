/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global students */

console.log("ExternalJS");

function studentObject()
{

    var students = [new Student4(1, "Jess", 20, true), new Student4(2, "Jim", 16, false), new Student4(3, "Jarl", 25, false)];
    var minAge;

    this.getYoungest = function ()
    {
        minAge = students[0].getAge();
        for (var i in students)
        {
            if (students[i].getAge() > minAge)
            {
                minAge = students[i].getAge();
            }
        }

        return minAge;
    };

};

for (var i in message)
{
    console.log(message[i].toString());
}


function Student3(id, name)
{
    this.studentId = id;
    this.studentName = name;
    this.toString = function ()
    {
        return this.studentId + this.studentName;
    };

}

function Student4(id, name, age, isFemale)
{
    this.studentId = id;
    this.studentName = name;
    this.studentName = age;
    this.studentName = isFemale;
    this.toString = function ()
    {
        return this.studentId + this.studentName;
    };

    this.getAge = function ()
    {
        return this.age;
    };

    this.getFemale = function ()
    {
        return this.isFemale;
    };
}

function Student(name, age, isFemale)
{
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;

    this.MyAge = function () {
        return this.age;
    };

    this.IsFemale = function () {
        return this.isFemale;
    };

    this.MyName = function () {
        return this.name;
    };
}

var myArray = [];

myArray[0] = new Student("John", 21, false);
myArray[1] = new Student("Jess", 18, true);
myArray[2] = new Student("Joy", 25, true);
myArray[3] = new Student("Janet", 35, true);
myArray[4] = new Student("Jan", 40, true);
myArray[5] = new Student("Joe", 145, true);

function  GetYoungest(students)
{
    var minAge = students[0].MyAge();
    var name;
    for (var i = 0; i < students.length; i++)
    {
        if (minAge > students[i].MyAge())
        {
            minAge = students[i].MyAge();
            name = students[i].MyName();
        }
    }
    return "The youngest student: " + name + " is " + minAge + " years old.";
}

function Above30(students)
{

    if (30 <= students.MyAge())
    {
        console.log("This student is above 30: " + students.MyName());
    }

}

function  GetFemaleStudents(students)
{
    var studentString = "";
    for (var i = 0; i < students.length; i++)
    {
        if (students[i].IsFemale())
        {
            studentString += students[i].MyName();
            studentString += " is an actual female human.\n";
        }
    }
    return studentString;
}

function RemoveStudent(students, Student)
{
    for (var i = 0; i < students.length; i++)
    {
        if (students[i] === Student)
        {
            students.splice(i, 1);
        }
    }
    return students;
}

function max() {
    var oldArg = arguments[0];
    for (var i = 0; i < arguments.length; i++)
    {
        if (arguments[i] > oldArg)
        {
            oldArg = arguments[i];
        }
    }

    return oldArg;
}

function GetDay()
{
    var day = new Date();
    var weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[day.getDay()];
    return n;
}

message = [true, false];
console.log(typeof message);

var weirdObject = new studentObject();
console.log(weirdObject.getYoungest() + "asasdasd");

var variabel = "asdasd";
console.log(variabel);
console.log(typeof variabel);

variabel = 1;
console.log(variabel);
console.log(typeof variabel);

variabel = true;
console.log(variabel);
console.log(typeof variabel);

var message;
console.log(typeof message);

message = "Hello";
console.log(typeof message);

message = 55;
console.log(typeof message);

message = true;
console.log(typeof message);

message = ["first index", "second index"];
console.log(typeof message);

message = [1, 2];
console.log(typeof message);

message[0] = new Student3(1, "John");

message[1] = new Student3(2, "Arne");

message[2] = new Student3(3, "Dood");

console.log(typeof message);

console.log(GetYoungest(myArray));  // 4

console.log(GetFemaleStudents(myArray)); // 4

console.log(myArray.length); // 5

console.log(RemoveStudent(myArray, myArray[1]).length); // 5

myArray.forEach(Above30);

console.log(max(1, 5, 3, 788, 4, 432, 54, 12, 6, 8, 4, 9001)); // 7

console.log(GetDay()); // 8