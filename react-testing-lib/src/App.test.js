import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloWordElem = screen.getByText(/hello world/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i)
  expect(helloWordElem).toBeInTheDocument()
  expect(btn).toBeInTheDocument()
  // expect(input).toBeInTheDocument()
  expect(input).toMatchSnapshot()
  // screen.debug()
});
