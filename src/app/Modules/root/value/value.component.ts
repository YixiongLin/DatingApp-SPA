import { Component, OnInit } from '@angular/core';
import { ValueDataService } from 'src/app/Core/http/value-data.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  protected values: any;
  constructor(private valueService: ValueDataService) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.valueService.getValues().subscribe(data => {
      this.values = data;
    }, error => {
      console.log(error);
    });
  }

}
