```sh
$ cd dillinger
```

## POC - REACT JODIT - LINGUAGEM e i18n

Exemplo de configuração de linguagem usando o Jodit-React



⭐️ Linguagens predefinidas e i18n custom funcionando ⭐️


![Image of Yaktocat](https://github.com/micheldpcarlos/react-jodit-poc/blob/master/sample.png?raw=true)

### Uso
Para rodar o projeto basta executar
```sh
$ npm i
```

e depois

```sh
$ npm start
```


### Linguagens
Todas as linguagens disponiveis se encontram no diretorio
https://github.com/xdan/jodit/blob/master/src/langs/pt_br.js

### i18n
Para i18n foi usado como base para as string o arquivo:
https://github.com/xdan/jodit/blob/master/src/langs/pt_br.js
qualquer arquivo de linguagem pode nos dar as chaves corretas para criarmos textos customizados


### Notas
Tive alguns problemas utilizando esse wrapper e acabei percebendo que sua implementação é muito simples

Talvez seja melhor criarmos nosso proprio wrapper no projeto

seguindo o exemplo do ultimo comentario dessa issue:

https://github.com/jodit/jodit-react/issues/4