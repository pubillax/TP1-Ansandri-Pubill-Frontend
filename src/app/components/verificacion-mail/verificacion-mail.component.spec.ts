import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionMailComponent } from './verificacion-mail.component';

describe('VerificacionMailComponent', () => {
  let component: VerificacionMailComponent;
  let fixture: ComponentFixture<VerificacionMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacionMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificacionMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
