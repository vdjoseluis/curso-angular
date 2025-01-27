import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'issue-page',
  standalone: true,
  imports: [],
  templateUrl: './issue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent { }
