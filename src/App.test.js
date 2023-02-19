import { render, screen } from '@testing-library/react';
import App from './App';
import Reservations from './components/Reservations';

test ('Renders the Reservations heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes function', () => {
  it('should return an array with six time strings', () => {
    const times = initializeTimes();
    expect(times).toHaveLength(6);
    expect(times).toEqual(expect.arrayContaining([
      expect.stringMatching(/^\d{2}:\d{2}$/)
    ]));
  });
});

describe('updateTimes function', () => {
  it('should return the same value that is provided in the state', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const newState = updateTimes(state, new Date());
    expect(newState).toEqual(state);
  });
});

