import { Component, Input, OnInit } from '@angular/core';
import { themes } from 'src/app/shared/themes';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-performance-button',
  templateUrl: './performance-button.component.html',
  styleUrls: ['./performance-button.component.css'],
})
export class PerformanceButtonComponent implements OnInit {
  beatpadTheme = themes;
  @Input() buttonLabel: string | undefined = 'Button';
  @Input() selectedButton: number = 0;
  @Input() selectedTheme: number = 0;
  @Input() isSelectedButton: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.selectedTheme$.subscribe((themeIndex) => {
      this.selectedTheme = themeIndex;
    });
  }

  ngOnInit(): void {}

  selectButton() {
    this.isSelectedButton = !this.isSelectedButton;
  }
}
