function toggleButton() {
  const checkbox = document.getElementById('readTerms');
  const button = document.getElementById('confirmButton');
  button.disabled = !checkbox.checked;
}

document.getElementById('confirmButton').addEventListener('click', () => {
  if (document.getElementById('readTerms').checked) {
      alert('Thank you for accepting the Terms of Service!');
      // Redirect to the Discord channel
      window.location.href = 'https://discord.gg/mwx5qYN7DT';
  }
});
