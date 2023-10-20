import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner.interface';
import { Observable } from 'rxjs';
import { BannersStateFacade } from '../store/facades/banners.facade';

@Component({
  selector: 'bmm-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  public banners$!: Observable<Banner[]>;

  constructor(private bannersFacade: BannersStateFacade) {}

  ngOnInit(): void {
    this.banners$ = this.bannersFacade.banners$;
  }
}
