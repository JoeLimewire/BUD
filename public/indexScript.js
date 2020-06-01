
window.onload = function() {

//App is the div for the pasting of response
var app = document.getElementById('app');
//Inputr is lower textbox
var input = document.getElementById('input');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();



    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();

          console.log(input.value);
          TextReq(input.value);
          
        }
      });

};

function TextReq(val){
    data={val}
    console.log(data);

    const options ={
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        },
    }

    console.log(JSON.stringify(data));
    console.log(options);
    
    fetch('api', options);


}

