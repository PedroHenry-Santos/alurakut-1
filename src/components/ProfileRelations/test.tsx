import { ProfileRelations } from '.';
import { renderWithTheme } from '../..//utils/tests/helpers';

const friends = [
  'omariosouto',
  'juunegreiros',
  'diego3g',
  'maykbrito',
  'filipedeschamps',
  'akitaonrails'
];
describe('<ProfileRelations />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <ProfileRelations
        pageUrl="users"
        UrlDomain="github.com"
        contentRender={friends}
      />
    );

    expect(
      container.getElementsByClassName('smallTitle').item(0)?.innerHTML
    ).toEqual(`Pessoas da comunidade (${friends.length})`);
  });

  it('should count the number of components rendered by Map', () => {
    const { container } = renderWithTheme(
      <ProfileRelations
        pageUrl="users"
        UrlDomain="github.com"
        contentRender={friends}
      />
    );

    expect(container.getElementsByTagName('li').length).toEqual(friends.length);
  });
});
