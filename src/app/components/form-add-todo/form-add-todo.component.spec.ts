import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTodoComponent } from './form-add-todo.component';

describe('FormAddTodoComponent', () => {
  let component: FormAddTodoComponent;
  let fixture: ComponentFixture<FormAddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
