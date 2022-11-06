/** 
 * Nice Dialog class v.2.0
 * @constructor This create the modal and the divs to append them in the showModal method 
 * @showModal Method Appends the close button and the overlay layer to the modal div
 */

 class Modal {
	constructor() {
		this.closeButton = document.createElement('span');
		this.overlay = document.createElement('div');
		this.modal = document.createElement('div');
		this.confirmation = document.createElement('button');
		const confirmText = document.createTextNode('Yes');
		this.confirmation.appendChild(confirmText);
		this.confirmation.classList.add('confirmation');
		this.cancel = document.createElement('button');
		this.cancel.classList.add('cancel');
		const cancelText = document.createTextNode('Cancel');
		this.cancel.appendChild(cancelText);
		

		this.closeButton.classList.add('close-modal');
		this.overlay.classList.add('overlay');
		this.modal.classList.add('modal');

		this.closeButton.addEventListener('click', this.closeModal.bind(this));
		this.confirmation.addEventListener('click',this.onConfirm.bind(this));
		this.confirmation.addEventListener('click',this.onCancel.bind(this));

		this.buttonAction = document.createElement('p');
	}

	showModal(selector,modalTitleContent) {
		let niceWrapper = document.querySelector(selector);
		let body = document.querySelector('body');

		let modalContent = document.querySelector('.modal-content');
		const modalTitle = document.createElement('h3');
		const modalText = document.createTextNode(modalTitleContent);
		modalTitle.appendChild(modalText);
		modalContent.appendChild(modalTitle);
		modalContent.appendChild(this.confirmation);
		modalContent.appendChild(this.cancel);

		niceWrapper.appendChild(this.closeButton);
		this.modal.appendChild(this.overlay);
		this.overlay.appendChild(niceWrapper);
		this.overlay.classList.add('modal-show');

		body.appendChild(this.modal);

	}

	closeModal() {
		this.overlay.classList.remove('modal-show');
		document.querySelector('.modal-content').innerHTML='';
	}

	onConfirm(){
		document.querySelector('.modal-content').innerHTML='';
		this.overlay.classList.remove('modal-show');
		const actionText = document.createTextNode('Yes was clicked');
		this.buttonAction.appendChild(actionText);
		let modalContent = document.querySelector('.modal-content');
		modalContent.appendChild(this.buttonAction);
	}

	onCancel(){
		this.overlay.classList.remove('modal-show');
		document.querySelector('.modal-content').innerHTML='';
		const actionText = document.createTextNode('Cancel was clicked');
		this.buttonAction.appendChild(actionText);
		let modalContent = document.querySelector('.modal-content');
		modalContent.appendChild(this.buttonAction);
	}


}