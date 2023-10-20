import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FindBannersQuery,
  FindOneBannerQuery,
} from 'src/app/models/banner-request-queries.interface';
import { Banner } from 'src/app/models/banner.interface';
import { BannerEndpoints } from 'src/app/utils/banner-endpoints.enum';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  find(query: FindBannersQuery) {
    return this.http.post<{ data: { total: number; entities: Banner[] } }>(
      BannerEndpoints.FIND,
      query
    );
  }

  findOne(query: FindOneBannerQuery) {
    return this.http.post<{ data: Banner }>(BannerEndpoints.FIND_ONE, query);
  }

  save(banner: Banner) {
    return this.http.post(BannerEndpoints.SAVE, banner);
  }

  remove({ id }: { id: string }) {
    return this.http.post(BannerEndpoints.REMOVE, id);
  }
}
