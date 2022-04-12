import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})


export class ExperimentsComponent implements OnInit {

  crew: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density',
  ];

  memberBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    if (!this.crew.includes(memberName)) {
      this.crew.push(memberName);
    }
  }

  remove(member: string) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: string) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: string) {
    this.crew[this.crew.indexOf(member)] = name;
    this.memberBeingEdited = null;
  }
}
