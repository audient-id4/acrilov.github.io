!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.devtoolsDetector = n() : t.devtoolsDetector = n()
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        var n = {};
        function e(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e),
            o.l = !0,
            o.exports
        }
        return e.m = t,
        e.c = n,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }
        ,
        e.p = "",
        e(e.s = 4)
    }([function(t, n, e) {
        "use strict";
        e.d(n, "i", function() {
            return l
        }),
        e.d(n, "d", function() {
            return f
        }),
        e.d(n, "e", function() {
            return h
        }),
        e.d(n, "c", function() {
            return d
        }),
        e.d(n, "h", function() {
            return p
        }),
        e.d(n, "f", function() {
            return b
        }),
        e.d(n, "b", function() {
            return v
        }),
        e.d(n, "g", function() {
            return y
        }),
        e.d(n, "a", function() {
            return w
        });
        var r, o, i, u, c, a = e(3), s = Object(a.b)(), l = (null === (r = null === s || void 0 === s ? void 0 : s.navigator) || void 0 === r ? void 0 : r.userAgent) || "unknown", f = "InstallTrigger"in ((null === s || void 0 === s ? void 0 : s.window) || {}) || /firefox/i.test(l), h = /trident/i.test(l) || /msie/i.test(l), d = /edge/i.test(l) || /EdgiOS/i.test(l), p = /webkit/i.test(l), b = /IqiyiApp/.test(l), v = void 0 !== (null === (o = null === s || void 0 === s ? void 0 : s.window) || void 0 === o ? void 0 : o.chrome) || /chrome/i.test(l) || /CriOS/i.test(l), y = "[object SafariRemoteNotification]" === ((null === (u = null === (i = null === s || void 0 === s ? void 0 : s.window) || void 0 === i ? void 0 : i.safari) || void 0 === u ? void 0 : u.pushNotification) || !1).toString() || /safari/i.test(l) && !v, w = "function" == typeof (null === (c = s.document) || void 0 === c ? void 0 : c.createElement)
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return i
        }),
        e.d(n, "c", function() {
            return u
        }),
        e.d(n, "a", function() {
            return c
        });
        var r = e(0);
        function o(t) {
            if (r.a && console) {
                if (!r.e && !r.c)
                    return console[t];
                if ("log" === t || "clear" === t)
                    return function() {
                        for (var n = [], e = 0; e < arguments.length; e++)
                            n[e] = arguments[e];
                        console[t].apply(console, n)
                    }
            }
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n]
            }
        }
        var i = o("log")
          , u = o("table")
          , c = o("clear")
    }
    , function(t, n, e) {
        "use strict";
        n.a = function(t) {
            void 0 === t && (t = {});
            for (var n = t.includes, e = void 0 === n ? [] : n, r = t.excludes, o = void 0 === r ? [] : r, i = !1, u = !1, c = 0, a = e; c < a.length; c++) {
                var s = a[c];
                if (!0 === s) {
                    i = !0;
                    break
                }
            }
            for (var l = 0, f = o; l < f.length; l++) {
                var s = f[l];
                if (!0 === s) {
                    u = !0;
                    break
                }
            }
            return i && !u
        }
    }
    , function(t, n, e) {
        "use strict";
        (function(t) {
            n.b = c,
            n.a = function() {
                for (var t, n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                var r = c();
                if (null === r || void 0 === r ? void 0 : r.document)
                    return (t = r.document).createElement.apply(t, n);
                return {}
            }
            ,
            n.c = function() {
                if (r)
                    return r;
                if (!a)
                    return;
                var t = new Blob([o.a.workerScript]);
                try {
                    var n = URL.createObjectURL(t);
                    r = new o.a(new Worker(n)),
                    URL.revokeObjectURL(n)
                } catch (t) {
                    try {
                        r = new o.a(new Worker("data:text/javascript;base64,".concat(btoa(o.a.workerScript))))
                    } catch (t) {
                        a = !1
                    }
                }
                return r
            }
            ,
            e.d(n, "d", function() {
                return s
            });
            var r, o = e(10), i = this && this.__awaiter || function(t, n, e, r) {
                return new (e || (e = Promise))(function(o, i) {
                    function u(t) {
                        try {
                            a(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            a(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function a(t) {
                        t.done ? o(t.value) : function(t) {
                            return t instanceof e ? t : new e(function(n) {
                                n(t)
                            }
                            )
                        }(t.value).then(u, c)
                    }
                    a((r = r.apply(t, n || [])).next())
                }
                )
            }
            , u = this && this.__generator || function(t, n) {
                var e, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function c(c) {
                    return function(a) {
                        return function(c) {
                            if (e)
                                throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0,
                            c[0] && (u = 0)),
                            u; )
                                try {
                                    if (e = 1,
                                    r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, c[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (c = [2 & c[0], o.value]),
                                    c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = c[1],
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            u.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && u.label < o[1]) {
                                            u.label = o[1],
                                            o = c;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2],
                                            u.ops.push(c);
                                            break
                                        }
                                        o[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    c = n.call(t, u)
                                } catch (t) {
                                    c = [6, t],
                                    r = 0
                                } finally {
                                    e = o = 0
                                }
                            if (5 & c[0])
                                throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, a])
                    }
                }
            }
            ;
            function c() {
                return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : this
            }
            var a = !0;
            var s = function() {
                return i(this, void 0, void 0, function() {
                    var t;
                    return u(this, function(n) {
                        switch (n.label) {
                        case 0:
                            if (t = !1,
                            !navigator.brave)
                                return [3, 4];
                            if (!navigator.brave.isBrave)
                                return [3, 4];
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]),
                            [4, Promise.race([navigator.brave.isBrave(), new Promise(function(t) {
                                return setTimeout(function() {
                                    return t(!1)
                                }, 1e3)
                            }
                            )])];
                        case 2:
                            return t = n.sent(),
                            [3, 4];
                        case 3:
                            return n.sent(),
                            [3, 4];
                        case 4:
                            return s = function() {
                                return i(this, void 0, void 0, function() {
                                    return u(this, function(n) {
                                        return [2, t]
                                    })
                                })
                            }
                            ,
                            [2, t]
                        }
                    })
                })
            }
        }
        ).call(n, e(9))
    }
    , function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.addListener = function(t) {
            h.addListener(t)
        }
        ,
        n.removeListener = function(t) {
            h.removeListener(t)
        }
        ,
        n.isLaunch = function() {
            return h.isLaunch()
        }
        ,
        n.launch = function() {
            h.launch()
        }
        ,
        n.stop = function() {
            h.stop()
        }
        ,
        n.setDetectDelay = function(t) {
            h.setDetectDelay(t)
        }
        ;
        var r = e(8)
          , o = e(12);
        e.d(n, "DevtoolsDetector", function() {
            return r.a
        }),
        e.d(n, "checkers", function() {
            return o
        });
        var i = e(23);
        e.d(n, "crashBrowserCurrentTab", function() {
            return i.b
        }),
        e.d(n, "crashBrowser", function() {
            return i.a
        });
        var u = e(2);
        e.d(n, "match", function() {
            return u.a
        });
        var c = e(3);
        e.d(n, "getGlobalThis", function() {
            return c.b
        }),
        e.d(n, "createElement", function() {
            return c.a
        }),
        e.d(n, "getWorkerConsole", function() {
            return c.c
        }),
        e.d(n, "isBrave", function() {
            return c.d
        });
        var a = e(24);
        e.d(n, "versionMap", function() {
            return a.a
        });
        var s = e(0);
        e.d(n, "userAgent", function() {
            return s.i
        }),
        e.d(n, "isFirefox", function() {
            return s.d
        }),
        e.d(n, "isIE", function() {
            return s.e
        }),
        e.d(n, "isEdge", function() {
            return s.c
        }),
        e.d(n, "isWebkit", function() {
            return s.h
        }),
        e.d(n, "isIqiyiApp", function() {
            return s.f
        }),
        e.d(n, "isChrome", function() {
            return s.b
        }),
        e.d(n, "isSafari", function() {
            return s.g
        }),
        e.d(n, "inBrowser", function() {
            return s.a
        });
        var l = e(1);
        e.d(n, "log", function() {
            return l.b
        }),
        e.d(n, "table", function() {
            return l.c
        }),
        e.d(n, "clear", function() {
            return l.a
        });
        var f = e(5);
        e.d(n, "isMac", function() {
            return f.d
        }),
        e.d(n, "isIpad", function() {
            return f.b
        }),
        e.d(n, "isIphone", function() {
            return f.c
        }),
        e.d(n, "isAndroid", function() {
            return f.a
        }),
        e.d(n, "isWindows", function() {
            return f.e
        });
        var h = new r.a({
            checkers: [o.erudaChecker, o.devtoolsFormatterChecker, o.performanceChecker, o.debuggerChecker]
        });
        n.default = h
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "d", function() {
            return o
        }),
        e.d(n, "b", function() {
            return i
        }),
        e.d(n, "c", function() {
            return u
        }),
        e.d(n, "a", function() {
            return c
        }),
        e.d(n, "e", function() {
            return a
        });
        var r = e(0)
          , o = /macintosh/i.test(r.i)
          , i = /ipad/i.test(r.i) || o && navigator.maxTouchPoints > 1
          , u = /iphone/i.test(r.i)
          , c = /android/i.test(r.i)
          , a = /windows/i.test(r.i)
    }
    , function(t, n, e) {
        "use strict";
        n.a = function() {
            if ("undefined" != typeof performance)
                return performance.now();
            return Date.now()
        }
    }
    , function(t, n, e) {
        "use strict";
        n.a = function() {
            null === r && (r = function() {
                for (var t = function() {
                    for (var t = {}, n = 0; n < 500; n++)
                        t["".concat(n)] = "".concat(n);
                    return t
                }(), n = [], e = 0; e < 50; e++)
                    n.push(t);
                return n
            }());
            return r
        }
        ;
        var r = null
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return u
        });
        var r = e(0)
          , o = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , u = function() {
            function t(t) {
                var n = t.checkers;
                this._listeners = [],
                this._isOpen = !1,
                this._detectLoopStopped = !0,
                this._detectLoopDelay = 500,
                this._checkers = n.slice()
            }
            return Object.defineProperty(t.prototype, "isOpen", {
                get: function() {
                    return this._isOpen
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.launch = function() {
                r.a && (this._detectLoopDelay <= 0 && this.setDetectDelay(500),
                this._detectLoopStopped && (this._detectLoopStopped = !1,
                this._detectLoop()))
            }
            ,
            t.prototype.stop = function() {
                this._detectLoopStopped || (this._detectLoopStopped = !0,
                this._isOpen = !1,
                clearTimeout(this._timer))
            }
            ,
            t.prototype.isLaunch = function() {
                return !this._detectLoopStopped
            }
            ,
            t.prototype.setDetectDelay = function(t) {
                this._detectLoopDelay = t
            }
            ,
            t.prototype.addListener = function(t) {
                this._listeners.push(t)
            }
            ,
            t.prototype.removeListener = function(t) {
                this._listeners = this._listeners.filter(function(n) {
                    return n !== t
                })
            }
            ,
            t.prototype._broadcast = function(t) {
                for (var n = 0, e = this._listeners; n < e.length; n++) {
                    var r = e[n];
                    try {
                        r(t.isOpen, t)
                    } catch (t) {}
                }
            }
            ,
            t.prototype._detectLoop = function() {
                return o(this, void 0, void 0, function() {
                    var t, n, e, r, o, u = this;
                    return i(this, function(i) {
                        switch (i.label) {
                        case 0:
                            t = !1,
                            n = "",
                            e = 0,
                            r = this._checkers,
                            i.label = 1;
                        case 1:
                            return e < r.length ? [4, (o = r[e]).isEnable()] : [3, 6];
                        case 2:
                            return i.sent() ? (n = o.name,
                            [4, o.isOpen()]) : [3, 4];
                        case 3:
                            t = i.sent(),
                            i.label = 4;
                        case 4:
                            if (t)
                                return [3, 6];
                            i.label = 5;
                        case 5:
                            return e++,
                            [3, 1];
                        case 6:
                            return t !== this._isOpen && (this._isOpen = t,
                            this._broadcast({
                                isOpen: t,
                                checkerName: n
                            })),
                            this._detectLoopDelay > 0 && !this._detectLoopStopped ? this._timer = setTimeout(function() {
                                return u._detectLoop()
                            }, this._detectLoopDelay) : this.stop(),
                            [2]
                        }
                    })
                })
            }
            ,
            t
        }()
    }
    , function(t, n) {
        var e;
        e = function() {
            return this
        }();
        try {
            e = e || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return c
        });
        var r = e(11)
          , o = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , u = this && this.__spreadArray || function(t, n, e) {
            if (e || 2 === arguments.length)
                for (var r, o = 0, i = n.length; o < i; o++)
                    !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)),
                    r[o] = n[o]);
            return t.concat(r || Array.prototype.slice.call(n))
        }
          , c = function() {
            function t(t) {
                var n = this;
                this.callbacks = new Map,
                this.worker = t,
                this.worker.onmessage = function(t) {
                    var e = t.data
                      , r = e.id
                      , o = n.callbacks.get(e.id);
                    o && (o({
                        time: e.time
                    }),
                    n.callbacks.delete(r))
                }
                ,
                this.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return n.send.apply(n, u(["log"], t, !1))
                }
                ,
                this.table = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return n.send.apply(n, u(["table"], t, !1))
                }
                ,
                this.clear = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return n.send.apply(n, u(["clear"], t, !1))
                }
            }
            return t.prototype.send = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++)
                    n[e - 1] = arguments[e];
                return o(this, void 0, void 0, function() {
                    var e, o = this;
                    return i(this, function(i) {
                        return e = Object(r.a)(),
                        [2, new Promise(function(r, i) {
                            o.callbacks.set(e, r),
                            o.worker.postMessage({
                                id: e,
                                type: t,
                                payload: n
                            }),
                            setTimeout(function() {
                                i(new Error("timeout")),
                                o.callbacks.delete(e)
                            }, 2e3)
                        }
                        )]
                    })
                })
            }
            ,
            t.workerScript = "\nonmessage = function(event) {\n  var action = event.data;\n  var startTime = performance.now()\n\n  console[action.type](...action.payload);\n  postMessage({\n    id: action.id,\n    time: performance.now() - startTime\n  })\n}\n",
            t
        }()
    }
    , function(t, n, e) {
        "use strict";
        n.a = function() {
            r > Number.MAX_SAFE_INTEGER && (r = 0);
            return r++
        }
        ;
        var r = 0
    }
    , function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(13);
        e.d(n, "depRegToStringChecker", function() {
            return r.a
        });
        var o = e(14);
        e.d(n, "elementIdChecker", function() {
            return o.a
        });
        var i = e(15);
        e.d(n, "functionToStringChecker", function() {
            return i.a
        });
        var u = e(16);
        e.d(n, "regToStringChecker", function() {
            return u.a
        });
        var c = e(17);
        e.d(n, "debuggerChecker", function() {
            return c.a
        });
        var a = e(18);
        e.d(n, "dateToStringChecker", function() {
            return a.a
        });
        var s = e(19);
        e.d(n, "performanceChecker", function() {
            return s.a
        });
        var l = e(20);
        e.d(n, "erudaChecker", function() {
            return l.a
        });
        var f = e(21);
        e.d(n, "devtoolsFormatterChecker", function() {
            return f.a
        });
        var h = e(22);
        e.d(n, "workerPerformanceChecker", function() {
            return h.a
        })
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return l
        });
        var r = e(0)
          , o = e(1)
          , i = e(2)
          , u = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , c = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , a = / /
          , s = !1;
        a.toString = function() {
            return s = !0,
            l.name
        }
        ;
        var l = {
            name: "dep-reg-to-string",
            isOpen: function() {
                return u(this, void 0, void 0, function() {
                    return c(this, function(t) {
                        return s = !1,
                        Object(o.c)({
                            dep: a
                        }),
                        Object(o.a)(),
                        [2, s]
                    })
                })
            },
            isEnable: function() {
                return u(this, void 0, void 0, function() {
                    return c(this, function(t) {
                        return [2, Object(i.a)({
                            includes: [!0],
                            excludes: [r.d, r.e]
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return f
        });
        var r = e(0)
          , o = e(1)
          , i = e(2)
          , u = e(3)
          , c = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , s = Object(u.a)("div")
          , l = !1;
        Object.defineProperty(s, "id", {
            get: function() {
                return l = !0,
                f.name
            },
            configurable: !0
        });
        var f = {
            name: "element-id",
            isOpen: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return l = !1,
                        Object(o.b)(s),
                        Object(o.a)(),
                        [2, l]
                    })
                })
            },
            isEnable: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return [2, Object(i.a)({
                            includes: [!0],
                            excludes: [r.e, r.c, r.d]
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return f
        });
        var r = e(0)
          , o = e(1)
          , i = e(5)
          , u = e(2)
          , c = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
        ;
        function s() {}
        var l = 0;
        s.toString = function() {
            return l++,
            ""
        }
        ;
        var f = {
            name: "function-to-string",
            isOpen: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return l = 0,
                        Object(o.b)(s),
                        Object(o.a)(),
                        [2, 2 === l]
                    })
                })
            },
            isEnable: function() {
                return c(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        return t = i.b || i.c,
                        [2, Object(u.a)({
                            includes: [!0],
                            excludes: [r.f, r.d, t && r.b, t && r.c]
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return l
        });
        var r = e(1)
          , o = e(0)
          , i = e(2)
          , u = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , c = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , a = / /
          , s = !1;
        a.toString = function() {
            return s = !0,
            l.name
        }
        ;
        var l = {
            name: "reg-to-string",
            isOpen: function() {
                return u(this, void 0, void 0, function() {
                    return c(this, function(t) {
                        return s = !1,
                        Object(r.b)(a),
                        Object(r.a)(),
                        [2, s]
                    })
                })
            },
            isEnable: function() {
                return u(this, void 0, void 0, function() {
                    return c(this, function(t) {
                        return [2, Object(i.a)({
                            includes: [!0],
                            excludes: [o.h]
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return u
        });
        var r = e(6)
          , o = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , u = {
            name: "debugger-checker",
            isOpen: function() {
                return o(this, void 0, void 0, function() {
                    var t;
                    return i(this, function(n) {
                        t = Object(r.a)();
                        try {
                            (function() {}
                            ).constructor("debugger")()
                        } catch (t) {}
                        return [2, Object(r.a)() - t > 100]
                    })
                })
            },
            isEnable: function() {
                return o(this, void 0, void 0, function() {
                    return i(this, function(t) {
                        return [2, !0]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return f
        });
        var r = e(0)
          , o = e(1)
          , i = e(2)
          , u = e(4)
          , c = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , s = new Date
          , l = 0;
        s.toString = function() {
            return l++,
            ""
        }
        ;
        var f = {
            name: "date-to-string",
            isOpen: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return l = 0,
                        Object(o.b)(s),
                        Object(o.a)(),
                        [2, 2 === l]
                    })
                })
            },
            isEnable: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return [2, Object(i.a)({
                            includes: [r.b],
                            excludes: [(u.isIpad || u.isIphone) && r.b]
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return h
        });
        var r = e(1)
          , o = e(0)
          , i = e(7)
          , u = e(2)
          , c = e(3)
          , a = e(6)
          , s = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , l = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , f = 0
          , h = {
            name: "performance",
            isOpen: function() {
                return s(this, void 0, void 0, function() {
                    var t, n;
                    return l(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return t = function() {
                                var t = Object(i.a)()
                                  , n = Object(a.a)();
                                return Object(r.c)(t),
                                Object(a.a)() - n
                            }(),
                            n = Math.max(d(), d()),
                            f = Math.max(f, n),
                            Object(r.a)(),
                            0 === t ? [2, !1] : 0 !== f ? [3, 2] : [4, Object(c.d)()];
                        case 1:
                            return e.sent() ? [2, !0] : [2, !1];
                        case 2:
                            return [2, t > 10 * f]
                        }
                    })
                })
            },
            isEnable: function() {
                return s(this, void 0, void 0, function() {
                    return l(this, function(t) {
                        return [2, Object(u.a)({
                            includes: [o.b],
                            excludes: []
                        })]
                    })
                })
            }
        };
        function d() {
            var t = Object(i.a)()
              , n = Object(a.a)();
            return Object(r.b)(t),
            Object(a.a)() - n
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        });
        var r = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , o = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , i = {
            name: "eruda",
            isOpen: function() {
                var t;
                return r(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        return "undefined" != typeof eruda ? [2, !0 === (null === (t = null === eruda || void 0 === eruda ? void 0 : eruda._devTools) || void 0 === t ? void 0 : t._isShow)] : [2, !1]
                    })
                })
            },
            isEnable: function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [2, !0]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return a
        });
        var r = e(1)
          , o = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , u = !1
          , c = {
            header: function() {
                return u = !0,
                null
            }
        }
          , a = {
            name: "DevtoolsFormatters",
            isOpen: function() {
                return o(this, void 0, void 0, function() {
                    return i(this, function(t) {
                        return window.devtoolsFormatters ? -1 === window.devtoolsFormatters.indexOf(c) && window.devtoolsFormatters.push(c) : window.devtoolsFormatters = [c],
                        u = !1,
                        Object(r.b)({}),
                        Object(r.a)(),
                        [2, u]
                    })
                })
            },
            isEnable: function() {
                return o(this, void 0, void 0, function() {
                    return i(this, function(t) {
                        return [2, !0]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return l
        });
        var r = e(0)
          , o = e(2)
          , i = e(3)
          , u = e(7)
          , c = this && this.__awaiter || function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function u(t) {
                    try {
                        a(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    try {
                        a(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    t.done ? o(t.value) : function(t) {
                        return t instanceof e ? t : new e(function(n) {
                            n(t)
                        }
                        )
                    }(t.value).then(u, c)
                }
                a((r = r.apply(t, n || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(t, n) {
            var e, r, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (u = 0)),
                        u; )
                            try {
                                if (e = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        u.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(c);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                c = n.call(t, u)
                            } catch (t) {
                                c = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , s = 0
          , l = {
            name: "worker-performance",
            isOpen: function() {
                return c(this, void 0, void 0, function() {
                    var t, n, e;
                    return a(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return null == (t = Object(i.c)()) ? [2, !1] : [4, function(t) {
                                return c(this, void 0, void 0, function() {
                                    var n;
                                    return a(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return n = Object(u.a)(),
                                            [4, t.table(n)];
                                        case 1:
                                            return [2, e.sent().time]
                                        }
                                    })
                                })
                            }(t)];
                        case 1:
                            return n = r.sent(),
                            [4, function(t) {
                                return c(this, void 0, void 0, function() {
                                    var n;
                                    return a(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return n = Object(u.a)(),
                                            [4, t.log(n)];
                                        case 1:
                                            return [2, e.sent().time]
                                        }
                                    })
                                })
                            }(t)];
                        case 2:
                            return e = r.sent(),
                            s = Math.max(s, e),
                            [4, t.clear()];
                        case 3:
                            return r.sent(),
                            0 === n ? [2, !1] : 0 !== s ? [3, 5] : [4, Object(i.d)()];
                        case 4:
                            return r.sent() ? [2, !0] : [2, !1];
                        case 5:
                            return [2, n > 10 * s]
                        }
                    })
                })
            },
            isEnable: function() {
                return c(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        return [2, Object(o.a)({
                            includes: [r.b],
                            excludes: []
                        })]
                    })
                })
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        n.b = function() {
            if (r.a)
                for (var t = 0; t < Number.MAX_VALUE; t++)
                    window["".concat(t)] = new Array(Math.pow(2, 32) - 1).fill(0)
        }
        ,
        n.a = function() {
            if (r.a)
                for (var t = []; ; )
                    t.push(0),
                    location.reload()
        }
        ;
        var r = e(0)
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return r
        });
        for (var r = {}, o = 0, i = (e(0).i || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; o < i.length; o++) {
            var u = i[o].split("/")
              , c = u[0]
              , a = u[1];
            r[c] = a
        }
    }
    ])
});

function af(){var e=!1;setInterval(function(){var t=performance.now();console.profile(),console.profileEnd(),console.clear&&console.clear(),10<performance.now()-t&&!e&&(e=!0,document.documentElement.innerHTML="",location.reload())},1)}af(),document.addEventListener("dragstart",e=>e.preventDefault()),document.addEventListener("auxclick",e=>{1===e.button&&(e.stopPropagation(),e.preventDefault())}),document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=e=>{[{ctrl:!0,shift:!0,code:"KeyI"},{ctrl:!0,shift:!0,code:"KeyJ"},{ctrl:!0,shift:!0,code:"KeyV"},{ctrl:!0,shift:!0,code:"KeyC"},{ctrl:!0,code:"KeyU"},{ctrl:!0,code:"KeyP"},{ctrl:!0,code:"KeyS"},{ctrl:!0,code:"KeyJ"},{ctrl:!0,code:"KeyF"},{code:"F12"}].some(t=>!!t.ctrl===e.ctrlKey&&!!t.shift===e.shiftKey&&e.code===t.code)&&e.preventDefault()},document.addEventListener("DOMContentLoaded",function(){document.body.style.setProperty("user-select","none","important");let e=document.createElement("style");e.type="text/css",e.media="print",e.innerHTML="* { display: none !important; }",document.head.appendChild(e);let t=document.createElement("style");t.type="text/css",t.innerHTML="body {-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}",document.head.appendChild(t)});
//# sourceMappingURL=devtools-detector.js.map
