// 엄격히 타입 검사해 줌
// 타입 엄격히 체크해

// JavaScript는 Dynamic Typing 가능
console.log(5 - '3') // 에러: 2 JS에서 실행했을 때

// 1. 간단한 변수 타입 지정 가능
let 꿈: string = 'Front-end developer' // 문자 타입만 들어 올 수 있다.
꿈 = 123 // 에러남

// 2. array 타입 지정
let 이름: string[] = ['Kelly', 'JY'] // 이 변수엔 string이 담긴 array만 들어 올 수 있다.

// 3. 오브젝트 타입 지정
let flower: { name: string } = { name: 'rose' } // 오브젝트의 속성에 string만 넣을 수 있다.
let flowers: { name?: string } = { name: 'rose' }
let flower1: { name?: string } = {} // name 속성은 옵션 즉 안 들어 올 수도 있다.

// 4. Union type : 다양한 타입이 들어올 수 있게 하려면
let 행복: string[] | number = 123 // string이 가득한 어레이 또는 숫자
let 우리들: (number | string)[] = [1, '2', '3']
let 오브젝트: { a: string | number } = { a: 123 }

// 5.Type alias : 타입 지정하는 문법이 길 경우=> 타입은 변수에 담아 쓸 수 있음
// 타입명 => 대문자로 쓰기 Joy
type Joy = string | number

let 즐거움: Joy = 123

// type alias에 함수 type 저장해서 쓰는 법
type 함수타입 = (a: string) => number

let func: 함수타입 = function (a) {
  return 10
}

// 6.함수에 타입 지정 parameter: number return value: number가 들어옴
function 함께(x: number): number {
  return x * 2
}
함께('사랑') //에러

//// void type 실수로 뭔가 return 하는 걸 사전에 막을 수 있음
function 가자(x: number): void {
  1 + 1
}

// 7.array에 쓸 수 있는 tuple 타입
type Member = [number, boolean] // 무조건 첫째 넘버 둘째 boolean 값이 와야 함

let 우리: Member = [123, true]

// 8. object에 타입지정해야 할 속성이 너무 많으면
// type Members = {
//   name: string;
//   age: number
// };

type Members = {
  [key: string]: string // 글자로 된 모든 object 속성의 타입은: string
}

let 우리는: Members = { name: 'JY', age: '25' }

// 9. class 타입 지정
class User {
  dream: string // 타입 지정해 줘야 함
  constructor(dream: string) {
    this.dream = dream
  }
}

// 10. any 타입 => 타입 지정을 해제 하는 문법이라 생각/ 일반 JS 변수로
let 나무: any
나무 = 123
나무 = []

// 11.unknown 타입 => 모든 자료형 허용해줌?
let 꽃: unknown
꽃 = 123
꽃 = []
꽃 = {}

꽃 - 1 //에러 - 간단한 수학연산도 타입이 맞아야 함

// 12. Literal Type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
let JY: 'Front-end engineer'
let Kelly: 'My mentor'
let jeongyoung: 'Front-end engineer' | 'mom'
jeongyoung = 'mom'
jeongyoung = 'dad' // 에러

//// 함수의 경우
function fly(a: 'sea'): 'sea' | 'sky' {
  return 'sky'
}

//// Literal type 문제점
var 자료 = {
  love: 'Leah',
} as const

function myLove(a: 'leah') {}

// myLove('leah');
자료.love = 123
myLove(자료.love) // 에러 / 리아라는 타입만 들어 올 수 있기 때문에

// 13. never type : never type is used to indicate the value that will never occur or return from a function.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg)
}

function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.')
  }
}

// object 안에 함수 만들고 Method 안에 함수 지정하기
let 회원정보: 회원 = {
  name: 'kelly',
  age: 25,
  plusOne(x) {
    return x + 1
  },
  changeName: () => {
    console.log('hi')
  },
}
회원정보.plusOne(1)
회원정보.changeName()

//(숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.

// - type 키워드를 쓰든 말든 알아서 합시다.

type 회원 = {
  name: string
  age: number
  plugOne: (x: number) => number
  changeName: () => void
}

// question 아래 자료의 타입 지정을 해 보세요.
let project = {
  friend: ['Kelly', 'JY'],
  days: 20,
  started: true,
}

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

console.log('flower')

class Person {
  name: string
  constructor(a: string) {
    this.name = a
  }

  함수() {}
}

let person1 = new Person('kim')
let person2 = new Person('park')

// Generics 함수에 타입파라미터 넣을 수 있음
interface LengthCheck {
  length: number
}

function 함수<MyType extends LengthCheck>(x: MyType) {
  return x.length
}

let a = 함수<string[]>(['100'])

// Narrowing
type Fish = { swim: stirng }
type Bird = { fly: string }

function 함수(animal: Fish | Bird) {
  animal.swim
}

//////////////////
// # 94
// const names: Array<string> = []; // string []
// // names[0].split(' ')

// console.log(names)
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000)
// })

// promise.then(data => {
//     data.split(' ')
// })

// #95 Creating our own generic function

// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// console.log(merge({name: 'JY'}, {AGE: 30}));
// const mergedObj = merge({name: 'JY'}, {age: 30});
// console.log(mergedObj.age);

// #96 Working with constraints
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'JY', hobbies:['Sports']}, {age: 30});
// console.log(mergedObj);

// #97 Another Generic function

// interface Lengthy {
//     length: number;
// }
// function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
//     let descriptionText = 'Got no value.';
//     if(element.length === 1) {
//         descriptionText = 'Got 1 element.';
//     } else if (element.length > 1) {
//         descriptionText = 'Got' + element.length + ' elements.';
//     }
//     return [element, descriptionText]
// }

// console.log(countAndDescribe(['Sports', 'Cooking']))

// #98 The 'keyof' constraint
// function extractAndConvert<T extends object, U extends keyof T>( obj: T, key: U) {
//     return 'Value: ' + obj[key];
// }

// extractAndConvert({name: 'JY'}, 'name');

// #99 Generic Classes
// class DataStorage<T> {
//     private data: T[] =[];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data]
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('JY');
// textStorage.addItem('Jane');
// textStorage.removeItem('Jane');
// console.log(textStorage.getItems())

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'JY'});
// objStorage.addItem({name: 'Leah'});
// //...
// objStorage.removeItem({name: 'JY'});
// console.log(objStorage.getItems());

//edit the bug & specialized data storage using constraint
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1) // 찾지 못할 경우 -1 remove the last elements of the array
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('JY')
textStorage.addItem('Jane')
textStorage.removeItem('Jane')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>();
// const jyobj = {name: 'JY'}
// objStorage.addItem(jyobj);
// objStorage.addItem({name: 'Leah'});
// //...
// objStorage.removeItem(jyobj);
// console.log(objStorage.getItems());

// 101 Generic Utiltity types
// built-in types
// Partial type: temporarily switch one of  your object types, one of  your interfaces to be opetional & readonly

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal //typecasting
}

//readonly

// const names = ['JY', 'Kaden']
// names.push('Leah')

// console.log(names)

const names: Readonly<string[]> = ['JY', 'Kaden']
// names.push('Leah')
// names.pop('Kaden')

// 102 Geric types: lock in a type vs Union Types: flexible
// const data = extractData<string>(user, 'userId')

// resource
// https://www.typescriptlang.org/docs/handbook/2/generics.html
