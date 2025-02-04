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
var Os;
(function (Os) {
    Os["Window"] = "win";
    Os["Ios"] = "ios";
    Os["Android"] = "and";
})(Os || (Os = {}));
var myOs;
myOs = Os.Window;
// null, undefined
var a3 = null;
var b3 = undefined;
