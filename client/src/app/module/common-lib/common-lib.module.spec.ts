import { CommonLibModule } from './common-lib.module';

describe('CommonLibModule', () => {
  let commonLibModule: CommonLibModule;

  beforeEach(() => {
    commonLibModule = new CommonLibModule();
  });

  it('should create an instance', () => {
    expect(commonLibModule).toBeTruthy();
  });
});
