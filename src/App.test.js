import { render, screen } from '@testing-library/react';
import App from './App';
import Reservations from './components/Reservations';

test ('Renders the Reservations heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes function', () => {
  it('should return an array with six time strings', async () => {
    const times = await initializeTimes();
    expect(times).toHaveLength(6);
    expect(times).toEqual(expect.arrayContaining([
      expect.stringMatching(/^\d{2}:\d{2}$/)
    ]));
  });
});

describe('updateTimes function', () => {
  it('should return an array with at least one time string', async () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const newState = await updateTimes(state, {payload: new Date()});
    expect(newState).toBeInstanceOf(Array);
    expect(newState.length).toBeGreaterThan(0);
    expect(newState).toEqual(expect.arrayContaining([
      expect.stringMatching(/^\d{2}:\d{2}$/)
    ]));
  });
});

