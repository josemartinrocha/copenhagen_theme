import { TestService } from './../testservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othersubcomponent',
  templateUrl: './othersubcomponent.component.html',
  styleUrls: ['./othersubcomponent.component.css']
})
export class OthersubcomponentComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  getNum() {
    return this.testService.getNum();
  }
}
