a = document.getElementById("a").value
b = document.getElementById("b").value
function sprawdz(){
let dodawanie = a+b
let odejmowanie = a-b
let iloraz = a*b
let iloczyn= a/b
  document.getElementById("wynik").innerHTML = "Wynik: " + dodawanie&&odejmowanie&&iloraz&&iloczyn
}
