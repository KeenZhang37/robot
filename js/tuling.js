
//点击发送
//输入框
var myword = document.querySelector('.center .txt');
//发送按钮
var oSend = document.querySelector('.center .btn');

oSend.onclick = function(str){
	Send(str);
}
//点击回车
function showHint(str) {
	if(event.keyCode == 13) {
		Send(str);
	}
}
function Send(str) {
	//创建对象
	var xhr;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//创建请求
	var url = 'http://www.tuling123.com/openapi/api?key=58293807907748a5b4bda52e058943b2';
	xhr.open('post', url, true);
	//发送请求
	xhr.send();
	//感知状态 接收服务器的响应
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var rotWord = xhr.responseText;
			//JSON字符串转数组
			var Rword = JSON.parse(xhr.responseText)
			console.log(Rword.text);
			document.querySelector('.chatting').innerHTML += '<div class="me"><span></span><p onclick="send()">' + myword.value + '<i></i></p><div class="clear"></div></div>';
			document.querySelector('.chatting').innerHTML += '<div class="rot"><span></span><p>' + Rword.text + '<i></i></p><div class="clear"></div></div>';
		}
	}
}

//点击右侧图标事件
var oLi = document.querySelectorAll('.fr li');
var Mask = document.querySelector('.mask');
var Windowtext = document.querySelector('.window .text');
var i = 0;
for(var i = 0; i < oLi.length ; i ++){
	oLi[i].index = i;
	oLi[i].onclick = function(){
		Mask.style.display = 'block';
		//获取标签的value值
		var Thismsg = this.attributes;
		console.log(this.attributes)
		//console.log(Thismsg.length);
		//console.log(Thismsg.value1,Thismsg.value2,Thismsg.value3);
		var j = 1;
		if(Thismsg.length  == 1){
			Windowtext.innerHTML = '<p class="title">你可以这样问我</p><p>'+Thismsg.value1.value+'</p>';
			var one = document.querySelectorAll('.window .text p');
			one[j].onclick = function(){
				myword.value = Thismsg.value1.value;
				document.querySelector('.chatting').innerHTML += '<div class="me"><span></span><p onclick="Send(str)">' + myword.value + '<i></i></p><div class="clear"></div></div>';
//				document.querySelector('.chatting').innerHTML += '<div class="me"><span></span><p>' + Thismsg.value1.value + '<i></i></p><div class="clear"></div></div>';
				Mask.style.display = 'none';
			}
		}else if(Thismsg.length  == 2){
			Windowtext.innerHTML = '<p class="title">你可以这样问我</p><p>'+Thismsg.value1.value+'</p><p>'+Thismsg.value2.value+'</p>';
			for(var j = 1;j <= Thismsg.length; j ++){
//				one[j].index = j;
//				for(var j = 1;j <= Thismsg.length; j ++){
//					one[this.index].onclick = function(){
//						myword.value = this.index.innerHTML;
//					}
//				}
			}
		}else{
			Windowtext.innerHTML = '<p class="title">你可以这样问我</p><p>'+Thismsg.value1.value+'</p><p>'+Thismsg.value2.value+'</p><p>'+Thismsg.value3.value+'</p>';
		}
	}
}
//关闭窗口
var Close = document.querySelector('.window .close');
Close.onclick = function(){
	Mask.style.display = 'none';
}
