# Auto Complete

Componente responsável pela configuração do Auto Complete.

## Forma de Utilização

```html
<aui:select id="autoComplete">
  <aui:option label="autoCompleteDefaultValue" value="" />
</aui:select>
```

```js
AUI().use('ent-portlet', 'ent-auto-complete', function (A) {
  var portlet = new A.Portlet('.my-potlet-wrapper-class')

  var options = {
      selector: '#autoComplete',
      url: portlet.createResourceUrl('myResourceID')
  }

  new A.AutoComplete(options)
})
```

### Opções suportadas pelo componente

O componente é configurado através de um objeto passado em seu construtor.
O permite as seguintes configurações:

#### `selector` [obrigatório]

Propriedade responsável pela identificação do seletor da Combobox que irá se comportar como Auto Complete.

#### `url` [obrigatório]

Url do recurso a ser consumido.
Por padrão é executado um GET enviando como Query String o atributo "q".

#### `ajax.dataType`

Tipo do dado a ser enviado na request.
Default: `json`.

#### `ajax.processParams` *(deprecated)*
#### `ajax.data` *(use instead `ajax.processParams`)*

Função que será chamada para a configuração dos parâmetros a serem enviados na request.
Por default ela configura a query string com a propriedade "q".

#### `ajax.processResults`

Função que será chamada para formatar o retorno da request.
Basicamente é uma função de "map" que espera como retorno um objeto contendo as propriedades de "id" e "text" que serão utilizados para preencherem o id do elemento e o seu respectivo valor.
Por default o componente considera que os objetos fornecidos na response seguem este padrão.

#### `ajax.delay`

Delay utilizado para controlar o tempo utilizado para realizar as requests a partir da pausa na digitação.
Default: `250` ms.

#### `minimumInputLength`

Tamanho mínimo de letras digitadas para iniciar as requests.
Default: `1`.

## Outras opções:
https://select2.org
