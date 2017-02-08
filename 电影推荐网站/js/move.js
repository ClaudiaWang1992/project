function move(json){
	var obj = json.obj;
	var attr = json.attr;
	var time = json.time || 400;
	var target = json.target;
	var callBack = json.callBack;

	var startVal = parseInt( getStyle( obj , attr ) );
	var startTime = new Date();
	var timer = setInterval(function(){
		var a = ( new Date()- startTime )/time;
		if ( a>=1 )
		{
			a=1;
			clearInterval(timer);
			//if ( callBack )callBack();
			callBack && callBack();
			 //达到了目标点后，立刻执行什么 回调函数
		}
		obj.style[attr] =a * (target-startVal) + startVal + 'px';
	},13);
};
function getStyle( obj , attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};
