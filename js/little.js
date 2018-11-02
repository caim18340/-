(function(){
	var picT = $id("aside").offsetTop;
	window.onscroll = function(){
		var stop = document.documentElement.scrollTop || document.body.scrollTop;
		var dis = picT + stop;
		move($id("aside"),{top : dis});
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
