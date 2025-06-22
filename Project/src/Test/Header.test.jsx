import { render, screen } from '@testing-library/react';
import { Header } from '../Components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('renders heading and subHeading props', () => {
    render(<Header heading="Billionaire's Club" subHead="25th Edition" />);
    expect(screen.getByText("Billionaire's Club")).toBeInTheDocument();
    expect(screen.getByText("25th Edition")).toBeInTheDocument();
  });
});