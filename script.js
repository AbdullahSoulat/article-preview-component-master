const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');
const root = document.querySelector(':root');
let shareMenuOpened = true;

shareBtn.addEventListener('click', (e) => {
    shareMenu.classList.toggle('hidden');
    if (shareMenuOpened) {
        shareBtn.style.color = 'white';
        shareMenuOpened = false;
        root.style.setProperty('--share-btn-background', '#6d7f97');
    } else {
        shareBtn.style.color = '#6E8098';
        shareMenuOpened = true;
        root.style.setProperty('--share-btn-background', '#ecf2f8');
    }
})
