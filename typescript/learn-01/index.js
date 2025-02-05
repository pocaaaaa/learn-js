/***************************************************************************************************
 * TypeScript - 코딩앙마 실습
 * 출처 : https://www.youtube.com/watch?v=5oGAkQsGWkc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0
 *
 * 명령어
 * tsc index.ts => ts 파일이 js 파일로 변환
 * node index.js => 컴파일된 자바스크립트 파일을 node로 실행
 ***************************************************************************************************/
function add(num1, num2) {
    console.log(num1 + num2);
}
//add();
//add(1);
add(1, 2);
//add(3, 4, 5);
//add("hello", "world");
function showItems(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
}
showItems([1, 2, 3]);
var car = "bmw";
var car2 = "bmw"; // 타입추론 => let car2: string
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ["mon", "tue", "wed"];
var week2 = ["mon", "tue", "wed"];
//week1.push(3); -> error
// 튜플 (Tuple)
var b;
b = ["z", 1];
//b = [1, 'z'];
b[0].toLowerCase();
//b[1].toLowerCase(); -> error
// void, never
function sayHello() { }
function sgiwError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something
    }
}
// enum : 비슷한 값끼리 묶은 것
var OS;
(function (OS) {
    OS["Window"] = "win";
    OS["Ios"] = "ios";
    OS["Android"] = "and";
})(OS || (OS = {}));
var myOs;
myOs = OS.Window;
// null, undefined
var a3 = null;
var b3 = undefined;
// Generic
// function getSize(arr: number[] | string[]): number {
//   return arr.length;
// }
function getSize(arr) {
    return arr.length;
}
var arr1 = [1, 2, 3];
getSize(arr1);
var arr2 = ["a", "b", "c"];
getSize(arr2);
var arr3 = [false, true, true];
getSize(arr3);
var arr4 = [{}, {}, { name: "Tim" }];
//getSize<object>(arr4);
getSize(arr4);
var m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};
var m2 = {
    name: "s20",
    price: 900,
    option: "good",
};
var user7 = { name: "a", age: 10 };
var car7 = { name: "bmw", color: "red" };
var book7 = { price: 3000 };
function showName(data) {
    return data.name;
}
showName(user7);
showName(car7);
var uk = "id";
// Partial<T>
var admin = {
    id: 1,
    name: "Bob",
    // job: "" -> error
};
var admin2 = {
    id: 1,
    name: "Bob",
};
// Readonly
var admin3 = {
    id: 1,
    name: "Bob",
};
var score = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};
// Pick<T, K>
var admin4 = {
    id: 0,
    name: "Bob",
};
// Omit<T, K>
var admin5 = {
    id: 0,
    name: "Bob",
};
