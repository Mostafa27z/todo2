window.addEventListener("load", () => {
	 local = JSON.parse( localStorage.getItem("task")) || [];
	let form = document.querySelector("form");
	let input = document.querySelector("form input");
	display();
	form.addEventListener("submit", (e) =>{
		e.preventDefault();
		const todo = {
			task: e.target.elements.task.value
		}
		if(e.target.elements.task.value.trim()){
			 local.push(todo);
			 e.target.reset();
		}
		else{
			alert("Enter a task ");
		}
		localStorage.setItem("task", JSON.stringify(local));
		display();
		
		
	});

});
function display() {

	document.querySelector(".tasks").innerHTML="";
	for (var i = 0; i < local.length; i++) {
			document.querySelector(".tasks").innerHTML+=`<div class="task">
			<input type="text" name="t" value="${local[i].task}" readonly="" class="tk" >
			<div>
			<button class="edit">Edit</button>
			<button class="delete">Delete</button>
			</div>
		</div>`
		}
			let del = document.querySelectorAll(".delete");

	
del.forEach((d,i) => {
	d.addEventListener("click" ,() => {
		local.splice(i,1);
		localStorage.setItem("task", JSON.stringify(local));
		display();
	
	});
});
let edt = document.querySelectorAll(".edit");
let im = document.querySelectorAll(".tk");
edt.forEach((e,j) =>{
	e.addEventListener("click", ()=>{
		if(e.innerText== "Edit"){
			im[j].removeAttribute("readonly");
			e.innerText= "Update";

		}
		else{
			e.innerText= "Edit";
			im[j].setAttribute("readonly","readonly");
			local[j].task = im[j].value;
			localStorage.setItem("task", JSON.stringify(local));
			
		}
		
	})
})
}