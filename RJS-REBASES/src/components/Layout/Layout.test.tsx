import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Layout from './Layout';

describe('<Layout />', () => {
  test('it should mount', () => {
    render(<Layout />);

    const test = screen.getByTestId('Layout');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});