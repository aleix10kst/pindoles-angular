import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlockContainerComponent} from './block-container/block-container.component';

interface Employee {
  name: string;
  employer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(BlockContainerComponent) blockContainer: BlockContainerComponent | undefined;

  title: {name: string} | null = null;

  employeeForm: FormGroup;

  employeeList: Employee[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      employer: []
    });
    setTimeout(() => this.title = {name: 'title'});
  }

  onSubmitEmployee(): void {
    const employee: Employee = this.employeeForm.getRawValue();
    this.employeeList.push(employee);
  }

  ngAfterViewInit(): void {
    console.log(this.blockContainer?.clickMe());
  }

  get dxcEmployees(): Employee[] {
    return this.employeeList.filter((employee: Employee) => employee.employer === 'DXC');
  }

  get fritEmployees(): Employee[] {
    return this.employeeList.filter((employee: Employee) => employee.employer === 'FRIT_RAVICH');
  }

  get sunwebEmployees(): Employee[] {
    return this.employeeList.filter((employee: Employee) => employee.employer === 'SUNWEB');
  }

}
