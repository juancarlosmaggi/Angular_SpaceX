import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { LaunchesPastListGQL } from '../../services/spacexGraphql.services';

@Component({
  selector: 'app-launches-past-list',
  templateUrl: './launches-past-list.component.html',
  styleUrls: ['./launches-past-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesPastListComponent implements OnInit {
  JSON: object;
  constructor(private launchesPastListService: LaunchesPastListGQL) {
    this.JSON = JSON;
  }

  launchesPastList$ = this.launchesPastListService
    .fetch({ limit: 5 })
    .pipe(map((res) => res.data.launchesPast));

  ngOnInit(): void {}
}
