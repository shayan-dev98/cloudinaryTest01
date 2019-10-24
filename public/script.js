var cloudab = require('../cloudinaryVar.js')


//const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/*****/image/upload';
//const CLOUDINARY_UPLOAD_PRESET = '*****';


//console.log(process.env.CLOUDINARY_UPLOAD_PRESET);

alert("helo");
const image = document.querySelector('#pan-File');
image.addEventListener('change', (e) => {
 const file = e.target.files[0];
 const formData = new FormData();
 formData.append('file', file);
 formData.append('upload_preset', cloudab.CLOUDINARY_UPLOAD_PRESET);



 fetch(cloudab.CLOUDINARY_URL, {
  method: 'POST',
  body: formData,
 })
  .then(response => response.json())
  .then((data) => {
   if (data.secure_url !== '') {
    const uploadedFileUrl = data.secure_url;
    localStorage.setItem('passportUrl', uploadedFileUrl);
   }
  })
  .catch(err => console.error(err));
});
