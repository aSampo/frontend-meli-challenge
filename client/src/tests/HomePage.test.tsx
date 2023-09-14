import { render, screen } from '@testing-library/react';

describe('h1 tests', () => {
  it('should contains the heading 1', () => {
    render(<h1>/Hello world! I am using React/</h1>);
    const heading = screen.getByText(/Hello world! I am using React/i);
    expect(heading).toBeInTheDocument();
  });
});
