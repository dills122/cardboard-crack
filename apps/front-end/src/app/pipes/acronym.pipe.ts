import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acronym',
  standalone: false,
})
export class AcronymPipe implements PipeTransform {
  transform(value: string, maxSize?: number): string {
    if (!value) return '';

    // Generate the acronym
    const acronym = value
      .split(' ') // Split the string into words
      .filter((word) => word.length > 0) // Remove empty entries
      .map((word) => word[0].toUpperCase()) // Take the first letter of each word and capitalize it
      .join(''); // Combine the letters into a single string

    // Limit the size if maxSize is provided
    return maxSize && acronym.length > maxSize
      ? acronym.slice(0, maxSize)
      : acronym;
  }
}
