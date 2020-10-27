import { shallow } from 'enzyme/build';
import GifGridItem from '../components/GifGridItem';
import React from 'react';

describe('Pruebas GifGridItem.js', function () {
  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Carga el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe tener un url y alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener un class', () => {
    const div = wrapper.find('div');
    console.log(div.props);
    expect(div.prop('className')).toBe(
      'card animate__animated animate__fadeInDown animate__delay-1s'
    );
    expect(div.prop('className').includes('animate__fadeInDown')).toBe(true);
  });
});
