import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProdutosComponent } from './formulario-produtos.component';

describe('FormularioProdutosComponent', () => {
  let component: FormularioProdutosComponent;
  let fixture: ComponentFixture<FormularioProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
