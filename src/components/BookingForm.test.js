import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  const form = screen.getByRole('form', { name: /booking form/i });
  expect(form).toBeInTheDocument();
});

test('validates form fields', () => {
  render(<BookingForm />);
  const submitButton = screen.getByText(/book/i);
  
  fireEvent.click(submitButton);
  
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  expect(screen.getByText(/guests must be at least 1/i)).toBeInTheDocument();
});
