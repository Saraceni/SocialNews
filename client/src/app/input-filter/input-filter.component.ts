import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit {

  @Output()
  searchInput: EventEmitter<string> = new EventEmitter<string>();

  searchQuery: string = "";

  constructor() { }

  ngOnInit() {
  }

  public search(event, item) {
    this.searchInput.emit(this.searchQuery);
  }

}
