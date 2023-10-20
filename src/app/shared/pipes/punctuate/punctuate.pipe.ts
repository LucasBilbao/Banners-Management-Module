import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punctuate',
  pure: true,
})
export class PunctuatePipe implements PipeTransform {
  transform(
    value: string,
    unacceptableSize: number,
    acceptableSize: number,
    punctuation: string = '...'
  ): string {
    return value.length >= unacceptableSize
      ? `${value.slice(0, acceptableSize)}${punctuation}`
      : value;
  }
}
