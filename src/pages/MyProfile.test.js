import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/storeSetUp';
import MyProfile from './MyProfile';

describe('testing My Profile', () => {
  it('snapshot for the My profile ', () => {
    const tree = renderer.create(<Provider store={store}><MyProfile /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
