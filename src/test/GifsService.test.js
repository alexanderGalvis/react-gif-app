import { getGits } from '../services/GifsService';

describe('Prueba GifsService.js', function () {
  test('Debe consultar 10 elementos', async () => {
    const gifs = await getGits('goku');
    expect(gifs.length).toBe(10);
  });

  test('consultar sin parametros', async () => {
    const gifs = await getGits('');
    expect(gifs.length).toBe(0);
  });
});
