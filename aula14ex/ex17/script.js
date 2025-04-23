function table(){
    var snum = document.getElementById('snum')
    var area = document.getElementById('sarea')
    var res = document.getElementById('res')
    if (snum.value.length == 0){
        window.alert('Please fill in Number')
    } else {
        var num = Number(snum.value)
        area.innerHTML = ''
        res.style.display = 'block'
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `l${c}`
            area.appendChild(item)
        }
    }
}