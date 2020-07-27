const previewElement = document.getElementById('preview');
var value = document.getElementById('editor').value;
var mark="";

window.onLoad = chngetext(); 


function chngetext(){
	value = document.getElementById('editor').value;
	mark = marked(value);
	previewElement.innerHTML = mark;
}