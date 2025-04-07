const displayScreen = document.getElementById("display-screen");

let displayValue = "";

const appendToDisplay = (value) => {
  displayValue += value;
  displayScreen.value = displayValue;
};

const clearDisplay = ()=>{
  displayValue = "";
  displayScreen.value = displayValue;
};

const calcFunction = () => {
  try{
    displayValue = eval(displayValue);
    displayScreen.value = displayValue;
  }catch(error){
    displayScreen.value = "Error"
  };
};