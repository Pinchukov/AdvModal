window.addEventListener('load', function(){
    new Modal('.modal-1');
    new Modal('.modal-2');
});

class Modal {
	constructor(id) {
    this.id = id;
    this.db = 'modal-pin-display-block';
    this.myId = document.querySelector(this.id);
    this.btnClose = document.querySelectorAll('.close-pin');
    this.modal = document.querySelector(`.modal-pin-container${this.id}`);
    this.myId.addEventListener('click', () => this.open());
    this.btnClose.forEach((item, i) => item.addEventListener('click', (e) => this.close(e)));
    this.modal.addEventListener('click', (e) => this.close(e));
    }
    open() {
        this.modal.classList.add(this.db);
    }
    close(e) {
        if(e.target.classList.contains('close-pin')){
             this.modal.classList.remove(this.db);
        }
        if(e.target.classList.contains('modal-pin-container')){
            e.preventDefault();
            this.modal.classList.remove(this.db);
        }
    }
}