import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { renderWithContext, InitialState } from '../../tests/common';
import TopAlbums from '.';

describe('Page Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<TopAlbums />, { value: InitialState });

		expect(container).toMatchSnapshot();
	});

	test('renders component with no albums', () => {
		const { queryAllByText } = renderWithContext(<TopAlbums />, {
			value: { ...InitialState, albums: [] }
		});

		expect(queryAllByText('Black Pumas')).toHaveLength(0);
	});

	test('renders component with no songs', () => {
		const { queryAllByText } = renderWithContext(<TopAlbums />, {
			value: { ...InitialState, songs: [] }
		});

		expect(queryAllByText('Tim McGraw & Tyler Hubbard')).toHaveLength(0);
	});
	
	test('renders top albums', () => {
		const { getByText } = renderWithContext(<TopAlbums />, { value: InitialState });
		expect(getByText('Black Pumas')).toBeInTheDocument();
	});

	test('renders top songs', () => {
		const { getByText } = renderWithContext(<TopAlbums />, { value: InitialState });
		expect(getByText('Tim McGraw & Tyler Hubbard')).toBeInTheDocument();
	});
});
