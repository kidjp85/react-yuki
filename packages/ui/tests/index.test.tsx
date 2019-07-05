import React, { ReactElement } from 'react';
import Renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Box, Flex, Text, Heading, Button, Link, Image, Grid, Svg } from '../src';
import 'jest-styled-components';

const renderJSON = (el: ReactElement): ReactTestRendererJSON | null => Renderer.create(el).toJSON();

describe('Box', () => {
  test('renders', () => {
    const json = renderJSON(<Box />);

    expect(json!.type).toBe('div');
  });

  test('renders with as prop', () => {
    const json = renderJSON(<Box as="nav" />);

    expect(json!.type).toBe('nav');
  });

  test('renders with style props', () => {
    const json = renderJSON(<Box width={1} height={'100%'} />);

    expect(json).toHaveStyleRule('width', '100%');
    expect(json).toHaveStyleRule('height', '100%');
  });
});

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(<Flex />);

    expect(json!.type).toBe('div');
  });

  test('renders with flex props', () => {
    const json = renderJSON(<Flex alignItems="center" />);

    expect(json).toHaveStyleRule('display', 'flex');
    expect(json).toHaveStyleRule('align-items', 'center');
  });

  test('renders with style props', () => {
    const json = renderJSON(<Flex color="dark" />);

    expect(json).toHaveStyleRule('color', 'dark');
  });

  test('renders with as and styles props', () => {
    const json = renderJSON(<Flex as="section" color="dark" />);

    expect(json!.type).toBe('section');
    expect(json).toHaveStyleRule('color', 'dark');
  });
});

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(<Text textAlign="center" fontWeight="bold" />);

    expect(json!.type).toBe('span');
    expect(json).toHaveStyleRule('text-align', 'center');
    expect(json).toHaveStyleRule('font-weight', 'bold');
  });
});

describe('Heading', () => {
  test('renders', () => {
    const json = renderJSON(<Heading />);

    expect(json!.type).toBe('h2');
    expect(json).toHaveStyleRule('font-size', '48px');
    expect(json).toHaveStyleRule('font-weight', '6');
  });
});

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(<Button />);

    expect(json!.type).toBe('button');
    expect(json).toHaveStyleRule('color', 'white');
    expect(json).toHaveStyleRule('background-color', 'orange.3');
  });

  test('renders as <a>', () => {
    const json = renderJSON(<Button as="a" />);
    expect(json!.type).toBe('a');
  });
});

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(<Link />);

    expect(json!.type).toBe('a');
    expect(json).toHaveStyleRule('color', 'blue.3');
  });
});

describe('Image', () => {
  test('renders', () => {
    const json = renderJSON(<Image />);

    expect(json!.type).toBe('img');
    expect(json).toHaveStyleRule('max-width', '100%');
    expect(json).toHaveStyleRule('height', 'auto');
  });
});

describe('Svg', () => {
  test('renders', () => {
    const json = renderJSON(<Svg />);

    expect(json!.type).toBe('svg');
  });
});

describe('Grid', () => {
  test('renders', () => {
    const json = renderJSON(<Grid gridGap={'30px'} />);

    expect(json!.type).toBe('div');

    expect(json).toHaveStyleRule('grid-gap', '30px');
  });
});
