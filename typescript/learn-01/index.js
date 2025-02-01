/***************************************************************************************************
 * TypeScript - 코딩앙마 실습
 * 출처 : https://www.youtube.com/watch?v=5oGAkQsGWkc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0
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
