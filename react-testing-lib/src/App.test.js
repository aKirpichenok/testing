import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWordElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWordElem).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    // expect(input).toBeInTheDocument()
    // expect(input).toMatchSnapshot()
    // screen.debug()
  });

  test('renders learn react link', async () => {
    render(<App />);
    // const helloWordElem = screen.queryByText(/hello2/i)
    // expect(helloWordElem).toBeNull()
    screen.debug()
    const helloWordElem = await screen.findByText(/data/i)
    expect(helloWordElem).toBeInTheDocument()
    expect(helloWordElem).toHaveStyle({ color: 'red' })
    screen.debug()
  });
})

