import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): unknown {
        let result = 'N/A';
        if (value) {
            if (value.match(/^\d+$/g)) {
                result = value;
            }
        }
        return result;
    }
}
