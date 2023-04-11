
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const birthdate = document.querySelector('#birthdate').value;


  const formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    birthdate: birthdate
  };


 
});
