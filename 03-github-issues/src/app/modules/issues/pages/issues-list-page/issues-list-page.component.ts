import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';

@Component({
  selector: 'issues-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, LabelsSelectorComponent],
  templateUrl: './issues-list-page.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListPageComponent {
  public issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
