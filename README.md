# Sitio web — Asociación de Trabajadores Cambistas (A.T.C.)

Sitio web estático (HTML/CSS/JS puro, sin dependencias externas) para la
Asociación de Trabajadores Cambistas de Ciudad del Este.

## Estructura

```
atc-web/
├── index.html          # Inicio + presentación de la asociación
├── quienes-somos.html  # Historia, misión, valores
├── actividades.html    # Agenda y actividades permanentes
├── noticias.html       # Comunicados + prensa
├── css/style.css       # Estilos (paleta azul marino + dorado)
├── js/main.js          # Menú móvil + año dinámico del footer
└── img/                # Poné acá el logo y fotos reales
```

## 📷 Fotos de la asociación

Copiá tus fotos a la carpeta `img/` **con estos nombres** (JPG, idealmente
de 1600 px de ancho o más para las de fondo; pesadas de más hacen lenta la web):

| Archivo | Dónde aparece |
|---|---|
| `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` | Fondo de la portada (rotan solas cada 6 s) |
| `fondo.jpg` | Fondo del encabezado de las demás páginas |
| `galeria-1.jpg` … `galeria-6.jpg` | Galería de la portada (clic para ampliar) |

No hace falta tocar el código: las fotos que existan se muestran y las que
falten se ignoran (queda el degradado azul / un recuadro de "foto").
Si no ves el cambio al probar en local, recargá con **Ctrl + F5**.

Botón verde flotante: en cada página tiene `href="#contacto"`. Cuando tengas
el WhatsApp de la asociación, cambialo por `https://wa.me/595XXXXXXXXX`.

## ⚠️ Contenido de ejemplo a reemplazar

Todo el texto marcado con **"(completar)"**, *cursiva* o dentro de los
recuadros amarillos de "Nota" es contenido de ejemplo. Antes de publicar,
reemplazá:

- Dirección exacta, teléfono y correo de contacto (footer de cada página).
- Historia real, año de fundación, autoridades y cifra real de asociados
  (`quienes-somos.html`).
- Agenda real de actividades (`actividades.html`).
- Comunicados oficiales (`noticias.html`). Los enlaces de "En los medios"
  ya apuntan a notas de prensa reales (ABC Color, Última Hora) — podés
  dejarlos, quitarlos o sumar más.
- Logo real en `img/` (hoy se usa un círculo con las siglas "ATC" como
  placeholder, definido en `css/style.css`).

## Ver el sitio en tu computadora

No hace falta instalar nada: abrí `index.html` con doble clic en cualquier
navegador.

Si preferís un servidor local (recomendado para que los enlaces relativos
se comporten igual que en producción), con Python instalado:

```bash
python -m http.server 8080
```

y luego abrí `http://localhost:8080` en el navegador.

## Publicar gratis (sin dominio propio)

1. Creá una cuenta gratuita en [Netlify](https://www.netlify.com/).
2. Arrastrá la carpeta `atc-web` completa a la sección "Deploy" de Netlify
   (Netlify Drop: https://app.netlify.com/drop).
3. En segundos obtenés una URL pública tipo `atc-cde.netlify.app`.

Cuando la asociación tenga su propio dominio (ej. `atccde.org.py` o
`.org`), se conecta desde el panel de Netlify en pocos minutos, sin tocar
el código.

## Próximos pasos sugeridos

- Añadir fotos reales de la sede y de actividades.
- Sumar un formulario de contacto (se puede integrar gratis con
  [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) sin backend).
- Si en el futuro alguien sin conocimientos técnicos va a mantener el
  sitio, se puede agregar un editor visual (Decap CMS) sobre esta misma
  estructura, sin necesidad de migrar a WordPress.
