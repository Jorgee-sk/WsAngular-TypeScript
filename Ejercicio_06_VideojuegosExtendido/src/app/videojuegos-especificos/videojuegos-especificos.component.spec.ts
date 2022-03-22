import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosEspecificosComponent } from './videojuegos-especificos.component';

describe('VideojuegosEspecificosComponent', () => {
  let component: VideojuegosEspecificosComponent;
  let fixture: ComponentFixture<VideojuegosEspecificosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosEspecificosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosEspecificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
