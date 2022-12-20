import * as fromClasses from './classes.reducer';
import { selectClassesState } from './classes.selectors';

describe('Classes Selectors', () => {
  it('should select the feature state', () => {
    const result = selectClassesState({
      [fromClasses.classesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
