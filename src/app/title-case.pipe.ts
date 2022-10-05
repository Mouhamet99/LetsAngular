import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'titleCase'
})
export class titleCase implements PipeTransform {
    transform(value: string): any {
        if (!value)
            return null

        let words = value.split(" ");
        let wordsTitleCased = words.map((word, index) => this.isProposition(word) && index != 0 ? word.toLowerCase() : this.toTitleCase(word))
        
        return wordsTitleCased.join(" ");
    }

    private toTitleCase(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    private isProposition(word: string): boolean {
        const prepositions: string[] = ["of", "the"];
        return prepositions.includes(word.toLowerCase())
    }
}