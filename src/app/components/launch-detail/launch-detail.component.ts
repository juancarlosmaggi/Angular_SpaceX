import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { LaunchDetailGQL } from '../../services/spacexGraphql.services';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchDetailComponent implements OnInit {
  loading = true;
  id = this.route.snapshot.params.id;
  launchDetailQuery = this.launcheDetailService.watch({
    id: this.id,
  });
  launch = {};
  JSON = JSON;

  constructor(
    private launcheDetailService: LaunchDetailGQL,
    private sanitizer: DomSanitizer,
    private changeDetect: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  /**
   * On initialization we are fetching data from the GraphQL server.
   */
  ngOnInit(): void {
    this.launchDetailQuery.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.launch = data.launch!;
      this.update();
    });
  }

  /**
   * Utility function that allows Angular to take a youtube URL and
   * convert it onto a youtube embed url that is usable in iframe format.
   * We are trusting the video url source.
   *
   * @param url string
   * @returns any
   */
  sanitizeVideoURL(url: string): any {
    url = url.replace('youtube.com/', 'youtube.com/embed/');
    url = url.replace('youtu.be/', 'youtube.com/embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Uility function used to take the UTC date string and convert it
   * human readable text to view
   *
   * @param dateStr string
   * @returns string
   */
  getLocalDateFormat(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }

  update() {
    this.changeDetect.detectChanges();
  }
}
