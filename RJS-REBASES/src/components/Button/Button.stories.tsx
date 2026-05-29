/* eslint-disable */

// npm i -D @storybook/react --force
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['primary', 'optional', 'critical'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    level: 'primary',
    size: 'medium',
    action: () => console.log('Primary clicked'),
  },
};

export const Optional: Story = {
  args: {
    children: 'Optional Button',
    level: 'optional',
    size: 'medium',
    action: () => console.log('Optional clicked'),
  },
};

export const Critical: Story = {
  args: {
    children: 'Critical Button',
    level: 'critical',
    size: 'medium',
    action: () => console.log('Critical clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    level: 'primary',
    size: 'medium',
    disabled: true,
    action: () => console.log('Disabled clicked'),
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    level: 'primary',
    size: 'small',
    action: () => console.log('Small clicked'),
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    level: 'primary',
    size: 'large',
    action: () => console.log('Large clicked'),
  },
};


