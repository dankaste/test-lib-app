import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!
      things and stuff
    </p>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
