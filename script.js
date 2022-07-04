var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.querySelectorAll("li");




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var delBtn = document.createElement("button");
	var li = document.createElement("li");
	var div = document.createElement("div");


	div.append(li, delBtn);
	delBtn.classList.add("del");



	li.appendChild(document.createTextNode(input.value));
	
	input.value = "";
	ul.appendChild(div);
	delBtn.innerHTML = "Delete"
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		
	}
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleLi(element){
	if(element.target.tagName === "LI"){
		element.target.classList.toggle("done")
		
	}
}

function deleteList(element){
	if (element.target.className === "del"){
		element.target.parentElement.remove();
	}
}

function action (element){
	toggleLi(element);
	deleteList(element);
}

ul.addEventListener("click", action)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);