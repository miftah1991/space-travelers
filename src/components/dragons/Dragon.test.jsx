import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import Dragon from './Dragon';

describe('testing Dragon', () => {
  it('testing Dragon component renders correctly', () => {
    render(<Provider store={store}><Dragon /></Provider>);
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });
});
