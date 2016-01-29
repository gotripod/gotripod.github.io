var els = document.getElementsByClassName('reveal');

function onAccordionToggle() {
    var reveal = this.nextElementSibling;

    if(reveal.dataset.expanded === 'true') {
        reveal.style.height = 0;
        reveal.dataset.expanded = false;
    } else {
        reveal.style.height = reveal.dataset.expandedHeight + 'px';
        reveal.dataset.expanded = true;
    }
}

for (var i = 0; i < els.length; i++) {
    els[i].dataset.expandedHeight = els[i].offsetHeight;
    els[i].style.height = 0;

    els[i].previousElementSibling.addEventListener('click', onAccordionToggle);
};