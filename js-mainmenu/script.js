document.getElementById('btn-menu').addEventListener('click', function(){
    // document.getElementById('menu').style.transform = 'translateX(0)';
    document.getElementById('menu').classList.add('active');
})
document.getElementById('btn-close').addEventListener('click', function(){
    // document.getElementById('menu').style.transform = 'translateX(0)';
    document.getElementById('menu').classList.remove('active');
})

document.querySelector('.overlay').addEventListener('click', function(){
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
})