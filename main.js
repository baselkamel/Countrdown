const countdate=new Date('Dec 10 2024 14:30:55').getTime()
var x=setInterval(function(){
let now=new Date().getTime()
let distance =countdate-now
var days=Math.floor(distance/(1000*60*60*24))

var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
var minutes=Math.floor((distance%(1000*60*60))/(1000*60))
var second=Math.floor((distance%(1000*60))/(1000))

document.getElementById('days').innerHTML=`${days}d`
document.getElementById('hours').innerHTML=`${hours}h`
document.getElementById('minuets').innerHTML=`${minutes}m`
document.getElementById('second').innerHTML=`${second}s`

},1000)
