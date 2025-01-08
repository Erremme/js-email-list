//VARIABLES
let emailDom =""
let emailRandom = []; 

//DOM ELEMENT
const emailListElm = document.getElementById("email-list")
const btnEmailElm = document.getElementById("btn-email")


//DOM EVENT

//load page
for(i = 1; i <= 10 ; i++ ){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
    .then(function (response) {
      // handle success
      console.log(response.data.response);
      emailRandom = response.data.response
      emailDom += `<li> <span class="space text-black">EMAIL:</span> <span class="space">${response.data.response}</span></li>`
      emailListElm.innerHTML = emailDom
    })
 
}  


// click event
btnEmailElm.addEventListener("click", function() {
    location.reload()
    for(i = 1; i <= 10 ; i++ ){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
        .then(function (response) {
          // handle success
          console.log(response.data.response);
          emailRandom = response.data.response
          emailDom += `<li> <span>EMAIL:</span> <span>${response.data.response}</span></li>`
          emailListElm.innerHTML = emailDom
        })
     
    }  
})





    






/*let emailDom = "";
let email = [];
let emailInt = [ "rafghha@gmail.com", "rafghha@gmail.com", "rafghha@gmail.com", "rafghha@gmail.com", "rafghha@gmail.com"];
for(i = 0; i <= emailInt.length -1; i++ ){
    email.push(emailInt[i])
    emailDom += `<li>${emailInt[i]}</li>` 
}  
 emailListElm.innerHTML = emailDom*/









