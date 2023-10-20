import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { FindBannersQuery } from 'src/app/models/banner-request-queries.interface';
import { SortDirectionType } from 'src/app/models/sort-direction.type';
import { Subscribable } from 'src/app/shared/components/subscribable/subscribable.component';
import { BannersStateFacade } from 'src/app/store/facades/banners.facade';
import {
  FIND_BANNERS_QUERY_KEYS,
  PAGE_SIZE_OPTIONS,
  RouteQueryItems,
  TOTAL_BEFORE_FIRST_REQUEST,
} from 'src/app/utils/constants';
import { isObjectEmpty } from 'src/app/utils/isObjectEmpty';

@Component({
  selector: 'bmm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends Subscribable implements OnInit {
  public length$: Observable<number> = this.bannersFacade.total$;
  public pageSize: number = RouteQueryItems.PAGE_SIZE.default;
  public pageIndex: number = -1;
  public isLoading$: Observable<boolean> = this.bannersFacade.isLoading$;
  public search: string = RouteQueryItems.SEARCH.default;
  public sortDirection: SortDirectionType = 'asc';
  public readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  constructor(
    private bannersFacade: BannersStateFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    const subscription = this.route.queryParams
      .pipe(
        switchMap((params) => {
          if (isObjectEmpty(params)) {
            return this.length$;
          }

          this.pageIndex = +(
            params[RouteQueryItems.PAGE_INDEX.key] ?? this.pageIndex
          );
          this.pageSize = +(
            params[RouteQueryItems.PAGE_SIZE.key] ?? this.pageSize
          );
          this.search = params[RouteQueryItems.SEARCH.key] ?? this.search;
          this.sortDirection =
            params[RouteQueryItems.SORT_DIRECTION.key] ?? this.sortDirection;

          const requestParams = Object.keys(params).reduce(
            (paramsObject: FindBannersQuery, key: string) => {
              if (!FIND_BANNERS_QUERY_KEYS.includes(key)) {
                return paramsObject;
              }

              const paramsObjectKey = key as keyof FindBannersQuery;
              paramsObject[paramsObjectKey] = params[key];

              return paramsObject;
            },
            {}
          );

          this.bannersFacade.findBanners(requestParams);

          return this.length$;
        })
      )
      .subscribe((length) => {
        const bannersLeft = length - this.pageSize * this.pageIndex;
        const isOnFirstPage = this.pageIndex === TOTAL_BEFORE_FIRST_REQUEST;
        const isGoingToSkip =
          (bannersLeft > 0 || length === -1 || isOnFirstPage) &&
          this.pageIndex !== -1;
        if (isGoingToSkip) {
          return;
        }

        this.pageIndex = RouteQueryItems.PAGE_INDEX.default;
        this.sortDirection = RouteQueryItems.SORT_DIRECTION
          .default as SortDirectionType;
        this.redirect();
      });

    this.addSubscription(subscription);
  }

  public onSearch(queries: FindBannersQuery) {
    this.search = queries.search as string;
    this.sortDirection = queries.sortDirection as SortDirectionType;
    this.redirect();
  }

  public redirect(): void {
    const queryParams = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      search: this.search,
      sortDirection: this.sortDirection,
    };

    Object.keys(queryParams).forEach((key: string) => {
      const queryKey = key as keyof typeof queryParams;
      if (queryParams[queryKey] !== '') {
        return;
      }

      delete queryParams[queryKey];
    });

    this.router.navigate(['/'], {
      queryParams,
    });
  }

  public handlePage(e: any): void {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;

    this.redirect();
  }
}
