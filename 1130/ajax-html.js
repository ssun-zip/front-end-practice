$(document).ready( function() {
    $('#btnLoad3').click( function() {
        $.ajax( {
            // 정보를 받아올 xml url 주소
            url : 'ajax-weather.xml',
            // 요청 방식 (기본값)
            type : 'get',
            // xml 데이터 형식의 파일의 유형
            dataType: 'xml',
            // 응답제한 시간
            timeout : 10000,
            // 성공 콜백 함수 
            // xmlData = 서버 반환 값 
            success: function(xmlData) {
                var tagList = "";
                // xmlData (ajax-weather.xml)에서 <weather> 을 찾아 
                // 각 <indweather> 을 이스트로 만들어준다. 
                $(xmlData).find('weather').each(function () {
                    tagList += "<li>" + $(this).find('indweather').text() + ""
                });
                $('#listArea').empty(); //리스트뷰를 비움
                $('#listArea').append(tagList);
                //리스트뷰에 taglist에 저장된 부분 리스트를 추가
                $('#listArea').listview('refresh'); // 리스트뷰를 새로 고
            },
            error: function() {
                $("#listArea").html("<p> Error!! </p>"); 
            }
        })
    })
})
