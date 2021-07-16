import { Box } from '.';
import light from '../../assets/styles/themes/light';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Box />', () => {
  it('should render the theme correctly', () => {
    const { container } = renderWithTheme(<Box />);

    expect(container.firstChild).toHaveStyle({
      background: light.colors.backgroundTertiary,
      'border-radius': light.border.radius,
      padding: light.padding.medium,
      margin: light.margin.medium
    });
  });
});
