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
enum OS {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

let myOs: OS;
myOs = OS.Window;

// null, undefined
let a3: null = null;
let b3: undefined = undefined;

// Generic
// function getSize(arr: number[] | string[]): number {
//   return arr.length;
// }

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
//getSize<object>(arr4);
getSize(arr4);

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user7: User = { name: "a", age: 10 };
const car7: Car = { name: "bmw", color: "red" };
const book7: Book = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user7);
showName(car7);
//showName(book7); -> error

// keyof
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "id";

// Partial<T>
let admin: Partial<User> = {
  id: 1,
  name: "Bob",
  // job: "" -> error
};

// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }

// Required<T>
interface User2 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User2> = {
  id: 1,
  name: "Bob",
};

// Readonly
let admin3: Readonly<User2> = {
  id: 1,
  name: "Bob",
};

//admin3.id = 4;

// Record<K, T>
// interface Score {
//   "1": "A" | "B" | "C" | "D";
//   "2": "A" | "B" | "C" | "D";
//   "3": "A" | "B" | "C" | "D";
//   "4": "A" | "B" | "C" | "D";
// }

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";
const score: Record<Grade, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

// Pick<T, K>
const admin4: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

// Omit<T, K>
const admin5: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

// Exclude<T1, T2>
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type> -> Null, Undefined 제외
type T3 = string | null | undefined | void;
type T4 = NonNullable<T1>;
