import { render, screen } from '@testing-library/react';
import Card from '../src/components/card/Card';

test('renders location in km for distances greater than 1000', () => {
  const account = {
    nearestLocation: 1500,
    name: 'Test Account',
    image: 'test-image.jpg',
    accountUrl: 'https://example.com',
  };

  render(<Card account={account} type="first" />);

  const locationText = screen.getByText(/1.50 km/i);
  expect(locationText).toBeInTheDocument();
});
