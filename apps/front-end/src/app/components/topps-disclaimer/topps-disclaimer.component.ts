import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-topps-disclaimer',
  template: `
    <div class="text-center mt-4">
      <h3 class="text-sm font-semibold text-red-600">Disclaimer</h3>
      <p class="mt-2 text-white-700 text-xs">
        This application is not affiliated with, endorsed by, or associated with
        Topps or any of its products. All trademarks, product names, and company
        names or logos mentioned herein are the property of their respective
        owners.
      </p>
    </div>
  `,
  styles: [],
})
export class ToppsDisclaimerComponent {}
