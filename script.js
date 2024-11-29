let tambahbaris1 = document.getElementById('baris1');
let tambahbaris2 = document.getElementById('baris2');
let tambahkolom1 = document.getElementById('kolom1');
let tambahkolom2 = document.getElementById('kolom2');
let hbaris1 = document.getElementById('hbaris1');
let hbaris2 = document.getElementById('hbaris2');
let hkolom1 = document.getElementById('hkolom1');
let hkolom2 = document.getElementById('hkolom2');

tambahbaris1.addEventListener("click",function(e){
    e.preventDefault();
    let table = tambahbaris1.previousElementSibling;
    let tr = table.querySelectorAll('tr');
    let td = tr[0].querySelectorAll('td');
    let panjangtr = td.length;
    let barisbaru = document.createElement('tr');
    for (let i = 0; i < panjangtr; i++) {
       let kolombaru = document.createElement('td');
       let inputbaru = document.createElement('input');
       inputbaru.type='number';
       kolombaru.appendChild(inputbaru);
       barisbaru.appendChild(kolombaru);
    }
    table.querySelector('tbody').appendChild(barisbaru);
    return false;
});

tambahbaris2.addEventListener("click",function(e){
    e.preventDefault();
    let table = tambahbaris2.previousElementSibling;
    let tr = table.querySelectorAll('tr');
    let td = tr[0].querySelectorAll('td');
    let panjangtr = td.length;
    let barisbaru = document.createElement('tr');
    for (let i = 0; i < panjangtr; i++) {
       let kolombaru = document.createElement('td');
       let inputbaru = document.createElement('input');
       inputbaru.type='number';
       kolombaru.appendChild(inputbaru);
       barisbaru.appendChild(kolombaru);
    }
    table.querySelector('tbody').appendChild(barisbaru);
    return false;
});

tambahkolom1.addEventListener("click",function(e){
    e.preventDefault();
    let parent = tambahkolom1.parentElement;
    let table = parent.querySelector('table');
    let tr = table.querySelectorAll('tr');
    tr.forEach(e => {
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type='number';
        td.appendChild(input);
        e.appendChild(td);
    });
});

tambahkolom2.addEventListener("click",function(e){
    e.preventDefault();
    let parent = tambahkolom2.parentElement;
    let table = parent.querySelector('table');
    let tr = table.querySelectorAll('tr');
    tr.forEach(e => {
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type='number';
        td.appendChild(input);
        e.appendChild(td);
    });
})

hbaris1.addEventListener("click",function(e){
    e.preventDefault();
    if (hbaris1.parentElement.querySelectorAll('tr').length>1) {
        let parent = hbaris1.parentElement;
        let table = parent.querySelector('table');
        let tr = table.querySelectorAll('tr');
        table.querySelector('tbody').lastElementChild.remove();
    } else {
        console.log('baris tidak bisa dihapus');
    }
});

hbaris2.addEventListener("click",function(e){
    e.preventDefault();
    if (hbaris2.parentElement.querySelectorAll('tr').length>1) {
        let parent = hbaris2.parentElement;
        let table = parent.querySelector('table');
        let tr = table.querySelectorAll('tr');
        table.querySelector('tbody').lastElementChild.remove();
    } else {
        console.log('baris tidak bisa dihapus');
    }
});

hkolom1.addEventListener("click",function(e){
    e.preventDefault();
    if (hkolom1.parentElement.querySelectorAll('tr:nth-child(1) td').length>1) {
        let parent = hkolom1.parentElement;
        let table = parent.querySelector('table');
        let tr = table.querySelectorAll('tr');
        tr.forEach(td => {
            td.lastElementChild.remove();
        });
    } else {
        console.log('kolom tidak bisa dihapus');
    }
});

hkolom2.addEventListener("click",function(e){
    e.preventDefault();
    if (hkolom2.parentElement.querySelectorAll('tr:nth-child(1) td').length>1) {
        let parent = hkolom2.parentElement;
        let table = parent.querySelector('table');
        let tr = table.querySelectorAll('tr');
        tr.forEach(td => {
            td.lastElementChild.remove();
        });
    } else {
        console.log('kolom tidak bisa dihapus');
    }
});