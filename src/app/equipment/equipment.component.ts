import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  crew: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks',
  ];

  memberBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    if (!this.crew.includes(memberName) && memberName != '') {
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
    if (name != '') {
      this.crew[this.crew.indexOf(member)] = name;
      this.memberBeingEdited = null;
    } else {
      this.remove(member);
    }
  }

}
