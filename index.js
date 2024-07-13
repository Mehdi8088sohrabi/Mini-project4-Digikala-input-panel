let myfocus = document.getElementById('myinput');
let defu = document.getElementById('defu');
let button = document.getElementById('button');

myfocus.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});

myfocus.addEventListener('focus', function() {
    defu.classList.add('hidden');
});


myfocus.addEventListener('blur', function() {
    if (myfocus.value === '') {
        defu.classList.remove('hidden');
        defu.innerHTML = 'لطفا این فیلد را پر کنید';
    } else if (myfocus.value.length !== 11) {
        defu.classList.remove('hidden');
        defu.innerHTML = 'این شماره نامعتبر است';
    } else {
        defu.classList.add('hidden');
    }
});


button.addEventListener('click', function() {
    if (myfocus.value.length === 11) {
        window.location.href = 'https://www.digikala.com/users/login/?backUrl=/';
    } else {
        alert('شماره وارد شده باید دقیقا 11 کاراکتر باشد.');
    }
});