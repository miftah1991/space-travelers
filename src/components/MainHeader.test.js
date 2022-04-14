import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainHeader from './MainHeader';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(<Router><MainHeader /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});