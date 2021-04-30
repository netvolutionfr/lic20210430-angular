import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivredetailComponent } from './livredetail.component';

describe('LivredetailComponent', () => {
  let component: LivredetailComponent;
  let fixture: ComponentFixture<LivredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
