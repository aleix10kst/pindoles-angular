import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'lib-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {

  @ContentChild('itemTpl') itemTpl: TemplateRef<any> | any;

  @Input() items: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
