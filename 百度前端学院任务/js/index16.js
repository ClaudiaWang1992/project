/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
 window.onload=function(){
var aqiData = {};

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
	var city=document.getElementById("aqi-city-input").value;
	var value=document.getElementById("aqi-value-input").value;
		if(((/^[\u4e00-\u9fa5]{1,10}$/.test(city))||(/^[a-zA-Z]{1,30}$/.test(city)))&&(/^[1-9][0-9]*$/.test(value)))
		{
			aqiData[city]=value;
		}else{
           alert("��������ȷ��ʽ������");
		}


}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
	var table=document.getElementById("aqi-table");
	table.innerHTML="";
    /*var tr=document.createElement("tr");
	var td1=document.createElement("td");
	td1.innerHTML="����";
	var td2=document.createElement("td");
	td2.innerHTML="��������";
	var td3=document.createElement("td");
	td3.innerHTML="����";*/
	table.innerHTML="<tr><td>����</td><td>��������</td><td>����</td></tr>";
    for(var key in aqiData){
		var tr=document.createElement("tr");
		var td1=document.createElement("td");
		td1.appendChild(document.createTextNode(key));
		var td2=document.createElement("td");
		td2.appendChild(document.createTextNode(aqiData[key]));
		var td3=document.createElement("td");
		var button=document.createElement("button");
		button.appendChild(document.createTextNode("ɾ��"));
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
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList()
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
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

  // ���������add-btn��һ������¼������ʱ����addBtnHandle����
   var addBtn=document.getElementById("add-btn");
   addBtn.onclick=addBtnHandle;
  // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
  //��ˢ���б���Ӱ�ť��ʱ�����
}

init();
	
 /* for(var i=0;i<tr.length;i++){
	// var del= tr[i].getElementsByTagName("td")[2];
	  var del= tr[i].getElementsByTagName("button")[0];
	 //var dels=del.getElementsByTagName("button")[0];
	 del.onclick=function(){
		 delete aqiData["����"];
	 }
     //del.onclick=delBtnHandle;
  }�����������ñ����ķ�����������Ҫ��ÿ�ΰ�ť������ٶ���������б����ҵ���Ӧ�İ�ť��������ɾ����
  Ҫ��ÿ����ť���ʱ���ڴ���ʱ��������ģ��������ڲ�֪������Ҫ�ҵ�ÿ����ť�������Ƕ�̬��û�취ͨ�������ҵ����а�ť����Ȼ�������
  ���һ��ȫ�ֱ�����¼��ǰ��������ÿ���ڵ����Ӻ�ɾ����ťʱ��̬�������ȫ�ֱ��������Ҹ������ȫ�ֱ���������ǰ�������ݣ������ٸ�ÿ��ɾ��
  ��ť���һ��ɾ�����ݣ������ǳ��鷳��Ч�ʵ�*/
}