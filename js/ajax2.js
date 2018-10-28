(function(){
	$.ajax({
		type:"get",
		url:"data1.json",
		async:true,
		cache :true,
		success : function(res){
			var title = "";
			var str = "";
			for(var key in res){
				title += `<span classify=${key}>${res[key].name}</span>`
				for(var i=0;i<res[key].list.length;i++){
					var cur = res[key].list[i];
					str += `<li>
								<a href="page1.html?id=${cur.id}&classify=${key}">
									<img src="img/${cur.src}" alt="" />
									<h6>${cur.name1}</h6>
									<p>${cur.price}</p>
									<span>${cur.name2}</span>
									<div><i>${cur.hp}</i><em>${cur.lz}</em></div>
								</a>
							</li>`;
				}
			}
			$(".dots_4").html(title);
			$(".list_4").html(str);
			
			$(".dots_4 span").mouseenter(function(){
				$(this).addClass("current").siblings().removeClass("current")
				var classify = $(this).attr("classify");
				var arr = res[classify].list;
				var str1 = "";
				for(var i=0;i<arr.length;i++){
					var cur1 = arr[i];
					str1 += `<li>
								<a href="page1.html?id=${cur1.id}&classify=${classify}">
									<img src="img/${cur1.src}" alt="" />
									<h6>${cur1.name1}</h6>
									<p>${cur1.price}</p>
									<span>${cur1.name2}</span>
									<div><i>${cur1.hp}</i><em>${cur1.lz}</em></div>
								</a>
							</li>`;
				}
				$(".list_4").html(str1);
				hovering()
			})
			function hovering(){
				$(".list_4 li").mouseenter(function(){
					$(this).stop().animate({bottom : 10});
					$(this).find("div").stop().animate({bottom : 0});
					$(this).addClass("shadow").siblings().removeClass("shadow");
				})
				$(".list_4 li").mouseleave(function(){
					$(this).stop().animate({bottom :0});
					$(this).find("div").stop().animate({bottom : -100});
					$(this).removeClass("shadow");
				})
			}
			hovering()
		}
	});
})()
