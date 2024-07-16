document.addEventListener('DOMContentLoaded', () => {
    const callButton = document.getElementById('callButton');
    const infoPopup = document.getElementById('infoPopup');
    const closeButton = document.getElementById('closeButton');

    callButton.addEventListener('click', () => {
        if (infoPopup.style.display === 'none' || infoPopup.style.display === '') {
            infoPopup.style.display = 'block';
        } else {
            infoPopup.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', () => {
        infoPopup.style.display = 'none';
    });
});
