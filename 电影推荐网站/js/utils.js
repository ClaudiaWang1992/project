//常用插件
//事件添加函数
var eventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			return element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			return element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}

	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			return element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			return element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	getEvent:function(event){
		return event? event :window.event;
	},
	preventDefault:function(event){
		return event.preventDefault? event.preventDefault():event.returnValue=false;
	}
};

function createXHR(){
	if(typeof XMLHttpRequest!='undefined'){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject!='undefined'){
		if(typeof arguments.callee.activeXString!="string"){
			var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
			for(i=0,len=versions.length;i<len;i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString=versions[i];
					break;
				}catch(ex){
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	}else{
		throw new Error("No XHR object available");
	}
}

function isArray(arg){
	if(typeof arg=='object'){
		var criteria=arg.constructor.toString().match(/array/i);
		return (criteria!=null);
	}
	return false;
}

function $(str){
	return document.getElementById(str);
}

function getElementsByClass(attr){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(attr);
	}else{
		var body=document.getElementsByTagName("body")[0];
		var obj=body.getElementsByTagName('*');
		var result=[];
		for(var i=0;i<obj.length;i++){
			if(obj[i].className!=''){
				var array=obj[i].className.split(" ");
					for(var j=0;j<array.length;j++){
						if(array[j]==attr){
							result.push(obj[i]);
							break;
						}
					}
			}
		}
		return result;
	}
}

function addClass(obj,attr){
	if(obj.className.length==0){
		obj.className=attr;
	}else{
		var attrs=obj.className.split(" ");
		var onOff=true;
		for(var i=0;i<attrs.length;i++){
			if(attrs[i]==attr){
				onOff=false;
			}
		}
		if(onOff==false){
			obj.className=obj.className+" "+attr;
		}
	}
}

function removeClass(obj,attr){
	if(obj.className!=''){
		var attrs=obj.className.split(" ");
		for(var i=attrs.length-1;i>=0;i--){
			if(attrs[i]==attr){
				attrs.splice(i,1);
			}
		}
		obj.className=attrs.join(" ");
	}
}
    function toArray(doms){
		   var array=null;
		   try{
				array=Array.prototype.slice.call(doms,0);//相当于在doms这个对象作用域上调用这个函数（这里这么写是因为doms对象本身没有这个函数，只能通过这种方法调用）。
			}catch(ex){
				array=new Array();
				for(var i=0,len=doms.length;i<len;i++){
					array.push(doms[i]);
				}
			}
			return array;
	   }