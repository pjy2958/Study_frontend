/**
 * 예외처리
 * try ~ catch finally throw new
 */
/**
 * try {
 *   예외가 발생할 수 있는 코드
 * }catch(exception){
 *   예외가 발생했을 때 처리하는 부분
 * }finally{
 *   try, catch 안에 있는 내용이 다 실행되고 나서도 반드시 실행되는 부분
 * }
 */

// 여러개의 예외가 발생했을때 처리하는 방법
// try {
//     // 예외가 발생할 수 있는 코드
// } catch (e) {
//     if (e instanceof TypeError) {
//         // TypeError 발생시 처리할 내용을 작성
//     } else if (e instanceof ReferenceError) {
//         // ReferenceError 발생시 처리할 내용을 작성
//     } else {
//         // 그 밖의 예외를 처리
//     }
// }

// function permutation(a) {
//     if (!(a instanceof Array)) {
//         throw new Error(a + " is not an array");
//     }
// }

// try {
//     permutation("ABC");
// } catch (e) {
//     if (!(e instanceof TypeError)) {
//         console.log("Type Error");
//     } else if (!(e instanceof ReferenceError)) {
//         console.log("Reference Error");
//     } else {
//         console.log("another Error");
//     }
// }

// function showPrint() {
//     try {
//         permutation1("ABC");
//     } catch (e) {
//         console.log("배열이 아니네요." + e)
//     }
// }

// let str = "hello world ~~^^";
// let matchStr = "hello";

// // 시작이 machStr과 같은 문자열이 있는가?
// console.log(str.startsWith(matchStr));
// // 끝이 matchStr과 일치하는 문자열이 있는가?
// console.log(str.endsWith(matchStr));
// // '^'문자열이 포함이 되어 있는가?
// console.log(" include set   ", str.includes("^"));

// early return, early exit
// function updateCheck(user) {
//     // 게임을 사용하는 유저의 프로그램 버전이 3보다 작으면, 빠져나가게 한다.
//     if (user.version < 3) {
//         return; // 함수를 종료하고 빠져나간다.
//     }
//     return;
// }

/**
 * async await 이해하기
 * - async함수는 ex8(ecmascript 2017)에서 도입되었다.
 * - async함수는 함수안의 await 구문과 함께 비동기 작업을 제어한다.
 * - await키워드는 반드시 async 함수 안에서만 유효하다.
 * 
 * async 함수의 동작방식
 * - 처음 async 함수가 호출되어 await 키워드가 없는 비동기 작업(Promise)이 실행되면, 해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
 * - 그동안 async 함수는 이런 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업(resolve)을 기다린다.
 * - 이 작업이 완료되면 async 함수가 다시 실행되고 함수 결과를 반환한다.
 * 
 * async 함수를 선언하는 방법
 * - async 함수 선언문(async function)과 표현식(async function expression)이 있다.
 * - async 함수 선언문과 표현식은 함수에서 사용하는 선언문/표현식과 같다.
 * - 다만, async 함수는 function 선언 앞에 async 키워드가 붙는다.
 */

function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                resolve({
                    result: `${name} success`
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
}

const hj = { stamina: 500 };
const execute = async function () {
    try {
        let v = await doJob("work", hj)
        console.log(v.result);
        v = await doJob("study", hj)
        console.log(v.result);
        v = await doJob("work", hj)
        console.log(v.result);
        v = await doJob("study", hj)
        console.log(v.result);
    } catch (error) {
        console.log(error);
    }
}

execute();







