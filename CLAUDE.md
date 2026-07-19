# Quwi Landing Page — quwi.pe

## Stack Tecnológico
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Lucide
- **Hosting**: Firebase Hosting (proyecto `quwi-prod` — default; `quwi-dev` queda como alias `dev`, ya sin uso)
- **Dominio**: quwi.pe (registrado en NIC.pe, DNS gestionado en Cloudflare)
- **SSL**: Activo — Firebase Hosting (quwi.pe + www.quwi.pe)
- **Correo**: Google Workspace (contacto@quwi.pe) — MX, SPF, DKIM, DMARC en Cloudflare
- **Repo**: github.com/batusay81/quwi-landing
- **Branches**: `main` (producción/deploy), `develop` (desarrollo)

---

## Estado Actual (2026-07-19)

### Completado
| Estado | Item |
|--------|------|
| ✅ | Diseño en Claude Design (High Fidelity, responsive) |
| ✅ | Landing page responsive (1440px / 768px / 375px) |
| ✅ | Deploy en Firebase Hosting: https://quwi-prod.web.app |
| ✅ | Repo GitHub con branches main + develop |
| ✅ | Dominio `quwi.pe` agregado en Firebase Console |
| ✅ | DNS en Cloudflare: Registro A → `199.36.158.100` (Solo DNS) |
| ✅ | DNS en Cloudflare: CNAME www → `quwi-prod.web.app` (Solo DNS) |
| ✅ | DNS en Cloudflare: TXT `_acme-challenge` para SSL |
| ✅ | Dominio `www.quwi.pe` agregado en Firebase (redirige a quwi.pe) |
| ✅ | Actualización contenido: email soporte@quwi.pe, WhatsApp real, eliminación features offline |
| ✅ | Certificado SSL quwi.pe + www.quwi.pe activo y conectado |
| ✅ | Seguridad: SSL Labs A+, Security Headers A+ |
| ✅ | Seguridad: CSP, HSTS preload, SRI, X-Frame-Options, Permissions-Policy |
| ✅ | HSTS Preload enviado a hstspreload.org |
| ✅ | Páginas legales en quwi.pe: `privacy.html`, `terms.html`, `data-deletion.html` (migradas desde Netlify, estilo compartido en `legal.css`) |
| ✅ | Correo unificado a contacto@quwi.pe en todo el sitio (landing + páginas legales) |
| ✅ | Centro de Ayuda en quwi.pe: `ayuda.html` (canales de atención + FAQ ampliado por categorías) |
| ✅ | FAQ corregido: la app REQUIERE internet (no hay cache offline) — corregido en landing y ayuda.html |
| ✅ | FAQ reordenado: abre con "¿Es segura mi información?" (respuesta positiva); pregunta de internet al final |
| ✅ | Fix íconos Lucide en producción: `.gitattributes` fuerza LF para que el hash CSP del script inline coincida (con CRLF el navegador lo bloqueaba) |
| ✅ | Precio Premium mostrado como S/ 0.17 por cuy al mes (equivalente S/ 0.50 · trimestre en letra pequeña) — landing y ayuda.html |
| ✅ | Datos legales (Titular, RUC, dirección) retirados del footer de las 5 páginas a pedido del usuario (2026-07-18) — se conserva teléfono y email |
| ✅ | Botones flotantes de navegación en landing: subir (top-right, bajo el header) y bajar (bottom-right, ancla `#footer`) en verde claro `--accent`; sin JS (anclas + `scroll-behavior:smooth`) para no tocar el CSP. WhatsApp/Messenger reubicados encima del botón de bajar |
| ✅ | Link de TikTok (https://www.tiktok.com/@quwi.app.gestion) en el ícono del footer de las 5 páginas — Instagram y YouTube siguen con `href="#"` pendientes |
| ✅ | SEO on-page (2026-07-19): meta description en landing, canonical + Open Graph + Twitter Cards en las 5 páginas, robots.txt, sitemap.xml, JSON-LD (MobileApplication + FAQPage) en la landing |
| ✅ | Imagen Open Graph 1200×630 (`assets/og-image.png`) generada desde `og-source.html` (HTML+CSS → captura con Edge headless; og-source.html excluido del deploy en firebase.json) |
| ✅ | Google Search Console: quwi.pe verificado (propiedad de Dominio vía TXT en Cloudflare) y sitemap enviado (2026-07-19, por el usuario) |
| ✅ | URLs legales actualizadas en Google Play Console: quwi.pe/privacy.html y quwi.pe/data-deletion.html (2026-07-19, por el usuario) |
| ✅ | Capturas de la app en la landing (mejorables a futuro) y link de Google Play funcionando |
| ✅ | Favicon optimizado (2026-07-19): `favicon.ico` (16/32/48) + `assets/favicon-32.png` + `assets/apple-touch-icon.png` (180×180, fondo blanco), generados con .NET System.Drawing desde quwi-icon.png |
| ✅ | Google Analytics GA4 (2026-07-19): gtag.js con ID `G-53BECQ1JXV` (app web "Quwi Landing" en quwi-prod) en las 5 páginas. CSP actualizado (meta + firebase.json) con googletagmanager/google-analytics y hash del snippet inline `'sha256-Pw8rx2dLMjeSbxDBRtkmPGVt8sx0vr1kUyirQMOOjBI='` — el snippet debe mantenerse byte a byte idéntico (LF) o cambiar el hash |
| ✅ | Migración a quwi-prod (2026-07-19): `.firebaserc` default → quwi-prod (aliases `prod`/`dev`), deploy activo en https://quwi-prod.web.app. También existe app web en quwi-dev (`G-VV6B0G2F3P`, ya no usada) |
| ✅ | Migración del dominio quwi.pe a quwi-prod COMPLETADA (2026-07-19): dominio quitado de quwi-dev, validado en quwi-prod, SSL emitido, propagación de Firebase terminada. Verificado: https://quwi.pe responde 200 con la landing y www.quwi.pe redirige 301 a quwi.pe. quwi-dev ya no recibe deploys |

### Pendiente — Contenido y mejoras
| Estado | Item | Detalle |
|--------|------|---------|
| 📋 | Testimonios reales | Reemplazar placeholders con testimonios de criadores |
| 📋 | Mejorar capturas de la app | Ya hay capturas; reemplazar por versiones más pulidas a futuro |
| 📋 | Links de Instagram y YouTube en footer | Siguen con `href="#"` — agregar cuando existan las cuentas |

### Pendiente — Meta/Facebook
| Estado | Item | Detalle |
|--------|------|---------|
| ❌ | Verificación de negocio Meta | Rechazada (2026-07): "no puede determinar que pertenezca a un negocio real". RUC 10409440067 (persona natural) |
| ⚠️ | Datos legales en footer quwi.pe | RETIRADOS (2026-07-18) a pedido del usuario. Si se reenvía la verificación Meta, posiblemente haya que volver a publicarlos temporalmente |
| ✅ | Reenviar verificación Meta | Reenviada (2026-07-19, por el usuario) — esperar resolución de Meta |
| ✅ | Verificación de dominio en Meta | Completada (2026-07-19, por el usuario) |
| 📋 | Facebook app modo Live | Requiere verificación de negocio aprobada. Facebook Login oculto en LoginScreen.kt mientras tanto |

**Nota**: El rechazo NO afecta: Facebook Ads (activos), la página de Facebook, ni el login con Google / Google Play.

---

## Estructura del Proyecto

```
quwi-landing/
├── index.html          # Landing page principal (responsive)
├── privacy.html        # Política de Privacidad
├── terms.html          # Términos de Uso
├── data-deletion.html  # Eliminación de Cuenta y Datos
├── ayuda.html          # Centro de Ayuda (canales de atención + FAQ)
├── legal.css           # Estilos compartidos de páginas legales y ayuda
├── og-source.html      # Fuente HTML de la imagen Open Graph (no se despliega)
├── robots.txt          # Permite indexación + apunta al sitemap
├── sitemap.xml         # Sitemap de las 5 páginas
├── favicon.ico         # Favicon multi-tamaño 16/32/48 (generado de quwi-icon.png)
├── assets/
│   ├── quwi-icon.png   # Ícono de la app (1024x1024)
│   ├── og-image.png    # Imagen Open Graph 1200×630 (generada de og-source.html)
│   ├── favicon-32.png  # Favicon PNG 32×32
│   └── apple-touch-icon.png  # 180×180 fondo blanco para iOS
├── firebase.json        # Configuración Firebase Hosting
├── .firebaserc          # Proyecto Firebase (quwi-prod default; alias dev → quwi-dev)
├── .gitattributes       # Fuerza LF (crítico para el hash CSP del script inline)
└── CLAUDE.md            # Este archivo
```

---

## Paleta de Colores (sincronizada con app Android)

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#2E7D32` | Verde oscuro - botones, header, CTAs |
| Secondary | `#4CAF50` | Verde medio - acentos |
| Accent | `#81C784` | Verde claro - detalles |
| Premium | `#7B1FA2` | Morado - plan premium |
| CTA Warning | `#F57C00` | Naranja - botón Google Play |
| Dark | `#1B5E20` | Verde muy oscuro - secciones contraste |
| Text Primary | `#212121` | Texto principal |
| Text Secondary | `#757575` | Texto secundario |
| Background | `#F5F5F5` | Fondo claro |

---

## Secciones de la Landing Page

1. **Header** — Logo, nav (Beneficios, Módulos, Planes, FAQ), botón Google Play
2. **Hero** — Headline, subheadline, CTAs, mockup celular con dashboard
3. **Beneficios** — 6 cards con íconos (control, alertas, estadísticas, reportes, seguridad, push)
4. **Módulos** — Grid de 13 módulos de la app
5. **Cómo funciona** — 3 pasos ilustrados
6. **Planes** — Gratuito vs Premium con precios
7. **FAQ** — 5 preguntas frecuentes
8. **CTA final** — Descarga en Google Play
9. **Footer** — Logo, links legales (Privacy Policy, Términos de uso, Eliminación de datos), teléfono y email de contacto, copyright

---

## Git Flow

- **`main`**: Rama de producción. Solo merge desde develop cuando todo está probado. `firebase deploy` se hace desde main.
- **`develop`**: Rama de desarrollo. Todos los cambios van aquí primero.

---

## Deploy

```bash
# Desde la rama main
git checkout main
git merge develop
firebase deploy --only hosting            # despliega a quwi-prod (default)
git push origin main
```

---

## Relación con otros proyectos

- **App Android**: `github.com/batusay81/quwi` (repo principal, ubicación: `C:\Users\batus\AndroidStudioProjects\quwi`)
- **Firebase Project**: `quwi-prod` (compartido con la app en producción); `quwi-dev` fue el hosting anterior, ya sin dominio ni deploys
- **Privacy Policy / Data Deletion / Terms**: Migradas a quwi.pe (privacy.html, data-deletion.html, terms.html). Las páginas de Netlify quedan obsoletas — actualizar las URLs declaradas en Google Play Console
