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

test("HTML5 validation for date input", () => {
  const { getByLabelText } = render(<Reservations />);

  // Check if the field is required
  expect(getByLabelText(/Choose date/)).toBeRequired();

  // Test for invalid input - date in the past
  fireEvent.change(getByLabelText(/Choose date/), { target: { value: "2022-02-15" } });
  expect(getByLabelText(/Choose date/)).not.toBeValid();
  expect(getByLabelText(/Choose date/).validationMessage).toBe("Please enter a date in the future.");

  // Test for valid input
  fireEvent.change(getByLabelText(/Choose date/), { target: { value: "2023-02-25" } });
  expect(getByLabelText(/Choose date/)).toBeValid();
});

test("HTML5 validation for time select", () => {
  const { getByLabelText } = render(<Reservations availableTimes={["10:00 AM", "12:00 PM", "02:00 PM"]} />);

  // Check if the field is required
  expect(getByLabelText(/Choose time/)).toBeRequired();

  // Test for invalid input - no option selected
  fireEvent.change(getByLabelText(/Choose time/), { target: { value: "" } });
  expect(getByLabelText(/Choose time/)).not.toBeValid();
  expect(getByLabelText(/Choose time/).validationMessage).toBe("Please select an option.");

  // Test for valid input
  fireEvent.change(getByLabelText(/Choose time/), { target: { value: "12:00 PM" } });
  expect(getByLabelText(/Choose time/)).toBeValid();
});

test("HTML5 validation for guests input", () => {
  const { getByLabelText } = render(<Reservations />);

  // Check if the field is required
  expect(getByLabelText(/Number of guests/)).toBeRequired();

  // Test for invalid input - value less than min
  fireEvent.change(getByLabelText(/Number of guests/), { target: { value: "0" } });
  expect(getByLabelText(/Number of guests/)).not.toBeValid();
  expect(getByLabelText(/Number of guests/).validationMessage).toBe("Please enter a number that is 1 or greater.");

  // Test for invalid input - value greater than max
  fireEvent.change(getByLabelText(/Number of guests/), { target: { value: "11" } });
  expect(getByLabelText(/Number of guests/)).not.toBeValid();
  expect(getByLabelText(/Number of guests/).validationMessage).toBe("Please enter a number that is 10 or less.");

  // Test for valid input
  fireEvent.change(getByLabelText(/Number of guests/), { target: { value: "5" } });
  expect(getByLabelText(/Number of guests/)).toBeValid();
});

describe("handleGuestsChange", () => {
  it("should set guests to the parsed integer value of the input", () => {
    const event = { target: { value: "3" } };
    handleGuestsChange(event);
    expect(guests).toEqual(3);
  });
});

describe("handleOccasionChange", () => {
  it("should set occasion to the input value", () => {
    const event = { target: { value: "Anniversary" } };
    handleOccasionChange(event);
    expect(occasion).toEqual("Anniversary");
  });

  it("should set occasionValid to true if the input value is not empty", () => {
    const event = { target: { value: "Birthday" } };
    handleOccasionChange(event);
    expect(occasionValid).toBe(true);
  });

  it("should set occasionValid to false if the input value is empty", () => {
    const event = { target: { value: "" } };
    handleOccasionChange(event);
    expect(occasionValid).toBe(false);
  });
});

describe("handleSubmit", () => {
  it("should prevent the default form submission behavior", () => {
    const event = { preventDefault: jest.fn() };
    handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should call setBooking with the correct booking object", () => {
    const event = { preventDefault: jest.fn() };
    const booking = { date: "2022-03-21", time: "13:00", guests: 4, occasion: "Birthday" };
    setDate("2022-03-21");
    setTime("13:00");
    setGuests(4);
    setOccasion("Birthday");
    handleSubmit(event);
    expect(setBooking).toHaveBeenCalledWith(booking);
  });
});
