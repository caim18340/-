(function(){
	$.ajax({
		type:"get",
		url:"data.json",
		cache :true,
		async:true,
		success : function(res){
//			console.log(res.classify001)
			var str = "";
				for(var i=0;i<res.classify001.list.length;i++){
					var cur = res.classify001.list[i];
					str += `<li>
								<a href="page.html?id=${cur.id}&classify=classify001">
									<i>${cur.ms}</i>
									<img src="img/${cur.src}" alt="" />
									<h6>${cur.name1}</h6>
									<p>${cur.name2}</p>
									<span>${cur.price1}元<del>${cur.price2}元</del></span>
								</a>
							</li>`;
				}
			$(".list_2").html(str);
			$(".list_2 li").css("border-top","1px solid " + getColor());
			var index = 0;
			var timer = setInterval(fn,1000)
				function fn(){
					index < 1 ? index++ : index--;
					$(".list_2").animate({left:-index*992});
				}
			$(".dots_33").hover(function(){
				clearInterval(timer);
				$(".list_2").animate({left:0},500);
				$(this).css("color","#333")
			},function(){
				timer = setInterval(fn,1000)
				$(this).css("color","#b7b0b0")
			});
			$(".dots_44").hover(function(){
				clearInterval(timer);
				$(".list_2").animate({left:-992},500)
				$(this).css("color","#333")
			},function(){
				timer = setInterval(fn,1000)
				$(this).css("color","#b7b0b0")
			})
			$(".list_22").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(fn,1000)
			})
		}
	});
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		cache:true,
		success:function(res){
			var str = "";
			for(var i=0;i<res.classify002.list.length;i++){
				var cur = res.classify002.list[i];
				str += `<li>
							<a href="page.html?id=${cur.id}&classify=classify002">
								<i>${cur.ms}</i>
								<img src="img/${cur.src}" alt="" />
								<h6>${cur.name1}</h6>
								<p>${cur.name2}</p>
								<span>${cur.price1}元<del>${cur.price2}元</del></span>
							</a>
						</li>`
			}
			$(".list_3").html(str);
			$(".list_3 li").hover(function(){
				$(this).addClass("shadow").siblings().removeClass("shadow");
				$(this).stop().animate({bottom : 10}).siblings().stop().animate({bottom : 0});
			},function(){
				$(this).removeClass("shadow");
				$(this).stop().animate({bottom : 0});
			})
		}
	});
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		cache:true,
		success:function(res){
			var str = "";
			for(var i=0;i<res.classify003.list.length;i++){
				var cur = res.classify003.list[i];
				str += `<li>
							<a href="javascript:;">
								<i>${cur.ms}</i>
								<h6>${cur.name1}</h6>
								<p>${cur.name2}</p>
								<em>${cur.price1}元</em>
								<img src="img/${cur.src}" alt="" />
							</a>
						</li>`
			}
			$(".list_5").html(str);
		}
	});
			var index = 0;
			var timer = null;
			timer = setInterval(autoPlay,1000);
			function autoPlay(){
				index++;
				if(index == 5){
					index = 1;
					$(".list_5").css("left","0")
				}
				$(".dots_6 li").eq(index == 4 ? 0 : index).addClass("hovering").siblings().removeClass("hovering");
				$(".list_5").animate({left : -index*296})
			}
			$(".list_6").hover(function(){
				clearInterval(timer);
				$(".arr_2").css("opacity","1");
				$(this).stop().animate({bottom : 10});
				$(this).addClass("shadow").siblings().removeClass("shadow");
			},function(){
				$(this).stop().animate({bottom :0});
				$(".arr_2").css("opacity","0");
				$(this).removeClass("shadow");
				timer = setInterval(autoPlay,1000);
			})
			$(".dots_6 li").click(function(){
				index = $(this).index() - 1;
				autoPlay();
			})
			$(".toLeft_1").click(function(){
				index--;
				if(index == -1){
					index = 0
				}
				$(".dots_6 li").eq(index).addClass("hovering").siblings().removeClass("hovering");
				$(".list_5").animate({left : -index*296})
			})
			$(".toRight_1").click(function(){
				if(index == 4){
					index = 0;
					$(".list_5").css("left","0")
				}
				index++;
				if(index == 4){
					index = 3
				}
				$(".dots_6 li").eq(index).addClass("hovering").siblings().removeClass("hovering");
				$(".list_5").animate({left : -index*296})
			})
})()
