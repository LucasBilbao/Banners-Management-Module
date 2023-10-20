import { createReducer, on } from '@ngrx/store';
import { Banner } from 'src/app/models/banner.interface';
import * as BannersActions from '../actions/banners.actions';
import { TOTAL_BEFORE_FIRST_REQUEST } from 'src/app/utils/constants';

export const bannersFeatureKey = 'banners';

export interface BannersState {
  banners: Banner[];
  singleBanner: Banner | null;
  isLoading: boolean;
  isSingleLoading: boolean;
  total: number;
  errorMessage: string;
}

const initialState: BannersState = {
  banners: [],
  isLoading: false,
  total: TOTAL_BEFORE_FIRST_REQUEST,
  errorMessage: '',
  singleBanner: null,
  isSingleLoading: false,
};

export const bannersReducer = createReducer(
  initialState,
  // Find Banners
  on(BannersActions.findBanners, (state) => ({ ...state, isLoading: true })),
  on(BannersActions.findBannersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    total: action.total,
    banners: action.banners,
  })),
  on(BannersActions.findBannersFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  })),
  // Find One Banner
  on(BannersActions.findOneBanner, (state) => ({
    ...state,
    isSingleLoading: true,
  })),
  on(BannersActions.findOneBannerSuccess, (state, action) => ({
    ...state,
    isSingleLoading: false,
    banner: action.banner,
  })),
  on(BannersActions.findOneBannerFail, (state, action) => ({
    ...state,
    isSingleLoading: false,
    errorMessage: action.error,
  })),
  // Save Banner
  on(BannersActions.saveBanner, (state) => ({ ...state, isLoading: true })),
  on(BannersActions.saveBannerSuccess, (state, action) => ({
    ...state,
    isLoading: false,
  })),
  on(BannersActions.saveBannerFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  })),
  // Remove Banner
  on(BannersActions.removeBanner, (state) => ({ ...state, isLoading: true })),
  on(BannersActions.removeBannerSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(BannersActions.removeBannerFail, (state, action) => ({
    ...state,
    isLoading: false,
    errorMessage: action.error,
  }))
);
