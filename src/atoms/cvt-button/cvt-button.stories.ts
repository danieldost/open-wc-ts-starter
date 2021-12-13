import { html } from 'lit';
import './index';
import { Story } from '../../../typings/story';

export default {
  title: 'Atoms/Button',
  layout: 'centered',
};

interface ArgTypes {
  text: string;
}

const Template: Story<ArgTypes> = ({ text = 'Click me' }) => html`
  <cvt-button text=${text}></cvt-button>
`;

export const CvtButton = Template.bind({});
CvtButton.args = {
  text: 'Click me',
};
