        function wypisz(){
            let imie = document.getElementById("name").value;
            document.write(imie);
        }
        document.write("<br>");
        const PI = 3.145654;
        let r = "5a";
        let a = 10;
        let b = 3;
        let napis = "5";
        let obwod_kola = 2 * PI * r;
        let dziel = a / b;
        let Iloraz = dziel.toFixed(2);
        let sqrt = Math.sqrt(a);
        let pierwiastek = Math.sqrt(b).toFixed(3);
        document.write("Liczba PI wynosi: "+ PI +", natomiast obwód koła:" + obwod_kola);
        document.write("<br>");
        document.write("suma a i b wynosi: ", a + b + r + napis);
        document.write("<br>");
        document.write("Iloczyn a i b wynosi: ", a * b);
        document.write("<br>");
        document.write("Iloraz a i b wynosi: ", Iloraz);
        //document.write("<br>");
        //document.write("Modulo a i b wynosi: ", mod);
        document.write("<br>");
        document.write("SQRT z A wynosi ", pierwiastek);
        document.write("<br>");
        document.write((a = a + 7));
        document.write("<br>");
        document.write((a = a - 37));
