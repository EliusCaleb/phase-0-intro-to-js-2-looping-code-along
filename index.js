// Code your solutions in this f

let newArray= [];
function writeCards(names=["Guadalupe", "Ollie", "Aki"], events = "surprise") {  
    for(let i = 0; i < names.length; i++) {
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`
    }
 return newArray;
}
    console.log(writeCards());
  
    


   
    function countDown(int) {
        while (int>= 0) {
            console.log(int)
            int--
        }
    }
    countDown(10);