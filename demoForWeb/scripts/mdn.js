var myImage = document.querySelector("img");
myImage.onclick = function(){
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "./img/mozilla.jpg"){
		myImage.setAttribute("src", "./img/mozilla-1.jpg");
	} else {
		myImage.setAttribute("src", "./img/mozilla.jpg");
	}
}


var myButton = document.querySelector("button");
var myHead = document.querySelector("h1");
function setUserName(){
	var userName = prompt("Please enter user name.");
	var oldUserName = localStorage.getItem("userName");
	if (userName === oldUsername){
		alert("名字不能与现在名字重复");
		return false;
	}
	localStorage.setItem("userName", userName);
	myHead.textContent = "Mozilla is cool, " + userName;
}

myButton.onclick = function(){
	 setUserName();
}


var oldUsername = localStorage.getItem("userName");
if (oldUsername !== ''){
	myHead.textContent = "Mozilla is cool, " + oldUsername;
}