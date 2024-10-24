## Query Parameters

EN un endpoint usando query parameters puedo mandar los datos desde la url, mi back se vería así:

```js
    app.get('/query_parameters', (req, res) => {
        const clave = req.query.clave;
        console.log(clave)
        res.send(`Hola, ${clave}!`);
    });
```

Y el front así:

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

## Fecth Api

Cuando queremos hacer algo con la respuesta del backend, necesitamos usar `fetch` y `then`.

En el front:

```html
<p id="respuesta"></p>
<script>
    const parrafo = document.getElementById("respuesta")
    
    fetch('/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Alvaro' })
})
.then(response => response.text())
.then(data => parrafo.textContent = data);
</script>
```

En el backend:

```js
app.use(express.json());

app.post('/json', (req, res) => {
    const nombre = req.body.nombre
    res.send(`Hola, ${nombre}!`);
});
```

Es importante añadir `app.use(express.json())` o no podremos recibir el dato en el `/fetch_api.html`.

## Params

Para acceder a un usuario podemos usar el `params`.

En el front:

```html
<a href="/usuario/123">Ver Usuario</a>
<p id="respuesta"></p>

<script>
const nombre = "Alvaro"
const parrafo = document.getElementById("respuesta")

fetch(`/usuario/${nombre}`)
.then(response => response.text())
.then(data => parrafo.textContent = data);
</script>
```
 
En el backend:

```js
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuario ID: ${id}`);
});
```