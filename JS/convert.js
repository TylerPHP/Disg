$(document).ready( function(){
/*hover header*/
 $(".topSk").hover(function(){
 	$( this ).css("color"," #3971FF");
     $(".top1").css("width","150px");
 }, function() {
 		$( this ).css("color","#4C4C4C");
     $(".top1").css("width","50px");
 }

 );

  $(".topSk2").hover(function(){
 	$( this ).css("color"," #3971FF");
     $(".top2").css("width","150px");
 }, function() {
 		$( this ).css("color","#4C4C4C");
     $(".top2").css("width","50px");
 }

 );



/*hover navigation*/
$("#navTop a").hover(function(){

	$( this ).css({
		color:"#4C4C4C",
        left:"12px" 
	});
$( this ).children(".naviG").css({
	border:"1px solid #3971FF",
	width:"22px",
	right: "30px"
});
		

}, function(){
$( this ).css({
		color:"#ACACAC",
        left:"0px" 
	});

$( this ).children(".naviG").css({
	border:"1px solid #9CB6F9",
	width: "11px",
	right: "19px"
});

});
/* Edition*/

$("#eduCation a").hover(function(){
$( this ).children("#eduCation span").css('color','#3971FF');
},function(){
 $( this ).children("#eduCation span").css('color','#4C4C4C');
});

/*reCentori*/

$("#reCentPro figure").hover(function(){
$( this ).children("#reCentPro img+div").css('opacity','1');
$( this ).css('box-shadow','0 0 4px  1px rgba(0,0,0,0)');

},function(){
$( this ).children("#reCentPro img+div").css('opacity','0');
$( this ).css('box-shadow',' 0 0 4px  1px rgba(204,204,204,.7)');

});

/*RECENT POST*/
var slider = $("#recentPost selection .bol_1, #recentPost selection .bol_2");

slider.hover(function(){

$( this ).css(	'border', '2px solid #3971FF');
$( this ).children("#recentPost  .conar").css({
	borderRight: "2px solid #3971FF",
	borderBottom: "2px solid #3971FF"});

},function(){

$( this ).css(	'border', '2px solid #4C4C4C');
$( this ).children("#recentPost  .conar").css({
	borderRight: "2px solid #4C4C4C",
	borderBottom: "2px solid #4C4C4C"});
});


/*Slider line*/
$("#recentPost selection .bol_1").click(function(){
	var x =  $(".liNe_JQ div").css('left');
	if( $( this ) && x !== "83px"){
	 $(" .liNe_JQ div").css({left: "-=98"});		
	}	
});


$("#recentPost selection .bol_2").click(function(){
	 var i =  $(".liNe_JQ div").css('left');
if( $( this ) && i !== "573px"){
 $(".liNe_JQ div").css('left','+=98');
}
});

$(".liNe_JQ .day_0").css('color','#3971FF');

$("#recentPost h2+p").text("20 Jun 2016").css('left', '');


slider.click(function(){
var place = $(".liNe_JQ div").css('left');
var arrty =["83px", "181px","279px", "377px", "475px", "573px"];
for (var a = 0; a <= 6; ++a) {
	
if(place == arrty[a]){
var info = $(".liNe_JQ .day_"+a).text();
	$(".liNe_JQ .day_"+a).css('color','#3971FF');
	$("#recentPost h2+p").text(info +" "+" 2016");
}else if(place !== arrty[a]){
	$(".liNe_JQ .day_"+a).css('color','#000000');
}
}
});



/*RECENT POST - figure*/

$("#recentPost .ReadMore").hover(function(){
$( this ).css('color',' #3971FF');
$("#recentPost .Readline").css('width','150px');
},function(){
$( this ).css('color','#4C4C4C');
$("#recentPost .Readline").css('width','50px');	
});
/*printingPlan*/

$("#printingPlan .print_1").hover(function(){
$(".print_1 .RegisterNow>div").css('width','150px');
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.19)');

},function(){
$(".print_1 .RegisterNow>div").css('width','50px');
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.0)');
});

$("#printingPlan .print_2").hover(function(){
$(".print_2 .RegisterNow>div").css('width','150px');
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.19)');

},function(){
$(".print_2 .RegisterNow>div").css('width','50px');
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.0)');
});



$("#clientFeed .centerIm").hover(function(){
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.19)');

},function(){
$( this ).css('box-shadow',' 0 10px 12px  1px rgba(6,6,6,.0)');
});

/*----------footer---------*/
$("#sayHollo .conTakt ").hover(function(){
	$( "#sayHollo .conTakt div" ).css('background','url(CSS/images/Sprit.png) no-repeat 3px -155px');
},function(){
	$( "#sayHollo .conTakt div" ).css('background','url(CSS/images/Sprit.png) no-repeat -43px -155px');
});

$("#sayHollo .loCation ").hover(function(){
	$("#sayHollo .loCation div ").css('background','url(CSS/images/Sprit.png) no-repeat 5px -113px');
},function(){
	$( "#sayHollo .loCation div" ).css('background','url(CSS/images/Sprit.png) no-repeat -40px -113px');
});

$("#sayHollo .LetsTalk a ").hover(function(){
  $("#sayHollo .LetsTalk div").css('width','150px');
},function(){
	  $("#sayHollo .LetsTalk div").css('width','50px');
});

});

