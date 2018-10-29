(function(){
	window.onscroll = function(){
		var stop = document.documentElement.scrollTop || document.body.scrollTop;
		if(stop > 2000){
			$(".little").css("display","block")
		}else if(stop == 0){
			$(".little").css("display","none")
		}
	}
	$(".little").click(function(){
		$("html,body").animate({scrollTop : 0},1500)
	});
	$(".register").click(function(){
		$(this).addClass("active1")
		window.location.href = "register.html"
	})
	$(".login").click(function(){
		$(this).addClass("active1")
		window.location.href = "login.html"
	});
})()
