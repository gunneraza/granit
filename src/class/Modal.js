function replaceVariables(template, variables) {
    return template.replace(/{{\s?(\w+)\s?\}\}/g, ($, $1) => {
        return variables[$1]
    })
}

let ModalTemplate = /*html*/ `
  <div class="modal-overlay" id="{{ uid }}">
    <div class="modal">
      <div class="modal__header">
        <div class="modal__title">
            {{ title }}
        </div>

        <i class="modal__close icon icon-clearclose"></i>
      </div>

      <div class="modal__body">
            {{ body }}
      </div>
    </div>
  </div>
`

function showModal(uid) {
  document.body.classList.add("modal-active")
  if(uid) {
      document.querySelector(`#` + uid).classList.add("modal-visible")
  }
}

function hideModal(uid) {
  document.body.classList.remove("modal-active")
  if(uid) {
      document.querySelector(`#` + uid).classList.remove('modal-visible')
  }

  window.removeEventListener("keyup", onEscape)
}

function onEscape(event) {
    if(event.keyCode == 27) {
        console.log('hee')
        hideModal()
    }
}

function onOverlayClick(event) {
    if(event.target.classList.contains('modal-overlay')) {
        hideModal()
    }
}

function generateID(prefix = 'uid-') {
    return prefix + Math.floor(Math.random() * 9e10)
}


class Modal {
  constructor(props) {
    this.uid = generateID()
    let schema = props.data || {};
        schema.uid = this.uid;


    this.template = replaceVariables(ModalTemplate, schema);
    document.body.insertAdjacentHTML("beforeend", this.template);

    this.modal = document.querySelector("#" + this.uid);

    this.openTriggers = document.querySelectorAll(props.openTriggers)
    this.closeTriggers = this.modal.querySelectorAll(props.closeTriggers.concat(".modal__close"))

    this.openTriggers.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            this.show()
        })
    })

    this.closeTriggers.forEach(el => {
      el.addEventListener("click", e => {
          e.preventDefault()
        this.hide()
      })
    })

    this.modal.addEventListener('click', onOverlayClick)
  }

  show() {
    showModal(this.uid)
    window.addEventListener('keyup', onEscape)
  }

  hide() {
    hideModal(this.uid)
  }
}

export default Modal