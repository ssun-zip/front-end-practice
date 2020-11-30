$(document).ready(function()
{
    $('#btnLoad2').click( function(){
        $.getJSON('ajax-stuinfo.json',function(jsonData){
            /* JSON에 값을 갖고왓다  */
            var tagList ="";
            /* 태그리스트를 비운다 */
            $.each(jsonData.stuinfo, function(){
                /* jsonData의 stuinfo의 배열의 값을 갖고옴 */
                tagList += "<li>" +this.schoolyear +"</li>";
                /* 태그리스트에 li태그로 둘러싸인 stuinfo의 schoolyear의 값을 갖고옴 */

            });
            $('#listArea').empty();
            /* 비우기 */
            $('#listArea').append(tagList);
            /* appendㅇ로 tagList 를 추가함  */
            $('#listArea').listview('refresh');
            /* listview한다 refresh 그전의 형식대로  */
        });
    });
});
      
/*
    JSON (javascript object notation)
    :데이터 교환을 위한 형식으로 '미니 XML' 이라 불리움
    사람이 직관적으로 이해하기 쉽고 파싱하고 생성하기도 쉬움
    대부분의 언어에서 JSON을 사용 할 수 있고 XML 본다 가볍고 빨라 효율적
    JSOn명세 방법
    자바스크립트에서 갹체를 표현하는 방법과 비슷 

    Json- lightweight data-교환 방식
    -> javascript 객체를 만들 때 사용하는 표현식
    : 용량이 작아서, json이 xml을 대체해서 데이터 전송 등에 많이 사용한다
    : 특정 언어에 종속되장ㄴㅎ으며 json format data handling library를 다수 프로그래밍 언어에서 제공

    형식:
    1. name-value pair : { String key : String Value}
    2. 값들의 순서화된 리스트 :배열(Array), 리스트(List)로 실현
      ex. 
        {
            "firstName": "Kwon",
            "lastName": "YoungJae",
            "email": "kyoje11@gmail.com",
            "hobby": ["puzzles","swimming"]
        }
    ** ajax-stuinfo.json
        {
            "stuinfo" : [ // data name - data값에 대한 나열은 [] 안에 넣는다. 
                {"schoolyear" : "1학년"}, // 첫번째 값 {} 안에 제공 
                {"schoolyear" :"2학년"}, // 두번째 값
                {"schoolyear" :"3학년"}, //세번째 값
                {"schoolyear" :"4학년"} // 네번째 값 
            ]
        }
*/