let modalButton = document.querySelector('.modal-btn');

const showDialog = () => {
	let myDialog = new Modal();
	myDialog.showModal('.modal-container','Are you sure you want to continue?');
}

modalButton.addEventListener('click',showDialog);
