import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'convertToSpaces' //name used when we will reference the pipe in the html
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}