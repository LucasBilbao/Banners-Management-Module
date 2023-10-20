import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannersState, bannersFeatureKey } from '../reducers/banners.reducer';

export const bannersFeatureSelector =
  createFeatureSelector<BannersState>(bannersFeatureKey);

export const isLoadingSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.isLoading
);

export const bannersSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.banners
);

export const totalSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.total
);

export const errorMessageSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.errorMessage
);

export const singleBannerSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.singleBanner
);

export const isSingleLoadingSelector = createSelector(
  bannersFeatureSelector,
  (state: BannersState) => state.isSingleLoading
);
