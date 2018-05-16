import { Pipe, PipeTransform } from '@angular/core';
import { PriorityTypeEnum } from '../shared/static-data';

@Pipe({
    name: 'displayPriorityTitle'
})
export class DisplayPriorityTitlePipe implements PipeTransform {

    transform(type: PriorityTypeEnum): string {
        switch (type) {
            case PriorityTypeEnum.ImportantUrgent:
                return 'Important / Urgent';
            case PriorityTypeEnum.ImportantNotUrgent:
                return 'Important / Not Urgent';
            case PriorityTypeEnum.NotImportantUrgent:
                return 'Not Important / Urgent';
            case PriorityTypeEnum.NotImportantNotUrgent:
                return 'Not Important / Not Urgent';
            default:
                return 'Error... : (';
        }
    }

}
