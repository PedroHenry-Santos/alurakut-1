import React from 'react';

import { render, screen } from '@testing-library/react';

import { Book, Camera, Cube, Email, Heart, Smile, Star, VideoCamera } from '.';

describe('<Icons />', () => {
  it('should render the video camera icon', () => {
    render(<Book />);

    expect(screen.getByLabelText(/Ícone de um livro/i)).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Camera />);

    expect(screen.getByLabelText(/Ícone de uma câmera/i)).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<VideoCamera />);

    expect(
      screen.getByLabelText(/Ícone de uma câmera de Vídeo/i)
    ).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Star />);

    expect(screen.getByLabelText(/Ícone de uma estrela/i)).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Email />);

    expect(screen.getByLabelText(/Ícone de um envelope/i)).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Smile />);

    expect(
      screen.getByLabelText(/Ícone de um emoji sorrindo/i)
    ).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Cube />);

    expect(screen.getByLabelText(/Ícone de um cubo/i)).toBeInTheDocument();
  });

  it('should render the video camera icon', () => {
    render(<Heart />);

    expect(screen.getByLabelText(/Ícone de um coração/i)).toBeInTheDocument();
  });
});
