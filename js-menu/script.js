document.getElementById("menu").addEventListener('click', function(e){
    e.preventDefault();
    let menu = document.getElementById('side').innerHTML = '<ul> <li>Home</li><li>Contact</li><li>Services</li><li>About Us</li></ul>';
    // alert(menu);
    document.getElementById('menu').innerHTML = '<i class="bx bx-x"></i>';
    document.getElementById('menu').classList.add( 'active' );
    document.getElementById('container').classList.add( 'active' );
   
})



// document.getElementById("menu").addEventListener('click', function(e){
//     e.preventDefault();
//     // document.getElementById('container').classList.add( 'active' );
//     // alert(menu);
// })
