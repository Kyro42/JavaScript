var anum = []
function add() {
    var snum = document.getElementById('snum')
    var num = Number(snum.value)
    var res = document.getElementById('res')
    var area = document.getElementById('area')
    var duplicated = anum.indexOf(num)
    if (snum.value.length == 0) {
        window.alert('Please insert a number before adding')
    } else if (num < 1 || num > 100){
        window.alert('Please insert a number between 1 - 100')
    } else if (duplicated !== -1){
        window.alert('This number has already been added')
    } else {
        res.innerHTML = ''
        anum.push(num)
        var item = document.createElement('option')
        item.text = `Number ${num} added`
        area.appendChild(item)
    }
}
function finish(){
    if (anum.length == 0) {
        window.alert('Please enter a number before finishing')
    } else {
        anum.sort(function(a, b){return a - b})
        var last = anum.length 
        res.innerHTML += `<p>In total, ${last} numbers were added.</p>`
        res.innerHTML += `<p>The lowest number was ${anum[0]}</p>`
        res.innerHTML += `<p>The highest number was ${anum[last - 1]}</p>`
        var sum = 0
        for (var c = 0; c < last; c++) {
            sum += anum[c]
        }
        res.innerHTML += `<p>Adding all the values we have ${sum}</p>`
        res.innerHTML += `<p>The average of the values are ${sum/last}</p>`
    }
}