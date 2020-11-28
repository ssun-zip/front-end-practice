// worker task - 백그라운드에서 돌리는 js code 
// websocket.onmessage
// : called when a message is received from the server
// worker parent로 부터 from 과 to 의 정보를 받아 합을 구한 후
// postMessage를 통해 parent에게 message로 전달한다. 
onmessage = function(e) {
    var sum = 0;
    var from = parseInt(e.data.from);
    var to = parseInt(e.data.to);
    for(var i = from; i <= to; i++){
        sum += i;
    }
    postMessage(sum); // 윈도우 오브젝트 사이에서 안전하게 소통하게 해준다.  
}