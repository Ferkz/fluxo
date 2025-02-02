import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSetorComponent } from './criar-setor.component';

describe('CriarSetorComponent', () => {
  let component: CriarSetorComponent;
  let fixture: ComponentFixture<CriarSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarSetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
