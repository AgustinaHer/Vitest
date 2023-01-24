import React from 'react';
import { render, fireEvent } from 'vitest';
import Button from './Button';

test('Button calls onClick when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
