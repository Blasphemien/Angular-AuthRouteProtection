import { Angular2AuthRouteProtectionPage } from './app.po';

describe('angular2-auth-route-protection App', function() {
  let page: Angular2AuthRouteProtectionPage;

  beforeEach(() => {
    page = new Angular2AuthRouteProtectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
