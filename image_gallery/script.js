document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const images = document.querySelectorAll('.card__img');

    images.forEach(image => {
      image.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImg.src = this.src;
      });
    });

    // Close the modal when clicking on the image
    modalImg.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Close the modal when clicking on the close button
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });