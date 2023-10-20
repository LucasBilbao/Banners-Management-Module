export const BACKEND_URL = 'https://development.api.optio.ai';

export const BEARER_ACCESS_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiJpbnRlcm5zaGlwIiwiaW50ZXJuc2hpcElkIjoibHVjYXNibTc4OUBnbWFpbC5jb20iLCJpYXQiOjE2OTc0MzAyODAsImV4cCI6MTY5ODI5NDI4MH0.6i5N0aKHOaAnPxIYHfFBCEsNJCnsF3pWpn2Y8OfXtA6OuWy0jxUrqeIPatjd7-FsV1s8K335dMafj9Z7YioPJA';

export const FILE_BASE_URL = 'https://development.api.optio.ai/api/v2/blob/';

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_SEARCH = '';
export const DEFAULT_SORT_DIRECTION = 'asc';

export const RouteQueryItems = {
  PAGE_INDEX: { key: 'pageIndex', default: DEFAULT_PAGE_INDEX },
  PAGE_SIZE: { key: 'pageSize', default: DEFAULT_PAGE_SIZE },
  SEARCH: { key: 'search', default: DEFAULT_SEARCH },
  SORT_DIRECTION: { key: 'sortDirection', default: DEFAULT_SORT_DIRECTION },
};

export const NO_SETTER_METHOD_IN_STORAGE_SERVICE_ERROR_MESSAGE =
  'Setter method name does not exist in class LocalStorageService';

export const TOTAL_BEFORE_FIRST_REQUEST = -1;

export const FIND_BANNERS_QUERY_KEYS = [
  'search',
  'pageIndex',
  'pageSize',
  'sortDirection',
  'sortBy',
];
