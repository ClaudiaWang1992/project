/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 window.onload=function(){
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city=document.getElementById("aqi-city-input").value;
	var value=document.getElementById("aqi-value-input").value;
		if(((/^[\u4e00-\u9fa5]{1,10}$/.test(city))||(/^[a-zA-Z]{1,30}$/.test(city)))&&(/^[1-9][0-9]*$/.test(value)))
		{
			aqiData[city]=value;
		}else{
           alert("请输入正确格式的内容");
		}


}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table=document.getElementById("aqi-table");
	table.innerHTML="";
    /*var tr=document.createElement("tr");
	var td1=document.createElement("td");
	td1.innerHTML="城市";
	var td2=document.createElement("td");
	td2.innerHTML="空气质量";
	var td3=document.createElement("td");
	td3.innerHTML="操作";*/
	table.innerHTML="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var key in aqiData){
		var tr=document.createElement("tr");
		var td1=document.createElement("td");
		td1.appendChild(document.createTextNode(key));
		var td2=document.createElement("td");
		td2.appendChild(document.createTextNode(aqiData[key]));
		var td3=document.createElement("td");
		var button=document.createElement("button");
		button.appendChild(document.createTextNode("删除"));
		button.className=key;
		button.onclick=delBtnHandle;
		td3.appendChild(button);
		tr.appendChild(td1);
        tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList()
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  for(var key in aqiData){
	  if(key==this.className){
		  delete aqiData[key];
	  }
  }
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   var addBtn=document.getElementById("add-btn");
   addBtn.onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  //在刷新列表添加按钮的时候添加
}

init();
	
 /* for(var i=0;i<tr.length;i++){
	// var del= tr[i].getElementsByTagName("td")[2];
	  var del= tr[i].getElementsByTagName("button")[0];
	 //var dels=del.getElementsByTagName("button")[0];
	 del.onclick=function(){
		 delete aqiData["西安"];
	 }
     //del.onclick=delBtnHandle;
  }若果在这里用遍历的方法进行则需要在每次按钮点击后再对整个表进行遍历找到对应的按钮并将内容删掉，
  要给每个按钮添加时间在创建时添加是最方便的，这里由于不知道其需要找到每个按钮，但表长是动态的没办法通过遍历找到所有按钮，当然这里可以
  添加一个全局变量记录当前数据数，每次在点击添加和删除按钮时动态更新这个全局变量，并且根据这个全局变量遍历当前所有数据，重新再给每个删除
  按钮添加一回删除数据，这样非常麻烦，效率低*/
}