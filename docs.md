## Query Parameters

EN un endpoint usando query parameters puedo mandar los datos desde la url, mi Back se vería así:

```js
    app.get('/query_parameters', (req, res) => {
        const clave = req.query.clave;
        console.log(clave)
        res.send(`Hola, ${clave}!`);
    });
```

Y el Front así:

```js
<a href="/query_aprameters?clave=valor">Saludar</a>

<script>
console.log("Hola)
fetch("/query_aprameters?clave=valor")
</script>
```

Puedo llamar de diferentes formas a /query_parameters, pero siempre tengo que mandarle el dato si quiero hacer algo con él.

## Post request

Esta forma de mandar datos suele hacerse con un formulario html

```js
app.use(express.urlencoded({ extended: true })); 

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});
```

EL formulario html para este endpoint:

```html
<form action="/enviar" method="POST">
    <input type="text" name="mensaje">
    <button type="submit">Enviar</button>
</form>
```