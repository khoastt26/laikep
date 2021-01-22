function compoundinterest(){
    let money = +prompt("nhap so tien gui");
    let interest = +prompt("nhap lai suat 1 nam");
    let year = +prompt("nhap so nam muon gui");
    T = money * Math.pow(1 + interest/100,year);
    alert("ca goc lan lai sau "+ year +" nam "+ T );
}
compoundinterest();