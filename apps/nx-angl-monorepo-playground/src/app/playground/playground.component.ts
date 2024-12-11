import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  template: `
    <div class="grid grid-cols-[1fr_minmax(100px,960px)_1fr]">
      <div></div>
      <div class="py-8">
        <section>
          <h2 class="text-4xl mb-4 text-primary-100">Playground</h2>
          <div class="flex gap-4">
            <div class="w-6 h-6 vivid-pink"></div>
            <div class="w-6 h-6 hot-pink"></div>
            <div class="w-6 h-6 hot-red"></div>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ['./playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {}
