import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeituraArquivoComponent } from './leitura-arquivo.component';

describe('LeituraArquivoComponent', () => {
  let component: LeituraArquivoComponent;
  let fixture: ComponentFixture<LeituraArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeituraArquivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeituraArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
