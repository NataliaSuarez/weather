import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';


describe('App Tests', () => {
  it('render', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Weather&Clock/i)).toBeTruthy();
    })
  });

  describe('filters', () => {
    it('render country textbox - autocomplete', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getAllByRole('textbox', { name: /country/i })).toBeTruthy();
      })
    })

    it('render city textbox - autocomplete', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getAllByRole('textbox', { name: /city/i })).toBeTruthy();
      })
    })

    it.todo('filter by text when typing a country name');
    it.todo('filter by text when typing a city name');
    it.todo('should select a dropdowns option');
    it.todo('should disabled textbox and dropdown when call api fails');
  });
})

