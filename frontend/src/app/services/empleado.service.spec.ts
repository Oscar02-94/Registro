import { TestBed, inject } from '@angular/core/testing';

import { EmpleadoService } from './empleado.service';

describe('EmpleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoService]
    });
  });

  it('should be created', inject([EmpleadoService], (service: EmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});
