import { html } from 'lit';
import './index';
import { Story } from '../../../typings/story';

export default {
  title: 'Blocks/DemoElement',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <demo-element
    style="--demo-element-background-color: ${backgroundColor}"
    .title=${title}
  ></demo-element>
`;

export const DemoElement = Template.bind({});
DemoElement.args = {
  title: 'Demo component',
};
