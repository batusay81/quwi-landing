# Historial de Seguridad — quwi.pe

## Auditoría OWASP Top 10 (2026-05-17)

Revisión basada en OWASP Top 10:2021 aplicada a la landing page estática.

---

### Resumen de hallazgos

| # | OWASP Category | Riesgo | Estado | Detalle |
|---|----------------|--------|--------|---------|
| A01 | Broken Access Control | N/A | OK | No hay autenticación ni áreas restringidas. Landing pública. |
| A02 | Cryptographic Failures | Bajo | CORREGIDO | CLAUDE.md expuesto públicamente con info interna (emails, estructura). Agregado al `ignore` de Firebase. |
| A03 | Injection | N/A | OK | No hay formularios, inputs, ni procesamiento de datos del usuario. Sin backend. |
| A04 | Insecure Design | N/A | OK | Sitio estático sin lógica de negocio. |
| A05 | Security Misconfiguration | Medio | CORREGIDO | Faltaban headers de seguridad (X-Frame-Options, X-Content-Type-Options, HSTS, Permissions-Policy, Referrer-Policy). Agregados en firebase.json. |
| A06 | Vulnerable/Outdated Components | Medio | CORREGIDO | Lucide CDN sin SRI (Subresource Integrity). Agregado hash SHA-384 + crossorigin. |
| A07 | Identification & Auth Failures | N/A | OK | No hay autenticación en la landing. |
| A08 | Software & Data Integrity | Medio | CORREGIDO | Script externo (unpkg) sin verificación de integridad. SRI aplicado. |
| A09 | Security Logging & Monitoring | Bajo | PENDIENTE | No hay analytics ni logging de errores. Pendiente Firebase Analytics. |
| A10 | Server-Side Request Forgery | N/A | OK | No hay backend ni llamadas server-side. |

---

## Correcciones aplicadas (2026-05-17)

### 1. Subresource Integrity (SRI) para Lucide CDN
- **Archivo**: `index.html`
- **Riesgo**: Si unpkg.com es comprometido, podrían inyectar JS malicioso
- **Fix**: Agregado `integrity="sha384-..."` y `crossorigin="anonymous"` al script tag
- **Test**: Verificar que los íconos siguen cargando. Si se actualiza Lucide, regenerar hash.

### 2. Exposición de archivo CLAUDE.md
- **Archivo**: `firebase.json`
- **Riesgo**: Información interna (emails, estructura del proyecto, pendientes) accesible en `quwi.pe/CLAUDE.md`
- **Fix**: Agregado `CLAUDE.md` y `SECURITY.md` a la lista `ignore` de Firebase Hosting
- **Test**: Verificar que `https://quwi-dev.web.app/CLAUDE.md` retorna 404 después del deploy

### 3. Headers de seguridad HTTP
- **Archivo**: `firebase.json`
- **Riesgo**: Sin headers, el sitio es vulnerable a clickjacking (iframe embedding), MIME sniffing, y falta HSTS
- **Fix**: Headers agregados:
  - `X-Content-Type-Options: nosniff` — evita MIME type sniffing
  - `X-Frame-Options: DENY` — bloquea embedding en iframes (anti-clickjacking)
  - `X-XSS-Protection: 1; mode=block` — filtro XSS del navegador
  - `Referrer-Policy: strict-origin-when-cross-origin` — controla info en referer
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` — bloquea APIs sensibles
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains` — fuerza HTTPS
- **Test**: Verificar headers con `curl -I https://quwi-dev.web.app`

### 4. Content Security Policy (CSP)
- **Archivo**: `index.html` (meta tag)
- **Riesgo**: Sin CSP, un atacante podría inyectar scripts de dominios no autorizados
- **Fix**: CSP configurado:
  - `default-src 'self'` — solo recursos propios por defecto
  - `script-src 'self' https://unpkg.com 'unsafe-inline'` — scripts solo de self y unpkg
  - `style-src 'self' https://fonts.googleapis.com 'unsafe-inline'` — estilos solo de self y Google Fonts
  - `font-src 'self' https://fonts.gstatic.com` — fuentes solo de Google
  - `img-src 'self' data:` — imágenes solo locales y data URIs
  - `frame-ancestors 'none'` — nadie puede embeber este sitio
  - `base-uri 'self'` — previene base tag injection
  - `form-action 'self'` — formularios solo a self
- **Test**: Abrir consola del navegador (F12) y verificar que no hay errores CSP

### 5. Links externos sin rel="noopener noreferrer"
- **Archivo**: `index.html`
- **Riesgo**: Links a redes sociales sin `rel="noopener"` permiten a la página destino acceder a `window.opener`
- **Fix**: Agregado `rel="noopener noreferrer"` a los 4 links de redes sociales del footer
- **Test**: Verificar que los links siguen funcionando correctamente

### 6. Cache-Control para HTML
- **Archivo**: `firebase.json`
- **Riesgo**: HTML cacheado por mucho tiempo podría servir versiones desactualizadas con vulnerabilidades ya corregidas
- **Fix**: `Cache-Control: no-cache` para archivos `.html`
- **Test**: Verificar que cambios en el HTML se reflejan inmediatamente tras deploy

---

## Vectores de ataque para pruebas futuras

### Superficie de ataque actual
La landing es estática y tiene una superficie de ataque mínima. Los principales vectores a probar son:

1. **CDN Supply Chain**: Verificar periódicamente que el hash SRI de Lucide sigue siendo válido
2. **DNS Hijacking**: Monitorear que los registros DNS en Cloudflare no sean modificados
3. **Firebase Hosting Config**: Verificar que archivos sensibles no sean accesibles públicamente
4. **CSP Bypass**: Intentar inyectar scripts para validar que el CSP bloquea correctamente
5. **Clickjacking**: Intentar embeber quwi.pe en un iframe para verificar que X-Frame-Options funciona
6. **SSL/TLS**: Verificar la calificación SSL con ssllabs.com una vez el certificado esté activo
7. **Header Inspection**: Verificar todos los headers con securityheaders.com

### Herramientas recomendadas para testing
- `curl -I https://quwi.pe` — verificar headers
- `nmap --script ssl-enum-ciphers -p 443 quwi.pe` — verificar cifrado SSL
- [securityheaders.com](https://securityheaders.com) — calificación de headers
- [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) — calificación SSL
- DevTools Console (F12) — verificar errores CSP
- [observatory.mozilla.org](https://observatory.mozilla.org) — auditoría general

---

## Pendientes de seguridad

| Estado | Item | Prioridad |
|--------|------|-----------|
| PENDIENTE | Firebase Analytics / logging de errores | Baja |
| PENDIENTE | Test SSL con ssllabs.com post-certificado | Media |
| PENDIENTE | Test headers con securityheaders.com post-deploy | Media |
| PENDIENTE | Monitoreo de integridad SRI si se actualiza Lucide | Baja |
| PENDIENTE | Política de Privacidad real (link actual apunta a #) | Media |
| PENDIENTE | Términos de uso reales (link actual apunta a #) | Media |
