
document.addEventListener("DOMContentLoaded",function(event){
    var buttons= document.querySelectorAll('button');
    var input=document.querySelector('input[type="text"]');
    var isOpen= false;
    buttons.forEach(function(button){
        
        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (button.textContent === "C") {
                input.value = ""; // Limpar o valor do campo de entrada
            } else if (button.textContent === '=') {
                Calculate();
                
            } 
            else if(button.textContent === "()"){
                var parenthesis = document.querySelector(".parenthesis")
                if(isOpen){
                    input.value+=')'
                }
                else{
                    input.value+='('
                    
                    console.log(isOpen)
                }
                isOpen=!isOpen;
                
            }else if(button.textContent=== "+/-"){
                input.value+="(-"
                isOpen=true;
                
            }else if(button.textContent==="%"){
                input.value+='%*'
            }else{
                input.value += button.textContent;
            }
        });
        
    })
    document.addEventListener("keydown",function(event){
        if(event.key=="Enter"){
            event.preventDefault();
            Calculate();
        }
    })
    function Calculate(){
        
        var math = input.value;
        math = math.replace(/%/g, '/100');
        result=eval(math);
        console.log(`${result}`);
        if(result!=undefined){
            input.value=result;
        }
    }
})