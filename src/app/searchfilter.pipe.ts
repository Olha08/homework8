import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (value.length === 0) return items;
    if (!items) return [];
    return items.filter(item => item[field].includes(value));
  }
}
