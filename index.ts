// 엄격히 타입 검사해 줌
// 타입 엄격히 체크해

// JavaScript는 Dynamic Typing 가능
console.log(5 - '3'); // 에러: 2 JS에서 실행했을 때

// 1. 간단한 변수 타입 지정 가능
let 꿈: string = 'Front-end developer'; // 문자 타입만 들어 올 수 있다.
꿈 = 123; // 에러남

// 2. array 타입 지정
let 이름: string[] = ['Kelly', 'JY']; // 이 변수엔 string이 담긴 array만 들어 올 수 있다.

// 3. 오브젝트 타입 지정
let flower: { name: string } = { name: 'rose' }; // 오브젝트의 소속에 string만 넣을 수 있다.
let flowers: { name?: string } = { name: 'rose' };
let flower1: { name?: string } = {}; // name 속성은 옵션 즉 안 들어 올 수도 있다.

// 4. Union type : 다양한 타입이 들어올 수 있게 하려면
let 행복: string[] | number = 123; // string이 가득한 어레이 또는 숫자
let 우리들: (number | string)[] = [1, '2', '3'];
let 오브젝트: { a: string | number } = { a: 123 };

// 5.Type alias : 타입 지정하는 문법이 길 경우=> 타입은 변수에 담아 쓸 수 있음
// 타입명 => 대문자로 쓰기 Joy
type Joy = string | number;

let 즐거움: Joy = 123;

// 6.함수에 타입 지정 parameter: number return value: number가 들어옴
function 함께(x: number): number {
  return x * 2;
}
함께('123'); //에러

// 7.array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫째 넘버 둘째 boolean 값이 와야 함

let 우리: Member = [123, true];

// 8. object에 타입지정해야 할 속성이 너무 많으면
// type Members = {
//   name: string;
//   age: number
// };

type Members = {
  [key: string]: string; // 글자로 된 모든 object 속성의 타입은: string
};

let 우리는: Members = { name: 'JY', age: '25' };

// 9. class 타입 지정
class User {
  dream: string; // 타입 지정해 줘야 함
  constructor(dream: string) {
    this.dream = dream;
  }
}

// 10. any 타입 => 타입 지정을 해제 하는 문법이라 생각/ 일반 JS 변수로
let 나무: any;
나무 = 123;
나무 = [];

// 11.unknown 타입 => 모든 자료형 허용해줌?
let 꽃: unknown;
꽃 = 123;
꽃 = [];
꽃 = {};

꽃 - 1; //에러 - 간단한 수학연산도 타입이 맞아야 함

// 12. Literal Type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
let JY: 'Front-end engineer';
let Kelly: 'My mentor';
let jeongyoung: 'Front-end engineer' | 'mom';
jeongyoung = 'mom';
jeongyoung = 'dad'; // 에러

//// 함수의 경우
function fly(a: 'sea'): 'sea' | 'sky' {
  return 'sky';
}

//// Literal type 문제점
var 자료 = {
  love: 'Leah',
} as const;

function myLove(a: 'leah') {}

// myLove('leah');
자료.love = 123;
myLove(자료.love); // 에러 / 리아라는 타입만 들어 올 수 있기 때문에

// question 아래 자료의 타입 지정을 해 보세요.
let project = {
  friend: ['Kelly', 'JY'],
  days: 20,
  started: true,
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
