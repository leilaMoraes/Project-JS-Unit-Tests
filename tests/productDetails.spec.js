const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([{name: 'Alcool gel', details: {productId: 'Alcool gel123'}},{name: 'Máscara', details: {productId: 'Máscara123'}}]);
  });
  
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função `productDetails` é um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
  });

  it('Verifica se o array retornado pela função `productDetails` contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2);
  });

  it('Verifica se os dois itens dentro do array retornado da função `productDetails` são um objeto', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });

  it('Verifica se quando passado parâmetros diferentes entre si na função `productDetails`, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Celular', 'Carregador')[0]).not.toBe(productDetails('Celular', 'Carregador')[1])
  });

  it('Verifica se os dois productIds terminam com 123', () => {
    const firstProduct = productDetails('Tênis', 'Meia')[0].details.productId;
    const secondProduct = productDetails('Tênis', 'Meia')[1].details.productId;
    expect(firstProduct.endsWith('123')).toBeTruthy();
    expect(secondProduct.endsWith('123')).toBeTruthy();
  });
});
