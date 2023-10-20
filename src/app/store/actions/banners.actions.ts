import { createAction, props } from '@ngrx/store';
import { BannersConstants } from '../constants/banners.constants';
import {
  FindBannersQuery,
  FindOneBannerQuery,
} from 'src/app/models/banner-request-queries.interface';
import { Banner } from 'src/app/models/banner.interface';

// Find Banner request actions
export const findBanners = createAction(
  BannersConstants.FIND_BANNERS,
  props<{ query: FindBannersQuery }>()
);
export const findBannersSuccess = createAction(
  BannersConstants.FIND_BANNERS_SUCCESS,
  props<{ banners: Banner[]; total: number }>()
);
export const findBannersFail = createAction(
  BannersConstants.FIND_BANNERS_FAIL,
  props<{ error: string }>()
);

// Find one Banner
export const findOneBanner = createAction(
  BannersConstants.FIND_ONE_BANNER,
  props<{ query: FindOneBannerQuery }>()
);
export const findOneBannerSuccess = createAction(
  BannersConstants.FIND_ONE_BANNER_SUCCESS,
  props<{ banner: Banner }>()
);
export const findOneBannerFail = createAction(
  BannersConstants.FIND_ONE_BANNER_FAIL,
  props<{ error: string }>()
);

// Save Banner
export const saveBanner = createAction(
  BannersConstants.SAVE_BANNER,
  props<{ query: Banner }>()
);
export const saveBannerSuccess = createAction(
  BannersConstants.SAVE_BANNER_SUCCESS
);
export const saveBannerFail = createAction(
  BannersConstants.SAVE_BANNER_FAIL,
  props<{ error: string }>()
);

// Remove Banner
export const removeBanner = createAction(
  BannersConstants.REMOVE_BANNER,
  props<{ query: { id: string } }>()
);
export const removeBannerSuccess = createAction(
  BannersConstants.REMOVE_BANNER_SUCCESS
);
export const removeBannerFail = createAction(
  BannersConstants.REMOVE_BANNER_FAIL,
  props<{ error: string }>()
);
