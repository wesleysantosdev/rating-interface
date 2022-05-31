const list = document.querySelectorAll('.bs-list-number')
const rating = document.querySelector('.selected-rating')


list.forEach((item, i) => {
    item.addEventListener('click', () => {
        list.forEach((otherItem, otherIndex) => {
            item.classList.add('active')
            if (otherIndex > i || otherIndex < i){
                item.classList.add('active')
                otherItem.classList.remove('active')
            }
        })
        const index = parseInt(item.getAttribute('data-rate'))
        localStorage.setItem('indexItem', index);
    })
});

rating.textContent = localStorage.getItem('indexItem')