var klaKlouk = () => {
    let games1 = Math.floor(Math.random() * 6) + 1;
    let games2 = Math.floor(Math.random() * 6) + 1;
    let games3 = Math.floor(Math.random() * 6) + 1;
    let output1 = "";
    let output2 = "";
    let output3 = "";
    
    let users = document.getElementsByClassName('game');
    let userchecked = "";
    // switch case-----
    switch (games1){
        case 1:
            output1 = "<img src='images/ខ្លា.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 2:
            output1 = "<img src='images/ឃ្លោក.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 3:
            output1 = "<img src='images/មាន់.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 4:
            output1 = "<img src='images/បង្កង.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 5:
            output1 = "<img src='images/ក្តាម.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 6:
            output1 = "<img src='images/ត្រី.jpg' style = 'width:130px; height: 130px;'>";
            break;
    }  
    switch (games2){
        case 1:
            output2 = "<img src='images/ត្រី.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 2:
            output2 = "<img src='images/ក្តាម.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 3:
            output2 = "<img src='images/បង្កង.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 4:
            output2 = "<img src='images/មាន់.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 5:
            output2 = "<img src='images/ឃ្លោក.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 6:
            output2 = "<img src='images/ខ្លា.jpg' style = 'width:130px; height: 130px;'>";
            break;
    }       
    switch (games3){
        case 1:
            output3 = "<img src='images/បង្កង.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 2:
            output3 = "<img src='images/មាន់.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 3:
            output3 = "<img src='images/ក្តាម.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 4:
            output3 = "<img src='images/ឃ្លោក.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 5:
            output3 = "<img src='images/ខ្លា.jpg' style = 'width:130px; height: 130px;'>";
            break;
        case 6:
            output3 = "<img src='images/ត្រី.jpg' style = 'width:130px; height: 130px;'>";
            break;
    }            
    let result = document.getElementById("result");
    setTimeout(function() {
        console.log("output1;", output1)
        result.innerHTML = output1 + output2 + output3;
    },2000);
    
}

function playAgain() {
    let result = document.getElementById("result");
    result.innerHTML = "";
}
// clear
var clear = document.getElementById("clear");
clear.addEventListener('click', playAgain);
//play

var playGame = document.querySelector("#play");
playGame.addEventListener('click', klaKlouk);


//uncheck all
var checkboxes = document.querySelectorAll("input[type ='checkbox']");
        function checkAll(mycheckbox){
          if(mycheckbox.checked == true){
            checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
           });
          }
        else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
        });
    }
}


