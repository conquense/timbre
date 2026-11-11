/* ============================================================
   rtc.js — la parte de WebRTC
   La llamada es punto a punto: el audio y el video NO pasan por
   ningún servidor. Solo se usan STUN (gratis) y, como red de
   seguridad cuando la NAT es hostil, un TURN público abierto.
   ============================================================ */
(function (global) {
  'use strict';

  const SERVIDORES_ICE = [
    { urls: [
        'stun:://google.com',
        'stun:://google.com',
        'stun:://cloudflare.com',
        'stun:stun.relay.metered.ca:80'
    ] },
    { urls: 'turn:global.relay.metered.ca:80',
      username: '98558175d6d8fd264452904b', credential: 'xBlnDAF7JToQnpiv' },
    { urls: 'turn:global.relay.metered.ca:80?transport=tcp',
      username: '98558175d6d8fd264452904b', credential: 'xBlnDAF7JToQnpiv' },
    { urls: 'turn:global.relay.metered.ca:443',
      username: '98558175d6d8fd264452904b', credential: 'xBlnDAF7JToQnpiv' },
    { urls: 'turns:global.relay.metered.ca:443?transport=tcp',
      username: '98558175d6d8fd264452904b', credential: 'xBlnDAF7JToQnpiv' }
  ];
