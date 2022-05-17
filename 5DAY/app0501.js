/**
 * 행위와 속성을 나타내는 형태의 객체
 * javascript는 정의를 한 후에 반드시 호출해야 실행이 된다.
 */

const coffee = {
    type: "라떼",
    price: 5500,
    makecoffee: function () {
        console.log(this.type + "//" + this.price);
    }
}
coffee.makecoffee();