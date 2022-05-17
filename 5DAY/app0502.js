// var hoisting test(var 호이스팅)
// 어디에 선언했던지 간에 최상위로 끌어올려서 실행한다.
// console.log(testVar); // undefined

// testVar = 2;
// var testVar;
// console.log(testVar); // 2

// var testVar;
// 아래서 선언이 되어있지 않고, 호출할 경우 오류발생
// console.log(testVar3);
// testVar3 = 10;

// console.log(testVar4);
// testVar4 = 10;
// var testVar4;

// {
//     let age = 20;
//     console.log("inner: " + age);
// }
// console.log("outter: " + age);
// {
//     age2 = 30;
//     var age2;
// }
// let age3 = 40;
// console.log(age2);