import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import Dragons from './Dragons';

describe('testing Dragon', () => {
  it('testing Dragon component renders correctly', () => {
    render(<Provider store={store}><Dragons /></Provider>);
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });
});
