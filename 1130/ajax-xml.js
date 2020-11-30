$(document).ready( function() {
    $('#btnLoad1').click( function() {
        $.ajax( {
            url : 'ajax-stuinfo.xml',
            type : 'get',
            dataType: 'xml',
            timeout : 10000,
            success: function(xmlData) {
                var tagList = "";
                $(xmlData).find('student').each(function () {
                    tagList += "<li>" + $(this).find('gradepoint').text() + ""
                });
                $('#listArea').empty(); //리스트뷰를 비움
                $('#listArea').append(tagList);
                //리스트뷰에 taglist에 저장된 부분 리스트를 추가
                // <ul data-role="listview" id="listArea" data-inset="true">
                $('#listArea').listview('refresh'); // 리스트뷰를 새로 고
            },
            // 요청 실패 콜백함수일 경우이는
            // 리스트가 있어야할부분에 Error!! 띄우기 
            error: function() {
                $("#listArea").html("<p> Error!! </p>"); 
            }
        })
    })
})