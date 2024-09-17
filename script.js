
// calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {

    if (display.value === "error" || display.value === "Infinity" || display.value === "-Infinity" || display.value === "undefined") {
        
        display.value = "";
    }

    display.value += input;
   
}

function  allClear() {

    display.value = "";

}

function del() {

    if ( display.value === "error" || display.value === "Infinity" || display.value === "-Infinity" || display.value === "undefined" ) {
        
        display.value = "";
    } 
    
    display.value = display.value.substring(0, display.value.length - 1);
    
}

function calculate() {

    try {
        
        display.value = eval(display.value);
        
    }
    catch (error) {
          
        display.value = "error";

    }
    
}