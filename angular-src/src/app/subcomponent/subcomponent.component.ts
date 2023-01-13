import { TestService } from './../testservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit {
  public num: number;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  saveNumber() {
    this.testService.saveNum(this.num);
  }

  getNum() {
    return this.testService.getNum();
  }

}
