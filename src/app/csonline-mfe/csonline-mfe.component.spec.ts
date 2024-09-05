import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsonlineMfeComponent } from './csonline-mfe.component';

describe('CsonlineMfeComponent', () => {
  let component: CsonlineMfeComponent;
  let fixture: ComponentFixture<CsonlineMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsonlineMfeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsonlineMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
