import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom'

import App from './App';
import MenuItem from './components/menu-item/menu-item.component';

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render with tittle name", () => {
  act(() => {
    render(
    <MemoryRouter>
      <MenuItem title="hats" imageUrl='https://i.ibb.co/cvpntL1/hats.png' linkUrl='hats' />
    </MemoryRouter>
    , container)
  });
  expect(container.textContent).toBe("HATSSHOP NOW")
})
