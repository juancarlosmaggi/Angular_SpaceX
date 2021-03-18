import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { LaunchesPastListGQL } from '../../services/spacexGraphql.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-launches-past-list',
  templateUrl: './launches-past-list.component.html',
  styleUrls: ['./launches-past-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesPastListComponent implements OnInit {
  loading = true;
  limit = 5;
  rocket = '';
  ship = '';
  launchesPastListQuery = this.launchesPastListService.watch({
    limit: this.limit,
    offset: 0,
  });
  launchesPastList: any[] = [];

  constructor(
    private launchesPastListService: LaunchesPastListGQL,
    private sanitizer: DomSanitizer,
    private changeDetect: ChangeDetectorRef
  ) {}

  /**
   * On initialization we are fetching data from the GraphQL server.
   */
  ngOnInit(): void {
    this.launchesPastListQuery.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.launchesPastList = data.launchesPast!;
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

  /**
   * Async function that fetches more data from the Query and appends
   * the new data onto the existing data. Pagination occurs here.
   */
  async fetchMore(): Promise<void> {
    const { data } = await this.launchesPastListQuery.fetchMore({
      variables: {
        offset: this.launchesPastList.length,
        ship: this.ship,
        rocket: this.rocket,
      },
    });
    this.launchesPastList = [...this.launchesPastList, ...data.launchesPast!];
    this.update();
  }

  /**
   * Form returned select data, use the new data and filter the results on the
   * GraphQL Query accordingly.
   */
  async formChange(formData: {
    rocketId: string;
    shipId: string;
  }): Promise<void> {
    this.rocket = formData.rocketId;
    this.ship = formData.shipId;
    const { data } = await this.launchesPastListQuery.fetchMore({
      variables: {
        offset: 0,
        ship: this.ship,
        rocket: this.rocket,
      },
    });
    this.launchesPastList = [...data.launchesPast!];
    this.update();
  }

  /**
   * Push changes to the UI.
   */
  update(): void {
    this.changeDetect.detectChanges();
  }
}
