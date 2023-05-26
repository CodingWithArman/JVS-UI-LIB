$('div[tool-type="combobox"] ul li button').click((e) => {
    $(e.target)
        .closest('div[tool-type="combobox"]')
        .find("button[data-selected-status]")
        .html(e.target.dataset.status);
    $(e.target)
        .closest('div[tool-type="combobox"]')
        .find("button[data-selected-status]")
        .attr("data-selected-status", e.target.dataset.status);
});