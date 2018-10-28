(function(){
	//将十月一到现在的秒差换成天时分秒；
		var now = new Date();
		var futrue = new Date("2018/11/11");
		var time = (futrue.getTime() - now.getTime())/1000;   
		//time是十月一到现在的秒差
		//console.log(time)//1432504.418
		//十月一		
	function showTime(){		
		var day = Math.floor(time / 60 / 60 / 24);//天
		var hours = Math.floor(time / 60 / 60) - (day * 24);//时
		var minute = Math.floor(time / 60 ) - (day * 24 * 60) - (hours * 60);//分
		var second = Math.floor(time) - (day * 24 * 60 * 60) - (hours * 60 * 60) - (minute * 60);
		$id("day").innerHTML = zero(day);
		$id("hours").innerHTML = zero(hours);
		$id("minute").innerHTML = zero(minute);
		$id("second").innerHTML = zero(second);
	}
	
	var timer = setInterval(function(){
		time--;    //每隔1秒让时间秒差减一；
		if(time <= 0){//等时间差为0；说明已经到时间了，移除定时器
			clearInterval(timer);
			
		}else{
			showTime();
		}
	},1000)
})()
