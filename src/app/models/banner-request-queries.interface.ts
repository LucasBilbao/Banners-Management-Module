interface IncludeExcludeQueries {
  includes?: string[];
  excludes?: string[];
}

export interface FindOneBannerQuery extends IncludeExcludeQueries {
  id: string;
}

export interface FindBannersQuery extends IncludeExcludeQueries {
  search?: string;
  ids?: string[];
  excludeIds?: string[];
  targetAudienceIds?: string[];
  query?: any;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  pageIndex?: number;
  pageSize?: number;
  searchAfter?: string[];
}
