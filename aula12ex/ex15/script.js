function resu() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('syear')
    var res = document.getElementById('res')
    if (fyear.value > year.value || fyear.value.length == 0){
        window.alert(`[ERROR] Please check the info you entered and try again.`)
    } else {
        var fgen = document.getElementsByName('gender')
        var age = year - Number(fyear.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fgen[0].checked){
            gen = 'Male'
            if (age < 10){
                img.setAttribute('src', 'images/babym.jpg')
            } else if (age < 21){
                img.setAttribute('src', 'images/teenm.jpg')
            } else if (age < 65){
                img.setAttribute('src', 'images/adultm.jpg')
            } else {
                img.setAttribute('src', 'images/oldm.jpg')
            }
        } else if (fgen[1].checked){
            gen = 'Female'
            if (age < 10){
                img.setAttribute('src', 'images/babyf.jpg')
            } else if (age < 21){
                img.setAttribute('src', 'images/teenf.jpg')
            } else if (age < 65){
                img.setAttribute('src', 'images/adultf.jpg')
            } else {
                img.setAttribute('src', 'images/oldf.jpg')
            }
        } else {
            window.alert('[ERROR] Please check the info you entered and try again.')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} with ${age} years detected!`
        img.style.borderRadius = '50%'
        res.appendChild(img)
    }
}