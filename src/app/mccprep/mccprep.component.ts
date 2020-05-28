import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MCCPREPDataSource, MCCPREPItem } from './mccprep-datasource';
import { MccService } from '../mccpre-landing-page/mccservice.service';
import {Reportpagetwovo} from './reportpagetwo-vo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mccprep',
  templateUrl: './mccprep.component.html',
  styleUrls: ['./mccprep.component.css']
})
export class MCCPREPComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MCCPREPItem>;
  dataSource: MCCPREPDataSource;
  
  report: Reportpagetwovo [];
  oorg = 'UPIC SE';
  constructor(private mccservices: MccService) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title','age'];

  ngOnInit() {
    this.dataSource = new MCCPREPDataSource();
    this.loadInitialSavedReportsdata();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  loadInitialSavedReportsdata(): void {
    this.mccservices.getSavedReportsdata()
    .subscribe(data => this.report = data);
  }
  setorg(el): void {
    this.oorg= el.getAttribute('reports-groupName')
    }
    
    onDrop(event: CdkDragDrop<string[]>){


      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
}
