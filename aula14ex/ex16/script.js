function count(){
    var sstart = document.getElementById('sstart')
    var send = document.getElementById('send')
    var sstep = document.getElementById('sstep')
    var res = document.getElementById('res')
    if (sstart.value.length == ''){
        window.alert('[ERROR] Please fill in Start')
        res.innerHTML = ``
    }else if (send.value.length == ''){
        window.alert('[ERROR] Please fill in End')
        res.innerHTML = ``
    }else {
        var start = Number(sstart.value)
        var end = Number(send.value)
        var step = Number(sstep.value)
        res.innerHTML = ``
        if (sstep.value.length == ''){
            window.alert('[ERROR] Step is Null, considering Step 1')
            step = 1
        }
        if(start < end){
            for (var c = start; c <= end; c += step){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for (var c = start; c >= end; c -= step){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}