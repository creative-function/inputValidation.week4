
class validator{

    
    formSubmitListener = (event) => {
        console.log('formSubmitListener', event);
    }


    setupListeners = () => {
        console.log('setupListeners',this, this.$form);

        this.$form.addEventListener('sumbit', this.formSubmitListerner);
    }

    constructor(selector){
        //confirms the selector that this validator is using for output
        console.log('validator has been constructed! for:', selector);

        // store a refrence to our DOM element as this.$form
        //this.$form becomes a classwide variable when attached to *this*
        //so we can use it elsewhere inside THIS class / instance 
        
       this.$form= document.querySelector(selector);

       this.setupListeners();
        
    }
}

// 