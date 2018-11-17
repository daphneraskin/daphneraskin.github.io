function ChangeTabHome(){
	document.getElementById('Who We Are').style.display = 'none';
	document.getElementById('Home').style.display = 'block';
	document.getElementById('What We Do').style.display = 'none';
	document.getElementById('Past Projects').style.display = 'none';
	document.getElementById('Contact').style.display = 'none';
}

function ChangeTabWho() {
	document.getElementById('Who We Are').style.display = 'block';
	document.getElementById('Home').style.display = 'none';
	document.getElementById('What We Do').style.display = 'none';
	document.getElementById('Past Projects').style.display = 'none';
	document.getElementById('Contact').style.display = 'none';
}

function ChangeTabWhat() {
	document.getElementById('Who We Are').style.display = 'none';
	document.getElementById('Home').style.display = 'none';
	document.getElementById('What We Do').style.display = 'block';
	document.getElementById('Past Projects').style.display = 'none';
	document.getElementById('Contact').style.display = 'none';
}

function ChangeTabProjects() {
	document.getElementById('Who We Are').style.display = 'none';
	document.getElementById('Home').style.display = 'none';
	document.getElementById('What We Do').style.display = 'none';
	document.getElementById('Past Projects').style.display = 'block';
	document.getElementById('Contact').style.display = 'none';
}

function ChangeTabContact(){
	document.getElementById('Contact').style.display = 'block';
	document.getElementById('Who We Are').style.display = 'none';
	document.getElementById('Home').style.display = 'none';
	document.getElementById('What We Do').style.display = 'none';
	document.getElementById('Past Projects').style.display = 'none';
}