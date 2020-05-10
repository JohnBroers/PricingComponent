(() => {
    const inputElement = document.querySelector('.toggle__input');
    const pricingTable = document.querySelector('.pricing')

    inputElement.addEventListener('change', function() {
        if(!this.checked) {
            pricingTable.classList.add('pricing--year');
            pricingTable.classList.remove('pricing--month');
        } else {
            pricingTable.classList.add('pricing--month');
            pricingTable.classList.remove('pricing--year');
        }
    })
})();