function showAbout() {
    let other = document.getElementById('home');
    let aboutUs = document.getElementById('about');
    aboutUs.style.display = 'block';
    other.style.display = 'none';

}

function showHome() {
    let aboutUs = document.getElementById('about');
    let other = document.getElementById('home');
    aboutUs.style.display = 'none';
    other.style.display = 'block';
}