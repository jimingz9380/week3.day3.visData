
let activate = document.querySelector("#submit-btn");
activate.onclick = character;

// function character(){
//     let data = information[1];
//     let names = document.querySelector("#name");
//     names.innerHTML = `Name: ${data.name[1]}`;

// }

function character(){
    let randomIndex = Math.random();
    randomIndex *= information.length;
    randomIndex = Math.floor(randomIndex);

    let randomcharacter = information[randomIndex];

    let nameHeading = document.getElementById("name");
    nameHeading.innerHTML = `Name: ${randomcharacter.name.title}: ${randomcharacter.name.first} ${randomcharacter.name.last}`;

    let location = document.getElementById("location");
    location.innerHTML = `Location: ${randomcharacter.location.street.number}, Street Name:${randomcharacter.location.street.name} City:${randomcharacter.location.city}, State:${randomcharacter.location.state}, Country${randomcharacter.location.country}, Postcode:${randomcharacter.location.postcode}.`;

    let email = document.getElementById("email");
    email.innerHTML = `Email:${randomcharacter.email}`

    let birth = document.getElementById("dob");
    birth.innerHTML = `DOB: ${randomcharacter.dob.date}, Age: ${randomcharacter.dob.age}`;

    let contact = document.getElementById("phone");
    contact.innerHTML = `Contact: ${randomcharacter.phone}`;

    let images = document.getElementById("profile");
    images.src = `${randomcharacter.picture.large}`;
}
