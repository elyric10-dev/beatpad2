import { Component, OnInit } from '@angular/core';
import { themes } from 'src/app/shared/themes';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-beatpad',
  templateUrl: './beatpad.component.html',
  styleUrls: ['./beatpad.component.css'],
})
export class BeatpadComponent implements OnInit {
  beatpadTheme = themes;
  selectedTheme: number = 1;

  constructor(private themeService: ThemeService) {
    this.themeService.selectedTheme$.subscribe((themeIndex) => {
      this.selectedTheme = themeIndex;
    });
  }

  ngOnInit(): void {}
}
