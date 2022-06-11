import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искусственное событие
    // fireEvent.input(input, {
    //   target: { value: '123123' }
    // })
    // Близко к пользователю, обработка нажатия на клавишу и т.д.
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
})

