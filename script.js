function userInput(){
    email = document.getElementById("email").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    user = firstName + " " + lastName + " " + email;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("User " + user);
}