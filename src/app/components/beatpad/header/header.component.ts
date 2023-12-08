import { Component, OnInit } from '@angular/core';
import { themes } from 'src/app/shared/themes';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  beatpadTheme = themes;
  selectedTheme: number = 1;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.selectedTheme$.subscribe((themeIndex) => {
      this.selectedTheme = themeIndex;
    });
  }
}
