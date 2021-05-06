console.log("test");
const form = document.querySelector("form");
// console.log(form);
let userInfo = {};
let errorMessage = "";
function handleForm(event){
    event.preventDefault();
    // console.dir(event.target);
    userInfo.email = form.elements.email.value;
    userInfo.age = form.elements.age.value;
    userInfo.name = form.elements.name.value;
    userInfo.userName = form.elements.username.value;

    let userNameElement = event.target.elements.username;
    
    if(userNameElement.value === ""){
        errorMessage = "Can't be empty!"
        userNameElement.classList.add("error");
    }
    else if(userNameElement.value.length < 5){
        errorMessage = "Can't be less than 5 characters"
        userNameElement.classList.add("error");

    }
    else if(!userNameElement.value.split("").some(e => Number(e))){
        errorMessage = "Must contain atleast one number"
        userNameElement.classList.add("error");

    }
    else {
        errorMessage = "";
        userNameElement.classList.add("success");
        userNameElement.classList.remove("error");

    }   
    userNameElement.nextElementSibling.innerText = errorMessage;


    


}




form.addEventListener("submit",handleForm);


// can't be empty
//  minimum 5 char
// must containes one number