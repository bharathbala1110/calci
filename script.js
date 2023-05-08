function display(num) {
	let ouputScreen = document.getElementById("output-screen");
	ouputScreen.value += num;
}
function calculate() {
	try {
		let ouputScreen = document.getElementById("output-screen");

		ouputScreen.value = eval(ouputScreen.value);
	} catch (err) {
		alert("Invalid");
	}
}
function clearValue() {
	let ouputScreen = document.getElementById("output-screen");
	ouputScreen.value = "";
}
function del() {
	let ouputScreen = document.getElementById("output-screen");
	ouputScreen.value = ouputScreen.value.slice(0, -1);
}
function isNumber(evt) {
	evt = evt ? evt : window.event;
	var charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}
