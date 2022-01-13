# Tutorial-proyect 2021 s-1
Repositorio del proyecto Tutorial YouTube! -- Discord.js v13

# <a><img src="https://emoji.gg/assets/emoji/4623-pixel-symbol-question.png" width="34px" height="34px" alt="pixel_symbol_question" align="center"> Esto de donde salió?</a>

Bueno, este proyecto surgio a partir de sentir la GRAN necesidad de enseñarle a alguien algo que en su momento no sabia, pero de una forma un poco diferente, algo que la mayoría de las personas interpretan como un impedimento para aprender a programar, no vamos a tener el mismo desempeño que con una pc, si, estamos hablando de que todo lo haremos dese movil, interesante ¿verdad?

# <a><img src="https://emoji.gg/assets/emoji/5986-birb-question.png" width="34px" height="34px" alt="Birb_Question"> En que me puede ayudar este repositorio?</a>

Te puede servir en muchas cosas, como:
- Comparar codigos
- Ver funciones y/o comandos por si en los tutoriales no entendiste
- Saldar dudas

 Pero para lo que NO te recomiendo usarlo, es para copearlo, eso no es lo que busco fomentar, pero si es necesario solo copea lo indespensable.

# <a><img src="https://emoji.gg/assets/emoji/4672-exclamationgreen.gif" width="34px" height="34px" alt="exclamationgreen" align="center"> Cada cuanto se actualiza esto?</a>

Normalmente se actualiza después de cada tutorial, así que si se llegase a actualizar antes de un tutorial deberia de ser algun arreglo de bug.

## Change log:
### 12/01/2022: Anti-apagones por errores:
Agregue una función propia, puedes encontrarla y usarla en la carpeta "/funciones_mias" como "send_error.js", para importarlo usa:
```js
const { send_error } = require('ruta/de/funcion'); // la ruta normalmente es './funciones_mias/send_error.js'
```
para usarla es:
```js
send_error(client, "ownerid", <error variable>);
```
ejemplo:
```js
const { send_error } = require('ruta/de/funcion');

//en un try:
try {
  //Tu codigo aqui
} catch (error) {
  send_error(client, "123456789012345678", error);
  return;
}

//en cualquier función. "funcionXd()"
message.channel.send({ content: "algo xd" }).catch(error => {
  send_error(client, "123456789012345678", error);
});
```

parametros:\n
`client` = el cliente de el bot.\n`ownerid` = id de el dueño o la persona a la que se enviara el mensaje de error\n`error` = variable de error.

### Medios:

<a href="https://youtube.com/channel/UCIvJqm-ZU5CN0avff6vK_rg"><img src="https://emoji.gg/assets/emoji/3393-pettingyoutube.gif" width="24px" height="24px" alt="pettingYoutube" align="center"> Canal de YouTube!</a>

<a href="https://discord.gg/34cU9Rnurd"><img src="https://emoji.gg/assets/emoji/1600-pettingdiscord.gif" width="24px" height="24px" alt="pettingDiscord" align="center"> Servidor de Discord :)</a>
