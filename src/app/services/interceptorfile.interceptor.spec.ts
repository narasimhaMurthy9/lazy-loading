import { TestBed } from '@angular/core/testing';

import { InterceptorfileInterceptor } from './interceptorfile.interceptor';

describe('InterceptorfileInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorfileInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorfileInterceptor = TestBed.inject(InterceptorfileInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
