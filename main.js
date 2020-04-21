let rnum = Math.ceil(Math.random() * 100);
let pr = document.getElementById("output");
let pa = document.getElementById("array");
let arr = [];
let but = document.getElementById("b");
let x , btn;
but.onclick = function(){
	x = document.getElementById("guess");
	if(x.value > 100 || x.value < 1)
	{
		alert("Wrong input");
		return;
	}
	arr.push(x.value)
	if(arr.length > 10)
	{
		pr.innerHTML = "You have made all 10 attempts.";
		pr.style.backgroundColor = "red";
		cb();
		return;
	}
	print(arr);
	let r ;
	if(x.value == rnum)
	{
		pr.innerHTML = 'Your guess is CORRECT';
		pr.style.backgroundColor = "green";
		cb();
		return ;
	}

	if(x.value > rnum){
		r = 'Too High';
	}
	else{
		r = 'Too Low';
	}
	pr.innerHTML = "Your guess is " + r;
	pr.style.backgroundColor = "red";
}

function print(arr){
	let i,t = "Previous guesses: ";
	for(i = 0; i < arr.length; i++){
	   t += arr[i] + " ";
	}
	pa.innerHTML = t;
}

function cb(){
	x.disabled = true;
	but.disabled = true;

	btn = document.createElement("button");
	btn.innerHTML = "Start new game";
	btn.align = "center";
	document.getElementById("myDiv").appendChild(btn);
	btn.addEventListener("click", reset);
}

function reset(){
	rnum = Math.ceil(Math.random() * 100);
	pa.innerHTML = "";
	pr.innerHTML = "";
	arr = [];
	x.disabled = false;
	but.disabled = false;
	btn.remove();
}