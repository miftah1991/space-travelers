import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import ReserveDragon from './ReserveDragon';

describe('testing reserveDragon', () => {
  it('testing reserveDragon component renders correctly', () => {
    render(<Provider store={store}><ReserveDragon /></Provider>);
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });
  it('Clicking the button to cancel', () => {
    const mockhandler = jest.fn();
    const button = render(<Provider store={store}><ReserveDragon /></Provider>).getByTestId('reserve-dragon');

    if (fireEvent.click(button)) {
      mockhandler();
    }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
});
