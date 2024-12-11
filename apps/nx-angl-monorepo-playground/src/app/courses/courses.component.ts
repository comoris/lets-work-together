import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <div class="grid grid-cols-[1fr_minmax(100px,960px)_1fr]">
      <div></div>
      <div class="py-8">
        <section>
          <div class="flex flex-col gap-4">
            <div class="bg-gray-100 py-12"></div>
            <div class="bg-gray-100 py-12"></div>
            <div class="bg-gray-100 py-12"></div>
            <div class="bg-gray-100 py-12"></div>
            <div class="bg-gray-100 py-12"></div>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {}
