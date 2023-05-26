const spinner = {
    show: function () {
        var spin = `<div class="overlay-spinner"> <div class="spinner-border text-primary" role="status"> <span class="visually-hidden">Loading...</span> </div></div>`;
        $('body').append(spin)
    },
    hide: function () {
        $('div').remove('.overlay-spinner')
    }
}