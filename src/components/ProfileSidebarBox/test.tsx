import { screen } from '@testing-library/react';

import { ProfileSidebarBox } from '.';
import light from '../../assets/styles/themes/light';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<ProfileSidebarBox />', () => {
  const githubUser = 'Pedrohenry-Santos';

  it('should render the theme correctly', () => {
    const { container } = renderWithTheme(
      <ProfileSidebarBox githubUser={githubUser} />
    );

    expect(container.firstChild).toHaveStyle({
      background: light.colors.backgroundTertiary,
      'border-radius': light.border.radius,
      padding: light.padding.medium,
      margin: light.margin.medium
    });
  });

  it('should render the image', () => {
    renderWithTheme(<ProfileSidebarBox githubUser={githubUser} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should the githubUser attribute', () => {
    renderWithTheme(<ProfileSidebarBox githubUser={githubUser} />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      `Foto de perfil do usuário ${githubUser}`
    );
  });
});
