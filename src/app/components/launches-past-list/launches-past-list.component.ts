import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  LaunchesPastListGQL,
  LaunchesPastListQuery,
} from '../../services/spacexGraphql.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-launches-past-list',
  templateUrl: './launches-past-list.component.html',
  styleUrls: ['./launches-past-list.component.sass'],
})
export class LaunchesPastListComponent implements OnInit {
  loading: boolean = true;
  limit: number = 5;
  launchesPastListQuery = this.launchesPastListService.watch({
    limit: this.limit,
    offset: 0,
  });
  launchesPastList: any[] = [];

  constructor(
    private launchesPastListService: LaunchesPastListGQL,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.launchesPastListQuery.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.launchesPastList = data.launchesPast!;
    });
  }

  sanitizeVideoURL(url: string): any {
    url = url.replace('youtube.com/', 'youtube.com/embed/');
    url = url.replace('youtu.be/', 'youtube.com/embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getLocalDateFormat(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }

  async fetchMore() {
    let { data } = await this.launchesPastListQuery.fetchMore({
      variables: {
        offset: this.launchesPastList.length,
      },
    });
    debugger;
    this.launchesPastList = [...this.launchesPastList, ...data.launchesPast!];
  }
}
