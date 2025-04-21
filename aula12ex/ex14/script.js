function time() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `<h2>Now is ${hour} hours.</h2>`
    if (hour < 12) {
        img.src = 'images/morning.jpg'
        msg.innerHTML += '<p>Good morning</p>'
        document.body.style.backgroundColor = '#fbd8c5'
    } else if (hour < 18) {
        img.src = 'images/afternoon.jpg'
        msg.innerHTML += '<p>Good afternoon</p>'
        document.body.style.backgroundColor = '#ae7f6d'
    } else{
        img.src = 'images/night.jpg'
        msg.innerHTML += '<p>Good evening</p>'
        document.body.style.backgroundColor = '#2d3c3f'
    }
}