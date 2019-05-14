
class validator{
    //when creating a class there is no classwide variable. 
    //class-wide variables are created by assigning it to *this* (i.e this.$form)
    //this is the first function called wen the the class is instantiated (created) in main.js
    constructor(formSelector, inputSelector, userCode){
        //confirms the selector that this validator is using for output
        console.log('validator has been constructed! for:', formSelector, inputSelector);

        // store a refrence to our DOM element as this.$form
        //this.$form becomes a classwide variable when attached to *this*
        //so we can use it elsewhere inside THIS class (class validator) / instance 
        
       
       
        this.$form= document.querySelector(formSelector);
       this.$input = document.querySelector(inputSelector);
       this.userCode = 'puppies';
       this.backgroundColor = 'orange';
       this.setupListeners();
        
        if (userCode != undefined){
            this.userCode = userCode.secretCode;
            this.backgroundColor = userCode.backgroundColor;
        }

    }

    // this is the first method called in the construcor
    //so this is our next line for our logic flow
    setupListeners = () => {
        console.log('setupListeners', this.$input);
        this.$form.addEventListener('submit', this.formSubmitListener);
        this.$input.addEventListener('keyup', this.easterEggListener);
                                    //when keyup happens, call this function
    }


    formSubmitListener = (aDomEvent) => {
        console.log('formSubmitListener', aDomEvent);
        aDomEvent.preventDefault();

    }

    easterEggListener= (anotherDomEvent) =>{
       

        let hoverBox = document.querySelector('.secret-box')
        
        console.log('easterEggListener is present:', anotherDomEvent, this.userCode);
        
        if (this.$input.value === this.userCode){
            hoverBox.style.visibility ='visible';
            hoverBox.style.position = 'absolute';
            hoverBox.innerHTML+=(" " + this.userCode);
            hoverBox.style.backgroundColor = this.backgroundColor;
        } 
        
        setTimeout(function(){ 
            hoverBox.style.visibility = 'hidden';
         }, 3000); 

    }
}


