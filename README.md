# Landing page do curso Bolos de Vitrine

## Como alterar o link dos botões:

- Entrar na pasta `js` (se clicar enquanto pressiona o CTRL, abre em outra aba pra continuar lendo esse guia).
- Abrir o arquivo `grupo-whatsapp.js`
- Clicar no botão `Edit this file`para editar o arquivo (botão com formato de lápis).
- Na linha abaixo, substituir o texto entre parenteses pelo link que quer que os botões tenham:

```javascript
const linkGrupo = "link-do-grupo";
```
- Clicar em `Commit changes...` 
- Preencher a Commit message com uma mensagem significativa, como `Alteração de link` (nesse caso). Também pode deixar a mensagem padrão que é menos significativa. As outras opções pode deixar como estão.
- Clicar em `Commit changes`

## Acompanhando a atualização
Você pode acompanhar, no menu Actions, se as alterações estão sendo ou já foram realizadas.
- Se a última entrada `pages build and deployment` estiver com o circulo "checkado" verde, as alterações já estão disponíveis no site.
- Se estiver com o círculo vermelho e um `x`, houve falha na atualização
- Se estiver com um circulo amarelo, está em andamento. Você pode clicar em cima para ver o andamento
  - Nesse caso, haverá as etapas `build`, `report build status` e `deploy`. Para que a página esteja no ar, todas as etapas devem estar com o circulo verde "checado".
