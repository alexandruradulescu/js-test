class Concatenator  {
    constructor(el){
        this.el = el;
        this.form = this.el.getElementsByClassName('form')[0];
        this.input = this.el.getElementsByClassName('input')[0];
        this.button = this.el.getElementsByClassName('button')[0];
        this.outputContainer = this.el.getElementsByClassName('result')[0];

        this.form.addEventListener("submit",(e) => this.concatenate(e));
    }

    concatenate(e) {
        e.preventDefault();
        const value = this.input.value;
        const array = Array.from(value);
        let counter = 1;
        let currentCharacter = array[0];
        let newArray = "";
        
        for(let i=1; i < array.length; i++){
            if (array[i] === currentCharacter) {
                counter++;
            } else {
                newArray += currentCharacter + counter;
                counter = 1;
                currentCharacter = array[i];
            }
        }
        newArray += currentCharacter + counter;
        this.outputContainer.innerHTML = newArray; 
    }

}

new Concatenator(document.getElementsByClassName('concatenator')[0]) ;
