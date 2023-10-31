$(document).ready(function () {

  /* 
    ㅇ html요소를 control하는 method
      1. 텍스트 변경
      2. 구조(태그) 변경
  
      3. 태그 삽입
      4. 태그 이동
  
      5. 태그 삭제
  */


  /* ========================================= */

  // 1. 텍스트 변경

  // menu의 첫번째 a의 글자를 "HOME"이라고 변경 
  $(".menu li:first a").text("HOME");
  // $(".menu li:first a").html("HOME");


  /* ========================================= */

  // 2. 구조(html) 변경

  // menu의 두번째 a의 글자를 
  // "<i>ABOUT</i>"으로 변경 
  $(".menu li:eq(1) a").html("<i>ABOUT</i>");

  /* ========================================= */

  // 3. 태그 삽입
  // Selector에 삽입하라 태그를

  // list의 맨 앞에 "START"를 삽입  
  $(".list").prepend('<li><a href="#">START</a></li>')

  // list의 맨 뒤에 "END"를 삽입    
  $(".list").append('<li><a href="#">END</a></li>')

  // list의 list3 앞에 "list2.5"를 삽입   
  $(".list li:eq(3)").before('<li><a href="#">list2.5</a></li>')

  // menu의 menu3 뒤에 "GALLERY"를 삽입  
  $(".menu li:eq(2)").after('<li><a href="#">GALLERY</a></li>')

  /* prepend/append VS before/after 차이점 */
  $('p').prepend("<h2>prepend</h2>")
  $('p').append("<h2>append</h2>")

  $('p').before("<h2>before</h2>")
  $('p').after("<h2>after</h2>")

  /*
  prepend와 append는 선택자(타겟)의 안에 삽입된다.
  즉, 자식요소가 되기 때문에 css속성을 상속받는다.
  */

  /* ========================================= */

  // 4. 태그 이동  
  // Selector를 이동하라 Selector로
  $(".list li:eq(0)").prependTo(".menu")
  // list의 "START"를 menu의 맨 앞으로 이동
  $(".list li:last").appendTo(".menu")
  // list의 "END"를 menu의 맨 뒤로 이동  
  $(".menu li:eq(3)").insertBefore(".list li:eq(4)")
  // menu의 menu3을 list의 list1 앞으로 이동  
  $(".menu li:eq(4)").insertAfter(".list li:eq(4)")
  // menu의 menu4를 list의 list4 뒤로 이동  

  /* ========================================= */

  // 5. 태그 삭제

  // menu의 menu5를 삭제
  $(".menu li:eq(4)").remove();


  // list의 list3 안에 있는 content만 삭제  
  $(".list li:eq(3)").empty()

})

