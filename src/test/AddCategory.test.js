import { shallow } from 'enzyme/build';
import React from 'react';
import AddCategory from '../components/AddCategory';

describe('Pruebas AddCategory', function () {
  const setCategorias = jest.fn();

  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
  });

  test('Carga correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Se debe cambiar caja de texto', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hola mundo' } });
  });

  test('No debe llamar el submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategorias).not.toHaveBeenCalled();
  });

  test('llama setCategories y limpia caja de texto', () => {
    //Simula el input
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hola mundo' } });
    //Simula el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    //Se debe haber llamado
    expect(setCategorias).toHaveBeenCalled();
    //valida el nuevo valor del input
    //const inputDespues = wrapper.find('input').prop('value');
    expect(input.prop('value')).toBe('');
  });
});
