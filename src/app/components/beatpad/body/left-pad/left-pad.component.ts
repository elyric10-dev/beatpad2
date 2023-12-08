import { Component, Input, OnInit } from '@angular/core';
import { themes } from 'src/app/shared/themes';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-left-pad',
  templateUrl: './left-pad.component.html',
  styleUrls: ['./left-pad.component.css'],
})
export class LeftPadComponent implements OnInit {
  beatpadTheme = themes;
  @Input() selectedTheme: number = 0;

  constructor(private themeService: ThemeService) {
    this.themeService.selectedTheme$.subscribe((themeIndex) => {
      this.selectedTheme = themeIndex;
    });
  }

  ngOnInit(): void {}
}
