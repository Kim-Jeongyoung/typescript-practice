// 엄격히 타입 검사해 줌
// 타입 엄격히 체크해
// JavaScript는 Dynamic Typing 가능
console.log(5 - '3'); // 에러: 2 JS에서 실행했을 때
// 1. 간단한 변수 타입 지정 가능
var 꿈 = 'Front-end developer'; // 문자 타입만 들어 올 수 있다.
꿈 = 123; // 에러남
// 2. array 타입 지정
var 이름 = ['Kelly', 'JY']; // 이 변수엔 string이 담긴 array만 들어 올 수 있다.
// 3. 오브젝트 타입 지정
var flower = { name: 'rose' }; // 오브젝트의 소속에 string만 넣을 수 있다.
var flowers = { name: 'rose' };
var flower1 = {}; // name 속성은 옵션 즉 안 들어 올 수도 있다.
// 4. Union type : 다양한 타입이 들어올 수 있게 하려면
var 행복 = 123; // string이 가득한 어레이 또는 숫자
var 우리들 = [1, '2', '3'];
var 오브젝트 = { a: 123 };
var 즐거움 = 123;
// 6.함수에 타입 지정 parameter: number return value: number가 들어옴
function 함께(x) {
    return x * 2;
}
함께('123'); //에러
var 우리 = [123, true];
var 우리는 = { name: 'JY', age: '25' };
// 9. class 타입 지정
var User = /** @class */ (function () {
    function User(dream) {
        this.dream = dream;
    }
    return User;
}());
// 10. any 타입 => 타입 지정을 해제 하는 문법이라 생각/ 일반 JS 변수로
var 나무;
나무 = 123;
나무 = [];
// 11.unknown 타입 => 모든 자료형 허용해줌?
var 꽃;
꽃 = 123;
꽃 = [];
꽃 = {};
꽃 - 1; //에러 - 간단한 수학연산도 타입이 맞아야 함
// 12. Literal Type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
var JY;
var Kelly;
var jeongyoung;
jeongyoung = 'mom';
jeongyoung = 'dad'; // 에러
//// 함수의 경우
function fly(a) {
    return 'sky';
}
//// Literal type 문제점
var 자료 = {
    love: 'Leah'
};
function myLove(a) { }
// myLove('leah');
자료.love = 123;
myLove(자료.love); // 에러 / 리아라는 타입만 들어 올 수 있기 때문에
// question 아래 자료의 타입 지정을 해 보세요.
var project = {
    friend: ['Kelly', 'JY'],
    days: 20,
    started: true
};
//답
// let project :{
//     friends : string[],
//     days : number,
//     started : boolean,
// } = {
//   friends: ['Kelly', 'JY'],
//   days: 20,
//   started: true,
// };
//question
