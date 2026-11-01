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

  // ---- Píxel de TikTok (cuenta Quwi App Gestion de Cuy, píxel "Quwi Landing") ----
  var TIKTOK_PIXEL = 'DBJSA6JC77UF910647VG';
  !function (w, d, t) {
    w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
    ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'];
    ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e; };
    ttq.load = function (e, n) {
      var r = 'https://analytics.tiktok.com/i18n/pixel/events.js', o = n && n.partner;
      ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = r, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
      n = document.createElement('script'); n.type = 'text/javascript', n.async = !0, n.src = r + '?sdkid=' + e + '&lib=' + t;
      e = document.getElementsByTagName('script')[0]; e.parentNode.insertBefore(n, e);
    };
    ttq.load(TIKTOK_PIXEL);
    ttq.page();
  }(window, document, 'ttq');

  // Equivalencia de nuestros eventos con los eventos estándar de TikTok
  var TT_EVENTOS = { clic_google_play: 'Download', clic_whatsapp: 'Contact', clic_messenger: 'Contact', vio_planes: 'ViewContent' };

  // ---- Eventos de conversión (GA4 + Clarity; Meta/TikTok cuando se instalen) ----
  function evento(nombre, datos) {
    try { if (typeof window.gtag === 'function') window.gtag('event', nombre, datos || {}); } catch (e) {}
    try { if (typeof window.clarity === 'function') window.clarity('event', nombre); } catch (e) {}
    try { if (window.ttq && TT_EVENTOS[nombre]) window.ttq.track(TT_EVENTOS[nombre], { content_name: nombre }); } catch (e) {}
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
