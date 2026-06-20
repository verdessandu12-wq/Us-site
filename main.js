let user = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

let button_gata = document.querySelector("#gata");
let span = document.querySelector("#span_error");
let span2 = document.querySelector("#span_error2");
let span3 = document.querySelector("#span_error3");
let labels = document.querySelectorAll('.label_user');
let all_inputs = document.querySelectorAll('.input_username');
let end = document.querySelector("#end");
let corect = [false, false, false];
let finall = 0;
button_gata.addEventListener("click", () => {
   if(user.value.trim() == ''){
      span.textContent = "Spațiul acesta nu poate să fie gol";
        corect[0] = false;
   }
   
   else {
      span.textContent = '';
      corect[0] = true;
   }
     if(password.value.trim() == ''){
      span2.textContent = "Spațiul acesta nu poate să fie gol";
        corect[1] = false;
   }
   else if(password.value.length < 6){
     span2.textContent = "Parola nu poate fii mai scurtă de 6 caractere";
    corect[1] = false;
   }
   else{
      span2.textContent = '';
      corect[1] = true;
   }
     if(email.value.trim() == ''){
      span3.textContent = "Spațiul acesta nu poate să fie gol";
       corect[2] = false;
  }
    else
      {
     span3.textContent = '';
     corect[2] = true;
   }
   finall = 0;
   for(let i = 0; i < corect.length;i++){
     if(corect[i]){
       finall++;
     }
   }
   if(finall >= 3){
     all_inputs.forEach((all_input) =>{
     all_input.setAttribute("disabled", "true");
        all_input.style.border = "2.5px solid #101CB4";
       } );
       labels.forEach((label) =>{
     label.style.transform = "translateY(-50%) scale(0.8)";
     label.style.padding = "0 0.2em";
     label.style.backgroundColor = "#0b1329";
     label.style.color = "#101CB4";
});
     end.textContent = "Ai finalizat autentificarea cu succes";
     console.log("merge");
   }
 
}
);