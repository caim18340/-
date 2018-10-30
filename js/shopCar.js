(function(){
		$(".shopBtn").hover(function(){
			$(".main_22").css("display","block")
		},function(){
			$(".main_22").css("display","none")
		})
		$(".main_22").hover(function(){
			$(".main_22").css("display","block")
		},function(){
			$(".main_22").css("display","none")
		})
		$(".xiaomisc").click(function(){
			window.location.href = "shouye.html"
		})
		var arr = getCookie("shoplist");
		var str = "";
		for(var i=0;i<arr.length;i++){
			var cur = arr[i];
			str += `<li>
							<img src="img/${cur.src}" alt="" />
							<h6>${cur.name}</h6>
							<i>${cur.price}</i><span>元  × </span><em>${cur.count}</em>
						</li>`;
		}
		$(".main_23").html(str);
		var count = 0;
		var money = 0;
		$(".main_23 li").each(function(index,item){
			count += parseInt($(item).find("em").html());
			money += parseFloat($(item).find("em").html() * $(item).find("i").html())
		})
		$(".allCount").css("color","#F56600")
		$(".allCount").html(count);
		$(".allMoney").html(money);
	})()