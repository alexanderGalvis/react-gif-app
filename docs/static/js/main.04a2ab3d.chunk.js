(this['webpackJsonpgif-expert-app'] =
  this['webpackJsonpgif-expert-app'] || []).push([
  [0],
  {
    16: function (t, e, n) {},
    18: function (t, e, n) {
      'use strict';
      n.r(e);
      var a = n(0),
        r = n(1),
        c = n(7),
        i = n.n(c),
        s = (n(16), n(2)),
        u = n(9),
        o = function (t) {
          var e = t.setCategorias,
            n = Object(r.useState)(''),
            c = Object(s.a)(n, 2),
            i = c[0],
            o = c[1];
          return Object(a.jsx)('form', {
            onSubmit: function (t) {
              t.preventDefault(),
                i.trim().length > 2 &&
                  e(function (t) {
                    return [i].concat(Object(u.a)(t));
                  }),
                o('');
            },
            children: Object(a.jsx)('input', {
              type: 'text',
              value: i,
              onChange: function (t) {
                o(t.target.value);
              },
            }),
          });
        },
        j = n(10),
        d = n(6),
        l = n.n(d),
        b = n(8),
        p = (function () {
          var t = Object(b.a)(
            l.a.mark(function t(e) {
              var n, a, r, c, i;
              return l.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = 'https://api.giphy.com/v1/gifs/search?q='.concat(
                          encodeURI(e),
                          '&limit=10&api_key=3SckUB1kdddrrNyTx33FevTuNZf657rO'
                        )),
                        (t.next = 3),
                        fetch(n)
                      );
                    case 3:
                      return (a = t.sent), (t.next = 6), a.json();
                    case 6:
                      return (
                        (r = t.sent),
                        (c = r.data),
                        (i = c.map(function (t) {
                          return {
                            id: t.id,
                            title: t.title,
                            url: t.images.downsized_medium.url,
                          };
                        })),
                        t.abrupt('return', i)
                      );
                    case 10:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        f = function (t) {
          t.id;
          var e = t.title,
            n = t.url;
          return Object(a.jsxs)('div', {
            className:
              'card animate__animated animate__fadeInDown animate__delay-1s',
            children: [
              Object(a.jsx)('img', { src: n, alt: e }),
              Object(a.jsx)('p', { children: e }),
            ],
          });
        },
        O = function (t) {
          var e = t.category,
            n = (function (t) {
              var e = Object(r.useState)({ data: [], loading: !0 }),
                n = Object(s.a)(e, 2),
                a = n[0],
                c = n[1];
              return (
                Object(r.useEffect)(
                  function () {
                    p(t).then(function (t) {
                      c({ data: t, loading: !1 });
                    });
                  },
                  [t]
                ),
                a
              );
            })(e),
            c = n.data,
            i = n.loading;
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)('h3', { children: e }),
              i &&
                Object(a.jsx)('p', {
                  className: 'animate__animated animate__shakeX',
                  children: 'Cargando...',
                }),
              Object(a.jsx)('div', {
                className: 'card-grid',
                children: Object(a.jsx)('ol', {
                  children: c.map(function (t) {
                    return Object(a.jsx)(f, Object(j.a)({}, t), t.id);
                  }),
                }),
              }),
            ],
          });
        },
        h = function () {
          var t = Object(r.useState)(['Gan Torino']),
            e = Object(s.a)(t, 2),
            n = e[0],
            c = e[1];
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)('h2', { children: 'GifExpertApp' }),
              Object(a.jsx)(o, { setCategorias: c }),
              Object(a.jsx)('hr', {}),
              Object(a.jsx)('ol', {
                children: n.map(function (t) {
                  return Object(a.jsx)(O, { category: t }, t);
                }),
              }),
            ],
          });
        };
      i.a.render(Object(a.jsx)(h, {}), document.getElementById('root'));
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.04a2ab3d.chunk.js.map
