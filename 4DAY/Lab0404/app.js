/* 
    JavaScript
    - 웹에서 동적으로 데이터나 DOM을 조작하기 위한 언어
    - 웹에서 사용하는 클라이언트(WebBrowser) 및 서버(Node.js)용 언어이다.

    JavaScript
    - 현재는 JavaScript library나 framework와 함께 사용한다.
    - Javascript(VanillaJS)
    - Agular(google) - React.js(Meta, facebook) - Vue.js(EvanYou) - Typescript - Svelte
    - jQuery : Java - SpringFrameWork같은 거랑 비슷함(역할상)
    -          Javascript가 해야할 많은 내용을 간단하게 사용할 수 있도록 구현된 library
*/

// javascript에서 일반적으로 말하는 객체
// javascript에서 중요한 것은 객체를 구성하는 모양

// 아래와 같은 형태의 객체는 가장 일반적이면서 literal(값) 형태의 객체
// let coffee = {
//   tpye: "라떼",
//   price: 5500
// }
// console.log(coffee);

// 값을 변수에 대입해서 출력하는 방법
// let coffeeType = "라떼";
// let coffeePrice = "5500";
// console.log(coffeeType);
// console.log(coffeePrice);

// let coffee = {
//   type: "Americano",
//   price: 4000
// }

// console.log(coffee.type);
// console.log(coffee.price);
// console.log(coffee["type"]);
// console.log(coffee["price"]);

// literal 객체에 없는 속성을 가져올 경우
// console.log(coffee.name); // undefined

// 빈 객체를 선언 할 경우
// let obj = {};
// console.log(obj);

// 변수나 객체를 선언할 때 사용하는 선언자
// 1. let : 값을 다시 할당해도 되고, {}안에서만 값이 유용하다.(local variable)
// 2. const : 변하지 않는 상수 값을 정의할 때 사용한다. const로 선언한 변수에 값을 다시 할당하면 오류 발생.
//            ex) const PI = 3.14; const LOCAL_URL = "https://~~~~~";
// const coffee1 = {
//   tpye: "capuccino",
//   price: 6000
// }

// javascript를 사용할 때 맨 마지막 문장에는 ';'를 붙여준다.
// javascriptdptj ';'를 사용하지 않고 쓰기도 하는데 그럴 경우에는 맨 마지막 문장에서 엔터를 쳐서 작성
// 그러면 다음 문장으로 인식.

// 성능 때문에 javascript의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에 마지막에는 ';'을 붙여준다.
// console.log("하이~");

// javascript에서는 대소문자를 반드시 구분해야 한다.
// console.log("hi");
// Console.log("hi"); // -> error 발생