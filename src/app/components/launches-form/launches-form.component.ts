import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LauchesFormSelectsGQL } from '../../services/spacexGraphql.services';

@Component({
  selector: 'app-launches-form',
  templateUrl: './launches-form.component.html',
  styleUrls: ['./launches-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesFormComponent implements OnInit {
  @Output() formChange = new EventEmitter();
  loading = false;
  launchesForm = new FormGroup({
    rocketId: new FormControl(''),
    shipId: new FormControl(''),
  });
  launchDetailQuery = this.launchesFormSelectService.watch();
  ships: any[] = [];
  rockets: any[] = [];

  constructor(
    private launchesFormSelectService: LauchesFormSelectsGQL,
    private changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.launchDetailQuery.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.ships = data.ships!;
      this.rockets = data.rockets!;
      this.update();
    });
  }

  onSubmit() {
    this.formChange.emit(this.launchesForm.value);
  }

  update() {
    this.changeDetect.detectChanges();
  }
}
