// 배열(Array)
/**
 * 여러개의 값을 나열해서 저장해 놓은 것
 * 저장된 데이터에 index가 부여되어 인덱스로 접근한다.
 */
// 배열은 참조 타입
// const arr = [2, 4, 6, 8];
// const arr1 = ["2", "4", "6", "8"];

// if (arr[0] == arr1[0])
//     console.log("hi");

// 빈 배열 선언
// const empty = [];
// console.log(empty);

// 배열 요소중에서 일부를 생략하면 그 요소는 생성되지 않는다.
// const arrRst = [2, , 4];
// console.log(arrRst);

// // 배열 값에는 기본타입, 참조타입 어떤 타입이라도 올 수 있다.
// const arrData = [3.14, "pi", { x: 1, y: 2 }, [2, 3, 4, 5]];

// // 배열의 length 프로퍼티는 요소의 개수를 리턴한다.
// console.log(arrData.length);

// 배열의 length 프로퍼티에 현재 배열들의 갯수보다 작고 0보다 큰 정수 값을 넣으면 배열의 길이가 줄어든다.
// const arrLength = ["A", "B", "C", "D"];
// console.log(arrLength.length);
// arrLength.length = 2;
// console.log(arrLength);

// 없는 배열 요소에 값을 대입하면 새로운 요소가 추가된다.
// const arr3 = ["A", "B", "C"];
// arr3[3] = "d"
// console.log(arr3);

// push 메소드를 사용하면 요소를 배열 끝에 추가할 수 있다.
// const arr4 = [];
// arr4.push("1");
// arr4.push("2");
// arr4.push("3");
// console.log(arr4);

// deleete 연산자를 사용해서 특정 배열 요소를 삭제할 수 있다.
// const arr4 = ["A", "B", "c", "D"];
// delete arr4[1];
// console.log(arr4);
// console.log(arr4.length);

// const와 immutable array 확인해 보기
// function fruit() {
//     const list = ["apple", "orange", "watermelon"];
//     list = "podo";
// }
// fruit();

// const로 정한 배열값에 값을 추가하기
// function fruit2() {
//     const list = ["apple", "orange", "watermelon"];
//     console.log(list);
//     list.push("podo");
//     console.log(list);
// }
// fruit2();

// const list3 = ["apple", "orange", "watermelon"];
// list4 = [].concat(list3, "banana");
// console.log(list4);

// 값도 같고, 타입도 같아서 아주 완벽하게 똑같을때 비교하는 것은 ===(동치) 이다.
// console.log(list3 === list4);

// ##javascript에서 값을 비교해보기 
// ## ==은 값만 같으면, === 값과 타입이 모두 같을때
// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(1=="1");           // true
// console.log("0xff"==255);      // true
// console.log(true==1);          // true
// console.log(true=="1");        // true
// console.log((new String("a")) == "a"); // true
// console.log((new Number(2)) == 2 );    // true
// console.log([2]==2);                  // true
// console.log(isNaN("NaN")); // true
// console.log(isNaN("NAN")); // true
// console.log(isNaN(NaN));   // true
// console.log(NaN===NaN);    // false
// console.log(null===undefined); // false
// console.log(1==="1");          // false
// console.log("0xff"===255);     // false
// console.log(true===1);         // false
// console.log(true==="1");       // false
// console.log((new String("a"))==="a"); // false
// console.log(new Number(2)===2);       // false
// console.log([2] === 2);   

// Destructuring : 비구조화 할당
// 변수에 필요한 값을 할당하는데 매우 유용한 방법
// let data = ["crong", "coffee", "bat"];

// 데이터를 가져오려면
// let data1 = data[0]
// let data2 = data[2]

// Destructuring은 이렇게 처리한다.
// let [data3, data4] = data;
// console.log(data3, data4);

// Destructuring object
// let obj = {
//     name: "bts",
//     address: "korea",
//     age: 20
// }
// let { name: myName, age: myAge } = obj;
// console.log(myName, myAge);

// var news = [
//     {
//         "title": "sbs",
//         "imgurl": "http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
//         "newslist":[
//              "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고 리캡차'가 사라진다.",
//              "갤럭시S8’ 출시? ‘갤노트7’ 처리 계획부터 밝혀야 블로코-삼성SDS, 블록체인 사업 ‘맞손’",
//              "[블록체인 모아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
//         ]
//     },
//     {
//         "title":"mbc",
//         "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
//         "newslist":[
//              "Lorem ipsum dolor sit amet, consectetur adipisicin",
//              "ipsum dolor sit amet, consectetur adipisicin",
//              "dolor sit amet, consectetur adipisicin",
//              "amet, consectetur adipisicin"
//         ]
//     }
// ];
// let  [sbs, mbc] = news;
// console.log(sbs);
// let { title, imgurl } = sbs;
// console.log(title, imgurl);

// 함수 호출하는 방법 추가
// obj.m();, 이 객체의 m프로퍼티 메소드
let obj = {};
obj.m = function () {
    console.log("함수 추가하기");
}
obj.m();