window.addEventListener('load', function(){

    // "new Modal" - simple mode
    new Modal({className: '.modal-1'});
    new Modal({className: '.modal-2'});

  /*
  "new AdvModal" - advanced mode
       className: - className
       width: - any width of the container, by default 640px
       bg: - options: background-black , background-white . by default, the active class: background-black
       indentY: - An arbitrary offset from the top edge of the page, the default offset is equal: 10%
       effect: - by default, the animation is "animatetop", other options: animationTop, animationBottom, animationRight, animationLeft
   */

    new AdvModal({
        className: '.modal-3',
        width: '500px',
        indentY: '5%',
        bg: 'background-black',
        effect: 'animationRight'
    });
    const mAdv_1 = new AdvModal({ 
        className: '.modal-4',
        bg: 'background-white',
        effect: 'animationLeft'
    });

   //console.log(mAdv_1.elem.width)

});






class Modal {
    constructor(className) {
        this.className = className;
        this.classNames = document.querySelector(this.className.className);
        this.modal = document.querySelector(`.modal-container${this.className.className}`);
        // 56.37
        this.displayBlock = 'modal-display-block';
        this.classNames.addEventListener('click', () => this.open());
        this.modal.addEventListener('click', (e) => this.close(e));
    }
    open() {
        this.modal.classList.add(this.displayBlock);
    }
    close(e) {
        if(e.target.classList.contains('modal-close')){
             this.modal.classList.remove(this.displayBlock);
        }
        if(e.target.classList.contains('modal-container')){
            this.modal.classList.remove(this.displayBlock);
        }  
    }
}


class AdvModal extends Modal {
    constructor(className) {
        let defaults = {
            width: '640px',
            indentY: '10%',
            bg: 'background-black',
            effect: 'animatetop'
        };
        let op = Object.assign({}, defaults, className);
        super(op);
        this.adds()
    }
    adds() {
        this.modal.children[0].style.width = this.className.width;
        this.modal.children[0].style.marginTop = this.className.indentY;
        this.modal.classList.add(this.className.bg);
        this.modal.children[0].classList.add(this.className.effect);
    }
}



/* Turn off the restart page in the form of a modal window after clicking the submit button */
let formRebootNo = document.querySelectorAll('.modal-body form');
for(let i = 0; i < formRebootNo.length; i++) {
    //console.log(formRebootNo[i]);
    formRebootNo[i].setAttribute("onsubmit", "return false;");
}