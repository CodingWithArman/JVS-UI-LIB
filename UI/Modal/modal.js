
// Tools/Modal
const $body = $("body");
const $staticBackdrop = $("#staticBackdrop");
class CustomButton {
    constructor(id, text, type, className, action) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.className = className;
        this.action = action;
    }

    render() {
        const button = document.createElement("button");
        button.id = this.id;
        button.innerHTML = this.text;
        button.type = this.type;
        button.className = this.className;
        button.addEventListener("click", this.action);
        return button;
    }
}
const Alert2 = {
    fire: (options) => {
        // Create a new object to store the default options
        const defaults = {
            header: '',
            title: '',
            message: '',
            modelclass: '',
            btnposition: 'AlertFooter',
            btn: [],
            footer: '',
            prop: {
                modal: {
                    keyboard: true,
                    backdrop: true,
                    focus: true,
                    style: {
                        // Set the width of the modal
                        width: '',
                        // Set the maximum width of the modal
                        maxWidth: '',
                        // Set the height of the modal
                        height: '',
                        // Set the maximum height of the modal
                        maxHeight: ''
                    },
                    closable: true
                }
            }
        };
        // Merge the default options with the user-defined options
        const settings = Object.assign({}, defaults, options);
        console.log(settings);

        const buttons = settings.btn.map(
            (btn) => new CustomButton(btn.id, btn.text, btn.type, btn.className, btn.action)
        );



        const model = `
        <div class="modal fade ${settings.modelclass}" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" style="width:${settings.prop.modal.style.width};max-width:${settings.prop.modal.style.maxWidth};height:${settings.prop.modal.style.height};max-height:${settings.prop.modal.style.maxHeight}">
                <div class="modal-content">
                    <div class="modal-header" id="AlertHeader">
                         ${settings.header}
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">${settings.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="AlertBody">
                        ${settings.message}                                                                   
                    </div>
                    <div class="modal-footer" id="AlertFooter">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                
                    </div>
                </div>
            </div>
        </div>`;

        const myPromise = new Promise((resolve, reject) => {
            if ($('#staticBackdrop').length > 0) {
                $('#staticBackdrop').replaceWith(model);
                buttons.forEach((button) => {
                    const buttonElement = button.render();
                    $('#' + settings.btnposition).append(buttonElement);
                });
                resolve();
            }
            else {
                $body.append(model);
                buttons.forEach((button) => {
                    const buttonElement = button.render();
                    $('#' + settings.btnposition).append(buttonElement);
                });
                resolve();
            }
        });

        myPromise.then(() => {
            // $btnModel.toggle(settings.btnst);
            $('button[data-bs-dismiss="modal"]').toggle(settings.prop.modal.closable);
            modal.show(settings.prop.modal);
        });
    }
}

const modal = {
    show: (options) => {
        const modal = new bootstrap.Modal("#staticBackdrop", options);
        modal.show();
    },
    hide: () => {
        const modal = $("#staticBackdrop");
        modal.modal('hide');
    },
    destroy: () => {
        const modal = $("#staticBackdrop");
        modal.modal('dispose');
    }
};