// arrow function(화살표 함수)
// 브라우저에서 테스트 할 수 있는 API이다.
// setTimeout
// setTimeout(function () {
//     console.log("화살표 함수입니다.");
//  }, 1000);

// 이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 작성해보자.
// setTimeout(() => {
//     console.log("화살표 함수입니다.");
// }, 1000);

// 일반적인 함수
// const simpleFunc = function () {
//     console.log('simple function');
// }
// simpleFunc();

// 화살표 함수는 anonymous 함수이다.
// 아규먼트가 없는 화살표 함수
// const simpleFunc2 = () => console.log("simple2");
// simpleFunc2();

// 아규먼트가 있는 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const add1 = function (a, b) {
//     return a + b;
// }
// console.log(add1(1, 2));

// Default 파라
// function showMessage(message, from="IU") {
//     console.log(`${message} by ${from}`);
// }
// console.log(showMessage('안녕~~~~'));

// if문
/**
 * if(조건식) {
 *      조건식이 참일 경우 실행되는 부분
 * } else {
 *      조건식이 거짓일 경우 실행되는 부분
 * }
 * 
 * if(조건식 A) {
 *      A 조건식이 참일 경우 실행되는 부분
 * } else if(조건식 B){
 *      B 조건식이 거짓일 경우 실행되는 부분
 * } else {
 *      A,B 조건식을 만족하지 않는 경우
 * }
 */

/**
 * 반복문 for문
 * 기준값이 존재하고, 일정한 증감값이 있을 경우 사용한다.
 * for(let i = 0; i < length; i++) {
 *      i = 0 부터 length보다 하나 작을 때까지 반복
 * }
 */

/**
 * 반복문 while()
 * 
 * while(조건식) {
 *      조건식이 참일 경우에만 이 문장을 반복한다.
 * }
 */

/**
 * 반복문 do ~ while()
 * do {
 *      한번은 무조건 실행하고 두번째 부터 조건식이 맞나 확인.
 * } while (조건식);
 */

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest 파라미터는 배열 형태로 값을 전달한다.
 */
// function printArr(...args) {
//     for (const arg of args) {
//         console.log(arg);
//     }
// };
// printArr('javascript', 'java', 'spring');