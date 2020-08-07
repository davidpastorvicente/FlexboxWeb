function toggle() {
    var navbar = document.getElementById('nav');
    if(navbar.className == 'topnav')
        navbar.className += ' ext';
    else navbar.className = 'topnav';
}
