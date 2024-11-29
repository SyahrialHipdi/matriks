const form = document.getElementById("form");
const kali = document.getElementById("kali");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const inversion = document.getElementById("inversion");
const transpose = document.getElementById("transpose");
const scalar = document.getElementById("scalar");
let all;
let matriks=[];
let satu;
let dua;
let hasil;
form.addEventListener("submit",function(e){
    e.preventDefault();
    tables = document.querySelectorAll("table");
    tables.forEach(e => {
        let table = e.querySelectorAll('tr');
        let vector=[];
        table.forEach(Element => {
            let tr = Element.querySelectorAll('input');
            let baris = [];
            tr.forEach(td => {
                baris.push(td.value);
            });
            vector.push(baris);
        });
        matriks.push(vector);
    });
    satu =matriks[0];
    dua =matriks[1];
    hasil = math.multiply(satu,dua);
    let table = document.createElement('table');

    hasil.forEach(e => {
        let tr = document.createElement('tr');
        e.forEach(f=> {
            let input = document.createElement('input');
            input.type = 'number';
            input.value = f;
            let td = document.createElement('td');
            td.appendChild(input);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    document.body.appendChild(table);
    return false;
});


function kirim(e){
    e.preventDefault();
    tables = document.querySelectorAll("table");
    tables.forEach(e => {
        let table = e.querySelectorAll('tr');
        let vector=[];
        table.forEach(Element => {
            let tr = Element.querySelectorAll('input');
            let baris = [];
            tr.forEach(td => {
                baris.push(td.value);
            });
            vector.push(baris);
        });
        matriks.push(vector);
    });
    satu =matriks[0];
    dua =matriks[1];
    return false
}

function tambahmatriks(elemen){
    kirim(elemen);
    hasil = math.add(satu,dua);
    isi(hasil);
}

function kurangmatriks(elemen){
    kirim(elemen);
    hasil = math.subtract(satu,dua);
    isi(hasil);
}

function kalimatriks(elemen){
    kirim(elemen);
    hasil = math.multiply(satu,dua);
    isi(hasil);
}

function scalarmatriks(elemen){
    let temp = prompt("masukan nilai skalar");
    kirim(elemen);
    hasil = math.multiply(temp,satu);
    isi(hasil);
}

function transposematriks(elemen){
    kirim(elemen);
    hasil = math.transpose(satu);
    isi(hasil);
}

function inversionmatriks(elemen){
    kirim(elemen);
    hasil = math.inv(satu);
    isi(hasil);
}


function isi(hasil){
    let table = document.createElement('table');
    hasil.forEach(e => {
        let tr = document.createElement('tr');
        e.forEach(f=> {
            let input = document.createElement('input');
            input.type = 'number';
            input.value = f;
            let td = document.createElement('td');
            td.appendChild(input);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    document.body.appendChild(table);
    return false;
}

tambah.addEventListener("click",tambahmatriks);
kurang.addEventListener("click",kurangmatriks);
kali.addEventListener("click",kalimatriks);
transpose.addEventListener("click",transposematriks);
inversion.addEventListener("click",inversionmatriks);
scalar.addEventListener("click",scalarmatriks);
