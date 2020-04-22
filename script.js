var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listedItems = document.querySelectorAll("li");
var arrayItems = Array.from(listedItems);

function inputLength() {
	return input.value.length;
}

function toggleItem() {
	this.classList.toggle("done");
	console.log(this);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleItem);
	arrayItems.push(li);
	addDeleteButton();
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton () {
	arrayItems.forEach(item => {
		console.log(item.childNodes);	
		if(item.childNodes.length < 2) {
			var button = document.createElement("button");
			button.innerHTML = "Delete";
			item.appendChild(button);
			button.addEventListener("click", function () {
				ul.removeChild(item);
			})
		}
	})
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

addDeleteButton();
