import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {MCCPREPComponent} from './mccprep.component';
import {Reportpagetwovo} from './reportpagetwo-vo';
// TODO: Replace this with your own data model type
export interface MCCPREPItem {
  title: string;
  id: number;
  age: number;

}
FetchData: MCCPREPComponent;
// TODO: replace this with real data from your application
const EXAMPLE_DATA: MCCPREPItem[] = [
  {id: 1, title: 'Hydrogen',age: 30},
  {id: 2, title: 'Helium' , age: 20},
  {id: 3, title: 'Lithium', age: 90}


];


const EXAMPLE_DATA2:Reportpagetwovo[] = this.FetchData.report;
/**
 * Data source for the MCCPREP view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */


  export class Fecthdata extends DataSource<MCCPREPItem> {
    data: MCCPREPItem[] = EXAMPLE_DATA;
    paginator: MatPaginator;
    sort: MatSort;
  
    constructor() {
      super();
    }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MCCPREPItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MCCPREPItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MCCPREPItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'age': return compare(+a.age, +b.age, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
