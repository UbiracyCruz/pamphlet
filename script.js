document.getElementById('whatsappForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const encodedMessage = encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
  const whatsappNumber = 556332252474; // Replace with the recipient's phone number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
});
