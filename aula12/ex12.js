var time = new Date()
var hour = time.getHours()
console.log(`Now are exactly ${hour} hours!`)
if(hour < 12){
    console.log(`Good morning`)
} else if (hour < 18){
    console.log(`Good afternoon`)
} else{
    console.log(`Good evening`)
}
