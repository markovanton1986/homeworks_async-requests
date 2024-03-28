const progress = document.getElementById( 'progress' );

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    const formData = new FormData(form);
    runXHR(formData);

    e.preventDefault();
});

function fn(e) {
    progress.value = 0.7;
};

function addListeners(xhr) {
    xhr.addEventListener('loadstart', fn);
    xhr.addEventListener('load', fn);
    xhr.addEventListener('loadend', fn);
    xhr.addEventListener('progress', fn);
    xhr.addEventListener('error', fn);
};

function runXHR(formData) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    addListeners(xhr)
    xhr.send(formData);
};