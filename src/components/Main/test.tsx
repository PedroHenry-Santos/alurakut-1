import { screen } from '@testing-library/react';

import { Main } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /Boilerplate NextJS/i })
    ).toBeInTheDocument();
  });

  it('should render colors correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#308BC5'
    });
  });
});
