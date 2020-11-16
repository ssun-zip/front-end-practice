//변수를 선언 합니다. 
const javascriptObject = [
    {
        name : '박샘이' ,
        region : '서울'
    }, {
        name : '윤샘이',
        region : '도쿄'
    }
];

// JSON.stringify() method로 JS 갹체를 JSON 문자열로 변경합니다.
// converts a JavaScript object or value to a JSON string
const outputA = JSON.stringify(javascriptObject);
//JSON.stringify(value[, replacer[, space]])
//null is a placeholder for replacer function when you need to pass space.
// replacer: filter (종류: string, number) ||  space : indentation 
const outputB = JSON.stringify(javascriptObject, N, 2);
//typeof(xxx) : JavaScript 변수의 유형을 찾을 수 있습니다 .
console.log(typeof(outputA));
//outputA를 JSON문자열로 변경하여 print
console.log(outputA);
console.log(outputB);
console.log('----------------------');
//JSON.parse() method로 JSON 문자열을 JS객체로 변경합니다.
const outputC = JSON.parse(outputB);
// JS 객체로 출력 
console.log(typeof(outputC));
console.log(outputC);


