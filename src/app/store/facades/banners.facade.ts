import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '..';
import * as BannersSelectors from '../selectors/banners.selectors';
import * as BannersActions from '../actions/banners.actions';
import {
  FindBannersQuery,
  FindOneBannerQuery,
} from 'src/app/models/banner-request-queries.interface';

@Injectable({
  providedIn: 'root',
})
export class BannersStateFacade {
  public isLoading$ = this.store.select(BannersSelectors.isLoadingSelector);
  public banners$ = this.store.select(BannersSelectors.bannersSelector);
  public total$ = this.store.select(BannersSelectors.totalSelector);
  public errorMessage$ = this.store.select(
    BannersSelectors.errorMessageSelector
  );
  public isSingleLoading$ = this.store.select(
    BannersSelectors.isSingleLoadingSelector
  );
  public singleBanners$ = this.store.select(
    BannersSelectors.singleBannerSelector
  );

  constructor(private store: Store<State>) {}

  public findBanners(query: FindBannersQuery) {
    this.store.dispatch(BannersActions.findBanners({ query }));
  }

  public findOneBanner(query: FindOneBannerQuery) {
    this.store.dispatch(BannersActions.findOneBanner({ query }));
  }
}
