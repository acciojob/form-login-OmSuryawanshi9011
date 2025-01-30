function getFormvalue(event) {
	event.preventDefault();
    var fname = document.querySelector('input[name="fname"]').value;
	var lname = document.querySelector('input[name="lname"]').value;
	alert(fname + " " + lname);
}
