#program kalkulator, ćwiczenie instrukcji warunkowej if
wybierz_dzialanie = input("Co chcesz zrobić?: + - dodawać, - odejmować, * - mnożenie, / - dzielić:") 
pierwsza_liczba =int(input("Podaj pierwszą liczbę:"))
druga_liczba =int(input("Podaj drugą liczbę:"))
# instrukcja warunkowa if
if(wybierz_dzialanie =="+"):
  print("Suma liczb wynosi:", pierwsza_liczba + druga_liczba)
elif(wybierz_dzialanie =="-"):
  print("Różnica liczb wynosi:", pierwsza_liczba - druga_liczba)
elif(wybierz_dzialanie =="*"):
  print("Iloczyn liczb wynosi:", pierwsza_liczba * druga_liczba)
elif(wybierz_dzialanie =="/"):
  print("Dzielnik liczb wynosi:", pierwsza_liczba / druga_liczba)
else:
 print("nie wybrałeś dobrego wyboru")
