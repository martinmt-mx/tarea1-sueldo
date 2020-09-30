console.log("rango sueldo   :: aumento")
console.log("    0 a 1000   :: 15%")
console.log(" 1001 a 1200   :: 12%")
console.log(" 1201 a 1400   :: 10%")
console.log(" 1401 a 1500   :: 8%")
console.log(" mas de 1500   :: 5%")
console.log("-------------------------")
var sueldo1 = 500
var sueldoTotal

if (sueldo1>=0 && sueldo1<=1000){
    sueldoTotal = sueldo1*1.15
}
else if(sueldo1>1001 && sueldo1<1200){
    sueldoTotal = sueldo1*1.12
}
else if(sueldo1>1201 && sueldo1<1400){
    sueldoTotal = sueldo1*1.10
}
else if(sueldo1>1401 && sueldo1<1500){
    sueldoTotal = sueldo1*1.08
}
else if(sueldo1>1500){
    sueldoTotal = sueldo1*1.05
}

console.log("Sueldo Original:", sueldo1)
console.log("Sueldo Aumentado:", sueldoTotal)