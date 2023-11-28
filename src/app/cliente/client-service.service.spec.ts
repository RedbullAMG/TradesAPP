import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ClientServiceService } from './client-service.service';

describe('ClientServiceService', () => {
  let service: ClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [ClientServiceService],
    });

    service = TestBed.inject(ClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
