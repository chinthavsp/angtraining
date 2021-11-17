import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<footer class="bg-light text-center text-lg-start">
                   <!-- Copyright -->
                <div class="text-center p-3 p3">
                    © 2020 Copyright:
                   <a class="text" href="www.mateio.com">manteioit-solutions</a>
                </div>
                  <!-- Copyright -->
            </footer>`,

  styles:  [".p3{background-color: blue;}"]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
