
(function () {

  const buttons = document.querySelectorALL('.btn')
  const storeImages = document.querySelectorALL('.store-item')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter

      storeImages.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block'
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block'
          } else {
             item.style.display = 'none'

           }

          }


      })
    })
    });



console.log("hello world")
