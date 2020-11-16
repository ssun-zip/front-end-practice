//객체를 선언합니다
let object = {
    name: '바나나',
    price: 1200,
    print : function() {
        var text = `${this.name}의 가격은 ${this.price}원 입니다.`;
        // console.log -> 메서드는 콘솔에 메시지를 씁니다.
        // Press F12 on your keyboard to view the message in the console view.
        // JavaScript console.log() Method
        console.log(text)
        //document.write(text)
    }
};

//메소드를 호출합니다. 
object.print();