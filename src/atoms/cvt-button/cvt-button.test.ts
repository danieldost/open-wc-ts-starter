import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { CvtButton } from './index';
import '../../index';

describe('CvtButton', () => {
  let element: CvtButton;

  beforeEach(async () => {
    element = await fixture(html`<cvt-button text="test"></cvt-button>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
