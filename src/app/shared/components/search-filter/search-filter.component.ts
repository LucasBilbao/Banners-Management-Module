import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FindBannersQuery } from 'src/app/models/banner-request-queries.interface';
import { SortDirectionType } from 'src/app/models/sort-direction.type';
import { RouteQueryItems } from 'src/app/utils/constants';

@Component({
  selector: 'bmm-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() public searchValue!: string;
  @Input() public placeholder!: string;
  @Input() public sortDirection: SortDirectionType = RouteQueryItems
    .SORT_DIRECTION.default as SortDirectionType;
  @Output() private search: EventEmitter<FindBannersQuery> =
    new EventEmitter<FindBannersQuery>();

  public onSubmit(): void {
    this.search.emit({
      search: this.searchValue,
      sortDirection: this.sortDirection,
    });
  }

  public onSortSelection(sortDirection: SortDirectionType) {
    this.sortDirection = sortDirection;
  }
}
