import { Pipe, PipeTransform } from '@angular/core';
import { PriorityTypeEnum } from '../shared/static-data';

@Pipe({
    name: 'getPriorityClassStyle'
})
export class GetPriorityClassStylePipe implements PipeTransform {

    transform(type: PriorityTypeEnum): string {
        switch (type) {
            case PriorityTypeEnum.ImportantUrgent:
                return 'priority-i-u';
            case PriorityTypeEnum.ImportantNotUrgent:
                return 'priority-i-nu';
            case PriorityTypeEnum.NotImportantUrgent:
                return 'priority-ni-u';
            case PriorityTypeEnum.NotImportantNotUrgent:
                return 'priority-ni-nu';
            default:
                return '';
        }
    }

}
