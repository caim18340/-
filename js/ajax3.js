(function(){
	$.ajax({
		type:"get",
		url:"data2.json",
		async:true,
		cache :true,
		success : function(res){
			var title = "";
			for(var key in res){
				title += `<li classify=${key}><a href="javascript:;">${res[key].name}</a>`;
			}
			$(".nav_4").html(title);
			$(".nav_4 li").mouseenter(function(){
				$(this).parent().next().slideDown(1000);
				$(this).parent().next().addClass("shadow")
				var classify = $(this).attr("classify");
				var arr = res[classify].list;
				var str = "";
				for(var i=0;i<arr.length;i++){
					var cur = arr[i];
					str += `<li>
								<a href="page2.html?id=${cur.id}&classify=${classify}">
									<i>${cur.ms}</i>
									<img src="img/${cur.src}"/>
									<p>${cur.name1}</p>
									<span>${cur.price1}</span>
								</a>
							</li>`;
				}
				$(".xiaomi_5").html(str);
			})
			$(".xiaomi_5").hover(function(){
				$(this).css("display","block")
			},function(){
				$(this).slideUp(1000)
			})
		}
	});
	$.ajax({
		type:"get",
		url:"data3.json",
		async:true,
		cache :true,
		success : function(res){
			var title = "";
			for(var key in res){
				title += `<li classify=${key}><a href="javascript:;">${res[key].name}</a>`;
			}
			$(".list_7").html(title);
			$(".list_7 li").mouseenter(function(){
				$(this).parent().next().css("visibility","inherit");
				var classify = $(this).attr("classify");
				var arr = res[classify].list;
				var str = "";
				for(var i=0;i<arr.length;i++){
					var cur = arr[i];
					str += `<li><a href="page2.html?id=${cur.id}&classify=${classify}"><img src="img/${cur.src}" alt="" />${cur.name1}</a></li>`;
				}
				$(".dots_7").html(str);
			})
			$(".list_7 li").mouseleave(function(){
				$(this).parent().next().css("visibility","hidden");
			})
			$(".dots_7").hover(function(){
				$(this).css("visibility","inherit")
			},function(){
				$(this).css("visibility","hidden")
			})
		}
	});
})()
