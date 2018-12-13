$(document).ready(function(){
		//登录
	$(".hr_login").click(function(){
		if($("div.hr_login").hasClass("hr_hide")){
			$("div.hr_login").removeClass("hr_hide");
		}else{
			$("div.hr_login").addClass("hr_hide");
		}
		$(".hidelogin").slideToggle(1);
	});
	
	//第二个块的sale效果
	window.onload=function(){
		$("#sale").slideDown(500);
		$("#open").css("display","none");
		$("#close").css("display","block");
		setTimeout(function(){
			$("#sale").slideUp(500);
			$("#close").css("display","none");
			$("#open").css("display","block");
		},1500);
	}
	
	$("#open").on("click",function(){
		$("#open").css("display","none");
		$("#close").css("display","block");
		$("#sale").slideDown(500);
	});
	$("#close").on("click",function(){
		$("#close").css("display","none");
		$("#open").css("display","block");
		$("#sale").slideUp(500);
	});
	
	//列表滑过
	$(".navL").hover(function(){
		$(this).children("div").slideDown(500);
	},function(){
		$(this).children("div").css("display","none");
	});
	$(".navL").click(function(){
		$(".navL").css("color","#999999");
	});
	
	
	//header和nav定位事件
	$(window).scroll(function(){
		var height1 = $(window).scrollTop();
		var height2 = parseFloat($(document).height() * 0.85);
		if(height1>240 && height1<height2){
			$("#saleAd").removeClass("saleAd");
			$("#saleAd").addClass("saleFixed");
			$("#nav").removeClass("nav");
			$("#nav").addClass("navFixed");
			$(".navL_img").css("display","block");
		}else{
			$("#saleAd").removeClass("saleFixed");
			$("#saleAd").addClass("saleAd");
			$("#nav").removeClass("navFixed");
			$("#nav").addClass("nav");
			$(".navL_img").css("display","none");
		}
	});
	
	
	//slider
	$(".bgslider").load("slider.html");
	
});
