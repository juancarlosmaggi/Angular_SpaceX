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
  loading = false;

  // Used to inform Parent of event occurring.
  @Output() formChange = new EventEmitter();

  // Initializing Angular forms.
  launchesForm = new FormGroup({
    rocketId: new FormControl(''),
    shipId: new FormControl(''),
  });

  // Query used to fetch info.
  launchDetailQuery = this.launchesFormSelectService.watch();

  // Arrays that will hold values from the GraphQL server.
  ships: any[] = [];
  rockets: any[] = [];

  constructor(
    private launchesFormSelectService: LauchesFormSelectsGQL,
    private changeDetect: ChangeDetectorRef
  ) {}

  /**
   * On initialization we are fetching data from the GraphQL server.
   */
  ngOnInit(): void {
    this.launchDetailQuery.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.ships = data.ships!;
      this.rockets = data.rockets!;
      this.update();
    });
  }

  /**
   * Form Submission, emit event to parent with Form data.
   */
  onSubmit(): void {
    this.formChange.emit(this.launchesForm.value);
  }

  /**
   * Push changes to the UI.
   */
  update(): void {
    this.changeDetect.detectChanges();
  }
}
