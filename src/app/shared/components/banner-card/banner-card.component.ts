import { Component, Input } from '@angular/core';
import { Banner } from 'src/app/models/banner.interface';
import { FILE_BASE_URL } from 'src/app/utils/constants';

@Component({
  selector: 'bmm-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss'],
})
export class BannerCardComponent {
  public readonly fileUrl = FILE_BASE_URL;

  @Input() public banner!: Banner;
}
