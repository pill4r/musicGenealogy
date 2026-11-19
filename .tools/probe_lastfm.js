const https = require('https');

function get(u) {
  return new Promise((res) => {
    const t = Date.now();
    https.get(u, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
        'accept-language': 'en'
      }
    }, (r) => {
      let b = '';
      r.on('data', (d) => b += d);
      r.on('end', () => res({ s: r.statusCode, len: b.length, ms: Date.now() - t, b }));
    }).on('error', (e) => res({ err: e.message, ms: Date.now() - t }));
  });
}

(async () => {
  for (const u of ['https://www.last.fm/tag/acid+house/tracks', 'https://www.last.fm/tag/gospel/tracks']) {
    const r = await get(u);
    console.log(u, r.s, r.len, r.ms + 'ms', 'err:', r.err || '');
    if (r.b) {
      const i = r.b.indexOf('chartlist-name');
      console.log('  snippet:', JSON.stringify(r.b.slice(i, i + 700)));
      const names = r.b.split('class="chartlist-name"').slice(1, 11).map((chunk) => {
        const m = chunk.match(/<a[^>]*>([^<]+)<\/a>/);
        return m ? m[1] : '?';
      });
      console.log('  names:', JSON.stringify(names));
    }
  }
})();
