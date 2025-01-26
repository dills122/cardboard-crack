import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOpenGithubIssues]',
})
export class OpenGithubIssuesDirective implements OnInit {
  @Input() repoUrl: string = ''; // Input for dynamic repository URL
  @Input() defaultRepoUrl: string =
    'https://github.com/dills122/cardboard-crack'; // Default repository URL

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const url = this.repoUrl || this.defaultRepoUrl; // Use provided repoUrl or fallback to default

    // Validate URL format (basic check for GitHub repo)
    if (!url.includes('github.com')) {
      console.error('Invalid GitHub URL:', url);
      return;
    }

    const issuesUrl = `${url}/issues`;

    // Adding accessible label for screen readers
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-label',
      'Open GitHub Issues'
    );

    // Open the issues page in a new tab when clicked
    this.renderer.listen(this.el.nativeElement, 'click', () => {
      window.open(issuesUrl, '_blank');
    });
  }
}
