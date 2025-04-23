function count(){
    var sstart = document.getElementById('sstart').value
    var send = document.getElementById('send').value
    var sstep = document.getElementById('sstep').value
    var res = document.getElementById('res')
    var start = Number(sstart)
    var end = Number(send)
    var step = Number(sstep)
    res.innerHTML = ''
    if (step == ''){
        window.alert('[ERROR] Step is null, considering Step 1')
        step = 1
        while (start < end){
            res.innerHTML += `${start}, `
            start += step
        }
        res.innerHTML += `${start}` 
    } else if(start > end){
        window.alert('[ERROR] Start is higher than End')
    } else if(start == '') {
        window.alert('[ERROR] Please type a Start')
    }else {
        while (start < end){
            res.innerHTML += `${start}, `
            start += step
        }
        res.innerHTML += `${start}` 
    }
}