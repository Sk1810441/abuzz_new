import * as ProfileActions from './profile.actions';

describe('Profile', () => {
  it('should create an instance', () => {
    expect(new ProfileActions.LoadProfiles()).toBeTruthy();
  });
});
