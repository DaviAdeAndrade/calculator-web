function insert(num) {
   var number = document.getElementById("res").innerHTML
   document.getElementById("res").innerHTML = number + num

}
function clean() {
    document.getElementById("res").innerHTML = ""
}
function oneLess() {
    var res = document.getElementById("res").innerHTML
   document.getElementById("res").innerHTML = res.substring(0, res.length -1)
}
function calculate() { 
    var res = document.getElementById("res").innerHTML
    if (res) {
        document.getElementById("res").innerHTML = eval(res)
    } else {
        alert("[ERROR] Please do a calculation!")
        
    }
}