



$(document).ready(function(){
    /* 
    ㅇ html요소를 control하는 method
      1. 텍스트 변경
      2. 구조(태그) 변경

      3. 태그 삽입
      4. 태그 이동

      5. 태그 삭제
      
  */
        // 1. 텍스트 변경
  // menu의 첫번째 a의 글자를 "HOME"이라고 변경
  $(".menu li:eq(0)").text("HOME")

  // 2. 구조(html) 변경
	// menu의 두번째 a의 글자를 "<strong>ABOUT</strong>"으로 변경
  $(".menu li:eq(1)").html("<i>ABOUT</i>")
  //$(".menu li a eq(1)") 이건 안됨

  //================================================================
  // 3. 태그 삽입
  // list의 맨 앞에 "START"를 삽입
  $(".list").prepend('<li><a href="#">start</a></li>')
  // list의 맨 앞에 "END"를 삽입
  $(".list").append('<li><a href="#">end</a></li>')



  // list의 list3 앞에 "list2.5"를 삽입
  $(".list li:eq(2)").after('<li><a href="#">list2.5</a></li>')

  // menu의 menu3 뒤에 "GALLERY"를 삽입
  $(".list li:eq(5)").before('<li><a href="#">gallery</a></li>')

  /* prepend/append VS before/after 차이점 */
  

  /*
  prepend와 append는 선택자(타겟)의 안에 삽입된다.
  즉, 자식요소가 되기 때문에 css속성을 상속받는다.
  */
  
})