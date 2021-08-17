const logOut = document.querySelector(`.logOut`);
logOut.addEventListener(`click`, function () {
	window.location.href = "login.html";
});
//total ammount feild
const totalAmmount = document.querySelector(`.totalAmmount`);

//============deposite input feild============
const dipInpBtn = document.querySelector(`.dipInpBtn`);

//diposite button action
dipInpBtn.addEventListener(`click`, (e) => {
	e.preventDefault();
	// get input from deposite input feild
	const dipInp = document.querySelector(`.dipInp`);
	const dipAmVal = parseFloat(dipInp.value);

	// update  diposite ammount on the dash board
	const dipAm = document.querySelector(`.dipAm`);
	const pervDepAm = parseFloat(dipAm.innerText);

	//set update value on the deposite ammount
	const newTotaldDepAm = pervDepAm + dipAmVal;
	dipAm.innerText = newTotaldDepAm;
	//set the deposite value on the total ammount
	const totalAmmountVal = parseInt(totalAmmount.innerText);
	totalAmmount.innerText = totalAmmountVal + dipAmVal;
	// dipInp.value = "";
});

//===========withdraw input feild=================//
const withdInpBtn = document.querySelector(`.withdInpBtn`);
//withdraw button action
withdInpBtn.addEventListener(`click`, (e) => {
	e.preventDefault();
	// get withdrwal value
	const withdInp = document.querySelector(`.withdInp`);
	const withAmVal = parseFloat(withdInp.value);
	// set withdrawal ammount
	const withdrawAm = document.querySelector(`.witAm`);
	const prevWitAmp = parseFloat(withdrawAm.innerText);
	const totalWithdrawAm = withAmVal + prevWitAmp;
	withdrawAm.innerText = totalWithdrawAm;
	//set the value after withdraw
	const totalAmmountVal = parseInt(totalAmmount.innerText);
	totalAmmount.innerText = totalAmmountVal - withAmVal;
	// withdInp.value = "";
});
