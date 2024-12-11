import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="relative header-bg p-8 text-center text-3xl font-bold flex justify-center items-center h-2/5 md:h-1/3 w-full">
      <h1 class="text-white">
        <span class="block font-thin text-2xl md:text-8xl uppercase">Hi There </span>
        <span class="block font-extrabold text-4xl md:text-5xl uppercase scroll-animated"> Let's work together </span>
      </h1>
      <div class="absolute right-0 gap-4 top-0">
        <ul class="flex flex-wrap items-center justify-center gap-4 p-4">
          <li
            class="rounded-sm px-3 py-2 text-blue-300 bottom-0 text-xs font-normal hover:cursor-pointer hover:white hover:bg-white/10"
            [routerLinkActive]="['bg-white/20', '!text-white']"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['']"
          >
            CV
          </li>
          <li
            class="rounded-sm px-3 py-2 text-blue-300 bottom-0 text-xs font-normal hover:cursor-pointer hover:white hover:bg-white/10"
            [routerLinkActive]="['bg-white/20', '!text-white']"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/courses']"
          >
            Courses
          </li>
          <li
            [ngClass]="{ hidden: isProd }"
            class="rounded-sm px-3 py-2 text-blue-300 bottom-0 text-xs font-normal hover:cursor-pointer hover:white hover:bg-white/10"
            [routerLinkActive]="['bg-white/20', '!text-white']"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/blog']"
          >
            Blog
          </li>
          <li
            [ngClass]="{ hidden: isProd }"
            class="rounded-sm px-3 py-2 text-blue-300 bottom-0 text-xs font-normal hover:cursor-pointer hover:white hover:bg-white/10"
            [routerLinkActive]="['bg-white/20', '!text-white']"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/playground']"
          >
            Playground
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .header-bg {
        background: var(--rad-grad);
      }
    `,
  ],
  imports: [RouterLink, RouterLinkActive, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isProd: boolean;

  constructor() {
    this.isProd = !isDevMode();
  }
}
