import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'titleCase'
})
export class titleCase implements PipeTransform {
    transform(value: string): any {

        let words = value.toLowerCase().split(" ");
        console.log(words);
        
        let wordsTitleCased = words.map((word, index )=>{
            console.log(word);
            
            if ((word == 'of' || word == "the" ) && index != 0) 
                return word.toLowerCase();
            else 
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        return wordsTitleCased.join(" ");
    }
}