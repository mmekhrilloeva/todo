import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('header') inputName: any;
  public title: any = [
    { name: 'First plan', isUpdated: false, isCompleted: false },
  ];
  public isUpdated: boolean = false;
  public addToDo(value: any): void {
    let newItem = { name: value, isUpdated: false, isCompleted: false };
    this.title.push(newItem);
    this.inputName.nativeElement.value = '';
  }
  public removeToDo(position: number): void {
    this.title = this.title.filter((el: any, ind: number) => {
      return position !== ind;
    });
  }
  public updateToDo(position: number, updatedTitle: string): void {
    this.title[position].name = updatedTitle;
    this.title[position].isUpdated = !this.title[position].isUpdated;
  }
  public markCompletedTask(position: number): void {
    this.title[position].isCompleted = !this.title[position].isCompleted;
  }
}
