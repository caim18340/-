(function(){
	var box = $id('list');
	var list = box.children;
	var dots = $id('dots').children;
	var timer = null;
	var index = 0;
	timer = setInterval(autoPlay,1000);
	function autoPlay(){
		index++;
		for(var i=0;i<dots.length;i++){
			dots[i].className = "";
			move(list[i],{opacity : 0});
		}
		if(index == 5){
			index = 0
		}
		dots[index].className = "active";
		move(list[index],{opacity : 100})
	}
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			index = i - 1;
			autoPlay();
		}
	}
	$id('banner').onmouseover = function(){
		clearInterval(timer);
		$id('arr').style.display = "block";
	}
	$id('banner').onmouseout = function(){
		$id('arr').style.display = "none";
		timer = setInterval(autoPlay,1000);
	}
	$id('toLeft').onclick = function(){
		for(var i=0;i<dots.length;i++){
			dots[i].className = "";
			move(list[index],{opacity : 0});
		}
		index--;
		if(index == -1){
			index = 4;
		}
		dots[index].className = "active";
		move(list[index],{opacity : 100});
	}
	$id('toRight').onclick = function(){
		for(var i=0;i<dots.length;i++){
			dots[i].className = "";
			move(list[index],{opacity : 0});
		}
		index++;
		if(index == dots.length){
			index = 0;
		}
		dots[index].className = "active";
		move(list[index],{opacity : 100});
	}
	/*var index = 0;
	var timer = null;
	var list = $(".list_1 li");
	var pages = $(".dots_1 li");
	timer = setInterval(autoPaly,1500)
	function autoPaly(){
		index++;
		if(index == pages.length){
			index = 0;
		}
		pages.eq(index).addClass("active").siblings().removeClass("active");
		list.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		
	}
	$(".list_1").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPaly,1500)
	})
	pages.mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPaly();
	})
	pages.mouseleave(function(){
		timer = setInterval(autoPaly,1500)
	})
	$(".toLeft").click(function(){
		clearInterval(timer)
		index -- ;
		
	})*/
})();
