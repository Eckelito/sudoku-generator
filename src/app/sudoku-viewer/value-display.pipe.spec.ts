import { ValueDisplayPipe } from '../pipes/value-display.pipe';

describe('ValueDisplayPipe', () => {
  it('create an instance', () => {
    const pipe = new ValueDisplayPipe();
    expect(pipe).toBeTruthy();
  });
});
