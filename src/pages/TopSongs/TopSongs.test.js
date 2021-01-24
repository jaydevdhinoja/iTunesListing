import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { renderWithContext, InitialState } from '../../tests/common';
import TopSongs from '.';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Page Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<TopSongs />, { value: InitialState });

		expect(container).toMatchSnapshot();
	});

	test('renders component with no songs', () => {
		const { queryAllByText } = renderWithContext(<TopSongs />, {
			value: { ...InitialState, songs: [] }
		});

		expect(queryAllByText('Tim McGraw & Tyler Hubbard')).toHaveLength(0);
	});

	test('renders top songs', () => {
		const { getByText } = renderWithContext(<TopSongs />, { value: InitialState });
		expect(getByText('Tim McGraw & Tyler Hubbard')).toBeInTheDocument();
	});
});
