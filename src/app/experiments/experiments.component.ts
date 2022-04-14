import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  test = true;

  selectedExperiments: string[] = [];

  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

  constructor() { }

  ngOnInit() { }

  addExperiment(exp: string): void {
    if (this.selectedExperiments.includes(exp)) {
      this.selectedExperiments.splice(this.selectedExperiments.indexOf(exp), 1);
    }
    else if (this.selectedExperiments.length < 3) {
      this.selectedExperiments.push(exp);
    }
  }
}
