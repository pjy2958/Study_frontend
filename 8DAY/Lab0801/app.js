/**
 * closure(클로저)
 * - 함수가 정의될 곳의 렉시컬 환경을 기억하는 함수 (etc)
 * - 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 있는 방법 (나)
 * 용도
 * - 일반적으로 접근할 수 없는 것에 접근하는 효과
 * - 변수를 은닉하여 지속성을 보장할 수 있다.
 * - 자바스크립트의 모든 함수는 클로저(closure)를 정의할 수 있다.
 */

// function createCounterClosure() {
//     let count = 0;
//     return {
//         increase: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }
// const count1 = createCounterClosure();
// const count2 = createCounterClosure();

// count1.increase();
// count1.increase();
// console.log("counter1의 값: " + count1.getCount());
// console.log("counter2의 값: " + count2.getCount());

// function genelralFunc() {
//     let count = 0;
//     return count++;
// }

// console.log(genelralFunc());
// console.log(genelralFunc());


// closure 형태의 함수가 동작하는 방식
// 함수가 실행된 이후에도 값이 남아있어 외부에서 접근이 가능한 방법
// member field private 같은 형태로 
// function createCounterClosure() {
//     let count = 0;
//     return {
//         increase: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }
// const count1 = createCounterClosure();
// const count2 = createCounterClosure();

/**
 * Promise
 * - ES2015(es6)에서 비동기 처리를 하기위해 Promise 객체를 소개함
 * - Promise는 객체로서 언젠가 완료될 일을 나타낸다.
 * - 완료되면 하나의 값을 결과로 반환하는데 정상적인 결과를 반환할 수도 있고(resolve) 실패한 결과를 반환할 수도 있다.(reject)
 */

/**
 * Promise 객체는 다음과 같은 세가지 상태를 가진다.
 * - 1) 대기중(pendding) : 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * - 2) 이행됨(Fullfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이 때 결과로서 하나의 값이 전달됌.
 * - 3) 거부됨(rejected) : 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달.
 */

/**
 * Promise 객체는 두가지의 메소드를 가진다.
 * 1) then(onFullFilld, onReject)
 *      - 약속이 완료 됐을 때 호출될 함수를 정리
 *      - 이때 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을때 호출
 *      - 두번 째 인자로 전달된 함수는 거부됐을 때 호출
 *      - 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.
 * 2) catch(onReject)
 *      - 약속이 거부됐을 때 호출될 함수(onReject)를 등록한다.
 */

// function promiseForHomework(mustDo) {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             console.log("doing homework~~~~");
//             if (mustDo) {
//                 resole({
//                     result: "homework-result"
//                 });
//             } else {
//                 reject(new Error("Too lazy~!!"))
//             }
//         }, 3000);
//     });
// };

// const promiseA = promiseForHomework(true);
// const promiseB = promiseForHomework();
// console.log("PromiseA 출력완료!!");

// promiseA.then(v => console.log(v));
// promiseB.then(v => console.log(v)).catch(e => console.error(e));

// const getHen = () => new Promise((resolve, reject) => {
//     setTimeout(() => resolve("암탉"), 1000);
// });
// const getEgg = (hen) => new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000);
// });
// const cook = (egg) => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
// });

// getHen().then(hen => getEgg(hen)).then(egg => cook(egg)).then(meal => console.log(meal));
// getHen()
//     .then(getEgg)
//     .catch(error => {
//         return "빵";
//     })
//     .then(cook)
//     .then(console.log);
