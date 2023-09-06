# Promises ✨
O objeto Promise representa a conclusão eventual (ou falha) de uma operação assíncrona e o valor resultante.

Para entender como as promises funcionam e como você pode usá-las, recomendamos que você leia sobre o uso de promises primeiro.

## Descrição 📜
Uma Promise é um proxy para um valor que nem sempre é conhecido quando a promise é criada. Ela permite associar manipuladores a um valor de sucesso eventual ou a um motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento futuro.

Uma Promise está em um desses estados:

 - pendente: estado inicial, nem cumprida nem rejeitada.
 - cumprida: significa que a operação foi concluída com sucesso.
 - rejeitada: significa que a operação falhou.

O estado eventual de uma promise pendente pode ser cumprido com um valor ou rejeitado com um motivo (erro). Quando qualquer uma dessas opções ocorre, os manipuladores associados enfileirados pelo método then da promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.
Uma promise é considerada resolvida se estiver cumprida ou rejeitada, mas não pendente.
Você também ouvirá o termo "resolvida" usado com promises - isso significa que a promise está resolvida ou "travada" para corresponder ao estado eventual de outra promise, e resolvê-la ou rejeitá-la posteriormente não tem efeito. O documento "Estados e destinos" da proposta original das promises contém mais detalhes sobre a terminologia de promises. Coloquialmente, promises "resolvidas" muitas vezes são equivalentes a promises "cumpridas", mas, como ilustrado em "Estados e destinos", promises resolvidas também podem estar pendentes ou rejeitadas. 

```javascript
new Promise((resolveExterna) => {
  resolveExterna(
    new Promise((resolveInterna) => {
      setTimeout(resolveInterna, 1000);
    }),
  );
});
```
Esta promise já está resolvida no momento em que é criada (porque resolveExterna é chamada de forma síncrona), mas ela é resolvida com outra promise e, portanto, não será cumprida até 1 segundo depois, quando a promise interna for cumprida. Na prática, a "resolução" geralmente é feita nos bastidores e não é observável, sendo apenas seu cumprimento ou rejeição.






