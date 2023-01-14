import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from '../../constants/tweets';

@Component({
  selector: 'app-tweet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet-card.component.html',
  styles: [],
})
export class TweetCardComponent {
  @Input() tweet!: Tweet;
}
