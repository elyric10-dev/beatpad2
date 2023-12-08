import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private selectedThemeSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  selectedTheme$: Observable<number> = this.selectedThemeSubject.asObservable();

  setSelectedTheme(themeIndex: number): void {
    this.selectedThemeSubject.next(themeIndex);
  }
}
