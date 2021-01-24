import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { renderWithContext, InitialState } from '../../tests/common';
import Favourites from '.';
import { screen } from '@testing-library/react';

describe('Page Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<Favourites />, { value: InitialState });

		expect(container).toMatchSnapshot();
	});

	test('renders component with no favouites albums', () => {
		const { queryAllByText } = renderWithContext(<Favourites />, {
			value: { ...InitialState, favourites: {...InitialState.favourites, albums: ['']}}
		});

		expect(queryAllByText('Black Pumas')).toHaveLength(0);
	});

	test('renders component with no favourite songs', () => {
		const { queryAllByText } = renderWithContext(<Favourites />, {
			value: { ...InitialState, favourites: {...InitialState.favourites, songs: [''] }}
		});

		expect(queryAllByText('Tim McGraw & Tyler Hubbard')).toHaveLength(0);
	});
	
	test('renders favourite albums', () => {
		const { getByText } = renderWithContext(<Favourites />, { value: InitialState });
		expect(getByText('Black Pumas')).toBeInTheDocument();
	});

	test('renders favourite songs', () => {
		const { getByText } = renderWithContext(<Favourites />, { value: InitialState });
		expect(getByText('Tim McGraw & Tyler Hubbard')).toBeInTheDocument();
	});
});
