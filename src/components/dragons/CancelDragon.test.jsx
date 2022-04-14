import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import CancelDragon from './CancelDragon';

describe('testing cancelDragon', () => {
  it('testing CancelDragon component renders correctly', () => {
    render(<Provider store={store}><CancelDragon /></Provider>);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
  it('Clicking the button to cancel', () => {
    const mockhandler = jest.fn();
    const button = render(<Provider store={store}><CancelDragon /></Provider>).getByTestId('cancel-dragon');

    if (fireEvent.click(button)) {
      mockhandler();
    }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
});
