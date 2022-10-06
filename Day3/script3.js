const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListner('onClick', () => container.classList.add("show-nav"))
close.addEventListner('onClick', () => container.classList.remove("show-nav"))