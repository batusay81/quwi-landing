# Quwi Landing Page — quwi.pe

## Stack Tecnológico
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Lucide
- **Hosting**: Firebase Hosting (proyecto `quwi-dev`)
- **Dominio**: quwi.pe (registrado en NIC.pe, DNS gestionado en Cloudflare)
- **SSL**: Activo — Firebase Hosting (quwi.pe + www.quwi.pe)
- **Correo**: Google Workspace (contacto@quwi.pe) — MX, SPF, DKIM, DMARC en Cloudflare
- **Repo**: github.com/batusay81/quwi-landing
- **Branches**: `main` (producción/deploy), `develop` (desarrollo)

---

## Estado Actual (2026-07-14)

### Completado
| Estado | Item |
|--------|------|
| ✅ | Diseño en Claude Design (High Fidelity, responsive) |
| ✅ | Landing page responsive (1440px / 768px / 375px) |
| ✅ | Deploy en Firebase Hosting: https://quwi-dev.web.app |
| ✅ | Repo GitHub con branches main + develop |
| ✅ | Dominio `quwi.pe` agregado en Firebase Console |
| ✅ | DNS en Cloudflare: Registro A → `199.36.158.100` (Solo DNS) |
| ✅ | DNS en Cloudflare: CNAME www → `quwi-dev.web.app` (Solo DNS) |
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

### Pendiente — Contenido y mejoras
| Estado | Item | Detalle |
|--------|------|---------|
| 📋 | Capturas reales de la app | Reemplazar mockups con screenshots reales del app |
| 📋 | Link real a Google Play | Actualizar href cuando la app esté publicada |
| 📋 | Actualizar URLs legales en Google Play Console | Cambiar links de Netlify a quwi.pe/privacy.html y quwi.pe/data-deletion.html (política de privacidad y eliminación de cuenta) |
| 📋 | Favicon optimizado | Generar favicon.ico + apple-touch-icon desde el ícono |
| 📋 | Meta tags SEO | Open Graph, Twitter Cards, descripción para buscadores |
| 📋 | Google Analytics / Firebase Analytics | Tracking de visitas y conversiones |
| 📋 | Testimonios reales | Reemplazar placeholders con testimonios de criadores |

### Pendiente — Meta/Facebook
| Estado | Item | Detalle |
|--------|------|---------|
| ❌ | Verificación de negocio Meta | Rechazada (2026-07): "no puede determinar que pertenezca a un negocio real". RUC 10409440067 (persona natural) |
| ✅ | Datos legales en footer quwi.pe | Titular, RUC, dirección y teléfono agregados (requisito para reenviar verificación) |
| 📋 | Reenviar verificación Meta | Con Ficha RUC actualizada (SUNAT, estado ACTIVO/HABIDO) + recibo de servicios con dirección de Comas |
| 🔄 | Verificación de dominio en Meta | Meta tag `facebook-domain-verification` publicada en el `<head>` — falta hacer clic en "Verificar dominio" en Business Manager |
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
├── assets/
│   └── quwi-icon.png   # Ícono de la app (1024x1024)
├── firebase.json        # Configuración Firebase Hosting
├── .firebaserc          # Proyecto Firebase (quwi-dev)
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
9. **Footer** — Logo, links legales (Privacy Policy, Términos de uso, Eliminación de datos), datos legales del negocio, copyright

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
firebase deploy --only hosting
git push origin main
```

---

## Relación con otros proyectos

- **App Android**: `github.com/batusay81/quwi` (repo principal, ubicación: `C:\Users\batus\AndroidStudioProjects\quwi`)
- **Firebase Project**: `quwi-dev` (compartido con la app)
- **Privacy Policy / Data Deletion / Terms**: Migradas a quwi.pe (privacy.html, data-deletion.html, terms.html). Las páginas de Netlify quedan obsoletas — actualizar las URLs declaradas en Google Play Console
