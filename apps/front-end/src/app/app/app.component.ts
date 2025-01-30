import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styles: [],
  template: `
    <div class="container mx-auto min-h-full flex flex-col items-center">
      <div class="flex flex-col items-center w-full p-4">
        <div class="flex justify-center items-center">
          <h1
            class="p-2 text-6xl font-extrabold hover:cursor-pointer"
            routerLink="/"
          >
            {{ title }}
          </h1>
        </div>
        <main class="w-full p-2">
          <router-outlet />
          <p-scrolltop
            [buttonProps]="{
              severity: 'contrast',
              raised: true,
              rounded: true
            }"
          />
        </main>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'Cardboard Crack';
}
