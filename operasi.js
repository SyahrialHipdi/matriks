const form = document.getElementById("form");
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
