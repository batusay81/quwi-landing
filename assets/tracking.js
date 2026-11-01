/*
 * Medición de quwi.pe (plan de marketing nov-2026).
 * Archivo externo para no tocar los hashes del CSP. Cada herramienta nueva
 * (píxel de Meta, píxel de TikTok) se agrega aquí + su dominio en el CSP
 * (meta de las 5 páginas + firebase.json).
 */
(function () {
  'use strict';

  // ---- Microsoft Clarity (proyecto "Quwi Landing") ----
  var CLARITY_ID = 'z7204tq61f';
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);

  // ---- Eventos de conversión (GA4 + Clarity; Meta/TikTok cuando se instalen) ----
  function evento(nombre, datos) {
    try { if (typeof window.gtag === 'function') window.gtag('event', nombre, datos || {}); } catch (e) {}
    try { if (typeof window.clarity === 'function') window.clarity('event', nombre); } catch (e) {}
  }
  window.quwiEvento = evento;

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('play.google.com') !== -1) {
      evento('clic_google_play', { ubicacion: a.className || 'enlace' });
    } else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) {
      evento('clic_whatsapp', { ubicacion: a.className || 'enlace' });
    } else if (href.indexOf('m.me') !== -1 || href.indexOf('messenger') !== -1) {
      evento('clic_messenger', {});
    }
  }, true);

  // Vio la sección de planes (una vez por visita)
  function observarPlanes() {
    var planes = document.getElementById('planes');
    if (!planes || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entradas) {
      if (entradas[0].isIntersecting) { evento('vio_planes', {}); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(planes);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observarPlanes);
  else observarPlanes();
})();
