
let openTriggers = ['.header__burger']



class Menu {
    constructor(props) {
        this.menu = document.querySelector('.menu')
        this.openTriggers = document.querySelectorAll(openTriggers);
        this._isActive = false;


        this.menu.addEventListener('click', event => {
            if(event.target.classList.contains('menu__close')) {
                this.hide();
            }
        })

        this.openTriggers.forEach(el => {
            el.addEventListener('click', event => {
                this.toggle();
            })
        });
    }


    show() {
        document.body.classList.add("menu-active");
    }

    hide() {
        document.body.classList.remove("menu-active");
    }

    toggle() {
        document.body.classList.toggle("menu-active");
    }
}


export default Menu;