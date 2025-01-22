import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"temperature",
    standalone: true,
})
export class TemperaturePipe implements PipeTransform{
    transform(value: number | string | null, ...args: any[]) {
        if(value == null){
            return ''
        }
        let val: number

        if(typeof value == 'string'){
            val = parseFloat(value)
        }else{
            val = value
        }
        const output = val * ( 9 / 5) + 32;

        return `${output} F`
    }
}