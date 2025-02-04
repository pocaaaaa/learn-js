/***************************************************************************************************
 * TypeScript - 코딩앙마 실습
 * 출처 : https://www.youtube.com/watch?v=5oGAkQsGWkc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0
 *
 * 명령어
 * tsc index.ts => ts 파일이 js 파일로 변환
 * node index.js => 컴파일된 자바스크립트 파일을 node로 실행
 ***************************************************************************************************/

function add(num1: number, num2: number) {
  console.log(num1 + num2);
}

//add();
//add(1);
add(1, 2);
//add(3, 4, 5);
//add("hello", "world");

function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3]);

let car: string = "bmw";
let car2 = "bmw"; // 타입추론 => let car2: string
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

//week1.push(3); -> error

// 튜플 (Tuple)
let b: [string, number];
b = ["z", 1];
//b = [1, 'z'];

b[0].toLowerCase();
//b[1].toLowerCase(); -> error

// void, never
function sayHello(): void {}

function sgiwError(): never {
  throw new Error();
}

function infLoop() {
  while (true) {
    // do something
  }
}

// enum : 비슷한 값끼리 묶은 것
enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

let myOs: Os;
myOs = Os.Window;

// null, undefined
let a3: null = null;
let b3: undefined = undefined;
