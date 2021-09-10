import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCrudComponent } from './notas-crud.component';

describe('NotasCrudComponent', () => {
  let component: NotasCrudComponent;
  let fixture: ComponentFixture<NotasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
