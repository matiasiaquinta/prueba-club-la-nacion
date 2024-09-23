import { render, screen, act } from '@testing-library/react';
import Card from '@/components/card/Card';

test('check if the text changes to km when the distance exceeds 1000 meters', async () => {
  const account = {
    nearestLocation: 1500,
  };

  await act(async () => {
    render(<Card account={account} type="first" />);
  });

  const locationText = screen.getByText('1.50 km');
  expect(locationText).toBeInTheDocument();
});
