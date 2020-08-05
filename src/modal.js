window.addEventListener('load', function(){

    // "new Modal" - simple mode
    new Modal({elem: '.modal-1'});
    new Modal({elem: '.modal-2'});

  /*
  "new AdvModal" - advanced mode
       elem: - className
       width: - any width of the container, by default 640px
       bg: - options: background-black , background-white . by default, the active class: background-black
       indentY: - An arbitrary offset from the top edge of the page, the default offset is equal: 10%
       effect: - by default, the animation is "animatetop", other options: animationTop, animationBottom, animationRight, animationLeft
   */

    new AdvModal({
        elem: '.modal-3',
        width: '500px',
        indentY: '5%',
        bg: 'background-black',
        effect: 'animationRight'
    });
    const mAdv_1 = new AdvModal({ 
        elem: '.modal-4',
        bg: 'background-white',
        effect: 'animationLeft'
    });

   //console.log(mAdv_1.elem.width)

});






class Modal {
    constructor(elem) {
        this.elem = elem;
        this.elems = document.querySelector(this.elem.elem);
        this.modal = document.querySelector(`.modal-container${this.elem.elem}`);
        // 56.37
        this.db = 'modal-display-block';
        this.elems.addEventListener('click', () => this.open());
        this.modal.addEventListener('click', (e) => this.close(e));
    }
    open() {
        this.modal.classList.add(this.db);
    }
    close(e) {
        if(e.target.classList.contains('modal-close')){
             this.modal.classList.remove(this.db);
        }
        if(e.target.classList.contains('modal-container')){
            this.modal.classList.remove(this.db);
        }  
    }
}


class AdvModal extends Modal {
    constructor(elem) {
        let defaults = {
            width: '640px',
            indentY: '10%',
            bg: 'background-black',
            effect: 'animatetop'
        };
        let op = Object.assign({}, defaults, elem);
        super(op);
        this.adds()
    }
    adds() {
        this.modal.children[0].style.width = this.elem.width;
        this.modal.children[0].style.marginTop = this.elem.indentY;
        this.modal.classList.add(this.elem.bg);
        this.modal.children[0].classList.add(this.elem.effect);
    }
}



/* Turn off the restart page in the form of a modal window after clicking the submit button */
let formRebootNo = document.querySelectorAll('.modal-body form');
for(let i = 0; i < formRebootNo.length; i++) {
    //console.log(formRebootNo[i]);
    formRebootNo[i].setAttribute("onsubmit", "return false;");
}