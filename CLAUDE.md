# Quwi Landing Page — quwi.pe

## Stack Tecnológico
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Lucide
- **Hosting**: Firebase Hosting (proyecto `quwi-dev`)
- **Dominio**: quwi.pe (NIC.pe)
- **SSL**: Automático por Firebase Hosting

---

## Estado Actual (2026-05-16)

| Estado | Item |
|--------|------|
| ✅ Completado | Diseño en Claude Design (High Fidelity) |
| ✅ Completado | Landing page responsive (1440px / 768px / 375px) |
| ✅ Completado | Deploy en Firebase Hosting: https://quwi-dev.web.app |
| ✅ Completado | Repo GitHub: github.com/batusay81/quwi-landing |
| 📋 Pendiente | Conectar dominio `quwi.pe` en Firebase Console (registros DNS A) |
| 📋 Pendiente | Configurar DNS en NIC.pe (registros A + CNAME www) |
| 📋 Pendiente | Certificado SSL automático (post-DNS) |
| 📋 Pendiente | Agregar `www.quwi.pe` como dominio adicional |
| 📋 Pendiente | Completar registro desarrollador Meta con quwi.pe |
| 📋 Pendiente | Poner Facebook app en modo Live |

---

## Estructura del Proyecto

```
quwi-landing/
├── index.html          # Landing page principal (responsive)
├── assets/
│   └── quwi-icon.png   # Ícono de la app
├── firebase.json        # Configuración Firebase Hosting
└── .firebaserc          # Proyecto Firebase (quwi-dev)
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

## Deploy

```bash
firebase deploy --only hosting
```

---

## Relación con otros proyectos

- **App Android**: `github.com/batusay81/quwi` (repo principal)
- **Firebase Project**: `quwi-dev` (compartido con la app)
- **Privacy Policy / Data Deletion**: Alojados en Netlify (links en footer)
