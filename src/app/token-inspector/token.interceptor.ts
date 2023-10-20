import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner.interface';
import { BACKEND_URL, BEARER_ACCESS_TOKEN } from '../utils/constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<Banner>,
    next: HttpHandler
  ): Observable<HttpEvent<Banner>> {
    const reqClone = req.clone({
      url: `${BACKEND_URL}${req.url}`,
      headers: req.headers.set('Authorization', `${BEARER_ACCESS_TOKEN}`),
    });

    return next.handle(reqClone);
  }
}
