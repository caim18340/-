	$id("txt_1").onkeyup = function(){
		var str = this.value;
		$(".search").css("display","block");
		var oScript = document.createElement("script");
        document.body.appendChild(oScript);
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
	}
	function fn(msg){
        var arr = msg.s;
        var str = "";
        for(var i = 0; i < arr.length; i++){
            str += `<li>${arr[i]}</li>`;
        }
       $(".search").html(str); 
    }
	$id("search").onmouseover = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			target.style.background = "#ccc";
		}
	}
	
	$id("search").onmouseout = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			target.style.background = "";
		}
	}
	
	$id("search").onclick = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			$id("txt_1").value = target.innerHTML;
			$id("search").innerHTML = "";
			$id("search").style.display = "none";
		}
	}
	$(".gwc").click(function(){
		window.location.href = "shopCar.html"
	})
