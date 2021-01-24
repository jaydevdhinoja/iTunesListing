import { renderWithContext, InitialState } from './tests/common';
import App from './App';

import { cleanup } from '@testing-library/react';

afterEach(cleanup);

test('renders learn react link', () => {
  const { container } = renderWithContext(<App />, { value: InitialState });

		expect(container).toMatchSnapshot();
  
});
