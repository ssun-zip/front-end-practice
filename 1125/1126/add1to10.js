// 1부터 10까지 합 계산
var sum = 0;
for(var i = 0; i <=10; i++){
    sum += i;
}

//합을 메세지로 전송
postMessage(sum); //sum을 메인 태스크에 전송