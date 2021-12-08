import { html, TemplateResult } from 'lit';
import '../../index';

export default {
  title: 'DemoElement',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

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
