# Quwi Landing Page — quwi.pe

## Stack Tecnológico
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Lucide
- **Hosting**: Firebase Hosting (proyecto `quwi-dev`)
- **Dominio**: quwi.pe (registrado en NIC.pe, DNS gestionado en Cloudflare)
- **SSL**: Automático por Firebase Hosting (pendiente provisión para quwi.pe)
- **Correo**: Google Workspace (soporte@quwi.pe) — MX, SPF, DKIM, DMARC en Cloudflare
- **Repo**: github.com/batusay81/quwi-landing
- **Branches**: `main` (producción/deploy), `develop` (desarrollo)

---

## Estado Actual (2026-05-17)

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

### Pendiente — Dominio y DNS
| Estado | Item | Detalle |
|--------|------|---------|
| ⏳ | Certificado SSL quwi.pe | Firebase verificando TXT _acme-challenge (~1-24h), revisar 2026-05-17 |
| ⏳ | Certificado SSL www.quwi.pe | En creación, depende de verificación de quwi.pe |

### Pendiente — Contenido y mejoras
| Estado | Item | Detalle |
|--------|------|---------|
| 📋 | Capturas reales de la app | Reemplazar mockups con screenshots reales del app |
| 📋 | Link real a Google Play | Actualizar href cuando la app esté publicada |
| 📋 | Página Privacy Policy | Migrar de Netlify a quwi.pe/privacy o mantener link externo |
| 📋 | Página Eliminación de Datos | Migrar de Netlify a quwi.pe/data-deletion o mantener link externo |
| 📋 | Favicon optimizado | Generar favicon.ico + apple-touch-icon desde el ícono |
| 📋 | Meta tags SEO | Open Graph, Twitter Cards, descripción para buscadores |
| 📋 | Google Analytics / Firebase Analytics | Tracking de visitas y conversiones |
| 📋 | Testimonios reales | Reemplazar placeholders con testimonios de criadores |

### Pendiente — Meta/Facebook
| Estado | Item | Detalle |
|--------|------|---------|
| 📋 | Completar registro desarrollador Meta | Usar quwi.pe como sitio web del negocio |
| 📋 | Verificación de dominio en Meta | Agregar meta tag o DNS TXT de verificación |
| 📋 | Facebook app modo Live | Requiere verificación de negocio aprobada |

---

## Estructura del Proyecto

```
quwi-landing/
├── index.html          # Landing page principal (responsive)
├── assets/
│   └── quwi-icon.png   # Ícono de la app (1024x1024)
├── firebase.json        # Configuración Firebase Hosting
├── .firebaserc          # Proyecto Firebase (quwi-dev)
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
9. **Footer** — Logo, links legales (Privacy Policy, Eliminación de datos), copyright

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
- **Privacy Policy / Data Deletion**: Actualmente en Netlify (pendiente migrar a quwi.pe)
