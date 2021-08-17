const loginBtn = document.querySelector(".login-btn");
const emailInp = document.querySelector(".emailInp");
const passInp = document.querySelector(".passInp");
loginBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (emailInp.value === "" && passInp.value === "") {
		alert(`fill the input`);
	} else if (emailInp.value === `` || typeof emailInp.value === "number") {
		alert("Please enter your valid email");
	} else if (passInp.value === ``) {
		alert("Please enter your pasword");
	} else if (emailInp.value === `bashir@gmail.com` && passInp.value === "123") {
		window.location.href = `main.html`;
	}
});
