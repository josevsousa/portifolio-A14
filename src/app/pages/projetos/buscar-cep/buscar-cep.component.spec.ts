import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCepComponent } from './buscar-cep.component';

describe('BuscarCepComponent', () => {
  let component: BuscarCepComponent;
  let fixture: ComponentFixture<BuscarCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
