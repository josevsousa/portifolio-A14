import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFirebaseInicioComponent } from './crud-firebase-inicio.component';

describe('CrudFirebaseInicioComponent', () => {
  let component: CrudFirebaseInicioComponent;
  let fixture: ComponentFixture<CrudFirebaseInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFirebaseInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFirebaseInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
