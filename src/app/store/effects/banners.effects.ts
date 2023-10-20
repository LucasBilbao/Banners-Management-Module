import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BannersActions from '../actions/banners.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BannerService } from 'src/app/services/banner/banner.service';
import {
  FindBannersQuery,
  FindOneBannerQuery,
} from 'src/app/models/banner-request-queries.interface';
import { Banner } from 'src/app/models/banner.interface';

@Injectable()
export class BannersEffects {
  constructor(
    private actions$: Actions,
    private bannerService: BannerService
  ) {}

  public findBanners$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BannersActions.findBanners),
      mergeMap(({ query }: { query: FindBannersQuery }) =>
        this.bannerService.find(query).pipe(
          map(({ data: { total, entities: banners } }) =>
            BannersActions.findBannersSuccess({ total, banners })
          ),
          catchError((error) =>
            of(BannersActions.findBannersFail(error.message))
          )
        )
      )
    )
  );

  public findOneBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BannersActions.findOneBanner),
      mergeMap(({ query }: { query: FindOneBannerQuery }) =>
        this.bannerService.findOne(query).pipe(
          map(({ data: banner }) =>
            BannersActions.findOneBannerSuccess({ banner })
          ),
          catchError((error) =>
            of(BannersActions.findOneBannerFail(error.message))
          )
        )
      )
    )
  );

  public saveBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BannersActions.saveBanner),
      mergeMap(({ query }: { query: Banner }) =>
        this.bannerService.save(query).pipe(
          map(() => BannersActions.saveBannerSuccess()),
          catchError((error) =>
            of(BannersActions.saveBannerFail(error.message))
          )
        )
      )
    )
  );

  public removeBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BannersActions.removeBanner),
      mergeMap(({ query }: { query: { id: string } }) =>
        this.bannerService.remove(query).pipe(
          map(() => BannersActions.removeBannerSuccess()),
          catchError((error) =>
            of(BannersActions.removeBannerFail(error.message))
          )
        )
      )
    )
  );
}
