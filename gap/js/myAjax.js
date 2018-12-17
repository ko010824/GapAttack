//功能：发送ajax请求
//参数：
//	请求方式
//	请求地址
//	请求参数
//	是否异步
//	回调函数
//返回值：无

function ajax01(method,url,param,isAsync,func){
	var xhr = new XMLHttpRequest();
	var urlAndParam = url;
	if(method.toLowerCase()=="get" && param!=""){
		urlAndParam +="?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			func&&func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}


//可以进一步将参数传为对象
function ajax02(obj){
	var xhr = new XMLHttpRequest();
	var urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.param!=""){
		urlAndParam +="?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}



//参数是对象，而且其中有的值是默认值
function ajax03(obj){
	var defaultObj = {
		method:"get",
		url:"#",
		param:"",
		isAsync:true,
		func:null
	};
	for(var key in defaultObj){
		if(obj[key]){
			defaultObj[key] = obj[key];
		}
	}
	
	var xhr = new XMLHttpRequest();
	var urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam +="?"+defaultObj.param;
	}
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}
