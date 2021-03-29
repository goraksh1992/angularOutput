import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventEmitter = new EventEmitter()

  name = "Gaurav"

  callParent(){
    this.eventEmitter.emit(this.name)
  }

}
