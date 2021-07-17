import { screen } from '@testing-library/react';

import { OrkutNostalgicIconSet } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<OrkutNostalgicIconSet />', () => {
  it('should render icon component accessibility information', () => {
    renderWithTheme(<OrkutNostalgicIconSet />);

    expect(
      screen.getByLabelText(/Número de recados do usuário/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Quantidade de fotos do usuário/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Número de vídeos do usuário/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Número de fãs do usuário/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Quantidade de mensagens do usuário/i)
    ).toBeInTheDocument();
  });

  it('should render the amount of messages from the user', () => {
    renderWithTheme(<OrkutNostalgicIconSet props={{ message: 5 }} />);

    expect(
      screen.getByLabelText(/Número de recados do usuário/i).textContent
    ).toEqual('5');
  });

  it('should render the amount of photos from the user', () => {
    renderWithTheme(<OrkutNostalgicIconSet props={{ photos: 7 }} />);

    expect(
      screen.getByLabelText(/Quantidade de fotos do usuário/i).textContent
    ).toEqual('7');
  });

  it('should render the amount of videos from the user', () => {
    renderWithTheme(<OrkutNostalgicIconSet props={{ videos: 16 }} />);

    expect(
      screen.getByLabelText(/Número de vídeos do usuário/i).textContent
    ).toEqual('16');
  });

  it('should render the amount of fans from the user', () => {
    renderWithTheme(<OrkutNostalgicIconSet props={{ fans: 12 }} />);

    expect(
      screen.getByLabelText(/Número de fãs do usuário/i).textContent
    ).toEqual('12');
  });

  it('should render the amount of posts from the user', () => {
    renderWithTheme(<OrkutNostalgicIconSet props={{ posts: 124 }} />);

    expect(
      screen.getByLabelText(/Quantidade de mensagens do usuário/i).textContent
    ).toEqual('124');
  });
});
