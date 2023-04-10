import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LinkManagerService} from "../../services/link-manager.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Movement} from "../../classes/data";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  link: LinkManagerService;

  filter: string = "";

  constructor(private _link: LinkManagerService) {
    this.link = _link;
  }

  ngOnInit() {
    console.log(this.link.content.movement);
  }

  ngAfterViewInit() {
    console.log(this.paginator, this.sort);
    this.link.content.movements_table.paginator = this.paginator;
    this.link.content.movements_table.sort = this.sort;
  }

  updateFilter($event: Event) {
    console.log("Filter", $event);
    const filterValue = ($event.target as HTMLInputElement).value;
    this.link.content.movements_table.filter = filterValue.trim().toLowerCase();

    if (this.link.content.movements_table.paginator) {
      this.link.content.movements_table.paginator.firstPage();
    }

  }
}
