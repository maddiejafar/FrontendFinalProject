const artists = [
    { id: 'keepitreal', name: 'Keepitreal', image: './Images/keepitreal.png' },
    { id: 'digilab', name: 'DigiLab', image: './Images/digilab.png' },
    { id: 'gravityone', name: 'GravityOne', image: './Images/gravityone.png' },
    { id: 'juanie', name: 'Juanie', image: './Images/juanie.png' },
    { id: 'bluewhale', name: 'BlueWhale', image: './Images/bluewhale.png' },
    { id: 'mrfox', name: 'Mr Fox', image: './Images/mrfox.png' },
    { id: 'shroomie', name: 'Shroomie', image: './Images/shroomie.png' },
    { id: 'robotica', name: 'Robotica', image: './Images/robotica.png' },
    { id: 'rustyrobot', name: 'RustyRobot', image: './Images/rustyrobot.png' },
    { id: 'animakid', name: 'Animakid', image: './Images/Animakid.png' },
    { id: 'dotgu', name: 'Dotgu', image: './Images/dotgu.png' },
    { id: 'ghiblier', name: 'Ghiblier', image: './Images/ghiblier.png' },
 ];
 
 const cards = document.querySelectorAll('.card');
 
 cards.forEach(card => {
    card.addEventListener('click', () => {
       const artistId = card.getAttribute('data-artist-id');
       const selectedArtist = artists.find(artist => artist.id === artistId);
 
       if (selectedArtist) {
          localStorage.setItem('selectedArtist', JSON.stringify(selectedArtist));
       }
    });
 });
 

 document.addEventListener('DOMContentLoaded', () => {
    const selectedArtist = JSON.parse(localStorage.getItem('selectedArtist'));
 
    if (selectedArtist) {
       const artistNameElement = document.querySelector('.animakid h2');
       const artistImageElement = document.querySelector('.img img');
 
       artistNameElement.textContent = selectedArtist.name;
       artistImageElement.src = selectedArtist.image;
    }
 });
 