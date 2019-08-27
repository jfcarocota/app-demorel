const banner = document.getElementById('#banner');
const bannerTwitter = document.getElementById('#banner-twitter');

banner.addEventListener('mouseover', () =>{
    bannerTwitter.classList.toggle('show-banner-twitter');
});