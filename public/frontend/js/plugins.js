function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, i) {
    var n = uncamel(t),
        r = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[r + "filter"] = e[r + "filter"] || "", i = setUnit(i > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : i, jQuery.CSS.filters[t].unit), e[r + "filter"] += n + "(" + i + ") ", delete e[t]
}

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints,
        t = "ontouchstart" in document.createElement("div");
    return !(!e && !t)
}

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints,
        t = "ontouchstart" in document.createElement("div");
    return !(!e && !t)
}! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var a, o, l, d, c, u, p, h, A, f, m, g, v, y, w, T, b, P, C = function(e) {
            var t = !1;
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(t) {
                    var i, n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (i = n, n = i = "function" == typeof e.escapeSelector ? e.escapeSelector(i).substr(1) : i.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return e(document).find(n).length > 0 ? n : null
                    } catch (e) {
                        return null
                    }
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(i) {
                    e(i).trigger(t.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(t)
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, t, n) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            var s = n[r],
                                a = t[r],
                                o = a && i.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(s).test(o)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + o + '" but expected type "' + s + '".')
                        } var l
                }
            };
            return t = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = function(t) {
                var n = this,
                    r = !1;
                return e(this).one(i.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || i.triggerTransitionEnd(n)
                }, t), this
            }, i.supportsTransitionEnd() && (e.event.special[i.TRANSITION_END] = {
                bindType: t.end,
                delegateType: t.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), i
        }(t),
        S = (o = "alert", d = "." + (l = "bs.alert"), c = (a = t).fn[o], u = {
            CLOSE: "close" + d,
            CLOSED: "closed" + d,
            CLICK_DATA_API: "click" + d + ".data-api"
        }, "alert", "fade", "show", p = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                a.removeData(this._element, l), this._element = null
            }, t._getRootElement = function(e) {
                var t = C.getSelectorFromElement(e),
                    i = !1;
                return t && (i = a(t)[0]), i || (i = a(e).closest(".alert")[0]), i
            }, t._triggerCloseEvent = function(e) {
                var t = a.Event(u.CLOSE);
                return a(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                a(e).removeClass("show"), C.supportsTransitionEnd() && a(e).hasClass("fade") ? a(e).one(C.TRANSITION_END, function(i) {
                    return t._destroyElement(e, i)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }, t._destroyElement = function(e) {
                a(e).detach().trigger(u.CLOSED).remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = a(this),
                        n = i.data(l);
                    n || (n = new e(this), i.data(l, n)), "close" === t && n[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), a(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), a.fn[o] = p._jQueryInterface, a.fn[o].Constructor = p, a.fn[o].noConflict = function() {
            return a.fn[o] = c, p._jQueryInterface
        }, p),
        x = (A = "button", m = "." + (f = "bs.button"), g = ".data-api", v = (h = t).fn[A], y = "active", "btn", "focus", w = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", T = ".btn", b = {
            CLICK_DATA_API: "click" + m + g,
            FOCUS_BLUR_DATA_API: "focus" + m + g + " blur" + m + g
        }, P = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    i = h(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var n = h(this._element).find("input")[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && h(this._element).hasClass(y)) e = !1;
                            else {
                                var r = h(i).find(".active")[0];
                                r && h(r).removeClass(y)
                            } if (e) {
                            if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            n.checked = !h(this._element).hasClass(y), h(n).trigger("change")
                        }
                        n.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !h(this._element).hasClass(y)), e && h(this._element).toggleClass(y)
            }, t.dispose = function() {
                h.removeData(this._element, f), this._element = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = h(this).data(f);
                    i || (i = new e(this), h(this).data(f, i)), "toggle" === t && i[t]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), h(document).on(b.CLICK_DATA_API, w, function(e) {
            e.preventDefault();
            var t = e.target;
            h(t).hasClass("btn") || (t = h(t).closest(T)), P._jQueryInterface.call(h(t), "toggle")
        }).on(b.FOCUS_BLUR_DATA_API, w, function(e) {
            var t = h(e.target).closest(T)[0];
            h(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), h.fn[A] = P._jQueryInterface, h.fn[A].Constructor = P, h.fn[A].noConflict = function() {
            return h.fn[A] = v, P._jQueryInterface
        }, P),
        E = function(e) {
            var t = "carousel",
                i = "bs.carousel",
                n = "." + i,
                a = e.fn[t],
                o = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                d = "next",
                c = "prev",
                u = {
                    SLIDE: "slide" + n,
                    SLID: "slid" + n,
                    KEYDOWN: "keydown" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n,
                    TOUCHEND: "touchend" + n,
                    LOAD_DATA_API: "load" + n + ".data-api",
                    CLICK_DATA_API: "click" + n + ".data-api"
                },
                p = "active",
                h = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                A = function() {
                    function a(t, i) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(h.INDICATORS)[0], this._addEventListeners()
                    }
                    var A = a.prototype;
                    return A.next = function() {
                        this._isSliding || this._slide(d)
                    }, A.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, A.prev = function() {
                        this._isSliding || this._slide(c)
                    }, A.pause = function(t) {
                        t || (this._isPaused = !0), e(this._element).find(h.NEXT_PREV)[0] && C.supportsTransitionEnd() && (C.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, A.cycle = function(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, A.to = function(t) {
                        var i = this;
                        this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(u.SLID, function() {
                                return i.to(t)
                            });
                            else {
                                if (n === t) return this.pause(), void this.cycle();
                                var r = t > n ? d : c;
                                this._slide(r, this._items[t])
                            }
                    }, A.dispose = function() {
                        e(this._element).off(n), e.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, A._getConfig = function(e) {
                        return e = s({}, o, e), C.typeCheckConfig(t, e, l), e
                    }, A._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(u.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(u.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(u.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(u.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, A._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, A._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(h.ITEM)), this._items.indexOf(t)
                    }, A._getItemByDirection = function(e, t) {
                        var i = e === d,
                            n = e === c,
                            r = this._getItemIndex(t),
                            s = this._items.length - 1;
                        if ((n && 0 === r || i && r === s) && !this._config.wrap) return t;
                        var a = (r + (e === c ? -1 : 1)) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                    }, A._triggerSlideEvent = function(t, i) {
                        var n = this._getItemIndex(t),
                            r = this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),
                            s = e.Event(u.SLIDE, {
                                relatedTarget: t,
                                direction: i,
                                from: r,
                                to: n
                            });
                        return e(this._element).trigger(s), s
                    }, A._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(h.ACTIVE).removeClass(p);
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            i && e(i).addClass(p)
                        }
                    }, A._slide = function(t, i) {
                        var n, r, s, a = this,
                            o = e(this._element).find(h.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(o),
                            c = i || o && this._getItemByDirection(t, o),
                            A = this._getItemIndex(c),
                            f = Boolean(this._interval);
                        if (t === d ? (n = "carousel-item-left", r = "carousel-item-next", s = "left") : (n = "carousel-item-right", r = "carousel-item-prev", s = "right"), c && e(c).hasClass(p)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(c, s).isDefaultPrevented() && o && c) {
                            this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(c);
                            var m = e.Event(u.SLID, {
                                relatedTarget: c,
                                direction: s,
                                from: l,
                                to: A
                            });
                            C.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(c).addClass(r), C.reflow(c), e(o).addClass(n), e(c).addClass(n), e(o).one(C.TRANSITION_END, function() {
                                e(c).removeClass(n + " " + r).addClass(p), e(o).removeClass(p + " " + r + " " + n), a._isSliding = !1, setTimeout(function() {
                                    return e(a._element).trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (e(o).removeClass(p), e(c).addClass(p), this._isSliding = !1, e(this._element).trigger(m)), f && this.cycle()
                        }
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i),
                                r = s({}, o, e(this).data());
                            "object" == typeof t && (r = s({}, r, t));
                            var l = "string" == typeof t ? t : r.slide;
                            if (n || (n = new a(this, r), e(this).data(i, n)), "number" == typeof t) n.to(t);
                            else if ("string" == typeof l) {
                                if (void 0 === n[l]) throw new TypeError('No method named "' + l + '"');
                                n[l]()
                            } else r.interval && (n.pause(), n.cycle())
                        })
                    }, a._dataApiClickHandler = function(t) {
                        var n = C.getSelectorFromElement(this);
                        if (n) {
                            var r = e(n)[0];
                            if (r && e(r).hasClass("carousel")) {
                                var o = s({}, e(r).data(), e(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (o.interval = !1), a._jQueryInterface.call(e(r), o), l && e(r).data(i).to(l), t.preventDefault()
                            }
                        }
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), a
                }();
            return e(document).on(u.CLICK_DATA_API, h.DATA_SLIDE, A._dataApiClickHandler), e(window).on(u.LOAD_DATA_API, function() {
                e(h.DATA_RIDE).each(function() {
                    var t = e(this);
                    A._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = A._jQueryInterface, e.fn[t].Constructor = A, e.fn[t].noConflict = function() {
                return e.fn[t] = a, A._jQueryInterface
            }, A
        }(t),
        _ = function(e) {
            var t = "collapse",
                i = "bs.collapse",
                n = "." + i,
                a = e.fn[t],
                o = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                d = {
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    CLICK_DATA_API: "click" + n + ".data-api"
                },
                c = "show",
                u = "collapse",
                p = "collapsing",
                h = "collapsed",
                A = "width",
                f = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function() {
                    function n(t, i) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var n = e(f.DATA_TOGGLE), r = 0; r < n.length; r++) {
                            var s = n[r],
                                a = C.getSelectorFromElement(s);
                            null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(s))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var a = n.prototype;
                    return a.toggle = function() {
                        e(this._element).hasClass(c) ? this.hide() : this.show()
                    }, a.show = function() {
                        var t, r, s = this;
                        if (!(this._isTransitioning || e(this._element).hasClass(c) || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(f.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (r = e(t).not(this._selector).data(i)) && r._isTransitioning))) {
                            var a = e.Event(d.SHOW);
                            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                t && (n._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(i, null));
                                var o = this._getDimension();
                                e(this._element).removeClass(u).addClass(p), this._element.style[o] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function() {
                                    e(s._element).removeClass(p).addClass(u).addClass(c), s._element.style[o] = "", s.setTransitioning(!1), e(s._element).trigger(d.SHOWN)
                                };
                                if (C.supportsTransitionEnd()) {
                                    var A = "scroll" + (o[0].toUpperCase() + o.slice(1));
                                    e(this._element).one(C.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[o] = this._element[A] + "px"
                                } else l()
                            }
                        }
                    }, a.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(c)) {
                            var i = e.Event(d.HIDE);
                            if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var n = this._getDimension();
                                if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", C.reflow(this._element), e(this._element).addClass(p).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var s = this._triggerArray[r],
                                            a = C.getSelectorFromElement(s);
                                        null !== a && (e(a).hasClass(c) || e(s).addClass(h).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var o = function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(p).addClass(u).trigger(d.HIDDEN)
                                };
                                this._element.style[n] = "", C.supportsTransitionEnd() ? e(this._element).one(C.TRANSITION_END, o).emulateTransitionEnd(600) : o()
                            }
                        }
                    }, a.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }, a.dispose = function() {
                        e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, a._getConfig = function(e) {
                        return (e = s({}, o, e)).toggle = Boolean(e.toggle), C.typeCheckConfig(t, e, l), e
                    }, a._getDimension = function() {
                        return e(this._element).hasClass(A) ? A : "height"
                    }, a._getParent = function() {
                        var t = this,
                            i = null;
                        C.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = e(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(i).find(r).each(function(e, i) {
                            t._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i])
                        }), i
                    }, a._addAriaAndCollapsedClass = function(t, i) {
                        if (t) {
                            var n = e(t).hasClass(c);
                            i.length > 0 && e(i).toggleClass(h, !n).attr("aria-expanded", n)
                        }
                    }, n._getTargetFromElement = function(t) {
                        var i = C.getSelectorFromElement(t);
                        return i ? e(i)[0] : null
                    }, n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var r = e(this),
                                a = r.data(i),
                                l = s({}, o, r.data(), "object" == typeof t && t);
                            if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new n(this, l), r.data(i, a)), "string" == typeof t) {
                                if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                                a[t]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), n
                }();
            return e(document).on(d.CLICK_DATA_API, f.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = e(this),
                    r = C.getSelectorFromElement(this);
                e(r).each(function() {
                    var t = e(this),
                        r = t.data(i) ? "toggle" : n.data();
                    m._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = a, m._jQueryInterface
            }, m
        }(t),
        k = function(e) {
            var t = "dropdown",
                n = "bs.dropdown",
                a = "." + n,
                o = ".data-api",
                l = e.fn[t],
                d = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click" + a + o,
                    KEYDOWN_DATA_API: "keydown" + a + o,
                    KEYUP_DATA_API: "keyup" + a + o
                },
                u = "disabled",
                p = "show",
                h = "dropup",
                A = "dropdown-menu-right",
                f = '[data-toggle="dropdown"]',
                m = ".dropdown-menu",
                g = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                v = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                y = function() {
                    function o(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var l = o.prototype;
                    return l.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(u)) {
                            var t = o._getParentFromElement(this._element),
                                n = e(this._menu).hasClass(p);
                            if (o._clearMenus(), !n) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    s = e.Event(c.SHOW, r);
                                if (e(t).trigger(s), !s.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var a = this._element;
                                        e(t).hasClass(h) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(A)) && (a = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new i(a, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(p), e(t).toggleClass(p).trigger(e.Event(c.SHOWN, r))
                                }
                            }
                        }
                    }, l.dispose = function() {
                        e.removeData(this._element, n), e(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, l.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, l._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(c.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, l._getConfig = function(i) {
                        return i = s({}, this.constructor.Default, e(this._element).data(), i), C.typeCheckConfig(t, i, this.constructor.DefaultType), i
                    }, l._getMenuElement = function() {
                        if (!this._menu) {
                            var t = o._getParentFromElement(this._element);
                            this._menu = e(t).find(m)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function() {
                        var t = e(this._element).parent(),
                            i = "bottom-start";
                        return t.hasClass(h) ? (i = "top-start", e(this._menu).hasClass(A) && (i = "top-end")) : t.hasClass("dropright") ? i = "right-start" : t.hasClass("dropleft") ? i = "left-start" : e(this._menu).hasClass(A) && (i = "bottom-end"), i
                    }, l._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, l._getPopperConfig = function() {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t
                        } : t.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n);
                            if (i || (i = new o(this, "object" == typeof t ? t : null), e(this).data(n, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, o._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = e.makeArray(e(f)), r = 0; r < i.length; r++) {
                                var s = o._getParentFromElement(i[r]),
                                    a = e(i[r]).data(n),
                                    l = {
                                        relatedTarget: i[r]
                                    };
                                if (a) {
                                    var d = a._menu;
                                    if (e(s).hasClass(p) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                        var u = e.Event(c.HIDE, l);
                                        e(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(d).removeClass(p), e(s).removeClass(p).trigger(e.Event(c.HIDDEN, l)))
                                    }
                                }
                            }
                    }, o._getParentFromElement = function(t) {
                        var i, n = C.getSelectorFromElement(t);
                        return n && (i = e(n)[0]), i || t.parentNode
                    }, o._dataApiKeydownHandler = function(t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(m).length)) : d.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(u))) {
                            var i = o._getParentFromElement(this),
                                n = e(i).hasClass(p);
                            if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                                var r = e(i).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== r.length) {
                                    var s = r.indexOf(t.target);
                                    38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var a = e(i).find(f)[0];
                                    e(a).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return v
                        }
                    }]), o
                }();
            return e(document).on(c.KEYDOWN_DATA_API, f, y._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, m, y._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, y._clearMenus).on(c.CLICK_DATA_API, f, function(t) {
                t.preventDefault(), t.stopPropagation(), y._jQueryInterface.call(e(this), "toggle")
            }).on(c.CLICK_DATA_API, ".dropdown form", function(e) {
                e.stopPropagation()
            }), e.fn[t] = y._jQueryInterface, e.fn[t].Constructor = y, e.fn[t].noConflict = function() {
                return e.fn[t] = l, y._jQueryInterface
            }, y
        }(t),
        D = function(e) {
            var t = "bs.modal",
                i = "." + t,
                n = e.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                o = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                d = "modal-open",
                c = "fade",
                u = "show",
                p = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                h = function() {
                    function n(t, i) {
                        this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var h = n.prototype;
                    return h.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, h.show = function(t) {
                        var i = this;
                        if (!this._isTransitioning && !this._isShown) {
                            C.supportsTransitionEnd() && e(this._element).hasClass(c) && (this._isTransitioning = !0);
                            var n = e.Event(l.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function(e) {
                                return i.hide(e)
                            }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                                e(i._element).one(l.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return i._showElement(t)
                            }))
                        }
                    }, h.hide = function(t) {
                        var i = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var n = e.Event(l.HIDE);
                            if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = C.supportsTransitionEnd() && e(this._element).hasClass(c);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(u), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(C.TRANSITION_END, function(e) {
                                    return i._hideModal(e)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, h.dispose = function() {
                        e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, h.handleUpdate = function() {
                        this._adjustDialog()
                    }, h._getConfig = function(e) {
                        return e = s({}, a, e), C.typeCheckConfig("modal", e, o), e
                    }, h._showElement = function(t) {
                        var i = this,
                            n = C.supportsTransitionEnd() && e(this._element).hasClass(c);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && C.reflow(this._element), e(this._element).addClass(u), this._config.focus && this._enforceFocus();
                        var r = e.Event(l.SHOWN, {
                                relatedTarget: t
                            }),
                            s = function() {
                                i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(r)
                            };
                        n ? e(this._dialog).one(C.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                    }, h._enforceFocus = function() {
                        var t = this;
                        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function(i) {
                            document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus()
                        })
                    }, h._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
                    }, h._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(l.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(l.RESIZE)
                    }, h._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            e(document.body).removeClass(d), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                        })
                    }, h._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, h._showBackdrop = function(t) {
                        var i = this,
                            n = e(this._element).hasClass(c) ? c : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = C.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && e(this._backdrop).addClass(n), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function(e) {
                                    i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                                }), r && C.reflow(this._backdrop), e(this._backdrop).addClass(u), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(C.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(u);
                            var s = function() {
                                i._removeBackdrop(), t && t()
                            };
                            C.supportsTransitionEnd() && e(this._element).hasClass(c) ? e(this._backdrop).one(C.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                        } else t && t()
                    }, h._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(p.FIXED_CONTENT).each(function(i, n) {
                                var r = e(n)[0].style.paddingRight,
                                    s = e(n).css("padding-right");
                                e(n).data("padding-right", r).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                            }), e(p.STICKY_CONTENT).each(function(i, n) {
                                var r = e(n)[0].style.marginRight,
                                    s = e(n).css("margin-right");
                                e(n).data("margin-right", r).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                            }), e(p.NAVBAR_TOGGLER).each(function(i, n) {
                                var r = e(n)[0].style.marginRight,
                                    s = e(n).css("margin-right");
                                e(n).data("margin-right", r).css("margin-right", parseFloat(s) + t._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight,
                                n = e("body").css("padding-right");
                            e("body").data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                        }
                    }, h._resetScrollbar = function() {
                        e(p.FIXED_CONTENT).each(function(t, i) {
                            var n = e(i).data("padding-right");
                            void 0 !== n && e(i).css("padding-right", n).removeData("padding-right")
                        }), e(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(t, i) {
                            var n = e(i).data("margin-right");
                            void 0 !== n && e(i).css("margin-right", n).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                    }, h._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, n._jQueryInterface = function(i, r) {
                        return this.each(function() {
                            var a = e(this).data(t),
                                o = s({}, n.Default, e(this).data(), "object" == typeof i && i);
                            if (a || (a = new n(this, o), e(this).data(t, a)), "string" == typeof i) {
                                if (void 0 === a[i]) throw new TypeError('No method named "' + i + '"');
                                a[i](r)
                            } else o.show && a.show(r)
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), n
                }();
            return e(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function(i) {
                var n, r = this,
                    a = C.getSelectorFromElement(this);
                a && (n = e(a)[0]);
                var o = e(n).data(t) ? "toggle" : s({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || i.preventDefault();
                var d = e(n).one(l.SHOW, function(t) {
                    t.isDefaultPrevented() || d.one(l.HIDDEN, function() {
                        e(r).is(":visible") && r.focus()
                    })
                });
                h._jQueryInterface.call(e(n), o, this)
            }), e.fn.modal = h._jQueryInterface, e.fn.modal.Constructor = h, e.fn.modal.noConflict = function() {
                return e.fn.modal = n, h._jQueryInterface
            }, h
        }(t),
        I = function(e) {
            var t = "tooltip",
                n = "bs.tooltip",
                a = "." + n,
                o = e.fn[t],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                d = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                p = "show",
                h = "out",
                A = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    INSERTED: "inserted" + a,
                    CLICK: "click" + a,
                    FOCUSIN: "focusin" + a,
                    FOCUSOUT: "focusout" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a
                },
                f = "fade",
                m = "show",
                g = "hover",
                v = "focus",
                y = function() {
                    function o(e, t) {
                        if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var y = o.prototype;
                    return y.enable = function() {
                        this._isEnabled = !0
                    }, y.disable = function() {
                        this._isEnabled = !1
                    }, y.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, y.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var i = this.constructor.DATA_KEY,
                                    n = e(t.currentTarget).data(i);
                                n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                            } else {
                                if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, y.dispose = function() {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, y.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(n);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !r) return;
                            var s = this.getTipElement(),
                                a = C.getUID(this.constructor.NAME);
                            s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(f);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                d = this._getAttachment(l);
                            this.addAttachmentClass(d);
                            var c = !1 === this.config.container ? document.body : e(this.config.container);
                            e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, s, {
                                placement: d,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(s).addClass(m), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var u = function() {
                                t.config.animation && t._fixTransition();
                                var i = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), i === h && t._leave(null, t)
                            };
                            C.supportsTransitionEnd() && e(this.tip).hasClass(f) ? e(this.tip).one(C.TRANSITION_END, u).emulateTransitionEnd(o._TRANSITION_DURATION) : u()
                        }
                    }, y.hide = function(t) {
                        var i = this,
                            n = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            s = function() {
                                i._hoverState !== p && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(n).removeClass(m), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[v] = !1, this._activeTrigger[g] = !1, C.supportsTransitionEnd() && e(this.tip).hasClass(f) ? e(n).one(C.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "")
                    }, y.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, y.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, y.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, y.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, y.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(f + " " + m)
                    }, y.setElementContent = function(t, i) {
                        var n = this.config.html;
                        "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i)
                    }, y.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, y._getAttachment = function(e) {
                        return c[e.toUpperCase()]
                    }, y._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(i) {
                            if ("click" === i) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if ("manual" !== i) {
                                var n = i === g ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = i === g ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(n, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = s({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, y._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, y._enter = function(t, i) {
                        var n = this.constructor.DATA_KEY;
                        (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusin" === t.type ? v : g] = !0), e(i.getTipElement()).hasClass(m) || i._hoverState === p ? i._hoverState = p : (clearTimeout(i._timeout), i._hoverState = p, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                            i._hoverState === p && i.show()
                        }, i.config.delay.show) : i.show())
                    }, y._leave = function(t, i) {
                        var n = this.constructor.DATA_KEY;
                        (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusout" === t.type ? v : g] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = h, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                            i._hoverState === h && i.hide()
                        }, i.config.delay.hide) : i.hide())
                    }, y._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, y._getConfig = function(i) {
                        return "number" == typeof(i = s({}, this.constructor.Default, e(this.element).data(), i)).delay && (i.delay = {
                            show: i.delay,
                            hide: i.delay
                        }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), C.typeCheckConfig(t, i, this.constructor.DefaultType), i
                    }, y._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, y._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            i = t.attr("class").match(l);
                        null !== i && i.length > 0 && t.removeClass(i.join(""))
                    }, y._handlePopperPlacementChange = function(e) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, y._fixTransition = function() {
                        var t = this.getTipElement(),
                            i = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(f), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                r = "object" == typeof t && t;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new o(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return A
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return d
                        }
                    }]), o
                }();
            return e.fn[t] = y._jQueryInterface, e.fn[t].Constructor = y, e.fn[t].noConflict = function() {
                return e.fn[t] = o, y._jQueryInterface
            }, y
        }(t),
        Q = function(e) {
            var t = "popover",
                i = "bs.popover",
                n = "." + i,
                a = e.fn[t],
                o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = s({}, I.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                d = s({}, I.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                u = function(s) {
                    var a, u;

                    function p() {
                        return s.apply(this, arguments) || this
                    }
                    u = s, (a = p).prototype = Object.create(u.prototype), a.prototype.constructor = a, a.__proto__ = u;
                    var h = p.prototype;
                    return h.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, h.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, h.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, h.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".popover-header"), this.getTitle());
                        var i = this._getContent();
                        "function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(".popover-body"), i), t.removeClass("fade show")
                    }, h._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, h._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            i = t.attr("class").match(o);
                        null !== i && i.length > 0 && t.removeClass(i.join(""))
                    }, p._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i),
                                r = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new p(this, r), e(this).data(i, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(p, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return d
                        }
                    }]), p
                }(I);
            return e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
                return e.fn[t] = a, u._jQueryInterface
            }, u
        }(t),
        Y = function(e) {
            var t = "scrollspy",
                i = "bs.scrollspy",
                n = "." + i,
                a = e.fn[t],
                o = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                d = {
                    ACTIVATE: "activate" + n,
                    SCROLL: "scroll" + n,
                    LOAD_DATA_API: "load" + n + ".data-api"
                },
                c = "active",
                u = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                p = "position",
                h = function() {
                    function a(t, i) {
                        var n = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(d.SCROLL, function(e) {
                            return n._process(e)
                        }), this.refresh(), this._process()
                    }
                    var h = a.prototype;
                    return h.refresh = function() {
                        var t = this,
                            i = this._scrollElement === this._scrollElement.window ? "offset" : p,
                            n = "auto" === this._config.method ? i : this._config.method,
                            r = n === p ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) {
                            var i, s = C.getSelectorFromElement(t);
                            if (s && (i = e(s)[0]), i) {
                                var a = i.getBoundingClientRect();
                                if (a.width || a.height) return [e(i)[n]().top + r, s]
                            }
                            return null
                        }).filter(function(e) {
                            return e
                        }).sort(function(e, t) {
                            return e[0] - t[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, h.dispose = function() {
                        e.removeData(this._element, i), e(this._scrollElement).off(n), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h._getConfig = function(i) {
                        if ("string" != typeof(i = s({}, o, i)).target) {
                            var n = e(i.target).attr("id");
                            n || (n = C.getUID(t), e(i.target).attr("id", n)), i.target = "#" + n
                        }
                        return C.typeCheckConfig(t, i, l), i
                    }, h._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, h._process = function() {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            i = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= i) {
                            var n = this._targets[this._targets.length - 1];
                            this._activeTarget !== n && this._activate(n)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, h._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var i = this._selector.split(",");
                        i = i.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var n = e(i.join(","));
                        n.hasClass("dropdown-item") ? (n.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c), n.addClass(c)) : (n.addClass(c), n.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c), n.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(d.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, h._clear = function() {
                        e(this._selector).filter(u.ACTIVE).removeClass(c)
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i);
                            if (n || (n = new a(this, "object" == typeof t && t), e(this).data(i, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), a
                }();
            return e(window).on(d.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(u.DATA_SPY)), i = t.length; i--;) {
                    var n = e(t[i]);
                    h._jQueryInterface.call(n, n.data())
                }
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
                return e.fn[t] = a, h._jQueryInterface
            }, h
        }(t),
        j = function(e) {
            var t = "bs.tab",
                i = "." + t,
                n = e.fn.tab,
                s = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                a = "active",
                o = "show",
                l = ".active",
                d = "> li > .active",
                c = function() {
                    function i(e) {
                        this._element = e
                    }
                    var n = i.prototype;
                    return n.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(a) || e(this._element).hasClass("disabled"))) {
                            var i, n, r = e(this._element).closest(".nav, .list-group")[0],
                                o = C.getSelectorFromElement(this._element);
                            if (r) {
                                var c = "UL" === r.nodeName ? d : l;
                                n = (n = e.makeArray(e(r).find(c)))[n.length - 1]
                            }
                            var u = e.Event(s.HIDE, {
                                    relatedTarget: this._element
                                }),
                                p = e.Event(s.SHOW, {
                                    relatedTarget: n
                                });
                            if (n && e(n).trigger(u), e(this._element).trigger(p), !p.isDefaultPrevented() && !u.isDefaultPrevented()) {
                                o && (i = e(o)[0]), this._activate(this._element, r);
                                var h = function() {
                                    var i = e.Event(s.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        r = e.Event(s.SHOWN, {
                                            relatedTarget: n
                                        });
                                    e(n).trigger(i), e(t._element).trigger(r)
                                };
                                i ? this._activate(i, i.parentNode, h) : h()
                            }
                        }
                    }, n.dispose = function() {
                        e.removeData(this._element, t), this._element = null
                    }, n._activate = function(t, i, n) {
                        var r = this,
                            s = ("UL" === i.nodeName ? e(i).find(d) : e(i).children(l))[0],
                            a = n && C.supportsTransitionEnd() && s && e(s).hasClass("fade"),
                            o = function() {
                                return r._transitionComplete(t, s, n)
                            };
                        s && a ? e(s).one(C.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                    }, n._transitionComplete = function(t, i, n) {
                        if (i) {
                            e(i).removeClass(o + " " + a);
                            var r = e(i.parentNode).find("> .dropdown-menu .active")[0];
                            r && e(r).removeClass(a), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(a), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), C.reflow(t), e(t).addClass(o), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                            var s = e(t).closest(".dropdown")[0];
                            s && e(s).find(".dropdown-toggle").addClass(a), t.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }, i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var r = e(this),
                                s = r.data(t);
                            if (s || (s = new i(this), r.data(t, s)), "string" == typeof n) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }]), i
                }();
            return e(document).on(s.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
                t.preventDefault(), c._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = c._jQueryInterface, e.fn.tab.Constructor = c, e.fn.tab.noConflict = function() {
                return e.fn.tab = n, c._jQueryInterface
            }, c
        }(t);
    ! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = C, e.Alert = S, e.Button = x, e.Carousel = E, e.Collapse = _, e.Dropdown = k, e.Modal = D, e.Popover = Q, e.Scrollspy = Y, e.Tab = j, e.Tooltip = I, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function() {
    "use strict";

    function e(e, t, i) {
        e.addEventListener(t, i)
    }

    function t(e) {
        p = window.innerWidth || document.documentElement.clientWidth, h = window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : r(e)) || "load" !== e.type && "DOMContentLoaded" !== e.type || (f = !0)
    }

    function i() {
        if (m.length) {
            A = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var e = f || !g || g.width !== p || g.height !== h,
                t = e || !g || g.y !== A;
            f = !1, (e || t) && (m.forEach(function(i) {
                e && i.onResize(), t && i.onScroll()
            }), g = {
                width: p,
                height: h,
                y: A
            }), u(i)
        }
    }
    var n = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)
                if (t && void 0 !== t.style[e[i]]) return e[i];
            return !1
        }(),
        a = navigator.userAgent,
        o = a.toLowerCase().indexOf("android") > -1,
        l = a.toLowerCase().indexOf("firefox") > -1,
        d = /iPad|iPhone|iPod/.test(a) && !window.MSStream,
        c = a.indexOf("MSIE ") > -1 || a.indexOf("Trident/") > -1 || a.indexOf("Edge/") > -1,
        u = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        },
        p = void 0,
        h = void 0,
        A = void 0,
        f = !1;
    t(), e(window, "resize", t), e(window, "orientationchange", t), e(window, "load", t), e(window, "DOMContentLoaded", t);
    var m = [],
        g = !1,
        v = 0,
        y = function() {
            function e(t, i) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = this;
                n.instanceID = v++, n.$item = t, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    noAndroid: !1,
                    noIos: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var s = n.$item.getAttribute("data-jarallax"),
                    a = JSON.parse(s || "{}");
                s && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var o = n.$item.dataset || {},
                    d = {};
                Object.keys(o).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== n.defaults[t] && (d[t] = o[e])
                }), n.options = n.extend({}, n.defaults, a, d, i), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                    "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed)));
                var u = n.options.elementInViewport;
                u && "object" === (void 0 === u ? "undefined" : r(u)) && void 0 !== u.length && (u = u[0]), u instanceof Element || (u = null), n.options.elementInViewport = u, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: c || l ? "fixed" : "absolute"
                }, n.initImg() && n.canInitParallax() && n.init()
            }
            return n(e, [{
                key: "css",
                value: function(e, t) {
                    return "string" == typeof t ? window.getComputedStyle(e).getPropertyValue(t) : (t.transform && s && (t[s] = t.transform), Object.keys(t).forEach(function(i) {
                        e.style[i] = t[i]
                    }), e)
                }
            }, {
                key: "extend",
                value: function(e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function(i) {
                        t[i] && Object.keys(t[i]).forEach(function(n) {
                            e[n] = t[i][n]
                        })
                    }), e
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: p,
                        height: h,
                        y: A
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !e.image.src || "none" === e.image.src))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return s && !(o && this.options.noAndroid) && !(d && this.options.noIos)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        i = {};
                    if (!e.options.keepImg) {
                        var n = e.$item.getAttribute("style");
                        if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
                            var r = e.image.$item.getAttribute("style");
                            r && e.image.$item.setAttribute("data-jarallax-original-styles", r)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? i = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                            "max-width": "none"
                        }, t, i) : (e.image.$item = document.createElement("div"), i = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": 'url("' + e.image.src + '")'
                        }, t, i)), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                        for (var s = 0, a = e.$item; null !== a && a !== document && 0 === s;) {
                            var o = e.css(a, "-webkit-transform") || e.css(a, "-moz-transform") || e.css(a, "transform");
                            o && "none" !== o && (s = 1, e.image.position = "absolute"), a = a.parentNode
                        }
                    i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    m.push(this), 1 === m.length && i()
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var e = this;
                    m.forEach(function(t, i) {
                        t.instanceID === e.instanceID && m.splice(i, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var i = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            i = t.width,
                            n = t.height;
                        if (!e.$clipStyles) e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
                        var r = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + i + "px " + n + "px 0);\n           clip: rect(0, " + i + "px, " + n + "px, 0);\n        }";
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = r : e.$clipStyles.innerHTML = r
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e, t = this,
                        i = t.image.$container.getBoundingClientRect(),
                        n = i.height,
                        r = t.options.speed,
                        s = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
                        a = 0,
                        o = n;
                    return s && (a = r < 0 ? r * Math.max(n, h) : r * (n + h), r > 1 ? o = Math.abs(a - h) : r < 0 ? o = a / r + Math.abs(a) : o += Math.abs(h - n) * (1 - r), a /= 2), t.parallaxScrollDistance = a, e = s ? (h - o) / 2 : (n - o) / 2, t.css(t.image.$item, {
                        height: o + "px",
                        marginTop: e + "px",
                        left: "fixed" === t.image.position ? i.left + "px" : "0",
                        width: i.width + "px"
                    }), t.options.onCoverImage && t.options.onCoverImage.call(t), {
                        image: {
                            height: o,
                            marginTop: e
                        },
                        container: i
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        i = t.$item.getBoundingClientRect(),
                        n = i.top,
                        r = i.height,
                        s = {},
                        a = i;
                    if (t.options.elementInViewport && (a = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = a.bottom >= 0 && a.right >= 0 && a.top <= h && a.left <= p, e || t.isElementInViewport) {
                        var o = Math.max(0, n),
                            l = Math.max(0, r + n),
                            d = Math.max(0, -n),
                            c = Math.max(0, n + r - h),
                            u = Math.max(0, r - (n + r - h)),
                            A = Math.max(0, -n + h - r),
                            f = 1 - 2 * (h - n) / (h + r),
                            m = 1;
                        if (r < h ? m = 1 - (d || c) / r : l <= h ? m = l / h : u <= h && (m = u / h), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "translate3d(0,0,0)", s.opacity = m), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var g = 1;
                            t.options.speed < 0 ? g -= t.options.speed * m : g += t.options.speed * (1 - m), s.transform = "scale(" + g + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var v = t.parallaxScrollDistance * f;
                            "absolute" === t.image.position && (v -= n), s.transform = "translate3d(0," + v + "px,0)"
                        }
                        t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                            section: i,
                            beforeTop: o,
                            beforeTopEnd: l,
                            afterTop: d,
                            beforeBottom: c,
                            beforeBottomEnd: u,
                            afterBottom: A,
                            visiblePercent: m,
                            fromViewportCenter: f
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]), e
        }(),
        w = function(e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var t = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = e.length, s = 0, a = void 0; s < n; s++)
                if ("object" === (void 0 === t ? "undefined" : r(t)) || void 0 === t ? e[s].jarallax || (e[s].jarallax = new y(e[s], t)) : e[s].jarallax && (a = e[s].jarallax[t].apply(e[s].jarallax, i)), void 0 !== a) return a;
            return e
        };
    w.constructor = y;
    var T = window.jarallax;
    if (window.jarallax = w, window.jarallax.noConflict = function() {
            return window.jarallax = T, this
        }, "undefined" != typeof jQuery) {
        var b = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = w.apply(window, e);
            return "object" !== (void 0 === t ? "undefined" : r(t)) ? t : this
        };
        b.constructor = y;
        var P = jQuery.fn.jarallax;
        jQuery.fn.jarallax = b, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = P, this
        }
    }
    e(window, "DOMContentLoaded", function() {
        w(document.querySelectorAll("[data-jarallax]"))
    })
}(),
function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var i = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                n = i;
            t.waypoint(function() {
                var e = [],
                    i = n.time / n.delay,
                    r = t.text(),
                    s = /[0-9]+,[0-9]+/.test(r);
                r = r.replace(/,/g, "");
                /^[0-9]+$/.test(r);
                for (var a = /^[0-9]+\.[0-9]+$/.test(r), o = a ? (r.split(".")[1] || []).length : 0, l = i; l >= 1; l--) {
                    var d = parseInt(r / i * l);
                    if (a && (d = parseFloat(r / i * l).toFixed(o)), s)
                        for (;
                            /(\d+)(\d{3})/.test(d.toString());) d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    e.unshift(d)
                }
                t.data("counterup-nums", e), t.text("0");
                t.data("counterup-func", function() {
                    t.text(t.data("counterup-nums").shift()), t.data("counterup-nums").length ? setTimeout(t.data("counterup-func"), n.delay) : (t.data("counterup-nums"), t.data("counterup-nums", null), t.data("counterup-func", null))
                }), setTimeout(t.data("counterup-func"), n.delay)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);
var ytp = ytp || {},
    getYTPVideoID = function(e) {
        var t, i;
        return e.indexOf("youtu.be") > 0 ? (i = (t = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = i ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], i = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : i = (t = e.length > 15 ? null : e) ? null : e, {
            videoID: t,
            playlistID: i
        }
    };
! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.1.5",
        build: "6570",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            fadeOnStartTime: 1500,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            remember_last_time: !1,
            playOnlyIfVisible: !1,
            anchor: "center,center",
            onReady: function(e) {},
            onError: function(e, t) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = 0, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && void 0 !== property.vol && 0 === property.vol && (property.vol = 1, property.mute = !0), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.opt.realfullscreen = !isIframe() && YTPlayer.opt.realfullscreen, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime());
                var playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3";
                var start_from_last = 0;
                jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID));
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations,
                    playsinline: jQuery.browser.mobile ? 1 : 0
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                        html5: 1
                    }), jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (this.opt.opacity = 1), YTPlayer.isPlayer = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    }), YTPlayer.opt.containment.width("100%"), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper), YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    })), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    YTPlayer.isPlayer || $YTPlayer.hide(), YTPlayer.overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay"), YTPlayer.isPlayer && YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    }), YTPlayer.wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id), YTPlayer.wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), YTPlayer.wrapper.append(playerBox), playerBox.css({
                            opacity: 1
                        }), playerBox.after(YTPlayer.overlay), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), YTPlayer.wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script><\/script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && jQuery("body").one("touchstart", function() {
                        YTPlayer.player.playVideo()
                    }), jQuery.mbBrowser.mobile && YTPlayer.opt.mobileFallbackImage && YTPlayer.wrapper.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            YTPlayer.isInit || (YTPlayer.isInit = !0, new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                playerVars: playerVars,
                                events: {
                                    onReady: function(e) {
                                        YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !YTPlayer.isPlayer || YTPlayer.opt.autoPlay, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                            $YTPlayer.optimizeDisplay()
                                        }), YTPlayer.opt.remember_last_time && jQuery(window).on("unload.YTP_" + YTPlayer.id, function() {
                                            var e = YTPlayer.player.getCurrentTime();
                                            jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer.videoID, e, 0)
                                        }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                    },
                                    onStateChange: function(event) {
                                        if ("function" == typeof event.target.getPlayerState) {
                                            var state = event.target.getPlayerState(),
                                                eventType;
                                            if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                            switch (YTPlayer.state = state, state) {
                                                case -1:
                                                    eventType = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    eventType = "YTPRealEnd";
                                                    break;
                                                case 1:
                                                    eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                    break;
                                                case 2:
                                                    eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 3:
                                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    eventType = "YTPCued"
                                            }
                                            var YTPEvent = jQuery.Event(eventType);
                                            YTPEvent.time = YTPlayer.currentTime, YTPlayer.preventTrigger || jQuery(YTPlayer).trigger(YTPEvent)
                                        }
                                    },
                                    onPlaybackQualityChange: function(e) {
                                        var t = e.target.getPlaybackQuality(),
                                            i = jQuery.Event("YTPQualityChange");
                                        i.quality = t, jQuery(YTPlayer).trigger(i)
                                    },
                                    onError: function(e) {
                                        150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                    }
                                }
                            }))
                        }))
                    }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        isOnScreen: function(e) {
            var t = e.wrapper,
                i = $(window).scrollTop(),
                n = i + $(window).height(),
                r = t.offset().top;
            return n >= r + t.height() / 2 && r >= i
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                    if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                }), e.videoData) setTimeout(function() {
                e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.dataReceived = !0;
                var t = jQuery.Event("YTPChanged");
                t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t);
                var i = jQuery.Event("YTPData");
                for (var n in i.prop = {}, e.videoData) i.prop[n] = e.videoData[n];
                jQuery(e).trigger(i)
            }, e.opt.fadeOnStartTime), e.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(t) {
                e.dataReceived = !0;
                var i = jQuery.Event("YTPChanged");
                i.time = e.currentTime, i.videoId = e.videoID, jQuery(e).trigger(i),
                    function(t) {
                        e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                    }(t.items[0].snippet), e.hasData = !0;
                var n = jQuery.Event("YTPData");
                for (var r in n.prop = {}, e.videoData) n.prop[r] = e.videoData[r];
                jQuery(e).trigger(n)
            });
            else {
                if (setTimeout(function() {
                        var t = jQuery.Event("YTPChanged");
                        t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t)
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/maxresdefault.jpg";
                    t && e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }), e.opt.backgroundUrl = t
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }
            e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            return this.get(0).videoData
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        setVideoQuality: function(e) {
            this.get(0).player.setPlaybackQuality(e)
        },
        playlist: function(e, t, i) {
            var n = this.get(0);
            return n.isPlayList = !0, t && (e = jQuery.shuffle(e)), n.videoID || (n.videos = e, n.videoCounter = 0, n.videoLength = e.length, jQuery(n).data("property", e[0]), jQuery(n).mb_YTPlayer()), "function" == typeof i && jQuery(n).one("YTPChanged", function() {
                i(n)
            }), jQuery(n).on("YTPEnd", function() {
                jQuery(n).playNext()
            }), this
        },
        playNext: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playIndex: function(e) {
            var t = this.get(0);
            return e -= 1, t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter = e, t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1), jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]), this
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, "true" == t.opt.loop && (t.opt.loop = 9999), jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, t.opt.fadeOnStartTime, function() {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = t.currentTime, e.videoId = t.videoID, jQuery(t).trigger(e), jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(t), jQuery.mbYTPlayer.getDataFromAPI(t)
            }), jQuery.mbYTPlayer.applyMask(t)
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(e, t) {
                for (var i, n, r = ["webkit", "moz", "ms", "o", ""], s = 0; s < r.length && !e[i];) {
                    if (i = t, "" == r[s] && (i = i.substr(0, 1).toLowerCase() + i.substr(1)), "undefined" != (n = typeof e[i = r[s] + i])) return r = [r[s]], "function" == n ? e[i]() : e[i];
                    s++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function() {
            var e = this.get(0),
                t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
        },
        play: function() {
            var e = this.get(0);
            return e.isReady ? (e.player.playVideo(), jQuery(e.playerEl).css({
                opacity: 1
            }), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, e.orig_background = jQuery(e).css("background-image"), this) : this
        },
        togglePlay: function(e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
        },
        stop: function() {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
        },
        pause: function() {
            var e = this.get(0);
            return e.player.pauseVideo(), e.state = 2, this
        },
        seekTo: function(e) {
            return this.get(0).player.seekTo(e, !0), this
        },
        setVolume: function(e) {
            var t = this.get(0);
            if (t.player.length) return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this
        },
        toggleVolume: function() {
            var e = this.get(0);
            if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var t = jQuery.Event("YTPMuted");
                return t.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(t), this
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var t = jQuery.Event("YTPUnmuted");
                return t.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(t), this
            }
        },
        applyFilter: function(e, t) {
            return this.each(function() {
                var i = this;
                i.filters[e].value = t, i.filtersEnabled && jQuery(i).YTPEnableFilters()
            })
        },
        applyFilters: function(e) {
            return this.each(function() {
                var t = this;
                if (t.isReady) {
                    for (var i in e) jQuery(t).YTPApplyFilter(i, e[i]);
                    jQuery(t).trigger("YTPFiltersApplied")
                } else jQuery(t).on("YTPReady", function() {
                    jQuery(t).YTPApplyFilters(e)
                })
            })
        },
        toggleFilter: function(e, t) {
            return this.each(function() {
                var i = this;
                i.filters[e].value ? i.filters[e].value = 0 : i.filters[e].value = t, i.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(e) {
            return this.each(function() {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var e = jQuery(this.playerEl);
                e.css("-webkit-filter", ""), e.css("filter", ""), this.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var e = this,
                    t = jQuery(e.playerEl),
                    i = "";
                for (var n in e.filters) e.filters[n].value && (i += n.replace("_", "-") + "(" + e.filters[n].value + e.filters[n].unit + ") ");
                t.css("-webkit-filter", i), t.css("filter", i), e.filtersEnabled = !0
            })
        },
        removeFilter: function(e, t) {
            return this.each(function() {
                if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);
                else
                    for (var i in this.filters) jQuery(this).YTPApplyFilter(i, 0), "function" == typeof t && t(i)
            })
        },
        getFilters: function() {
            return this.get(0).filters
        },
        addMask: function(e) {
            var t = this.get(0);
            e || (e = t.actualMask);
            var i = jQuery("<img/>").attr("src", e).on("load", function() {
                t.overlay.CSSAnimate({
                    opacity: 0
                }, t.opt.fadeOnStartTime, function() {
                    t.hasMask = !0, i.remove(), t.overlay.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), t.overlay.CSSAnimate({
                        opacity: 1
                    }, t.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function() {
            var e = this.get(0);
            return e.overlay.CSSAnimate({
                opacity: 0
            }, e.opt.fadeOnStartTime, function() {
                e.hasMask = !1, e.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e.overlay.CSSAnimate({
                    opacity: 1
                }, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function(e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask)
                if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask;
                else if ("object" == typeof e.opt.mask) {
                for (var i in e.opt.mask) e.opt.mask[i] && jQuery("<img/>").attr("src", e.opt.mask[i]);
                e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]), t.on("YTPTime.mask", function(i) {
                    for (var n in e.opt.mask) i.time == n && (e.opt.mask[n] ? (t.YTPAddMask(e.opt.mask[n]), e.actualMask = e.opt.mask[n]) : t.YTPRemoveMask())
                })
            }
            return this
        },
        toggleMask: function() {
            var e = this.get(0),
                t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(), this
        },
        manageProgress: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                i = t.find(".mb_YTPProgress"),
                n = t.find(".mb_YTPLoaded"),
                r = t.find(".mb_YTPseekbar"),
                s = i.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                o = Math.floor(e.player.getDuration()),
                l = a * s / o,
                d = 100 * e.player.getVideoLoadedFraction();
            return n.css({
                left: 0,
                width: d + "%"
            }), r.css({
                left: 0,
                width: l
            }), {
                totalTime: o,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            clearInterval(YTPlayer.getState);
            var interval = (YTPlayer.opt.showControls, 10);
            return jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                YTPlayer.start_from_last = null;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.player.playVideo()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible && 1 == YTPlayer.state) {
                    var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                    isOnScreen ? YTPlayer.player.playVideo() : $YTPlayer.YTPPause()
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, YTPlayer.opt.fadeOnStartTime, function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground ? YTPlayer.orig_background && jQuery(YTPlayer).css("background-image", YTPlayer.orig_background) : YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer && (YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background, YTPlayer.opt.containment.css({
                            background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        }))
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), YTPlayer.player.playVideo()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (jQuery.contains(document, e)) {
                if (e.preventTrigger = !0, e.state = 2, e.player.playVideo(), jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.overlay)
                    if (e.opt.addRaster) {
                        var i = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                        e.overlay.addClass(e.isRetina ? i + " retina" : i)
                    } else e.overlay.removeClass(function(e, t) {
                        var i = t.split(" "),
                            n = [];
                        return jQuery.each(i, function(e, t) {
                            /raster.*/.test(t) && n.push(t)
                        }), n.push("retina"), n.join(" ")
                    });
                var n = e.start_from_last ? e.start_from_last : e.opt.startAt ? e.opt.startAt : 1;
                e.start_from_last = null, e.player.playVideo(), e.player.seekTo(n, !0), clearInterval(e.checkForStartAt), jQuery(e).YTPMute(), e.checkForStartAt = setInterval(function() {
                    var i = e.player.getVideoLoadedFraction() >= n / e.player.getDuration();
                    if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= n && i) {
                        clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
                        var r = jQuery.Event("YTPReady");
                        if (r.time = e.currentTime, jQuery(e).trigger(r), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.preventTrigger = !1, e.opt.autoPlay) {
                            var s = jQuery.Event("YTPStart");
                            s.time = e.currentTime, jQuery(e).trigger(s), t.YTPPlay(), "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.safariPlay = setInterval(function() {
                                1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                            }, 10))
                        } else setTimeout(function() {
                            e.player.pauseVideo(), e.player.seekTo(n, !0), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                                opacity: 1
                            }, e.opt.fadeOnStartTime), e.wrapper.CSSAnimate({
                                opacity: e.isAlone ? 1 : e.opt.opacity
                            }, e.opt.fadeOnStartTime))
                        }, 150), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function() {
                            e.loading.fadeOut()
                        }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                    } else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.player.playVideo(), n >= 0 && e.player.seekTo(n, !0))
                }, 100)
            } else jQuery(e).YTPPlayerDestroy()
        },
        getTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function(e) {
            var t = this.get(0);
            return jQuery.mbYTPlayer.formatTime(t.totalTime)
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60),
                i = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= i ? "0" + i : i)
        },
        setAnchor: function(e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function() {
            return this.get(0).opt.anchor
        }
    }, jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0),
            vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",");
        if (YTPlayer.opt.optimizeDisplay) {
            var el = YTPlayer.wrapper,
                iframe = jQuery(YTPlayer.playerEl),
                abundance = YTPlayer.isPlayer ? 0 : .1 * iframe.height(),
                win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height) / 2), vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            for (var a in lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)), YTPAlign)
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                        case "top":
                            vid.marginTop = lowest ? -(vid.height - win.height) / 2 : 0;
                            break;
                        case "bottom":
                            vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                            break;
                        case "left":
                            vid.marginLeft = 0;
                            break;
                        case "right":
                            vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                            break;
                        default:
                            vid.width > win.width && (vid.marginLeft = -(vid.width - win.width) / 2)
                    }
                }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        jQuery(YTPlayer.playerEl).css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function(e) {
        for (var t = e.slice(), i = t.length, n = i; n--;) {
            var r = parseInt(Math.random() * i),
                s = t[n];
            t[n] = t[r], t[r] = s
        }
        return t
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function() {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        for (var i in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", t) {
            if ("transform" === i && (t[jQuery.CSS.sfx + "transform"] = t[i], delete t[i]), "transform-origin" === i && (t[jQuery.CSS.sfx + "transform-origin"] = e[i], delete t[i]), "filter" !== i || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[i], delete t[i]), "blur" === i && setFilter(t, "blur", e[i]), "brightness" === i && setFilter(t, "brightness", e[i]), "contrast" === i && setFilter(t, "contrast", e[i]), "grayscale" === i && setFilter(t, "grayscale", e[i]), "hueRotate" === i && setFilter(t, "hueRotate", e[i]), "invert" === i && setFilter(t, "invert", e[i]), "saturate" === i && setFilter(t, "saturate", e[i]), "sepia" === i && setFilter(t, "sepia", e[i]), "x" === i) {
                var n = jQuery.CSS.sfx + "transform";
                t[n] = t[n] || "", t[n] += " translateX(" + setUnit(e[i], "px") + ")", delete t[i]
            }
            "y" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " translateY(" + setUnit(e[i], "px") + ")", delete t[i]), "z" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " translateZ(" + setUnit(e[i], "px") + ")", delete t[i]), "rotate" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " rotate(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateX" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " rotateX(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateY" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " rotateY(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateZ" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " rotateZ(" + setUnit(e[i], "deg") + ")", delete t[i]), "scale" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " scale(" + setUnit(e[i], "") + ")", delete t[i]), "scaleX" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " scaleX(" + setUnit(e[i], "") + ")", delete t[i]), "scaleY" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " scaleY(" + setUnit(e[i], "") + ")", delete t[i]), "scaleZ" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " scaleZ(" + setUnit(e[i], "") + ")", delete t[i]), "skew" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " skew(" + setUnit(e[i], "deg") + ")", delete t[i]), "skewX" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " skewX(" + setUnit(e[i], "deg") + ")", delete t[i]), "skewY" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " skewY(" + setUnit(e[i], "deg") + ")", delete t[i]), "perspective" === i && (t[n = jQuery.CSS.sfx + "transform"] = t[n] || "", t[n] += " perspective(" + setUnit(e[i], "px") + ")", delete t[i])
        }
        return t
    },
    getProp: function(e) {
        var t, i = [];
        for (t in e) 0 > i.indexOf(t) && i.push(uncamel(t));
        return i.join(",")
    },
    animate: function(e, t, i, n, r) {
        return this.each(function() {
            function s() {
                a.called = !0, a.CSSAIsRunning = !1, o.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), o.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof r && r.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)
            }
            var a = this,
                o = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) a.CSSqueue = function() {
                o.CSSAnimate(e, t, i, n, r)
            };
            else if (a.CSSqueue = null, a.eventType = l.type, 0 !== o.length && e) {
                if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (r = t, t = jQuery.fx.speeds._default), "function" == typeof i && (n = i, i = 0), "string" == typeof i && (r = i, i = 0), "function" == typeof n && (r = n, n = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var d in jQuery.fx.speeds) {
                        if (t == d) {
                            t = jQuery.fx.speeds[d];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof r && (n = r, r = null), jQuery.support.CSStransition) {
                    var c = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    c[n] && (n = c[n]), o.off(jQuery.CSS.transitionEnd + "." + a.id), c = jQuery.CSS.getProp(e);
                    var u = {};
                    jQuery.extend(u, e), u[jQuery.CSS.sfx + "transition-property"] = c, u[jQuery.CSS.sfx + "transition-duration"] = t + "ms", u[jQuery.CSS.sfx + "transition-delay"] = i + "ms", u[jQuery.CSS.sfx + "transition-timing-function"] = n, setTimeout(function() {
                        o.one(jQuery.CSS.transitionEnd + "." + a.id, s), o.css(u)
                    }, 1), a.timeout = setTimeout(function() {
                        a.called || !r ? (a.called = !1, a.CSSAIsRunning = !1) : (o.css(jQuery.CSS.sfx + "transition", ""), r.apply(a), a.CSSAIsRunning = !1, "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null))
                    }, t + i + 10)
                } else {
                    for (c in e) "transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c && (l = e[c], e[d = "left"] = l, delete e[c]), "y" === c && (l = e[c], e[d = "top"] = l, delete e[c]), "-ms-transform" !== c && "-ms-filter" !== c || delete e[c];
                    o.delay(i).animate(e, t, r)
                }
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this),
            i = jQuery.normalizeCss(e);
        t.css(i)
    })
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
        var e = {
            version: "Unknown version",
            name: "Unknown OS"
        };
        return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
    },
    nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else - 1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, t) {
    if ("stringstring" != typeof e + typeof t) return !1;
    for (var i = e.split("."), n = t.split("."), r = 0, s = Math.max(i.length, n.length); s > r; r++) {
        if (i[r] && !n[r] && 0 < parseInt(i[r]) || parseInt(i[r]) > parseInt(n[r])) return 1;
        if (n[r] && !i[r] && 0 < parseInt(n[r]) || parseInt(i[r]) < parseInt(n[r])) return -1
    }
    return 0
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
        var e = {
            version: "Unknown version",
            name: "Unknown OS"
        };
        return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
    },
    nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else - 1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, t) {
        if ("stringstring" != typeof e + typeof t) return !1;
        for (var i = e.split("."), n = t.split("."), r = 0, s = Math.max(i.length, n.length); s > r; r++) {
            if (i[r] && !n[r] && 0 < parseInt(i[r]) || parseInt(i[r]) > parseInt(n[r])) return 1;
            if (n[r] && !i[r] && 0 < parseInt(n[r]) || parseInt(i[r]) < parseInt(n[r])) return -1
        }
        return 0
    },
    function(e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: e.browser.mobile ? "touchstart" : "mousedown",
                end: e.browser.mobile ? "touchend" : "mouseup",
                move: e.browser.mobile ? "touchmove" : "mousemove"
            },
            init: function(t) {
                return this.each(function() {
                    var i = this,
                        n = e(i);
                    n.addClass("simpleSlider"), i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, t), e.extend(i.opt, n.data());
                    var r = "h" == i.opt.orientation ? "horizontal" : "vertical";
                    r = e("<div/>").addClass("level").addClass(r), n.prepend(r), i.level = r, n.css({
                        cursor: "default"
                    }), "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()), n.updateSliderVal(), i.opt.readonly || (n.on(e.simpleSlider.events.start, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), i.canSlide = !0, n.updateSliderVal(t), "h" == i.opt.orientation ? n.css({
                            cursor: "col-resize"
                        }) : n.css({
                            cursor: "row-resize"
                        }), e.browser.mobile || (t.preventDefault(), t.stopPropagation())
                    }), e(document).on(e.simpleSlider.events.move, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), i.canSlide && (e(document).css({
                            cursor: "default"
                        }), n.updateSliderVal(t), e.browser.mobile || (t.preventDefault(), t.stopPropagation()))
                    }).on(e.simpleSlider.events.end, function() {
                        e(document).css({
                            cursor: "auto"
                        }), i.canSlide = !1, n.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(t) {
                var i = this.get(0);
                if (i.opt) {
                    i.opt.initialval = "number" == typeof i.opt.initialval ? i.opt.initialval : i.opt.initialval(i);
                    var n = e(i).outerWidth(),
                        r = e(i).outerHeight();
                    i.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof t ? t * n / i.opt.scale : i.opt.initialval * n / i.opt.scale, i.y = "object" == typeof t ? t.clientY + document.body.scrollTop - this.offset().top : "number" == typeof t ? (i.opt.scale - i.opt.initialval - t) * r / i.opt.scale : i.opt.initialval * r / i.opt.scale, i.y = this.outerHeight() - i.y, i.scaleX = i.x * i.opt.scale / n, i.scaleY = i.y * i.opt.scale / r, i.outOfRangeX = i.scaleX > i.opt.scale ? i.scaleX - i.opt.scale : 0 > i.scaleX ? i.scaleX : 0, i.outOfRangeY = i.scaleY > i.opt.scale ? i.scaleY - i.opt.scale : 0 > i.scaleY ? i.scaleY : 0, i.outOfRange = "h" == i.opt.orientation ? i.outOfRangeX : i.outOfRangeY, i.value = void 0 !== t ? "h" == i.opt.orientation ? i.x >= this.outerWidth() ? i.opt.scale : 0 >= i.x ? 0 : i.scaleX : i.y >= this.outerHeight() ? i.opt.scale : 0 >= i.y ? 0 : i.scaleY : "h" == i.opt.orientation ? i.scaleX : i.scaleY, "h" == i.opt.orientation ? i.level.width(Math.floor(100 * i.x / n) + "%") : i.level.height(Math.floor(100 * i.y / r)), "function" == typeof i.opt.callback && i.opt.callback(i)
                }
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery),
    function(e) {
        e.mbCookie = {
            set: function(e, t, i, n) {
                "object" == typeof t && (t = JSON.stringify(t)), n = n ? "; domain=" + n : "";
                var r = new Date,
                    s = "";
                i > 0 && (r.setTime(r.getTime() + 864e5 * i), s = "; expires=" + r.toGMTString()), document.cookie = e + "=" + t + s + "; path=/" + n
            },
            get: function(e) {
                e += "=";
                for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                    for (var n = t[i];
                        " " == n.charAt(0);) n = n.substring(1, n.length);
                    if (0 == n.indexOf(e)) try {
                        return JSON.parse(n.substring(e.length, n.length))
                    } catch (t) {
                        return n.substring(e.length, n.length)
                    }
                }
                return null
            },
            remove: function(t) {
                e.mbCookie.set(t, "", -1)
            }
        }, e.mbStorage = {
            set: function(e, t) {
                "object" == typeof t && (t = JSON.stringify(t)), localStorage.setItem(e, t)
            },
            get: function(e) {
                if (!localStorage[e]) return null;
                try {
                    return JSON.parse(localStorage[e])
                } catch (t) {
                    return localStorage[e]
                }
            },
            remove: function(e) {
                e ? localStorage.removeItem(e) : localStorage.clear()
            }
        }
    }(jQuery),
    function(e, t, i) {
        function n(t, i, n) {
            var r;
            if ("getComputedStyle" in e) {
                r = getComputedStyle.call(e, t, i);
                var s = e.console;
                if (null !== r) n && (r = r.getPropertyValue(n));
                else if (s) {
                    s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else r = !i && t.currentStyle && t.currentStyle[n];
            return r
        }

        function r(e, t) {
            return typeof e === t
        }

        function s() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : v ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function o(e, t) {
            return e - 1 === t || e === t || e + 1 === t
        }

        function l() {
            var e = t.body;
            return e || ((e = s(v ? "svg" : "body")).fake = !0), e
        }

        function d(e, t) {
            if ("object" == typeof e)
                for (var i in e) x(e, i) && d(i, e[i]);
            else {
                var n = (e = e.toLowerCase()).split("."),
                    r = h[n[0]];
                if (2 == n.length && (r = r[n[1]]), void 0 !== r) return h;
                t = "function" == typeof t ? t() : t, 1 == n.length ? h[n[0]] = t : (!h[n[0]] || h[n[0]] instanceof Boolean || (h[n[0]] = new Boolean(h[n[0]])), h[n[0]][n[1]] = t),
                    function(e) {
                        var t = g.className,
                            i = h._config.classPrefix || "";
                        if (v && (t = t.baseVal), h._config.enableJSClass) {
                            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                            t = t.replace(n, "$1" + i + "js$2")
                        }
                        h._config.enableClasses && (t += " " + i + e.join(" " + i), v ? g.className.baseVal = t : g.className = t)
                    }([(t && 0 != t ? "" : "no-") + n.join("-")]), h._trigger(e, t)
            }
            return h
        }

        function c(e, i, n, r) {
            var a, o, d, c, u = "modernizr",
                p = s("div"),
                h = l();
            if (parseInt(n, 10))
                for (; n--;)(d = s("div")).id = r ? r[n] : u + (n + 1), p.appendChild(d);
            return (a = s("style")).type = "text/css", a.id = "s" + u, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), p.id = u, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), o = i(p, e), h.fake ? (h.parentNode.removeChild(h), g.style.overflow = c, g.offsetHeight) : p.parentNode.removeChild(p), !!o
        }
        var u = [],
            p = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var i = this;
                    setTimeout(function() {
                        t(i[e])
                    }, 0)
                },
                addTest: function(e, t, i) {
                    u.push({
                        name: e,
                        fn: t,
                        options: i
                    })
                },
                addAsyncTest: function(e) {
                    u.push({
                        name: null,
                        fn: e
                    })
                }
            },
            h = function() {};
        h.prototype = p, (h = new h).addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode), h.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        var A = e.CSS;
        h.addTest("cssescape", !!A && "function" == typeof A.escape);
        var f = "CSS" in e && "supports" in e.CSS,
            m = "supportsCSS" in e;
        h.addTest("supports", f || m), h.addTest("target", function() {
            var t = e.document;
            if (!("querySelectorAll" in t)) return !1;
            try {
                return t.querySelectorAll(":target"), !0
            } catch (e) {
                return !1
            }
        });
        var g = t.documentElement;
        h.addTest("classlist", "classList" in g);
        var v = "svg" === g.nodeName.toLowerCase();
        h.addTest("audio", function() {
            var e = s("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return t
        }), h.addTest("video", function() {
            var e = s("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (e) {}
            return t
        }), h.addTest("webanimations", "animate" in s("div")), h.addTest("bgpositionshorthand", function() {
            var e = s("a").style,
                t = "right 10px bottom 10px";
            return e.cssText = "background-position: " + t + ";", e.backgroundPosition === t
        }), h.addTest("multiplebgs", function() {
            var e = s("a").style;
            return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
        }), h.addTest("csspointerevents", function() {
            var e = s("a").style;
            return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
        }), h.addTest("cssremunit", function() {
            var e = s("a").style;
            try {
                e.fontSize = "3rem"
            } catch (e) {}
            return /rem/.test(e.fontSize)
        }), h.addTest("rgba", function() {
            var e = s("a").style;
            return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
        }), h.addTest("preserve3d", function() {
            var t, i, n = e.CSS,
                r = !1;
            return !!(n && n.supports && n.supports("(transform-style: preserve-3d)")) || (t = s("a"), i = s("a"), t.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", i.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", t.appendChild(i), g.appendChild(t), r = i.getBoundingClientRect(), g.removeChild(t), r = r.width && r.width < 4)
        }), h.addTest("capture", "capture" in s("input")), h.addTest("fileinput", function() {
            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
            var e = s("input");
            return e.type = "file", !e.disabled
        }), h.addTest("formattribute", function() {
            var e, i, n = s("form"),
                r = s("input"),
                a = s("div"),
                o = "formtest" + (new Date).getTime();
            n.id = o;
            try {
                r.setAttribute("form", o)
            } catch (i) {
                t.createAttribute && ((e = t.createAttribute("form")).nodeValue = o, r.setAttributeNode(e))
            }
            return a.appendChild(n), a.appendChild(r), g.appendChild(a), i = n.elements && 1 === n.elements.length && r.form == n, a.parentNode.removeChild(a), i
        }), h.addTest("placeholder", "placeholder" in s("input") && "placeholder" in s("textarea")), h.addTest("sandbox", "sandbox" in s("iframe")), h.addTest("seamless", "seamless" in s("iframe")), h.addTest("srcdoc", "srcdoc" in s("iframe")), h.addTest("imgcrossorigin", "crossOrigin" in s("img")), h.addTest("inputformaction", !!("formAction" in s("input")), {
            aliases: ["input-formaction"]
        }), h.addTest("inputformenctype", !!("formEnctype" in s("input")), {
            aliases: ["input-formenctype"]
        }), h.addTest("inputformmethod", !!("formMethod" in s("input"))), h.addTest("inputformtarget", !!("formtarget" in s("input")), {
            aliases: ["input-formtarget"]
        }), h.addTest("videocrossorigin", "crossOrigin" in s("video"));
        var y = function() {
            var e = !("onblur" in t.documentElement);
            return function(t, n) {
                var r;
                return !!t && (n && "string" != typeof n || (n = s(n || "div")), !(r = (t = "on" + t) in n) && e && (n.setAttribute || (n = s("div")), n.setAttribute(t, ""), r = "function" == typeof n[t], n[t] !== i && (n[t] = i), n.removeAttribute(t)), r)
            }
        }();
        p.hasEvent = y, h.addTest("ambientlight", y("devicelight", e));
        var w = s("input"),
            T = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
            b = {};
        h.input = function(t) {
            for (var i = 0, n = t.length; n > i; i++) b[t[i]] = !!(t[i] in w);
            return b.list && (b.list = !(!s("datalist") || !e.HTMLDataListElement)), b
        }(T);
        var P = "search tel url email datetime date month week time datetime-local number range color".split(" "),
            C = {};
        h.inputtypes = function(e) {
            for (var n, r, s, a = e.length, o = 0; a > o; o++) w.setAttribute("type", n = e[o]), (s = "text" !== w.type && "style" in w) && (w.value = "1)", w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && w.style.WebkitAppearance !== i ? (g.appendChild(w), s = (r = t.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(n) || (s = /^(url|email)$/.test(n) ? w.checkValidity && !1 === w.checkValidity() : "1)" != w.value)), C[e[o]] = !!s;
            return C
        }(P), h.addTest("canvas", function() {
            var e = s("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }), h.addTest("canvasblending", function() {
            if (!1 === h.canvas) return !1;
            var e = s("canvas").getContext("2d");
            try {
                e.globalCompositeOperation = "screen"
            } catch (e) {}
            return "screen" === e.globalCompositeOperation
        });
        var S = p._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        p._prefixes = S, h.addTest("csscalc", function() {
            var e = "width:",
                t = s("a");
            return t.style.cssText = e + S.join("calc(10px);" + e), !!t.style.length
        }), h.addTest("cubicbezierrange", function() {
            var e = s("a");
            return e.style.cssText = S.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!e.style.length
        }), h.addTest("cssgradients", function() {
            for (var e, t = "background-image:", i = "", n = 0, r = S.length - 1; r > n; n++) e = 0 === n ? "to " : "", i += t + S[n] + "linear-gradient(" + e + "left top, #9f9, white);";
            h._config.usePrefixes && (i += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            var a = s("a").style;
            return a.cssText = i, ("" + a.backgroundImage).indexOf("gradient") > -1
        }), h.addTest("opacity", function() {
            var e = s("a").style;
            return e.cssText = S.join("opacity:.55;"), /^0.55$/.test(e.opacity)
        }), h.addTest("csspositionsticky", function() {
            var e = "position:",
                t = "sticky",
                i = s("a").style;
            return i.cssText = e + S.join(t + ";" + e).slice(0, -e.length), -1 !== i.position.indexOf(t)
        });
        var x, E = {
            elem: s("modernizr")
        };
        h._q.push(function() {
                delete E.elem
            }), h.addTest("csschunit", function() {
                var e, t = E.elem.style;
                try {
                    t.fontSize = "3ch", e = -1 !== t.fontSize.indexOf("ch")
                } catch (t) {
                    e = !1
                }
                return e
            }), h.addTest("cssexunit", function() {
                var e, t = E.elem.style;
                try {
                    t.fontSize = "3ex", e = -1 !== t.fontSize.indexOf("ex")
                } catch (t) {
                    e = !1
                }
                return e
            }), h.addTest("hsla", function() {
                var e = s("a").style;
                return e.cssText = "background-color:hsla(120,40%,100%,.5)", a(e.backgroundColor, "rgba") || a(e.backgroundColor, "hsla")
            }),
            function() {
                var e = {}.hasOwnProperty;
                x = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
                    return t in e && r(e.constructor.prototype[t], "undefined")
                } : function(t, i) {
                    return e.call(t, i)
                }
            }(), p._l = {}, p.on = function(e, t) {
                this._l[e] || (this._l[e] = []), this._l[e].push(t), h.hasOwnProperty(e) && setTimeout(function() {
                    h._trigger(e, h[e])
                }, 0)
            }, p._trigger = function(e, t) {
                if (this._l[e]) {
                    var i = this._l[e];
                    setTimeout(function() {
                        var e;
                        for (e = 0; e < i.length; e++)(0, i[e])(t)
                    }, 0), delete this._l[e]
                }
            }, h._q.push(function() {
                p.addTest = d
            }), d("htmlimports", "import" in s("link")), h.addAsyncTest(function() {
                function e(r) {
                    clearTimeout(t);
                    var s = r !== i && "loadeddata" === r.type;
                    n.removeEventListener("loadeddata", e, !1), d("audiopreload", s), n.parentNode.removeChild(n)
                }
                var t, n = s("audio"),
                    r = n.style;
                if (h.audio && "preload" in n) {
                    r.position = "absolute", r.height = 0, r.width = 0;
                    try {
                        if (h.audio.mp3) n.src = "data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";
                        else if (h.audio.m4a) n.src = "data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";
                        else if (h.audio.ogg) n.src = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";
                        else {
                            if (!h.audio.wav) return void d("audiopreload", !1);
                            n.src = "data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"
                        }
                    } catch (e) {
                        return void d("audiopreload", !1)
                    }
                    n.setAttribute("preload", "auto"), n.style.cssText = "display:none", g.appendChild(n), setTimeout(function() {
                        n.addEventListener("loadeddata", e, !1), t = setTimeout(e, 300)
                    }, 0)
                } else d("audiopreload", !1)
            }), h.addAsyncTest(function() {
                if (!h.canvas) return !1;
                var e = new Image,
                    t = s("canvas"),
                    i = t.getContext("2d");
                e.onload = function() {
                    d("apng", function() {
                        return void 0 !== t.getContext && (i.drawImage(e, 0, 0), 0 === i.getImageData(0, 0, 1, 1).data[3])
                    })
                }, e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
            }), h.addAsyncTest(function() {
                var e = new Image;
                e.onload = e.onerror = function() {
                    d("jpeg2000", 1 == e.width)
                }, e.src = "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="
            }), h.addAsyncTest(function() {
                var e = new Image;
                e.onload = e.onerror = function() {
                    d("jpegxr", 1 == e.width)
                }, e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
            }), h.addAsyncTest(function() {
                var e, t, i = s("img"),
                    n = "sizes" in i;
                !n && "srcset" in i ? ("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", t = function() {
                    d("sizes", 2 == i.width)
                }, i.onload = t, i.onerror = t, i.setAttribute("sizes", "9px"), i.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w", i.src = e) : d("sizes", n)
            }), h.addAsyncTest(function() {
                function e(s) {
                    r++, clearTimeout(t);
                    var o = s && "playing" === s.type || 0 !== a.currentTime;
                    return !o && n > r ? void(t = setTimeout(e, i)) : (a.removeEventListener("playing", e, !1), d("videoautoplay", o), void(a.parentNode && a.parentNode.removeChild(a)))
                }
                var t, i = 200,
                    n = 5,
                    r = 0,
                    a = s("video"),
                    o = a.style;
                if (h.video && "autoplay" in a) {
                    o.position = "absolute", o.height = 0, o.width = 0;
                    try {
                        if (h.video.ogg) a.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";
                        else {
                            if (!h.video.h264) return void d("videoautoplay", !1);
                            a.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
                        }
                    } catch (e) {
                        return void d("videoautoplay", !1)
                    }
                    a.setAttribute("autoplay", ""), a.style.cssText = "display:none", g.appendChild(a), setTimeout(function() {
                        a.addEventListener("playing", e, !1), t = setTimeout(e, i)
                    }, 0)
                } else d("videoautoplay", !1)
            });
        var _ = p.testStyles = c;
        h.addTest("checked", function() {
                return _("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
                    var t = s("input");
                    return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft
                })
            }), _("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
                var t, i = e.childNodes;
                t = i[0].offsetLeft < i[1].offsetLeft, h.addTest("displaytable", t, {
                    aliases: ["display-table"]
                })
            }, 2),
            function() {
                var e = navigator.userAgent,
                    t = e.match(/w(eb)?osbrowser/gi),
                    i = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
                return t || i
            }() ? h.addTest("fontface", !1) : _('@font-face {font-family:"font";src:url("https://")}', function(e, i) {
                var n = t.getElementById("smodernizr"),
                    r = n.sheet || n.styleSheet,
                    s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
                    a = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
                h.addTest("fontface", a)
            }), _('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
                h.addTest("generatedcontent", e.offsetHeight >= 6)
            }), h.addTest("hairline", function() {
                return _("#modernizr {border:.5px solid transparent}", function(e) {
                    return 1 === e.offsetHeight
                })
            }), h.addTest("cssinvalid", function() {
                return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function(e) {
                    var t = s("input");
                    return t.required = !0, e.appendChild(t), t.clientWidth > 10
                })
            }), _("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
                h.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
            }, 2), _("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
                for (var t = e.getElementsByTagName("div"), i = !0, n = 0; 5 > n; n++) i = i && t[n].offsetWidth === n % 2 + 1;
                h.addTest("nthchild", i)
            }, 5), _("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + S.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:10px}", function(e) {
                h.addTest("cssscrollbar", "scrollWidth" in e && 30 == e.scrollWidth)
            }), h.addTest("siblinggeneral", function() {
                return _("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function(e) {
                    return 200 == e.lastChild.offsetWidth
                }, 2)
            }), _("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(t) {
                var i = t.firstChild;
                i.innerHTML = "This is a text written in Arial", h.addTest("subpixelfont", !!e.getComputedStyle && "44px" !== e.getComputedStyle(i, null).getPropertyValue("width"))
            }, 1, ["subpixel"]), h.addTest("cssvalid", function() {
                return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(e) {
                    var t = s("input");
                    return e.appendChild(t), t.clientWidth > 10
                })
            }), _("#modernizr { height: 50vh; }", function(t) {
                var i = parseInt(e.innerHeight / 2, 10),
                    r = parseInt(n(t, null, "height"), 10);
                h.addTest("cssvhunit", r == i)
            }), _("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
                var t = e.childNodes[2],
                    i = e.childNodes[1],
                    r = e.childNodes[0],
                    s = parseInt((i.offsetWidth - i.clientWidth) / 2, 10),
                    a = r.clientWidth / 100,
                    l = r.clientHeight / 100,
                    d = parseInt(50 * Math.max(a, l), 10),
                    c = parseInt(n(t, null, "width"), 10);
                h.addTest("cssvmaxunit", o(d, c) || o(d, c - s))
            }, 3), _("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
                var t = e.childNodes[2],
                    i = e.childNodes[1],
                    r = e.childNodes[0],
                    s = parseInt((i.offsetWidth - i.clientWidth) / 2, 10),
                    a = r.clientWidth / 100,
                    l = r.clientHeight / 100,
                    d = parseInt(50 * Math.min(a, l), 10),
                    c = parseInt(n(t, null, "width"), 10);
                h.addTest("cssvminunit", o(d, c) || o(d, c - s))
            }, 3), _("#modernizr { width: 50vw; }", function(t) {
                var i = parseInt(e.innerWidth / 2, 10),
                    r = parseInt(n(t, null, "width"), 10);
                h.addTest("cssvwunit", r == i)
            }), h.addTest("formvalidation", function() {
                var t = s("form");
                if (!("checkValidity" in t && "addEventListener" in t)) return !1;
                if ("reportValidity" in t) return !0;
                var i, n = !1;
                return h.formvalidationapi = !0, t.addEventListener("submit", function(t) {
                    (!e.opera || e.operamini) && t.preventDefault(), t.stopPropagation()
                }, !1), t.innerHTML = '<input name="modTest" required="required" /><button></button>', _("#modernizr form{position:absolute;top:-99999em}", function(e) {
                    e.appendChild(t), (i = t.getElementsByTagName("input")[0]).addEventListener("invalid", function(e) {
                        n = !0, e.preventDefault(), e.stopPropagation()
                    }, !1), h.formvalidationmessage = !!i.validationMessage, t.getElementsByTagName("button")[0].click()
                }), n
            }), h.addTest("localizednumber", function() {
                if (!h.inputtypes.number) return !1;
                if (!h.formvalidation) return !1;
                var e, i = s("div"),
                    n = l(),
                    r = g.insertBefore(n, g.firstElementChild || g.firstChild);
                i.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
                var a = i.childNodes[0];
                r.appendChild(i), a.focus();
                try {
                    t.execCommand("SelectAll", !1), t.execCommand("InsertText", !1, "1,1")
                } catch (e) {}
                return e = "number" === a.type && 1.1 === a.valueAsNumber && a.checkValidity(), r.removeChild(i), n.fake && r.parentNode.removeChild(r), e
            });
        var k = function() {
            var t = e.matchMedia || e.msMatchMedia;
            return t ? function(e) {
                var i = t(e);
                return i && i.matches || !1
            } : function(t) {
                var i = !1;
                return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                    i = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), i
            }
        }();
        p.mq = k, h.addTest("mediaqueries", k("only all")), h.addTest("hovermq", k("(hover)")), h.addTest("pointermq", k("(pointer:coarse),(pointer:fine),(pointer:none)"));
        var D = "Moz O ms Webkit",
            I = p._config.usePrefixes ? D.toLowerCase().split(" ") : [];
        p._domPrefixes = I, h.addTest("fileinputdirectory", function() {
            var e = s("input"),
                t = "directory";
            if (e.type = "file", t in e) return !0;
            for (var i = 0, n = I.length; n > i; i++)
                if (I[i] + t in e) return !0;
            return !1
        });
        var Q = p._config.usePrefixes ? D.split(" ") : [];
        p._cssomPrefixes = Q;
        p.atRule = function(t) {
            var n, r = S.length,
                s = e.CSSRule;
            if (void 0 === s) return i;
            if (!t) return !1;
            if ((n = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in s) return "@" + t;
            for (var a = 0; r > a; a++) {
                var o = S[a];
                if (o.toUpperCase() + "_" + n in s) return "@-" + o.toLowerCase() + "-" + t
            }
            return !1
        };
        var Y = {
            style: E.elem.style
        };
        h._q.unshift(function() {
            delete Y.style
        })
    }(window, document),
    function(e, t, i, n) {
        function r(t, i) {
            this.settings = null, this.options = e.extend({}, r.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, i) {
                this._handlers[i] = e.proxy(this[i], this)
            }, this)), e.each(r.Plugins, e.proxy(function(e, t) {
                this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
            }, this)), e.each(r.Workers, e.proxy(function(t, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: e.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: t,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                e.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": n ? t : "",
                        "margin-right": n ? "" : t
                    };
                !i && this.$stage.children().css(r), e.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    s = [];
                for (e.items = {
                        merge: !1,
                        width: t
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, s[n] = r ? t * i : this._items[n].width();
                this._widths = s
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    i = this._items,
                    n = this.settings,
                    r = Math.max(2 * n.items, 4),
                    s = 2 * Math.ceil(i.length / 2),
                    a = n.loop && i.length ? n.rewind ? r : Math.max(r, s) : 0,
                    o = "",
                    l = "";
                for (a /= 2; a--;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l;
                this._clones = t, e(o).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < t;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * e);
                this._coordinates = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e = this.settings.stagePadding,
                    t = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                        "padding-left": e || "",
                        "padding-right": e || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                var t = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && e.items.merge)
                    for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css);
                else i && (e.css.width = e.items.width, n.css(e.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(e) {
                e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var e, t, i, n, r = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    a = this.coordinates(this.current()) + s,
                    o = a + this.width() * r,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + s * r, (this.op(e, "<=", a) && this.op(e, ">", o) || this.op(t, "<", a) && this.op(t, ">", o)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], r.prototype.initialize = function() {
            var t, i, n;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, n = this.$element.children(i).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
            this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.setup = function() {
            var t = this.viewport(),
                i = this.options.responsive,
                n = -1,
                r = null;
            i ? (e.each(i, function(e) {
                e <= t && e > n && (n = Number(e))
            }), "function" == typeof(r = e.extend({}, this.options, i[n])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = e.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function(t) {
            var i = this.trigger("prepare", {
                content: t
            });
            return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, r.prototype.update = function() {
            for (var t = 0, i = this._pipe.length, n = e.proxy(function(e) {
                    return this[e]
                }, this._invalidated), r = {}; t < i;)(this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(r), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function(e) {
            switch (e = e || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function() {
            t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, r.prototype.registerEventHandlers = function() {
            e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function(t) {
            var n = null;
            3 !== t.which && (e.support.transform ? n = {
                x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            } : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
                var n = this.difference(this._drag.pointer, this.pointer(t));
                e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, r.prototype.onDragMove = function(e) {
            var t = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(e)),
                s = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
        }, r.prototype.onDragEnd = function(t) {
            var n = this.difference(this._drag.pointer, this.pointer(t)),
                r = this._drag.stage.current,
                s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function(t, i) {
            var n = -1,
                r = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || e.each(s, e.proxy(function(e, a) {
                return "left" === i && t > a - 30 && t < a + 30 ? n = e : "right" === i && t > a - r - 30 && t < a - r + 30 ? n = e + 1 : this.op(t, "<", a) && this.op(t, ">", s[e + 1] || a - r) && (n = "left" === i ? e + 1 : e), -1 === n
            }, this)), this.settings.loop || (this.op(t, ">", s[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", s[this.maximum()]) && (n = t = this.maximum())), n
        }, r.prototype.animate = function(t) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, r.prototype.is = function(e) {
            return this._states.current[e] && this._states.current[e] > 0
        }, r.prototype.current = function(e) {
            if (void 0 === e) return this._current;
            if (0 !== this._items.length) {
                if (e = this.normalize(e), this._current !== e) {
                    var t = this.trigger("change", {
                        property: {
                            name: "position",
                            value: e
                        }
                    });
                    void 0 !== t.data && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
                }
                return this._current
            }
        }, r.prototype.invalidate = function(t) {
            return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
                return t
            })
        }, r.prototype.reset = function(e) {
            void 0 !== (e = this.normalize(e)) && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function(e, t) {
            var i = this._items.length,
                n = t ? 0 : this._clones.length;
            return !this.isNumeric(e) || i < 1 ? e = void 0 : (e < 0 || e >= i + n) && (e = ((e - n / 2) % i + i) % i + n / 2), e
        }, r.prototype.relative = function(e) {
            return e -= this._clones.length / 2, this.normalize(e, !0)
        }, r.prototype.maximum = function(e) {
            var t, i, n, r = this.settings,
                s = this._coordinates.length;
            if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                for (t = this._items.length, i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n););
                s = t + 1
            } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
            return e && (s -= this._clones.length / 2), Math.max(s, 0)
        }, r.prototype.minimum = function(e) {
            return e ? 0 : this._clones.length / 2
        }, r.prototype.items = function(e) {
            return void 0 === e ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
        }, r.prototype.mergers = function(e) {
            return void 0 === e ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
        }, r.prototype.clones = function(t) {
            var i = this._clones.length / 2,
                n = i + this._items.length,
                r = function(e) {
                    return e % 2 == 0 ? n + e / 2 : i - (e + 1) / 2
                };
            return void 0 === t ? e.map(this._clones, function(e, t) {
                return r(t)
            }) : e.map(this._clones, function(e, i) {
                return e === t ? r(i) : null
            })
        }, r.prototype.speed = function(e) {
            return void 0 !== e && (this._speed = e), this._speed
        }, r.prototype.coordinates = function(t) {
            var i, n = 1,
                r = t - 1;
            return void 0 === t ? e.map(this._coordinates, e.proxy(function(e, t) {
                return this.coordinates(t)
            }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, r = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * n) : i = this._coordinates[r] || 0, i = Math.ceil(i))
        }, r.prototype.duration = function(e, t, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, r.prototype.to = function(e, t) {
            var i = this.current(),
                n = null,
                r = e - this.relative(i),
                s = (r > 0) - (r < 0),
                a = this._items.length,
                o = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > a / 2 && (r += -1 * s * a), (n = (((e = i + r) - o) % a + a) % a + o) !== e && n - r <= l && n - r > 0 && (i = n - r, e = n, this.reset(i))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(o, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.$element.is(":visible") && this.update()
        }, r.prototype.next = function(e) {
            e = e || !1, this.to(this.relative(this.current()) + 1, e)
        }, r.prototype.prev = function(e) {
            e = e || !1, this.to(this.relative(this.current()) - 1, e)
        }, r.prototype.onTransitionEnd = function(e) {
            if (void 0 !== e && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, r.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each(e.proxy(function(e, t) {
                t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function(t, i) {
            var n = this.relative(this._current);
            i = void 0 === i ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
                content: t,
                position: i
            }), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: i
            })
        }, r.prototype.remove = function(e) {
            void 0 !== (e = this.normalize(e, !0)) && (this.trigger("remove", {
                content: this._items[e],
                position: e
            }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: e
            }))
        }, r.prototype.preloadAutoWidthImages = function(t) {
            t.each(e.proxy(function(t, i) {
                this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function(e) {
                    i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, r.prototype.destroy = function() {
            for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function(e, t, i) {
            var n = this.settings.rtl;
            switch (t) {
                case "<":
                    return n ? e > i : e < i;
                case ">":
                    return n ? e < i : e > i;
                case ">=":
                    return n ? e <= i : e >= i;
                case "<=":
                    return n ? e >= i : e <= i
            }
        }, r.prototype.on = function(e, t, i, n) {
            e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
        }, r.prototype.off = function(e, t, i, n) {
            e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
        }, r.prototype.trigger = function(t, i, n, s, a) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = e.camelCase(e.grep(["on", t, n], function(e) {
                    return e
                }).join("-").toLowerCase()),
                d = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({
                    relatedTarget: this
                }, o, i));
            return this._supress[t] || (e.each(this._plugins, function(e, t) {
                t.onTrigger && t.onTrigger(d)
            }), this.register({
                type: r.Type.Event,
                name: t
            }), this.$element.trigger(d), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, d)), d
        }, r.prototype.enter = function(t) {
            e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
                void 0 === this._states.current[t] && (this._states.current[t] = 0), this._states.current[t]++
            }, this))
        }, r.prototype.leave = function(t) {
            e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
                this._states.current[t]--
            }, this))
        }, r.prototype.register = function(t) {
            if (t.type === r.Type.Event) {
                if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                    var i = e.event.special[t.name]._default;
                    e.event.special[t.name]._default = function(e) {
                        return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, e.event.special[t.name].owl = !0
                }
            } else t.type === r.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(i, n) {
                return e.inArray(i, this._states.tags[t.name]) === n
            }, this)))
        }, r.prototype.suppress = function(t) {
            e.each(t, e.proxy(function(e, t) {
                this._supress[t] = !0
            }, this))
        }, r.prototype.release = function(t) {
            e.each(t, e.proxy(function(e, t) {
                delete this._supress[t]
            }, this))
        }, r.prototype.pointer = function(e) {
            var i = {
                x: null,
                y: null
            };
            return (e = (e = e.originalEvent || e || t.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
        }, r.prototype.isNumeric = function(e) {
            return !isNaN(parseFloat(e))
        }, r.prototype.difference = function(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }, e.fn.owlCarousel = function(t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = e(this),
                    s = n.data("owl.carousel");
                s || (s = new r(this, "object" == typeof t && t), n.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                    s.register({
                        type: r.Type.Event,
                        name: i
                    }), s.$element.on(i + ".owl.carousel.core", e.proxy(function(e) {
                        e.namespace && e.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, s))
                })), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, i)
            })
        }, e.fn.owlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var e, i;
            for (e in t.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && -1 * n || 0, s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + r, a = this._core.clones().length, o = e.proxy(function(e, t) {
                                this.load(t)
                            }, this); r++ < n;) this.load(a / 2 + this._core.relative(s)), a && e.each(this._core.clones(this._core.relative(s)), o), s++
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            lazyLoad: !1
        }, r.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                r = n && n.find(".owl-lazy");
            !r || e.inArray(n.get(0), this._loaded) > -1 || (r.each(e.proxy(function(i, n) {
                var r, s = e(n),
                    a = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", {
                    element: s,
                    url: a
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function() {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: a
                    }, "lazy")
                }, this)).attr("src", a) : ((r = new Image).onload = e.proxy(function() {
                    s.css({
                        "background-image": 'url("' + a + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: a
                    }, "lazy")
                }, this), r.src = a)
            }, this)), this._loaded.push(n.get(0)))
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
                }, this),
                "loaded.owl.lazy": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, r.prototype.update = function() {
            var t, i = this._core._current,
                n = i + this._core.settings.items,
                r = this._core.$stage.children().toArray().slice(i, n),
                s = [];
            e.each(r, function(t, i) {
                s.push(e(i).height())
            }), t = Math.max.apply(null, s), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
                }, this),
                "refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" === e.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": e.proxy(function(t) {
                    if (t.namespace) {
                        var i = e(t.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
                    }
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
                this.play(e)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, r.prototype.fetch = function(e, t) {
            var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                r = e.attr("data-width") || this._core.settings.videoWidth,
                s = e.attr("data-height") || this._core.settings.videoHeight,
                a = e.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if ((n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[a] = {
                type: i,
                id: n,
                width: r,
                height: s
            }, t.attr("data-video", a), this.thumbnail(e, this._videos[a])
        }, r.prototype.thumbnail = function(t, i) {
            var n, r, s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = t.find("img"),
                o = "src",
                l = "",
                d = this._core.settings,
                c = function(e) {
                    '<div class="owl-video-play-icon"></div>',
                    n = d.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + o + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>',
                    t.after(n),
                    t.after('<div class="owl-video-play-icon"></div>')
                };
            if (t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (o = "data-src", l = "owl-lazy"), a.length) return c(a.attr(o)), a.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(r)) : "vimeo" === i.type ? e.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(e) {
                    r = e[0].thumbnail_large, c(r)
                }
            }) : "vzaar" === i.type && e.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(e) {
                    r = e.framegrab_url, c(r)
                }
            })
        }, r.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function(t) {
            var i, n = e(t.target).closest("." + this._core.settings.itemClass),
                r = this._videos[n.attr("data-video")],
                s = r.width || "100%",
                a = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === r.type ? i = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&rel=0&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function() {
            var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return t && e(t).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
                    e.namespace && (this.swapping = "translated" == e.type)
                }, this),
                "translate.owl.carousel": e.proxy(function(e) {
                    e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, r.prototype.swap = function() {
            if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
                this.core.speed(0);
                var t, i = e.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    a = this.core.settings.animateOut;
                this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(a)), s && r.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
            }
        }, r.prototype.clear = function(t) {
            e(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = function(t) {
            this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": e.proxy(function(e, t, i) {
                    e.namespace && this.play(t, i)
                }, this),
                "stop.owl.autoplay": e.proxy(function(e) {
                    e.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": e.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype.play = function(e, t) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, r.prototype._getNextTimeout = function(n, r) {
            return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, r.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, r.prototype.stop = function() {
            this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, r.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, r.prototype.destroy = function() {
            var e, t;
            for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        "use strict";
        var r = function(t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": e.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
                }, this),
                "changed.owl.carousel": e.proxy(function(e) {
                    e.namespace && "position" == e.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": e.proxy(function(e) {
                    e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": e.proxy(function(e) {
                    e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "custom-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function() {
            var t, i = this._core.settings;
            for (t in this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(t) {
                    var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                    t.preventDefault(), this.to(n, i.dotsSpeed)
                }, this)), this._overrides) this._core[t] = e.proxy(this[t], this)
        }, r.prototype.destroy = function() {
            var e, t, i, n;
            for (e in this._handlers) this.$element.off(e, this._handlers[e]);
            for (t in this._controls) this._controls[t].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, r.prototype.update = function() {
            var e, t, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                r = this._core.maximum(!0),
                s = this._core.settings,
                a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
            if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                for (this._pages = [], e = i, t = 0, 0; e < n; e++) {
                    if (t >= a || 0 === t) {
                        if (this._pages.push({
                                start: Math.min(r, e - i),
                                end: e - i + a - 1
                            }), Math.min(r, e - i) === r) break;
                        t = 0, 0
                    }
                    t += this._core.mergers(this._core.relative(e))
                }
        }, r.prototype.draw = function() {
            var t, i = this._core.settings,
                n = this._core.items().length <= i.items,
                r = this._core.relative(this._core.current()),
                s = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function(t) {
            var i = this._core.settings;
            t.page = {
                index: e.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, r.prototype.current = function() {
            var t = this._core.relative(this._core.current());
            return e.grep(this._pages, e.proxy(function(e, i) {
                return e.start <= t && e.end >= t
            }, this)).pop()
        }, r.prototype.getPosition = function(t) {
            var i, n, r = this._core.settings;
            return "page" == r.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += r.slideBy : i -= r.slideBy), i
        }, r.prototype.next = function(t) {
            e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, r.prototype.prev = function(t) {
            e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, r.prototype.to = function(t, i, n) {
            var r;
            !n && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
        }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        "use strict";
        var r = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": e.proxy(function(t) {
                    if (t.namespace) {
                        var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = t.content
                    }
                }, this),
                "changed.owl.carousel": e.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            r = e.map(this._hashes, function(e, t) {
                                return e === n ? t : null
                            }).join();
                        if (!r || t.location.hash.slice(1) === r) return;
                        t.location.hash = r
                    }
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
                var i = t.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    r = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }, this))
        };
        r.Defaults = {
            URLhashListener: !1
        }, r.prototype.destroy = function() {
            var i, n;
            for (i in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document),
    function(e, t, i, n) {
        var r = e("<support>").get(0).style,
            s = "Webkit Moz O ms".split(" "),
            a = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            o = function() {
                return !!c("transform")
            },
            l = function() {
                return !!c("perspective")
            },
            d = function() {
                return !!c("animation")
            };

        function c(t, i) {
            var a = !1,
                o = t.charAt(0).toUpperCase() + t.slice(1);
            return e.each((t + " " + s.join(o + " ") + o).split(" "), function(e, t) {
                if (r[t] !== n) return a = !i || t, !1
            }), a
        }

        function u(e) {
            return c(e, !0)
        }(function() {
            return !!c("transition")
        })() && (e.support.transition = new String(u("transition")), e.support.transition.end = a.transition.end[e.support.transition]), d() && (e.support.animation = new String(u("animation")), e.support.animation.end = a.animation.end[e.support.animation]), o() && (e.support.transform = new String(u("transform")), e.support.transform3d = l())
    }(window.Zepto || window.jQuery, window, document),
    function($, window, undefined) {
        "use strict";
        $.fn.tabslet = function(options) {
            var defaults = {
                    mouseevent: "click",
                    activeclass: "active-tab",
                    attribute: "href",
                    animation: !1,
                    autorotate: !1,
                    deeplinking: !1,
                    pauseonhover: !0,
                    delay: 2e3,
                    active: 1,
                    container: !1,
                    controls: {
                        prev: ".prev",
                        next: ".next"
                    }
                },
                options = $.extend(defaults, options);
            return this.each(function() {
                function deep_link() {
                    var e = [];
                    elements.find("a").each(function() {
                        e.push($(this).attr($this.opts.attribute))
                    });
                    var t = $.inArray(location.hash, e);
                    return t > -1 ? t + 1 : $this.data("active") || options.active
                }
                var $this = $(this),
                    _cache_li = [],
                    _cache_div = [],
                    _container = options.container ? $(options.container) : $this,
                    _tabs = _container.find("> div");
                _tabs.each(function() {
                    _cache_div.push($(this).css("display"))
                });
                var elements = $this.find("> ul > li"),
                    i = options.active - 1;
                if (!$this.data("tabslet-init")) {
                    $this.data("tabslet-init", !0), $this.opts = [], $.map(["mouseevent", "activeclass", "attribute", "animation", "autorotate", "deeplinking", "pauseonhover", "delay", "container"], function(e) {
                        $this.opts[e] = $this.data(e) || options[e]
                    }), $this.opts.active = $this.opts.deeplinking ? deep_link() : $this.data("active") || options.active, _tabs.hide(), $this.opts.active && (_tabs.eq($this.opts.active - 1).show(), elements.eq($this.opts.active - 1).addClass(options.activeclass));
                    var fn = eval(function(e, t) {
                            var n = t ? elements.find("a[" + $this.opts.attribute + '="' + t + '"]').parent() : $(this);
                            n.trigger("_before"), elements.removeClass(options.activeclass), n.addClass(options.activeclass), _tabs.hide(), i = elements.index(n);
                            var r = t || n.find("a").attr($this.opts.attribute);
                            return $this.opts.deeplinking && (location.hash = r), $this.opts.animation ? _container.find(r).animate({
                                opacity: "show"
                            }, "slow", function() {
                                n.trigger("_after")
                            }) : (_container.find(r).show(), n.trigger("_after")), !1
                        }),
                        init = eval("elements." + $this.opts.mouseevent + "(fn)"),
                        t, forward = function() {
                            i = ++i % elements.length, "hover" == $this.opts.mouseevent ? elements.eq(i).trigger("mouseover") : elements.eq(i).click(), $this.opts.autorotate && (clearTimeout(t), t = setTimeout(forward, $this.opts.delay), $this.mouseover(function() {
                                $this.opts.pauseonhover && clearTimeout(t)
                            }))
                        };
                    $this.opts.autorotate && (t = setTimeout(forward, $this.opts.delay), $this.hover(function() {
                        $this.opts.pauseonhover && clearTimeout(t)
                    }, function() {
                        t = setTimeout(forward, $this.opts.delay)
                    }), $this.opts.pauseonhover && $this.on("mouseleave", function() {
                        clearTimeout(t), t = setTimeout(forward, $this.opts.delay)
                    }));
                    var move = function(e) {
                        "forward" == e && (i = ++i % elements.length), "backward" == e && (i = --i % elements.length), elements.eq(i).click()
                    };
                    $this.find(options.controls.next).click(function() {
                        move("forward")
                    }), $this.find(options.controls.prev).click(function() {
                        move("backward")
                    }), $this.on("show", function(e, t) {
                        fn(e, t)
                    }), $this.on("next", function() {
                        move("forward")
                    }), $this.on("prev", function() {
                        move("backward")
                    }), $this.on("destroy", function() {
                        $(this).removeData().find("> ul li").each(function() {
                            $(this).removeClass(options.activeclass)
                        }), _tabs.each(function(e) {
                            $(this).removeAttr("style").css("display", _cache_div[e])
                        })
                    })
                }
            })
        }, $(document).ready(function() {
            $('[data-toggle="tabslet"]').tabslet()
        })
    }(jQuery),
    function() {
        var e = [].indexOf || function(e) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            t = [].slice;
        ! function(e, t) {
            "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
                return t(i, e)
            }) : t(e.jQuery, e)
        }(this, function(i, n) {
            var r, s, a, o, l, d, c, u, p, h, A, f, m, g, v, y;
            return r = i(n), u = e.call(n, "ontouchstart") >= 0, o = {
                horizontal: {},
                vertical: {}
            }, l = 1, c = {}, d = "waypoints-context-id", A = "resize.waypoints", f = "scroll.waypoints", m = 1, g = "waypoints-waypoint-ids", v = "waypoint", y = "waypoints", s = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, e.data(d, this.id), c[this.id] = this, e.bind(f, function() {
                        var e;
                        if (!t.didScroll && !u) return t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, n.setTimeout(e, i[y].settings.scrollThrottle)
                    }), e.bind(A, function() {
                        var e;
                        if (!t.didResize) return t.didResize = !0, e = function() {
                            return i[y]("refresh"), t.didResize = !1
                        }, n.setTimeout(e, i[y].settings.resizeThrottle)
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, t = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !u || e.vertical.oldScroll && e.vertical.newScroll || i[y]("refresh"), i.each(e, function(e, n) {
                        var r, s, a;
                        return a = [], s = n.newScroll > n.oldScroll, r = s ? n.forward : n.backward, i.each(t.waypoints[e], function(e, t) {
                            var i, r;
                            return n.oldScroll < (i = t.offset) && i <= n.newScroll ? a.push(t) : n.newScroll < (r = t.offset) && r <= n.oldScroll ? a.push(t) : void 0
                        }), a.sort(function(e, t) {
                            return e.offset - t.offset
                        }), s || a.reverse(), i.each(a, function(e, t) {
                            if (t.options.continuous || e === a.length - 1) return t.trigger([r])
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, n, r = this;
                    return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: n ? 0 : t.left,
                            contextScroll: n ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: n ? 0 : t.top,
                            contextScroll: n ? 0 : this.oldScroll.y,
                            contextDimension: n ? i[y]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(e, function(e, t) {
                        return i.each(r.waypoints[e], function(e, n) {
                            var r, s, a, o, l;
                            if (r = n.options.offset, a = n.offset, s = i.isWindow(n.element) ? 0 : n.$element.offset()[t.offsetProp], i.isFunction(r) ? r = r.apply(n.element) : "string" == typeof r && (r = parseFloat(r), n.options.offset.indexOf("%") > -1 && (r = Math.ceil(t.contextDimension * r / 100))), n.offset = s - t.contextOffset + t.contextScroll - r, (!n.options.onlyOnScroll || null == a) && n.enabled) return null !== a && a < (o = t.oldScroll) && o <= n.offset ? n.trigger([t.backward]) : null !== a && a > (l = t.oldScroll) && l >= n.offset ? n.trigger([t.forward]) : null === a && t.oldScroll >= n.offset ? n.trigger([t.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([A, f].join(" ")), delete c[this.id]
                }, e
            }(), a = function() {
                function e(e, t, n) {
                    var r, s;
                    "bottom-in-view" === (n = i.extend({}, i.fn[v].defaults, n)).offset && (n.offset = function() {
                        var e;
                        return e = i[y]("viewportHeight"), i.isWindow(t.element) || (e = t.$element.height()), e - i(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, o[this.axis][this.id] = this, (r = null != (s = e.data(g)) ? s : []).push(this.id), e.data(g, r)
                }
                return e.prototype.trigger = function(e) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, n;
                    return (n = i(e).data(g)) ? (t = i.extend({}, o.horizontal, o.vertical), i.map(n, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), h = {
                init: function(e, t) {
                    return null == t && (t = {}), null == t.handler && (t.handler = e), this.each(function() {
                        var e, n, r, o;
                        return e = i(this), r = null != (o = t.context) ? o : i.fn[v].defaults.context, i.isWindow(r) || (r = e.closest(r)), r = i(r), (n = c[r.data(d)]) || (n = new s(r)), new a(e, n, t)
                    }), i[y]("refresh"), this
                },
                disable: function() {
                    return h._invoke(this, "disable")
                },
                enable: function() {
                    return h._invoke(this, "enable")
                },
                destroy: function() {
                    return h._invoke(this, "destroy")
                },
                prev: function(e, t) {
                    return h._traverse.call(this, e, t, function(e, t, i) {
                        if (t > 0) return e.push(i[t - 1])
                    })
                },
                next: function(e, t) {
                    return h._traverse.call(this, e, t, function(e, t, i) {
                        if (t < i.length - 1) return e.push(i[t + 1])
                    })
                },
                _traverse: function(e, t, r) {
                    var s, a;
                    return null == e && (e = "vertical"), null == t && (t = n), a = p.aggregate(t), s = [], this.each(function() {
                        var t;
                        return t = i.inArray(this, a[e]), r(s, t, a[e])
                    }), this.pushStack(s)
                },
                _invoke: function(e, t) {
                    return e.each(function() {
                        var e;
                        return e = a.getWaypointsByElement(this), i.each(e, function(e, i) {
                            return i[t](), !0
                        })
                    }), this
                }
            }, i.fn[v] = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[n] ? h[n].apply(this, e) : i.isFunction(n) ? h.init.apply(this, arguments) : i.isPlainObject(n) ? h.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
            }, i.fn[v].defaults = {
                context: n,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, p = {
                refresh: function() {
                    return i.each(c, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = n.innerHeight) ? e : r.height()
                },
                aggregate: function(e) {
                    var t, n, r;
                    return t = o, e && (t = null != (r = c[i(e).data(d)]) ? r.waypoints : void 0), t ? (n = {
                        horizontal: [],
                        vertical: []
                    }, i.each(n, function(e, r) {
                        return i.each(t[e], function(e, t) {
                            return r.push(t)
                        }), r.sort(function(e, t) {
                            return e.offset - t.offset
                        }), n[e] = i.map(r, function(e) {
                            return e.element
                        }), n[e] = i.unique(n[e])
                    }), n) : []
                },
                above: function(e) {
                    return null == e && (e = n), p._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = n), p._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = n), p._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = n), p._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return p._invoke("enable")
                },
                disable: function() {
                    return p._invoke("disable")
                },
                destroy: function() {
                    return p._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return h[e] = t
                },
                _invoke: function(e) {
                    var t;
                    return t = i.extend({}, o.vertical, o.horizontal), i.each(t, function(t, i) {
                        return i[e](), !0
                    })
                },
                _filter: function(e, t, n) {
                    var r, s;
                    return (r = c[i(e).data(d)]) ? (s = [], i.each(r.waypoints[t], function(e, t) {
                        if (n(r, t)) return s.push(t)
                    }), s.sort(function(e, t) {
                        return e.offset - t.offset
                    }), i.map(s, function(e) {
                        return e.element
                    })) : []
                }
            }, i[y] = function() {
                var e, i;
                return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[i] ? p[i].apply(null, e) : p.aggregate.call(null, i)
            }, i[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, r.load(function() {
                return i[y]("refresh")
            })
        })
    }.call(this),
    function() {
        var e, t, i, n, r, s = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            a = [].indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var i, n;
                for (i in t) n = t[i], null == e[i] && (e[i] = n);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.createEvent = function(e, t, i, n) {
                var r;
                return null == t && (t = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, n) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e, r
            }, e.prototype.emitEvent = function(e, t) {
                return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
            }, e.prototype.addEvent = function(e, t, i) {
                return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
            }, e.prototype.removeEvent = function(e, t, i) {
                return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, i, n, r;
                for (t = i = 0, n = (r = this.keys).length; n > i; t = ++i)
                    if (r[t] === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var i, n, r, s;
                for (i = n = 0, r = (s = this.keys).length; r > n; i = ++n)
                    if (s[i] === e) return void(this.values[i] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), n = this.getComputedStyle || function(e, t) {
            return this.getPropertyValue = function(t) {
                var i;
                return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
                    return t.toUpperCase()
                }), (null != (i = e.currentStyle) ? i[t] : void 0) || null
            }, this
        }, r = /(\-([a-z]){1})/g, this.WOW = function() {
            function r(e) {
                null == e && (e = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return r.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, r.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, r.prototype.start = function() {
                var t, i, n, r;
                if (this.stopped = !1, this.boxes = function() {
                        var e, i, n, r;
                        for (r = [], e = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > e; e++) t = n[e], r.push(t);
                        return r
                    }.call(this), this.all = function() {
                        var e, i, n, r;
                        for (r = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], r.push(t);
                        return r
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (i = 0, n = (r = this.boxes).length; n > i; i++) t = r[i], this.applyStyle(t, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                    return function(t) {
                        var i, n, r, s, a;
                        for (a = [], i = 0, n = t.length; n > i; i++) s = t[i], a.push(function() {
                            var e, t, i, n;
                            for (n = [], e = 0, t = (i = s.addedNodes || []).length; t > e; e++) r = i[e], n.push(this.doSync(r));
                            return n
                        }.call(e));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, r.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, r.prototype.sync = function(t) {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, r.prototype.doSync = function(e) {
                var t, i, n, r, s;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (s = [], i = 0, n = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) t = r[i], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                    return s
                }
            }, r.prototype.show = function(e) {
                return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
            }, r.prototype.applyStyle = function(e, t) {
                var i, n, r, s;
                return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate((s = this, function() {
                    return s.customStyle(e, t, n, i, r)
                }))
            }, r.prototype.animate = "requestAnimationFrame" in window ? function(e) {
                return window.requestAnimationFrame(e)
            } : function(e) {
                return e()
            }, r.prototype.resetStyle = function() {
                var e, t, i, n, r;
                for (r = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], r.push(e.style.visibility = "visible");
                return r
            }, r.prototype.resetAnimation = function(e) {
                var t;
                return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0
            }, r.prototype.customStyle = function(e, t, i, n, r) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                    animationDuration: i
                }), n && this.vendorSet(e.style, {
                    animationDelay: n
                }), r && this.vendorSet(e.style, {
                    animationIterationCount: r
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
                var i, n, r, s;
                for (i in n = [], t) r = t[i], e["" + i] = r, n.push(function() {
                    var t, n, a, o;
                    for (o = [], t = 0, n = (a = this.vendors).length; n > t; t++) s = a[t], o.push(e["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = r);
                    return o
                }.call(this));
                return n
            }, r.prototype.vendorCSS = function(e, t) {
                var i, r, s, a, o, l;
                for (a = (o = n(e)).getPropertyCSSValue(t), i = 0, r = (s = this.vendors).length; r > i; i++) l = s[i], a = a || o.getPropertyCSSValue("-" + l + "-" + t);
                return a
            }, r.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (i) {
                    t = n(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, r.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, r.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, r.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, r.prototype.scrollCallback = function() {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var t, i, n, r;
                    for (r = [], t = 0, i = (n = this.boxes).length; i > t; t++)(e = n[t]) && (this.isVisible(e) ? this.show(e) : r.push(e));
                    return r
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, r.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, r.prototype.isVisible = function(e) {
                var t, i, n, r, s;
                return i = e.getAttribute("data-wow-offset") || this.config.offset, r = (s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, t = (n = this.offsetTop(e)) + e.clientHeight, r >= n && t >= s
            }, r.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, r.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, r
        }()
    }.call(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(e) {
        var t = function(e, t) {
                var i, n = document.createElement("canvas");
                e.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var r = n.getContext("2d");
                n.width = n.height = t.size;
                var s = 1;
                window.devicePixelRatio > 1 && (s = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * s, r.scale(s, s)), r.translate(t.size / 2, t.size / 2), r.rotate((t.rotate / 180 - .5) * Math.PI);
                var a = (t.size - t.lineWidth) / 2;
                t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var o = function(e, t, i) {
                        var n = 0 >= (i = Math.min(Math.max(-1, i || 0), 1));
                        r.beginPath(), r.arc(0, 0, a, 0, 2 * Math.PI * i, n), r.strokeStyle = e, r.lineWidth = t, r.stroke()
                    },
                    l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    },
                    d = function() {
                        t.scaleColor && function() {
                            var e, i;
                            r.lineWidth = 1, r.fillStyle = t.scaleColor, r.save();
                            for (var n = 24; n > 0; --n) n % 6 == 0 ? (i = t.scaleLength, e = 0) : (i = .6 * t.scaleLength, e = t.scaleLength - i), r.fillRect(-t.size / 2 + e, 0, i, 1), r.rotate(Math.PI / 12);
                            r.restore()
                        }(), t.trackColor && o(t.trackColor, t.trackWidth || t.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return n
                }, this.getCtx = function() {
                    return r
                }, this.clear = function() {
                    r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
                }, this.draw = function(e) {
                    var n;
                    t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? i ? r.putImageData(i, 0, 0) : (d(), i = r.getImageData(0, 0, t.size * s, t.size * s)) : (this.clear(), d()) : this.clear(), r.lineCap = t.lineCap, n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, o(n, t.lineWidth, e / 100)
                }.bind(this), this.animate = function(e, i) {
                    var n = Date.now();
                    t.onStart(e, i);
                    var r = function() {
                        var s = Math.min(Date.now() - n, t.animate.duration),
                            a = t.easing(this, s, e, i - e, t.animate.duration);
                        this.draw(a), t.onStep(e, i, a), s >= t.animate.duration ? t.onStop(e, i) : l(r)
                    }.bind(this);
                    l(r)
                }.bind(this)
            },
            i = function(e, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(e, t, i, n, r) {
                        return 1 > (t /= r / 2) ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
                    },
                    onStart: function(e, t) {},
                    onStep: function(e, t, i) {},
                    onStop: function(e, t) {}
                };
                if (void 0 !== t) n.renderer = t;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var r = {},
                    s = 0,
                    a = function() {
                        for (var t in this.el = e, this.options = r, n) n.hasOwnProperty(t) && (r[t] = i && void 0 !== i[t] ? i[t] : n[t], "function" == typeof r[t] && (r[t] = r[t].bind(this)));
                        "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? r.easing = jQuery.easing[r.easing] : r.easing = n.easing, "number" == typeof r.animate && (r.animate = {
                            duration: r.animate,
                            enabled: !0
                        }), "boolean" != typeof r.animate || r.animate || (r.animate = {
                            duration: 1e3,
                            enabled: r.animate
                        }), this.renderer = new r.renderer(e, r), this.renderer.draw(s), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(e) {
                    return e = parseFloat(e), r.animate.enabled ? this.renderer.animate(s, e) : this.renderer.draw(e), s = e, this
                }.bind(this), this.disableAnimation = function() {
                    return r.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return r.animate.enabled = !0, this
                }, a()
            };
        e.fn.easyPieChart = function(t) {
            return this.each(function() {
                var n;
                e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new i(this, n)))
            })
        }
    }),
    function(e) {
        e.fn.appear = function(t, i) {
            var n = e.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function() {
                var i = e(this);
                if (i.appeared = !1, t) {
                    var r = e(window),
                        s = function() {
                            if (i.is(":visible")) {
                                var e = r.scrollLeft(),
                                    t = r.scrollTop(),
                                    s = i.offset(),
                                    a = s.left,
                                    o = s.top,
                                    l = n.accX,
                                    d = n.accY,
                                    c = i.height(),
                                    u = r.height(),
                                    p = i.width(),
                                    h = r.width();
                                o + c + d >= t && o <= t + u + d && a + p + l >= e && a <= e + h + l ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                            } else i.appeared = !1
                        },
                        a = function() {
                            if (i.appeared = !0, n.one) {
                                r.unbind("scroll", s);
                                var a = e.inArray(s, e.fn.appear.checks);
                                a >= 0 && e.fn.appear.checks.splice(a, 1)
                            }
                            t.apply(this, arguments)
                        };
                    n.one ? i.one("appear", n.data, a) : i.bind("appear", n.data, a), r.scroll(s), e.fn.appear.checks.push(s), s()
                } else i.trigger("appear", n.data)
            })
        }, e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var t = e.fn.appear.checks.length;
                if (t > 0)
                    for (; t--;) e.fn.appear.checks[t]()
            },
            run: function() {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, i) {
            var n = e.fn[i];
            n && (e.fn[i] = function() {
                var t = n.apply(this, arguments);
                return e.fn.appear.run(), t
            })
        })
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, i) {
            return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i
        } : e(jQuery)
    }(function(e) {
        function t(e) {
            return 9 === e ? -1 !== navigator.appVersion.indexOf("MSIE 9.") : (userAgent = navigator.userAgent, userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1)
        }

        function i(e) {
            return parseInt(String(e).split(/%|px|em|cm|vh|vw/)[0])
        }

        function n(t) {
            var i = t.replace(/^.*#/, ""),
                n = e(t);
            n.attr("id", i + "-tmp"), window.location.hash = t, n.attr("id", i)
        }
        var r = e(window),
            s = e(document),
            a = "iziModal",
            o = {
                CLOSING: "closing",
                CLOSED: "closed",
                OPENING: "opening",
                OPENED: "opened",
                DESTROYED: "destroyed"
            },
            l = function() {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }(),
            d = !!/Mobi/.test(navigator.userAgent);
        window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;
        var c = function(e, t) {
            this.init(e, t)
        };
        return c.prototype = {
            constructor: c,
            init: function(t, i) {
                var n = this;
                this.$element = e(t), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = a + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = o.CLOSED, this.options = i, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = e('<div class="' + a + '-overlay" style="background-color:' + i.overlayColor + '"></div>'), this.$navigate = e('<div class="' + a + '-navigate"><div class="' + a + '-navigate-caption">Use</div><button class="' + a + '-navigate-prev"></button><button class="' + a + '-navigate-next"></button></div>'), this.group = {
                    name: this.$element.attr("data-" + a + "-group"),
                    index: null,
                    ids: []
                }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== i.group && (this.group.name = i.group, this.$element.attr("data-" + a + "-group", i.group)), !0 === this.options.loop && this.$element.attr("data-" + a + "-loop", !0), e.each(this.options, function(e, t) {
                    var r = n.$element.attr("data-" + a + "-" + e);
                    try {
                        void 0 !== r && (i[e] = "" === r || "true" == r || "false" != r && ("function" == typeof t ? new Function(r) : r))
                    } catch (e) {}
                }), !1 !== i.appendTo && this.$element.appendTo(i.appendTo), !0 === i.iframe ? (this.$element.html('<div class="' + a + '-wrap"><div class="' + a + '-content"><iframe class="' + a + '-iframe"></iframe>' + this.content + "</div></div>"), null !== i.iframeHeight && this.$element.find("." + a + "-iframe").css("height", i.iframeHeight)) : this.$element.html('<div class="' + a + '-wrap"><div class="' + a + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + a + "-wrap"), null === i.zindex || isNaN(parseInt(i.zindex)) || (this.$element.css("z-index", i.zindex), this.$navigate.css("z-index", i.zindex - 1), this.$overlay.css("z-index", i.zindex - 2)), "" !== i.radius && this.$element.css("border-radius", i.radius), "" !== i.padding && this.$element.find("." + a + "-content").css("padding", i.padding), "" !== i.theme && ("light" === i.theme ? this.$element.addClass(a + "-light") : this.$element.addClass(i.theme)), !0 === i.rtl && this.$element.addClass(a + "-rtl"), !0 === i.openFullscreen && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !n.options.afterRender || "function" != typeof n.options.afterRender && "object" != typeof n.options.afterRender || n.options.afterRender(n)
            },
            createHeader: function() {
                this.$header = e('<div class="' + a + '-header"><h2 class="' + a + '-header-title">' + this.options.title + '</h2><p class="' + a + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + a + '-header-buttons"></div></div>'), !0 === this.options.closeButton && this.$header.find("." + a + "-header-buttons").append('<a href="javascript:void(0)" class="' + a + "-button " + a + '-button-close" data-' + a + "-close></a>"), !0 === this.options.fullscreen && this.$header.find("." + a + "-header-buttons").append('<a href="javascript:void(0)" class="' + a + "-button " + a + '-button-fullscreen" data-' + a + "-fullscreen></a>"), !0 === this.options.timeoutProgressbar && this.$header.prepend('<div class="' + a + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(a + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + a + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + a + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + a + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header))
            },
            setGroup: function(t) {
                var i = this,
                    n = this.group.name || t;
                if (this.group.ids = [], void 0 !== t && t !== this.group.name && (n = t, this.group.name = n, this.$element.attr("data-" + a + "-group", n)), void 0 !== n && "" !== n) {
                    var r = 0;
                    e.each(e("." + a + "[data-" + a + "-group=" + n + "]"), function(t, n) {
                        i.group.ids.push(e(this)[0].id), i.id == e(this)[0].id && (i.group.index = r), r++
                    })
                }
            },
            toggle: function() {
                this.state == o.OPENED && this.close(), this.state == o.CLOSED && this.open()
            },
            startProgress: function(e) {
                var t = this;
                this.isPaused = !1, clearTimeout(this.timerTimeout), !0 === this.options.timeoutProgressbar ? (this.progressBar = {
                    hideEta: null,
                    maxHideTime: null,
                    currentTime: (new Date).getTime(),
                    el: this.$element.find("." + a + "-progressbar > div"),
                    updateProgress: function() {
                        if (!t.isPaused) {
                            t.progressBar.currentTime = t.progressBar.currentTime + 10;
                            var e = (t.progressBar.hideEta - t.progressBar.currentTime) / t.progressBar.maxHideTime * 100;
                            t.progressBar.el.width(e + "%"), e < 0 && t.close()
                        }
                    }
                }, e > 0 && (this.progressBar.maxHideTime = parseFloat(e), this.progressBar.hideEta = (new Date).getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function() {
                    t.close()
                }, t.options.timeout)
            },
            pauseProgress: function() {
                this.isPaused = !0
            },
            resumeProgress: function() {
                this.isPaused = !1
            },
            resetProgress: function(e) {
                clearTimeout(this.timerTimeout), this.progressBar = {}, this.$element.find("." + a + "-progressbar > div").width("100%")
            },
            open: function(t) {
                function i() {
                    r.state = o.OPENED, r.$element.trigger(o.OPENED), !r.options.onOpened || "function" != typeof r.options.onOpened && "object" != typeof r.options.onOpened || r.options.onOpened(r)
                }
                var r = this;
                try {
                    void 0 !== t && !1 === t.preventClose && e.each(e("." + a), function(t, i) {
                        if (void 0 !== e(i).data().iziModal) {
                            var n = e(i).iziModal("getState");
                            "opened" != n && "opening" != n || e(i).iziModal("close")
                        }
                    })
                } catch (e) {}
                if (function() {
                        if (r.options.history) {
                            var e = document.title;
                            document.title = e + " - " + r.options.title, n("#" + r.id), document.title = e, window.$iziModal.history = !0
                        } else window.$iziModal.history = !1
                    }(), this.state == o.CLOSED) {
                    if (r.$element.off("click", "[data-" + a + "-close]").on("click", "[data-" + a + "-close]", function(t) {
                            t.preventDefault();
                            var i = e(t.currentTarget).attr("data-" + a + "-transitionOut");
                            void 0 !== i ? r.close({
                                transition: i
                            }) : r.close()
                        }), r.$element.off("click", "[data-" + a + "-fullscreen]").on("click", "[data-" + a + "-fullscreen]", function(e) {
                            e.preventDefault(), !0 === r.isFullscreen ? (r.isFullscreen = !1, r.$element.removeClass("isFullscreen")) : (r.isFullscreen = !0, r.$element.addClass("isFullscreen")), r.options.onFullscreen && "function" == typeof r.options.onFullscreen && r.options.onFullscreen(r), r.$element.trigger("fullscreen", r)
                        }), r.$navigate.off("click", "." + a + "-navigate-next").on("click", "." + a + "-navigate-next", function(e) {
                            r.next(e)
                        }), r.$element.off("click", "[data-" + a + "-next]").on("click", "[data-" + a + "-next]", function(e) {
                            r.next(e)
                        }), r.$navigate.off("click", "." + a + "-navigate-prev").on("click", "." + a + "-navigate-prev", function(e) {
                            r.prev(e)
                        }), r.$element.off("click", "[data-" + a + "-prev]").on("click", "[data-" + a + "-prev]", function(e) {
                            r.prev(e)
                        }), this.setGroup(), this.state = o.OPENING, this.$element.trigger(o.OPENING), this.$element.attr("aria-hidden", "false"), !0 === this.options.timeoutProgressbar && this.$element.find("." + a + "-progressbar > div").width("100%"), !0 === this.options.iframe) {
                        this.$element.find("." + a + "-content").addClass(a + "-content-loader"), this.$element.find("." + a + "-iframe").on("load", function() {
                            e(this).parent().removeClass(a + "-content-loader")
                        });
                        var c = null;
                        try {
                            c = "" !== e(t.currentTarget).attr("href") ? e(t.currentTarget).attr("href") : null
                        } catch (e) {}
                        if (null === this.options.iframeURL || null != c || (c = this.options.iframeURL), null == c) throw new Error("Failed to find iframe URL");
                        this.$element.find("." + a + "-iframe").attr("src", c)
                    }(this.options.bodyOverflow || d) && (e("html").addClass(a + "-isOverflow"), d && e("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this),
                        function() {
                            if (r.group.ids.length > 1) {
                                r.$navigate.appendTo("body"), r.$navigate.addClass("fadeIn"), !0 === r.options.navigateCaption && r.$navigate.find("." + a + "-navigate-caption").show();
                                var n = r.$element.outerWidth();
                                !1 !== r.options.navigateArrows ? "closeScreenEdge" === r.options.navigateArrows ? (r.$navigate.find("." + a + "-navigate-prev").css("left", 0).show(), r.$navigate.find("." + a + "-navigate-next").css("right", 0).show()) : (r.$navigate.find("." + a + "-navigate-prev").css("margin-left", -(n / 2 + 84)).show(), r.$navigate.find("." + a + "-navigate-next").css("margin-right", -(n / 2 + 84)).show()) : (r.$navigate.find("." + a + "-navigate-prev").hide(), r.$navigate.find("." + a + "-navigate-next").hide()), 0 === r.group.index && (0 === e("." + a + "[data-" + a + '-group="' + r.group.name + '"][data-' + a + "-loop]").length && !1 === r.options.loop && r.$navigate.find("." + a + "-navigate-prev").hide()), r.group.index + 1 === r.group.ids.length && (0 === e("." + a + "[data-" + a + '-group="' + r.group.name + '"][data-' + a + "-loop]").length && !1 === r.options.loop && r.$navigate.find("." + a + "-navigate-next").hide())
                            }!0 === r.options.overlay && (!1 === r.options.appendToOverlay ? r.$overlay.appendTo("body") : r.$overlay.appendTo(r.options.appendToOverlay)), r.options.transitionInOverlay && r.$overlay.addClass(r.options.transitionInOverlay);
                            var s = r.options.transitionIn;
                            "object" == typeof t && (void 0 === t.transition && void 0 === t.transitionIn || (s = t.transition || t.transitionIn), void 0 !== t.zindex && r.setZindex(t.zindex)), "" !== s && void 0 !== l ? (r.$element.addClass("transitionIn " + s).show(), r.$wrap.one(l, function() {
                                r.$element.removeClass(s + " transitionIn"), r.$overlay.removeClass(r.options.transitionInOverlay), r.$navigate.removeClass("fadeIn"), i()
                            })) : (r.$element.show(), i()), !0 !== r.options.pauseOnHover || !0 !== r.options.pauseOnHover || !1 === r.options.timeout || isNaN(parseInt(r.options.timeout)) || !1 === r.options.timeout || 0 === r.options.timeout || (r.$element.off("mouseenter").on("mouseenter", function(e) {
                                e.preventDefault(), r.isPaused = !0
                            }), r.$element.off("mouseleave").on("mouseleave", function(e) {
                                e.preventDefault(), r.isPaused = !1
                            }))
                        }(), !1 === this.options.timeout || isNaN(parseInt(this.options.timeout)) || !1 === this.options.timeout || 0 === this.options.timeout || r.startProgress(this.options.timeout), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function() {
                            r.close()
                        }), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(),
                        function e() {
                            r.recalcLayout(), r.timer = setTimeout(e, 300)
                        }(), s.on("keydown." + a, function(e) {
                            r.options.closeOnEscape && 27 === e.keyCode && r.close()
                        })
                }
            },
            close: function(t) {
                function i() {
                    n.state = o.CLOSED, n.$element.trigger(o.CLOSED), !0 === n.options.iframe && n.$element.find("." + a + "-iframe").attr("src", ""), (n.options.bodyOverflow || d) && (e("html").removeClass(a + "-isOverflow"), d && e("body").css("overflow", "auto")), n.options.onClosed && "function" == typeof n.options.onClosed && n.options.onClosed(n), !0 === n.options.restoreDefaultContent && n.$element.find("." + a + "-content").html(n.content), 0 === e("." + a + ":visible").length && e("html").removeClass(a + "-isAttached")
                }
                var n = this;
                if (this.state == o.OPENED || this.state == o.OPENING) {
                    s.off("keydown." + a), this.state = o.CLOSING, this.$element.trigger(o.CLOSING), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), n.options.onClosing && "function" == typeof n.options.onClosing && n.options.onClosing(this);
                    var r = this.options.transitionOut;
                    "object" == typeof t && (void 0 === t.transition && void 0 === t.transitionOut || (r = t.transition || t.transitionOut)), !1 === r || "" === r || void 0 === l ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), i()) : (this.$element.attr("class", [this.classes, a, r, "light" == this.options.theme ? a + "-light" : this.options.theme, !0 === this.isFullscreen ? "isFullscreen" : "", this.options.rtl ? a + "-rtl" : ""].join(" ")), this.$overlay.attr("class", a + "-overlay " + this.options.transitionOutOverlay), !1 === n.options.navigateArrows || d || this.$navigate.attr("class", a + "-navigate fadeOut"), this.$element.one(l, function() {
                        n.$element.hasClass(r) && n.$element.removeClass(r + " transitionOut").hide(), n.$overlay.removeClass(n.options.transitionOutOverlay).remove(), n.$navigate.removeClass("fadeOut").remove(), i()
                    }))
                }
            },
            next: function(t) {
                var i = this,
                    n = "fadeInRight",
                    r = "fadeOutLeft",
                    s = e("." + a + ":visible"),
                    o = {};
                o.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), s = e(t.currentTarget), n = s.attr("data-" + a + "-transitionIn"), r = s.attr("data-" + a + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (n = t.transitionIn), void 0 !== t.transitionOut && (r = t.transitionOut)), this.close({
                    transition: r
                }), setTimeout(function() {
                    for (var t = e("." + a + "[data-" + a + '-group="' + i.group.name + '"][data-' + a + "-loop]").length, r = i.group.index + 1; r <= i.group.ids.length; r++) {
                        try {
                            o.in = e("#" + i.group.ids[r]).data().iziModal
                        } catch (e) {}
                        if (void 0 !== o.in) {
                            e("#" + i.group.ids[r]).iziModal("open", {
                                transition: n
                            });
                            break
                        }
                        if (r == i.group.ids.length && t > 0 || !0 === i.options.loop)
                            for (var s = 0; s <= i.group.ids.length; s++)
                                if (o.in = e("#" + i.group.ids[s]).data().iziModal, void 0 !== o.in) {
                                    e("#" + i.group.ids[s]).iziModal("open", {
                                        transition: n
                                    });
                                    break
                                }
                    }
                }, 200), e(document).trigger(a + "-group-change", o)
            },
            prev: function(t) {
                var i = this,
                    n = "fadeInLeft",
                    r = "fadeOutRight",
                    s = e("." + a + ":visible"),
                    o = {};
                o.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), s = e(t.currentTarget), n = s.attr("data-" + a + "-transitionIn"), r = s.attr("data-" + a + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (n = t.transitionIn), void 0 !== t.transitionOut && (r = t.transitionOut)), this.close({
                    transition: r
                }), setTimeout(function() {
                    for (var t = e("." + a + "[data-" + a + '-group="' + i.group.name + '"][data-' + a + "-loop]").length, r = i.group.index; r >= 0; r--) {
                        try {
                            o.in = e("#" + i.group.ids[r - 1]).data().iziModal
                        } catch (e) {}
                        if (void 0 !== o.in) {
                            e("#" + i.group.ids[r - 1]).iziModal("open", {
                                transition: n
                            });
                            break
                        }
                        if (0 === r && t > 0 || !0 === i.options.loop)
                            for (var s = i.group.ids.length - 1; s >= 0; s--)
                                if (o.in = e("#" + i.group.ids[s]).data().iziModal, void 0 !== o.in) {
                                    e("#" + i.group.ids[s]).iziModal("open", {
                                        transition: n
                                    });
                                    break
                                }
                    }
                }, 200), e(document).trigger(a + "-group-change", o)
            },
            destroy: function() {
                var t = e.Event("destroy");
                this.$element.trigger(t), s.off("keydown." + a), clearTimeout(this.timer), clearTimeout(this.timerTimeout), !0 === this.options.iframe && this.$element.find("." + a + "-iframe").remove(), this.$element.html(this.$element.find("." + a + "-content").html()), this.$element.off("click", "[data-" + a + "-close]"), this.$element.off("click", "[data-" + a + "-fullscreen]"), this.$element.off("." + a).removeData(a).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(o.DESTROYED), this.$element = null
            },
            getState: function() {
                return this.state
            },
            getGroup: function() {
                return this.group
            },
            setWidth: function(e) {
                this.options.width = e, this.recalcWidth();
                var t = this.$element.outerWidth();
                !0 !== this.options.navigateArrows && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + a + "-navigate-prev").css("margin-left", -(t / 2 + 84)).show(), this.$navigate.find("." + a + "-navigate-next").css("margin-right", -(t / 2 + 84)).show())
            },
            setTop: function(e) {
                this.options.top = e, this.recalcVerticalPos(!1)
            },
            setBottom: function(e) {
                this.options.bottom = e, this.recalcVerticalPos(!1)
            },
            setHeader: function(e) {
                e ? this.$element.find("." + a + "-header").show() : (this.headerHeight = 0, this.$element.find("." + a + "-header").hide())
            },
            setTitle: function(e) {
                this.options.title = e, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + a + "-header-title").length && this.$header.append('<h2 class="' + a + '-header-title"></h2>'), this.$header.find("." + a + "-header-title").html(e)
            },
            setSubtitle: function(e) {
                "" === e ? (this.$header.find("." + a + "-header-subtitle").remove(), this.$header.addClass(a + "-noSubtitle")) : (0 === this.$header.find("." + a + "-header-subtitle").length && this.$header.append('<p class="' + a + '-header-subtitle"></p>'), this.$header.removeClass(a + "-noSubtitle")), this.$header.find("." + a + "-header-subtitle").html(e), this.options.subtitle = e
            },
            setIcon: function(e) {
                0 === this.$header.find("." + a + "-header-icon").length && this.$header.prepend('<i class="' + a + '-header-icon"></i>'), this.$header.find("." + a + "-header-icon").attr("class", a + "-header-icon " + e), this.options.icon = e
            },
            setIconText: function(e) {
                this.$header.find("." + a + "-header-icon").html(e), this.options.iconText = e
            },
            setHeaderColor: function(e) {
                !0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + e), this.$header.css("background", e), this.options.headerColor = e
            },
            setBackground: function(e) {
                !1 === e ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", e), this.options.background = e)
            },
            setZindex: function(e) {
                isNaN(parseInt(this.options.zindex)) || (this.options.zindex = e, this.$element.css("z-index", e), this.$navigate.css("z-index", e - 1), this.$overlay.css("z-index", e - 2))
            },
            setFullscreen: function(e) {
                e ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"))
            },
            setContent: function(e) {
                "object" == typeof e && (!0 === (e.default || !1) && (this.content = e.content), e = e.content);
                !1 === this.options.iframe && this.$element.find("." + a + "-content").html(e)
            },
            setTransitionIn: function(e) {
                this.options.transitionIn = e
            },
            setTransitionOut: function(e) {
                this.options.transitionOut = e
            },
            setTimeout: function(e) {
                this.options.timeout = e
            },
            resetContent: function() {
                this.$element.find("." + a + "-content").html(this.content)
            },
            startLoading: function() {
                this.$element.find("." + a + "-loader").length || this.$element.append('<div class="' + a + '-loader fadeIn"></div>'), this.$element.find("." + a + "-loader").css({
                    top: this.headerHeight,
                    borderRadius: this.options.radius
                })
            },
            stopLoading: function() {
                var e = this.$element.find("." + a + "-loader");
                e.length || (this.$element.prepend('<div class="' + a + '-loader fadeIn"></div>'), e = this.$element.find("." + a + "-loader").css("border-radius", this.options.radius)), e.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function() {
                    e.remove()
                }, 600)
            },
            recalcWidth: function() {
                var e = this;
                if (this.$element.css("max-width", this.options.width), t()) {
                    var i = e.options.width;
                    i.toString().split("%").length > 1 && (i = e.$element.outerWidth()), e.$element.css({
                        left: "50%",
                        marginLeft: -i / 2
                    })
                }
            },
            recalcVerticalPos: function(e) {
                null !== this.options.top && !1 !== this.options.top ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0
                })) : !1 === e && this.$element.css({
                    marginTop: "",
                    borderRadius: this.options.radius
                }), null !== this.options.bottom && !1 !== this.options.bottom ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                })) : !1 === e && this.$element.css({
                    marginBottom: "",
                    borderRadius: this.options.radius
                })
            },
            recalcLayout: function() {
                var n = this,
                    s = r.height(),
                    l = this.$element.outerHeight(),
                    d = this.$element.outerWidth(),
                    c = this.$element.find("." + a + "-content")[0].scrollHeight,
                    u = c + this.headerHeight,
                    p = this.$element.innerHeight() - this.headerHeight,
                    h = (parseInt(-(this.$element.innerHeight() + 1) / 2), this.$wrap.scrollTop()),
                    A = 0;
                t() && (d >= r.width() || !0 === this.isFullscreen ? this.$element.css({
                    left: "0",
                    marginLeft: ""
                }) : this.$element.css({
                    left: "50%",
                    marginLeft: -d / 2
                })), !0 === this.options.borderBottom && "" !== this.options.title && (A = 3), this.$element.find("." + a + "-header").length && this.$element.find("." + a + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + a + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + a + "-loader").length && this.$element.find("." + a + "-loader").css("top", this.headerHeight), l !== this.modalHeight && (this.modalHeight = l, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != o.OPENED && this.state != o.OPENING || (!0 === this.options.iframe && (s < this.options.iframeHeight + this.headerHeight + A || !0 === this.isFullscreen ? this.$element.find("." + a + "-iframe").css("height", s - (this.headerHeight + A)) : this.$element.find("." + a + "-iframe").css("height", this.options.iframeHeight)), l == s ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), !1 === this.isFullscreen && this.$element.width() >= r.width() ? this.$element.find("." + a + "-button-fullscreen").hide() : this.$element.find("." + a + "-button-fullscreen").show(), this.recalcButtons(), !1 === this.isFullscreen && (s = s - (i(this.options.top) || 0) - (i(this.options.bottom) || 0)), u > s ? (this.options.top > 0 && null === this.options.bottom && c < r.height() && this.$element.addClass("isAttachedBottom"), this.options.bottom > 0 && null === this.options.top && c < r.height() && this.$element.addClass("isAttachedTop"), 1 === e("." + a + ":visible").length && e("html").addClass(a + "-isAttached"), this.$element.css("height", s)) : (this.$element.css("height", c + (this.headerHeight + A)), this.$element.removeClass("isAttachedTop isAttachedBottom"), 1 === e("." + a + ":visible").length && e("html").removeClass(a + "-isAttached")), c > p && u > s ? (n.$element.addClass("hasScroll"), n.$wrap.css("height", l - (n.headerHeight + A))) : (n.$element.removeClass("hasScroll"), n.$wrap.css("height", "auto")), p + h < c - 30 ? n.$element.addClass("hasShadow") : n.$element.removeClass("hasShadow"))
            },
            recalcButtons: function() {
                var e = this.$header.find("." + a + "-header-buttons").innerWidth() + 10;
                !0 === this.options.rtl ? this.$header.css("padding-left", e) : this.$header.css("padding-right", e)
            }
        }, r.off("load." + a).on("load." + a, function(t) {
            var i = document.location.hash;
            if (0 === window.$iziModal.autoOpen && !e("." + a).is(":visible")) try {
                var n = e(i).data();
                void 0 !== n && !1 !== n.iziModal.options.autoOpen && e(i).iziModal("open")
            } catch (e) {}
        }), r.off("hashchange." + a).on("hashchange." + a, function(t) {
            var i = document.location.hash;
            if ("" !== i) try {
                void 0 !== e(i).data() && "opening" !== e(i).iziModal("getState") && setTimeout(function() {
                    e(i).iziModal("open", {
                        preventClose: !1
                    })
                }, 200)
            } catch (e) {} else window.$iziModal.history && e.each(e("." + a), function(t, i) {
                if (void 0 !== e(i).data().iziModal) {
                    var n = e(i).iziModal("getState");
                    "opened" != n && "opening" != n || e(i).iziModal("close")
                }
            })
        }), s.off("click", "[data-" + a + "-open]").on("click", "[data-" + a + "-open]", function(t) {
            t.preventDefault();
            var i = e("." + a + ":visible"),
                n = e(t.currentTarget).attr("data-" + a + "-open"),
                r = e(t.currentTarget).attr("data-" + a + "-preventClose"),
                s = e(t.currentTarget).attr("data-" + a + "-transitionIn"),
                o = e(t.currentTarget).attr("data-" + a + "-transitionOut"),
                l = e(t.currentTarget).attr("data-" + a + "-zindex");
            void 0 !== l && e(n).iziModal("setZindex", l), void 0 === r && (void 0 !== o ? i.iziModal("close", {
                transition: o
            }) : i.iziModal("close")), setTimeout(function() {
                void 0 !== s ? e(n).iziModal("open", {
                    transition: s
                }) : e(n).iziModal("open")
            }, 200)
        }), s.off("keyup." + a).on("keyup." + a, function(t) {
            if (e("." + a + ":visible").length) {
                var i = e("." + a + ":visible")[0].id,
                    n = e("#" + i).data().iziModal.options.arrowKeys,
                    r = e("#" + i).iziModal("getGroup"),
                    s = t || window.event,
                    o = s.target || s.srcElement;
                void 0 === i || !n || void 0 === r.name || s.ctrlKey || s.metaKey || s.altKey || "INPUT" === o.tagName.toUpperCase() || "TEXTAREA" == o.tagName.toUpperCase() || (37 === s.keyCode ? e("#" + i).iziModal("prev", s) : 39 === s.keyCode && e("#" + i).iziModal("next", s))
            }
        }), e.fn[a] = function(t, i) {
            if (!e(this).length && "object" == typeof t) {
                var n = {
                    $el: document.createElement("div"),
                    id: this.selector.split("#"),
                    class: this.selector.split(".")
                };
                if (n.id.length > 1) {
                    try {
                        n.$el = document.createElement(id[0])
                    } catch (e) {}
                    n.$el.id = this.selector.split("#")[1].trim()
                } else if (n.class.length > 1) {
                    try {
                        n.$el = document.createElement(n.class[0])
                    } catch (e) {}
                    for (var r = 1; r < n.class.length; r++) n.$el.classList.add(n.class[r].trim())
                }
                document.body.appendChild(n.$el), this.push(e(this.selector))
            }
            for (var s = 0; s < this.length; s++) {
                var o = e(this[s]),
                    l = o.data(a),
                    d = e.extend({}, e.fn[a].defaults, o.data(), "object" == typeof t && t);
                if (l || t && "object" != typeof t) {
                    if ("string" == typeof t && void 0 !== l) return l[t].apply(l, [].concat(i))
                } else o.data(a, l = new c(o, d));
                d.autoOpen && (isNaN(parseInt(d.autoOpen)) ? !0 === d.autoOpen && l.open() : setTimeout(function() {
                    l.open()
                }, d.autoOpen), window.$iziModal.autoOpen++)
            }
            return this
        }, e.fn[a].defaults = {
            title: "",
            subtitle: "",
            headerColor: "#88A0B9",
            background: null,
            theme: "",
            icon: null,
            iconText: null,
            iconColor: "",
            rtl: !1,
            width: 600,
            top: null,
            bottom: null,
            borderBottom: !0,
            padding: 0,
            radius: 3,
            zindex: 999,
            iframe: !1,
            iframeHeight: 400,
            iframeURL: null,
            focusInput: !0,
            group: "",
            loop: !1,
            arrowKeys: !0,
            navigateCaption: !0,
            navigateArrows: !0,
            history: !1,
            restoreDefaultContent: !1,
            autoOpen: 0,
            bodyOverflow: !1,
            fullscreen: !1,
            openFullscreen: !1,
            closeOnEscape: !0,
            closeButton: !0,
            appendTo: "body",
            appendToOverlay: "body",
            overlay: !0,
            overlayClose: !0,
            overlayColor: "rgba(0, 0, 0, 0.4)",
            timeout: !1,
            timeoutProgressbar: !1,
            pauseOnHover: !1,
            timeoutProgressbarColor: "rgba(255,255,255,0.5)",
            transitionIn: "comingIn",
            transitionOut: "comingOut",
            transitionInOverlay: "fadeIn",
            transitionOutOverlay: "fadeOut",
            onFullscreen: function() {},
            onResize: function() {},
            onOpening: function() {},
            onOpened: function() {},
            onClosing: function() {},
            onClosed: function() {},
            afterRender: function() {}
        }, e.fn[a].Constructor = c, e.fn.iziModal
    }),
    function() {
        var e, t, i, n = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                fixedBackground: !0,
                excluded: ""
            },
            r = n,
            s = !1,
            a = !1,
            o = {
                x: 0,
                y: 0
            },
            l = !1,
            d = document.documentElement,
            c = [],
            u = /^Mac/.test(navigator.platform),
            p = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            h = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            };

        function A() {
            if (!l && document.body) {
                l = !0;
                var n = document.body,
                    o = document.documentElement,
                    c = window.innerHeight,
                    u = n.scrollHeight;
                if (d = document.compatMode.indexOf("CSS") >= 0 ? o : n, e = n, r.keyboardSupport && Y("keydown", w), top != self) a = !0;
                else if (Z && u > c && (n.offsetHeight <= c || o.offsetHeight <= c)) {
                    var p, h = document.createElement("div");
                    h.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + d.scrollHeight + "px", document.body.appendChild(h), i = function() {
                        p || (p = setTimeout(function() {
                            s || (h.style.height = "0", h.style.height = d.scrollHeight + "px", p = null)
                        }, 500))
                    }, setTimeout(i, 10), Y("resize", i);
                    if ((t = new L(i)).observe(n, {
                            attributes: !0,
                            childList: !0,
                            characterData: !1
                        }), d.offsetHeight <= c) {
                        var A = document.createElement("div");
                        A.style.clear = "both", n.appendChild(A)
                    }
                }
                r.fixedBackground || s || (n.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
            }
        }
        var f = [],
            m = !1,
            g = Date.now();

        function v(e, t, i) {
            var n, s;
            if (n = (n = t) > 0 ? 1 : -1, s = (s = i) > 0 ? 1 : -1, (o.x !== n || o.y !== s) && (o.x = n, o.y = s, f = [], g = 0), 1 != r.accelerationMax) {
                var a = Date.now() - g;
                if (a < r.accelerationDelta) {
                    var l = (1 + 50 / a) / 2;
                    l > 1 && (l = Math.min(l, r.accelerationMax), t *= l, i *= l)
                }
                g = Date.now()
            }
            if (f.push({
                    x: t,
                    y: i,
                    lastX: t < 0 ? .99 : -.99,
                    lastY: i < 0 ? .99 : -.99,
                    start: Date.now()
                }), !m) {
                var d = e === document.body,
                    c = function(n) {
                        for (var s = Date.now(), a = 0, o = 0, l = 0; l < f.length; l++) {
                            var u = f[l],
                                p = s - u.start,
                                h = p >= r.animationTime,
                                A = h ? 1 : p / r.animationTime;
                            r.pulseAlgorithm && (A = V(A));
                            var g = u.x * A - u.lastX >> 0,
                                v = u.y * A - u.lastY >> 0;
                            a += g, o += v, u.lastX += g, u.lastY += v, h && (f.splice(l, 1), l--)
                        }
                        d ? window.scrollBy(a, o) : (a && (e.scrollLeft += a), o && (e.scrollTop += o)), t || i || (f = []), f.length ? $(c, e, 1e3 / r.frameRate + 1) : m = !1
                    };
                $(c, e, 0), m = !0
            }
        }

        function y(t) {
            l || A();
            var i = t.target;
            if (t.defaultPrevented || t.ctrlKey) return !0;
            if (M(e, "embed") || M(i, "embed") && /\.pdf/i.test(i.src) || M(e, "object") || i.shadowRoot) return !0;
            var n = -t.wheelDeltaX || t.deltaX || 0,
                s = -t.wheelDeltaY || t.deltaY || 0;
            u && (t.wheelDeltaX && B(t.wheelDeltaX, 120) && (n = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && B(t.wheelDeltaY, 120) && (s = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), n || s || (s = -t.wheelDelta || 0), 1 === t.deltaMode && (n *= 40, s *= 40);
            var o = k(i);
            return o ? !! function(e) {
                if (!e) return;
                c.length || (c = [e, e, e]);
                return e = Math.abs(e), c.push(e), c.shift(), clearTimeout(C), C = setTimeout(function() {
                    try {
                        localStorage.SS_deltaBuffer = c.join(",")
                    } catch (e) {}
                }, 1e3), !z(120) && !z(100)
            }(s) || (Math.abs(n) > 1.2 && (n *= r.stepSize / 120), Math.abs(s) > 1.2 && (s *= r.stepSize / 120), v(o, n, s), t.preventDefault(), void E()) : !a || !U || (Object.defineProperty(t, "target", {
                value: window.frameElement
            }), parent.wheel(t))
        }

        function w(t) {
            var i = t.target,
                n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== p.spacebar;
            document.body.contains(e) || (e = document.activeElement);
            var s = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(i.nodeName) || M(i, "input") && !s.test(i.type) || M(e, "video") || function(e) {
                    var t = e.target,
                        i = !1;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                        do {
                            if (i = t.classList && t.classList.contains("html5-video-controls")) break
                        } while (t = t.parentNode);
                    return i
                }(t) || i.isContentEditable || n) return !0;
            if ((M(i, "button") || M(i, "input") && s.test(i.type)) && t.keyCode === p.spacebar) return !0;
            if (M(i, "input") && "radio" == i.type && h[t.keyCode]) return !0;
            var o = 0,
                l = 0,
                d = k(e);
            if (!d) return !a || !U || parent.keydown(t);
            var c = d.clientHeight;
            switch (d == document.body && (c = window.innerHeight), t.keyCode) {
                case p.up:
                    l = -r.arrowScroll;
                    break;
                case p.down:
                    l = r.arrowScroll;
                    break;
                case p.spacebar:
                    l = -(t.shiftKey ? 1 : -1) * c * .9;
                    break;
                case p.pageup:
                    l = .9 * -c;
                    break;
                case p.pagedown:
                    l = .9 * c;
                    break;
                case p.home:
                    l = -d.scrollTop;
                    break;
                case p.end:
                    var u = d.scrollHeight - d.scrollTop - c;
                    l = u > 0 ? u + 10 : 0;
                    break;
                case p.left:
                    o = -r.arrowScroll;
                    break;
                case p.right:
                    o = r.arrowScroll;
                    break;
                default:
                    return !0
            }
            v(d, o, l), t.preventDefault(), E()
        }

        function T(t) {
            e = t.target
        }
        var b, P, C, S = (b = 0, function(e) {
                return e.uniqueID || (e.uniqueID = b++)
            }),
            x = {};

        function E() {
            clearTimeout(P), P = setInterval(function() {
                x = {}
            }, 1e3)
        }

        function _(e, t) {
            for (var i = e.length; i--;) x[S(e[i])] = t;
            return t
        }

        function k(e) {
            var t = [],
                i = document.body,
                n = d.scrollHeight;
            do {
                var r = x[S(e)];
                if (r) return _(t, r);
                if (t.push(e), n === e.scrollHeight) {
                    var s = I(d) && I(i) || Q(d);
                    if (a && D(d) || !a && s) return _(t, R())
                } else if (D(e) && Q(e)) return _(t, e)
            } while (e = e.parentElement)
        }

        function D(e) {
            return e.clientHeight + 10 < e.scrollHeight
        }

        function I(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
        }

        function Q(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t
        }

        function Y(e, t) {
            window.addEventListener(e, t, !1)
        }

        function j(e, t) {
            window.removeEventListener(e, t, !1)
        }

        function M(e, t) {
            return (e.nodeName || "").toLowerCase() === t.toLowerCase()
        }
        if (window.localStorage && localStorage.SS_deltaBuffer) try {
            c = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {}

        function B(e, t) {
            return Math.floor(e / t) == e / t
        }

        function z(e) {
            return B(c[0], e) && B(c[1], e) && B(c[2], e)
        }
        var O, $ = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, i) {
                window.setTimeout(e, i || 1e3 / 60)
            },
            L = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            R = function() {
                if (!O) {
                    var e = document.createElement("div");
                    e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                    var t = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 3), O = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                }
                return O
            };

        function N(e) {
            var t, i;
            return (e *= r.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i)), t * r.pulseNormalize
        }

        function V(e) {
            return e >= 1 ? 1 : e <= 0 ? 0 : (1 == r.pulseNormalize && (r.pulseNormalize /= N(1)), N(e))
        }
        var H, F = window.navigator.userAgent,
            W = /Edge/.test(F),
            U = /chrome/i.test(F) && !W,
            G = /safari/i.test(F) && !W,
            q = /mobile/i.test(F),
            X = /Windows NT 6.1/i.test(F) && /rv:11/i.test(F),
            Z = G && (/Version\/8/i.test(F) || /Version\/9/i.test(F)),
            K = (U || G || X) && !q;

        function J(e) {
            for (var t in e) n.hasOwnProperty(t) && (r[t] = e[t])
        }
        "onwheel" in document.createElement("div") ? H = "wheel" : "onmousewheel" in document.createElement("div") && (H = "mousewheel"), H && K && (Y(H, y), Y("mousedown", T), Y("load", A)), J.destroy = function() {
            t && t.disconnect(), j(H, y), j("mousedown", T), j("keydown", w), j("resize", i), j("load", A)
        }, window.SmoothScrollOptions && J(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
            return J
        }) : "object" == typeof exports ? module.exports = J : window.SmoothScroll = J
    }(),
    function() {
        "use strict";
        var e, t, i = function(t, r) {
            function s(e) {
                return Math.floor(e)
            }

            function a() {
                var e = w.params.autoplay,
                    t = w.slides.eq(w.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || w.params.autoplay), w.autoplayTimeoutId = setTimeout(function() {
                    w.params.loop ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w)) : w.isEnd ? r.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0), w.emit("onAutoplay", w)) : (w._slideNext(), w.emit("onAutoplay", w))
                }, e)
            }

            function o(t, i) {
                var n = e(t.target);
                if (!n.is(i))
                    if ("string" == typeof i) n = n.parents(i);
                    else if (i.nodeType) {
                    var r;
                    return n.parents().each(function(e, t) {
                        t === i && (r = i)
                    }), r ? i : void 0
                }
                if (0 !== n.length) return n[0]
            }

            function l(e, t) {
                t = t || {};
                var i = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                    e.forEach(function(e) {
                        w.onResize(!0), w.emit("onObserverUpdate", w, e)
                    })
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), w.observers.push(i)
            }

            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === t || !w.isHorizontal() && 40 === t)) return !1;
                if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === t || !w.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (w.container.parents("." + w.params.slideClass).length > 0 && 0 === w.container.parents("." + w.params.slideActiveClass).length) return;
                        var n = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            r = window.innerWidth,
                            s = window.innerHeight,
                            a = w.container.offset();
                        w.rtl && (a.left = a.left - w.container[0].scrollLeft);
                        for (var o = [
                                [a.left, a.top],
                                [a.left + w.width, a.top],
                                [a.left, a.top + w.height],
                                [a.left + w.width, a.top + w.height]
                            ], l = 0; l < o.length; l++) {
                            var d = o[l];
                            d[0] >= n.left && d[0] <= n.left + r && d[1] >= n.top && d[1] <= n.top + s && (i = !0)
                        }
                        if (!i) return
                    }
                    w.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !w.rtl || 37 === t && w.rtl) && w.slideNext(), (37 === t && !w.rtl || 39 === t && w.rtl) && w.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && w.slideNext(), 38 === t && w.slidePrev()), w.emit("onKeyPress", w, t)
                }
            }

            function c(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0,
                    i = w.rtl ? -1 : 1,
                    n = function(e) {
                        var t = 0,
                            i = 0,
                            n = 0,
                            r = 0;
                        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: i,
                            pixelX: n,
                            pixelY: r
                        }
                    }(e);
                if (w.params.mousewheelForceToAxis)
                    if (w.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                        t = n.pixelX * i
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                        t = n.pixelY
                    }
                else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
                if (0 !== t) {
                    if (w.params.mousewheelInvert && (t = -t), w.params.freeMode) {
                        var r = w.getWrapperTranslate() + t * w.params.mousewheelSensitivity,
                            s = w.isBeginning,
                            a = w.isEnd;
                        if (r >= w.minTranslate() && (r = w.minTranslate()), r <= w.maxTranslate() && (r = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(r), w.updateProgress(), w.updateActiveIndex(), (!s && w.isBeginning || !a && w.isEnd) && w.updateClasses(), w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function() {
                                w.slideReset()
                            }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(), w.emit("onScroll", w, e), w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(), 0 === r || r === w.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60)
                            if (t < 0)
                                if (w.isEnd && !w.params.loop || w.animating) {
                                    if (w.params.mousewheelReleaseOnEdges) return !0
                                } else w.slideNext(), w.emit("onScroll", w, e);
                        else if (w.isBeginning && !w.params.loop || w.animating) {
                            if (w.params.mousewheelReleaseOnEdges) return !0
                        } else w.slidePrev(), w.emit("onScroll", w, e);
                        w.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function u(t, i) {
                t = e(t);
                var n, r, s, a = w.rtl ? -1 : 1;
                n = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), r || s ? (r = r || "0", s = s || "0") : w.isHorizontal() ? (r = n, s = "0") : (s = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * a + "%" : r * i * a + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i + "%" : s * i + "px", t.transform("translate3d(" + r + ", " + s + ",0px)")
            }

            function p(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof i)) return new i(t, r);
            var h = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                A = r && r.virtualTranslate;
            r = r || {};
            var f = {};
            for (var m in r)
                if ("object" != typeof r[m] || null === r[m] || r[m].nodeType || r[m] === window || r[m] === document || void 0 !== n && r[m] instanceof n || "undefined" != typeof jQuery && r[m] instanceof jQuery) f[m] = r[m];
                else
                    for (var g in f[m] = {}, r[m]) f[m][g] = r[m][g];
            for (var v in h)
                if (void 0 === r[v]) r[v] = h[v];
                else if ("object" == typeof r[v])
                for (var y in h[v]) void 0 === r[v][y] && (r[v][y] = h[v][y]);
            var w = this;
            if (w.params = r, w.originalParams = f, w.classNames = [], void 0 !== e && void 0 !== n && (e = n), (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (w.$ = e, w.currentBreakpoint = void 0, w.getActiveBreakpoint = function() {
                    if (!w.params.breakpoints) return !1;
                    var e, t = !1,
                        i = [];
                    for (e in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(e) && i.push(e);
                    i.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var n = 0; n < i.length; n++)(e = i[n]) >= window.innerWidth && !t && (t = e);
                    return t || "max"
                }, w.setBreakpoint = function() {
                    var e = w.getActiveBreakpoint();
                    if (e && w.currentBreakpoint !== e) {
                        var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams,
                            i = w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                        for (var n in t) w.params[n] = t[n];
                        w.currentBreakpoint = e, i && w.destroyLoop && w.reLoop(!0)
                    }
                }, w.params.breakpoints && w.setBreakpoint(), w.container = e(t), 0 !== w.container.length)) {
                if (w.container.length > 1) {
                    var T = [];
                    return w.container.each(function() {
                        T.push(new i(this, r))
                    }), T
                }
                w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push(w.params.containerModifierClass + w.params.direction), w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"), w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"), w.params.slidesPerColumn = 1), w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push(w.params.containerModifierClass + "3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0), "fade" !== w.params.effect && "flip" !== w.params.effect || (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, void 0 === A && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = e(w.params.pagination), w.params.uniqueNavElements && "string" == typeof w.params.pagination && w.paginationContainer.length > 1 && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)), "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : w.params.paginationClickable = !1, w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)), (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = e(w.params.nextButton), w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))), w.params.prevButton && (w.prevButton = e(w.params.prevButton), w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))), w.isHorizontal = function() {
                    return "horizontal" === w.params.direction
                }, w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push(w.params.containerModifierClass + "multirow"), w.device.android && w.classNames.push(w.params.containerModifierClass + "android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !1, !1 === w.params.allowSwipeToPrev && w.params.grabCursor && w.unsetGrabCursor()
                }, w.lockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !1, !1 === w.params.allowSwipeToNext && w.params.grabCursor && w.unsetGrabCursor()
                }, w.lockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1, w.params.grabCursor && w.unsetGrabCursor()
                }, w.unlockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !0, !0 === w.params.allowSwipeToPrev && w.params.grabCursor && w.setGrabCursor()
                }, w.unlockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !0, !0 === w.params.allowSwipeToNext && w.params.grabCursor && w.setGrabCursor()
                }, w.unlockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0, w.params.grabCursor && w.setGrabCursor()
                }, w.setGrabCursor = function(e) {
                    w.container[0].style.cursor = "move", w.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", w.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", w.container[0].style.cursor = e ? "grabbing" : "grab"
                }, w.unsetGrabCursor = function() {
                    w.container[0].style.cursor = ""
                }, w.params.grabCursor && w.setGrabCursor(), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function(e, t, i, n, r, s) {
                    function a() {
                        s && s()
                    }
                    var o;
                    e.complete && r ? a() : t ? ((o = new window.Image).onload = a, o.onerror = a, n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : a()
                }, w.preloadImages = function() {
                    function e() {
                        null != w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
                    }
                    w.imagesToLoad = w.container.find("img");
                    for (var t = 0; t < w.imagesToLoad.length; t++) w.loadImage(w.imagesToLoad[t], w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"), w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"), w.imagesToLoad[t].sizes || w.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function() {
                    return void 0 === w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && (w.autoplaying = !0, w.emit("onAutoplayStart", w), void a())
                }, w.stopAutoplay = function(e) {
                    w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w))
                }, w.pauseAutoplay = function(e) {
                    w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === e ? (w.autoplayPaused = !1, a()) : w.wrapper.transitionEnd(function() {
                        w && (w.autoplayPaused = !1, w.autoplaying ? a() : w.stopAutoplay())
                    }))
                }, w.minTranslate = function() {
                    return -w.snapGrid[0]
                }, w.maxTranslate = function() {
                    return -w.snapGrid[w.snapGrid.length - 1]
                }, w.updateAutoHeight = function() {
                    var e, t = [],
                        i = 0;
                    if ("auto" !== w.params.slidesPerView && w.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(w.params.slidesPerView); e++) {
                            var n = w.activeIndex + e;
                            if (n > w.slides.length) break;
                            t.push(w.slides.eq(n)[0])
                        } else t.push(w.slides.eq(w.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if (void 0 !== t[e]) {
                            var r = t[e].offsetHeight;
                            i = r > i ? r : i
                        } i && w.wrapper.css("height", i + "px")
                }, w.updateContainerSize = function() {
                    var e, t;
                    e = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth, t = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight, 0 === e && w.isHorizontal() || 0 === t && !w.isHorizontal() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = e, w.height = t, w.size = w.isHorizontal() ? w.width : w.height)
                }, w.updateSlidesSize = function() {
                    w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];
                    var e, t = w.params.spaceBetween,
                        i = -w.params.slidesOffsetBefore,
                        n = 0,
                        r = 0;
                    if (void 0 !== w.size) {
                        var a;
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * w.size), w.virtualSize = -t, w.rtl ? w.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : w.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        }), w.params.slidesPerColumn > 1 && (a = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (a = Math.max(a, w.params.slidesPerView * w.params.slidesPerColumn)));
                        var o, l, d = w.params.slidesPerColumn,
                            c = a / d,
                            u = c - (w.params.slidesPerColumn * c - w.slides.length);
                        for (e = 0; e < w.slides.length; e++) {
                            o = 0;
                            var p, h, A, f = w.slides.eq(e);
                            if (w.params.slidesPerColumn > 1) "column" === w.params.slidesPerColumnFill ? (A = e - (h = Math.floor(e / d)) * d, (h > u || h === u && A === d - 1) && ++A >= d && (A = 0, h++), p = h + A * a / d, f.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : h = e - (A = Math.floor(e / c)) * c, f.css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== A && w.params.spaceBetween && w.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", A);
                            "none" !== f.css("display") && ("auto" === w.params.slidesPerView ? (o = w.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0), w.params.roundLengths && (o = s(o))) : (o = (w.size - (w.params.slidesPerView - 1) * t) / w.params.slidesPerView, w.params.roundLengths && (o = s(o)), w.isHorizontal() ? w.slides[e].style.width = o + "px" : w.slides[e].style.height = o + "px"), w.slides[e].swiperSlideSize = o, w.slidesSizesGrid.push(o), w.params.centeredSlides ? (i = i + o / 2 + n / 2 + t, 0 === n && 0 !== e && (i = i - w.size / 2 - t), 0 === e && (i = i - w.size / 2 - t), Math.abs(i) < .001 && (i = 0), r % w.params.slidesPerGroup == 0 && w.snapGrid.push(i), w.slidesGrid.push(i)) : (r % w.params.slidesPerGroup == 0 && w.snapGrid.push(i), w.slidesGrid.push(i), i = i + o + t), w.virtualSize += o + t, n = o, r++)
                        }
                        if (w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter, w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }), w.support.flexbox && !w.params.setWrapperSize || (w.isHorizontal() ? w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }) : w.wrapper.css({
                                height: w.virtualSize + w.params.spaceBetween + "px"
                            })), w.params.slidesPerColumn > 1 && (w.virtualSize = (o + w.params.spaceBetween) * a, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.isHorizontal() ? w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }) : w.wrapper.css({
                                height: w.virtualSize + w.params.spaceBetween + "px"
                            }), w.params.centeredSlides)) {
                            for (l = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && l.push(w.snapGrid[e]);
                            w.snapGrid = l
                        }
                        if (!w.params.centeredSlides) {
                            for (l = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && l.push(w.snapGrid[e]);
                            w.snapGrid = l, Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size)
                        }
                        0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                            marginLeft: t + "px"
                        }) : w.slides.css({
                            marginRight: t + "px"
                        }) : w.slides.css({
                            marginBottom: t + "px"
                        })), w.params.watchSlidesProgress && w.updateSlidesOffset()
                    }
                }, w.updateSlidesOffset = function() {
                    for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = w.isHorizontal() ? w.slides[e].offsetLeft : w.slides[e].offsetTop
                }, w.currentSlidesPerView = function() {
                    var e, t, i = 1;
                    if (w.params.centeredSlides) {
                        var n, r = w.slides[w.activeIndex].swiperSlideSize;
                        for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slides[e] && !n && (i++, (r += w.slides[e].swiperSlideSize) > w.size && (n = !0));
                        for (t = w.activeIndex - 1; t >= 0; t--) w.slides[t] && !n && (i++, (r += w.slides[t].swiperSlideSize) > w.size && (n = !0))
                    } else
                        for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slidesGrid[e] - w.slidesGrid[w.activeIndex] < w.size && i++;
                    return i
                }, w.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = w.translate || 0), 0 !== w.slides.length) {
                        void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                        var t = -e;
                        w.rtl && (t = e), w.slides.removeClass(w.params.slideVisibleClass);
                        for (var i = 0; i < w.slides.length; i++) {
                            var n = w.slides[i],
                                r = (t + (w.params.centeredSlides ? w.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + w.params.spaceBetween);
                            if (w.params.watchSlidesVisibility) {
                                var s = -(t - n.swiperSlideOffset),
                                    a = s + w.slidesSizesGrid[i];
                                (s >= 0 && s < w.size || a > 0 && a <= w.size || s <= 0 && a >= w.size) && w.slides.eq(i).addClass(w.params.slideVisibleClass)
                            }
                            n.progress = w.rtl ? -r : r
                        }
                    }
                }, w.updateProgress = function(e) {
                    void 0 === e && (e = w.translate || 0);
                    var t = w.maxTranslate() - w.minTranslate(),
                        i = w.isBeginning,
                        n = w.isEnd;
                    0 === t ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / t, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && !i && w.emit("onReachBeginning", w), w.isEnd && !n && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(e), w.emit("onProgress", w, w.progress)
                }, w.updateActiveIndex = function() {
                    var e, t, i, n = w.rtl ? w.translate : -w.translate;
                    for (t = 0; t < w.slidesGrid.length; t++) void 0 !== w.slidesGrid[t + 1] ? n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2 ? e = t : n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] && (e = t + 1) : n >= w.slidesGrid[t] && (e = t);
                    w.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / w.params.slidesPerGroup)) >= w.snapGrid.length && (i = w.snapGrid.length - 1), e !== w.activeIndex && (w.snapIndex = i, w.previousIndex = w.activeIndex, w.activeIndex = e, w.updateClasses(), w.updateRealIndex())
                }, w.updateRealIndex = function() {
                    w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10)
                }, w.updateClasses = function() {
                    w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass + " " + w.params.slideDuplicateActiveClass + " " + w.params.slideDuplicateNextClass + " " + w.params.slideDuplicatePrevClass);
                    var t = w.slides.eq(w.activeIndex);
                    t.addClass(w.params.slideActiveClass), r.loop && (t.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                    var i = t.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                    w.params.loop && 0 === i.length && (i = w.slides.eq(0)).addClass(w.params.slideNextClass);
                    var n = t.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                    if (w.params.loop && 0 === n.length && (n = w.slides.eq(-1)).addClass(w.params.slidePrevClass), r.loop && (i.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass), n.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)), w.paginationContainer && w.paginationContainer.length > 0) {
                        var s, a = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                        if (w.params.loop ? ((s = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)) > w.slides.length - 1 - 2 * w.loopedSlides && (s -= w.slides.length - 2 * w.loopedSlides), s > a - 1 && (s -= a), s < 0 && "bullets" !== w.params.paginationType && (s = a + s)) : s = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0, "bullets" === w.params.paginationType && w.bullets && w.bullets.length > 0 && (w.bullets.removeClass(w.params.bulletActiveClass), w.paginationContainer.length > 1 ? w.bullets.each(function() {
                                e(this).index() === s && e(this).addClass(w.params.bulletActiveClass)
                            }) : w.bullets.eq(s).addClass(w.params.bulletActiveClass)), "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(s + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(a)), "progress" === w.params.paginationType) {
                            var o = (s + 1) / a,
                                l = o,
                                d = 1;
                            w.isHorizontal() || (d = o, l = 1), w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + d + ")").transition(w.params.speed)
                        }
                        "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, s + 1, a)), w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                    }
                    w.params.loop || (w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
                }, w.updatePagination = function() {
                    if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === w.params.paginationType) {
                            for (var t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; i < t; i++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(w, i, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                            w.paginationContainer.html(e), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                        }
                        "fraction" === w.params.paginationType && (e = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>', w.paginationContainer.html(e)), "progress" === w.params.paginationType && (e = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>', w.paginationContainer.html(e)), "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                    }
                }, w.update = function(e) {
                    function t() {
                        w.rtl, w.translate, i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(i), w.updateActiveIndex(), w.updateClasses()
                    }
                    var i;
                    w && (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e ? (w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? (t(), w.params.autoHeight && w.updateAutoHeight()) : (("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || t()) : w.params.autoHeight && w.updateAutoHeight())
                }, w.onResize = function(e) {
                    w.params.onBeforeResize && w.params.onBeforeResize(w), w.params.breakpoints && w.setBreakpoint();
                    var t = w.params.allowSwipeToPrev,
                        i = w.params.allowSwipeToNext;
                    w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0);
                    var n = !1;
                    if (w.params.freeMode) {
                        var r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                        w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight()
                    } else w.updateClasses(), n = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                    w.params.lazyLoading && !n && w.lazy && w.lazy.load(), w.params.allowSwipeToPrev = t, w.params.allowSwipeToNext = i, w.params.onAfterResize && w.params.onAfterResize(w)
                }, w.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? w.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (w.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), w.touchEvents = {
                    start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                    move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                    end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        i = e ? "removeEventListener" : "addEventListener",
                        n = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                        s = w.support.touch ? n : document,
                        a = !!w.params.nested;
                    if (w.browser.ie) n[i](w.touchEvents.start, w.onTouchStart, !1), s[i](w.touchEvents.move, w.onTouchMove, a), s[i](w.touchEvents.end, w.onTouchEnd, !1);
                    else {
                        if (w.support.touch) {
                            var o = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            n[i](w.touchEvents.start, w.onTouchStart, o), n[i](w.touchEvents.move, w.onTouchMove, a), n[i](w.touchEvents.end, w.onTouchEnd, o)
                        }(r.simulateTouch && !w.device.ios && !w.device.android || r.simulateTouch && !w.support.touch && w.device.ios) && (n[i]("mousedown", w.onTouchStart, !1), document[i]("mousemove", w.onTouchMove, a), document[i]("mouseup", w.onTouchEnd, !1))
                    }
                    window[i]("resize", w.onResize), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[t]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[t]("keydown", w.a11y.onEnterKey)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[t]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[t]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (w.paginationContainer[t]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && n[i]("click", w.preventClicks, !0)
                }, w.attachEvents = function() {
                    w.initEvents()
                }, w.detachEvents = function() {
                    w.initEvents(!0)
                }, w.allowClick = !0, w.preventClicks = function(e) {
                    w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, w.onClickNext = function(e) {
                    e.preventDefault(), w.isEnd && !w.params.loop || w.slideNext()
                }, w.onClickPrev = function(e) {
                    e.preventDefault(), w.isBeginning && !w.params.loop || w.slidePrev()
                }, w.onClickIndex = function(t) {
                    t.preventDefault();
                    var i = e(this).index() * w.params.slidesPerGroup;
                    w.params.loop && (i += w.loopedSlides), w.slideTo(i)
                }, w.updateClickedSlide = function(t) {
                    var i = o(t, "." + w.params.slideClass),
                        n = !1;
                    if (i)
                        for (var r = 0; r < w.slides.length; r++) w.slides[r] === i && (n = !0);
                    if (!i || !n) return w.clickedSlide = void 0, void(w.clickedIndex = void 0);
                    if (w.clickedSlide = i, w.clickedIndex = e(i).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                        var s, a = w.clickedIndex,
                            l = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                        if (w.params.loop) {
                            if (w.animating) return;
                            s = parseInt(e(w.clickedSlide).attr("data-swiper-slide-index"), 10), w.params.centeredSlides ? a < w.loopedSlides - l / 2 || a > w.slides.length - w.loopedSlides + l / 2 ? (w.fixLoop(), a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                w.slideTo(a)
                            }, 0)) : w.slideTo(a) : a > w.slides.length - l ? (w.fixLoop(), a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                w.slideTo(a)
                            }, 0)) : w.slideTo(a)
                        } else w.slideTo(a)
                    }
                };
                var b, P, C, S, x, E, _, k, D, I, Q, Y, j = "input, select, textarea, button, video",
                    M = Date.now(),
                    B = [];
                for (var z in w.animating = !1, w.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    }, w.onTouchStart = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), (Q = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
                            if (w.params.noSwiping && o(t, "." + w.params.noSwipingClass)) return void(w.allowClick = !0);
                            if (!w.params.swipeHandler || o(t, w.params.swipeHandler)) {
                                var i = w.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                    n = w.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
                                    if (b = !0, P = !1, C = !0, x = void 0, Y = void 0, w.touches.startX = i, w.touches.startY = n, S = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (k = !1), "touchstart" !== t.type) {
                                        var r = !0;
                                        e(t.target).is(j) && (r = !1), document.activeElement && e(document.activeElement).is(j) && document.activeElement.blur(), r && t.preventDefault()
                                    }
                                    w.emit("onTouchStart", w, t)
                                }
                            }
                        }
                    }, w.onTouchMove = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), !Q || "mousemove" !== t.type) {
                            if (t.preventedByNestedSwiper) return w.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(w.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (w.params.onlyExternal) return w.allowClick = !1, void(b && (w.touches.startX = w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, w.touches.startY = w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, S = Date.now()));
                            if (Q && w.params.touchReleaseOnEdges && !w.params.loop)
                                if (w.isHorizontal()) {
                                    if (w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate() || w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate()) return
                                } else if (w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate() || w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate()) return;
                            if (Q && document.activeElement && t.target === document.activeElement && e(t.target).is(j)) return P = !0, void(w.allowClick = !1);
                            if (C && w.emit("onTouchMove", w, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                var i;
                                if (w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === x) w.isHorizontal() && w.touches.currentY === w.touches.startY || !w.isHorizontal() && w.touches.currentX === w.touches.startX ? x = !1 : (i = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI, x = w.isHorizontal() ? i > w.params.touchAngle : 90 - i > w.params.touchAngle);
                                if (x && w.emit("onTouchMoveOpposite", w, t), void 0 === Y && (w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY || (Y = !0)), b) {
                                    if (x) return void(b = !1);
                                    if (Y) {
                                        w.allowClick = !1, w.emit("onSliderMove", w, t), t.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && t.stopPropagation(), P || (r.loop && w.fixLoop(), _ = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), I = !1, !w.params.grabCursor || !0 !== w.params.allowSwipeToNext && !0 !== w.params.allowSwipeToPrev || w.setGrabCursor(!0)), P = !0;
                                        var n = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                        n *= w.params.touchRatio, w.rtl && (n = -n), w.swipeDirection = n > 0 ? "prev" : "next", E = n + _;
                                        var s = !0;
                                        if (n > 0 && E > w.minTranslate() ? (s = !1, w.params.resistance && (E = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + _ + n, w.params.resistanceRatio))) : n < 0 && E < w.maxTranslate() && (s = !1, w.params.resistance && (E = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - _ - n, w.params.resistanceRatio))), s && (t.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && E < _ && (E = _), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && E > _ && (E = _), w.params.threshold > 0) {
                                            if (!(Math.abs(n) > w.params.threshold || k)) return void(E = _);
                                            if (!k) return k = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, E = _, void(w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                        }
                                        w.params.followFinger && ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === B.length && B.push({
                                            position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                            time: S
                                        }), B.push({
                                            position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), w.updateProgress(E), w.setWrapperTranslate(E))
                                    }
                                }
                            }
                        }
                    }, w.onTouchEnd = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), C && w.emit("onTouchEnd", w, t), C = !1, b) {
                            w.params.grabCursor && P && b && (!0 === w.params.allowSwipeToNext || !0 === w.params.allowSwipeToPrev) && w.setGrabCursor(!1);
                            var i, n = Date.now(),
                                r = n - S;
                            if (w.allowClick && (w.updateClickedSlide(t), w.emit("onTap", w, t), r < 300 && n - M > 300 && (D && clearTimeout(D), D = setTimeout(function() {
                                    w && (w.params.paginationHide && w.paginationContainer.length > 0 && !e(t.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, t))
                                }, 300)), r < 300 && n - M < 300 && (D && clearTimeout(D), w.emit("onDoubleTap", w, t))), M = Date.now(), setTimeout(function() {
                                    w && (w.allowClick = !0)
                                }, 0), !b || !P || !w.swipeDirection || 0 === w.touches.diff || E === _) return void(b = P = !1);
                            if (b = P = !1, i = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -E, w.params.freeMode) {
                                if (i < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                                if (i > -w.maxTranslate()) return void(w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                if (w.params.freeModeMomentum) {
                                    if (B.length > 1) {
                                        var s = B.pop(),
                                            a = B.pop(),
                                            o = s.position - a.position,
                                            l = s.time - a.time;
                                        w.velocity = o / l, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (l > 150 || (new window.Date).getTime() - s.time > 300) && (w.velocity = 0)
                                    } else w.velocity = 0;
                                    w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio, B.length = 0;
                                    var d = 1e3 * w.params.freeModeMomentumRatio,
                                        c = w.velocity * d,
                                        u = w.translate + c;
                                    w.rtl && (u = -u);
                                    var p, h = !1,
                                        A = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                    if (u < w.maxTranslate()) w.params.freeModeMomentumBounce ? (u + w.maxTranslate() < -A && (u = w.maxTranslate() - A), p = w.maxTranslate(), h = !0, I = !0) : u = w.maxTranslate();
                                    else if (u > w.minTranslate()) w.params.freeModeMomentumBounce ? (u - w.minTranslate() > A && (u = w.minTranslate() + A), p = w.minTranslate(), h = !0, I = !0) : u = w.minTranslate();
                                    else if (w.params.freeModeSticky) {
                                        var f, m = 0;
                                        for (m = 0; m < w.snapGrid.length; m += 1)
                                            if (w.snapGrid[m] > -u) {
                                                f = m;
                                                break
                                            } u = Math.abs(w.snapGrid[f] - u) < Math.abs(w.snapGrid[f - 1] - u) || "next" === w.swipeDirection ? w.snapGrid[f] : w.snapGrid[f - 1], w.rtl || (u = -u)
                                    }
                                    if (0 !== w.velocity) d = w.rtl ? Math.abs((-u - w.translate) / w.velocity) : Math.abs((u - w.translate) / w.velocity);
                                    else if (w.params.freeModeSticky) return void w.slideReset();
                                    w.params.freeModeMomentumBounce && h ? (w.updateProgress(p), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function() {
                                        w && I && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(p), w.wrapper.transitionEnd(function() {
                                            w && w.onTransitionEnd()
                                        }))
                                    })) : w.velocity ? (w.updateProgress(u), w.setWrapperTransition(d), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                                        w && w.onTransitionEnd()
                                    }))) : w.updateProgress(u), w.updateActiveIndex()
                                }
                                return void((!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
                            }
                            var g, v = 0,
                                y = w.slidesSizesGrid[0];
                            for (g = 0; g < w.slidesGrid.length; g += w.params.slidesPerGroup) void 0 !== w.slidesGrid[g + w.params.slidesPerGroup] ? i >= w.slidesGrid[g] && i < w.slidesGrid[g + w.params.slidesPerGroup] && (v = g, y = w.slidesGrid[g + w.params.slidesPerGroup] - w.slidesGrid[g]) : i >= w.slidesGrid[g] && (v = g, y = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                            var T = (i - w.slidesGrid[v]) / y;
                            if (r > w.params.longSwipesMs) {
                                if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && (T >= w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v)), "prev" === w.swipeDirection && (T > 1 - w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v))
                            } else {
                                if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && w.slideTo(v + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(v)
                            }
                        }
                    }, w._slideTo = function(e, t) {
                        return w.slideTo(e, t, !0, !0)
                    }, w.slideTo = function(e, t, i, n) {
                        void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), w.snapIndex = Math.floor(e / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                        var r = -w.snapGrid[w.snapIndex];
                        if (w.params.autoplay && w.autoplaying && (n || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()), w.updateProgress(r), w.params.normalizeSlideIndex)
                            for (var s = 0; s < w.slidesGrid.length; s++) - Math.floor(100 * r) >= Math.floor(100 * w.slidesGrid[s]) && (e = s);
                        return !(!w.params.allowSwipeToNext && r < w.translate && r < w.minTranslate() || !w.params.allowSwipeToPrev && r > w.translate && r > w.maxTranslate() && (w.activeIndex || 0) !== e || (void 0 === t && (t = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = e, w.updateRealIndex(), w.rtl && -r === w.translate || !w.rtl && r === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(r), 1) : (w.updateClasses(), w.onTransitionStart(i), 0 === t || w.browser.lteIE9 ? (w.setWrapperTranslate(r), w.setWrapperTransition(0), w.onTransitionEnd(i)) : (w.setWrapperTranslate(r), w.setWrapperTransition(t), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                            w && w.onTransitionEnd(i)
                        }))), 0)))
                    }, w.onTransitionStart = function(e) {
                        void 0 === e && (e = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
                    }, w.onTransitionEnd = function(e) {
                        w.animating = !1, w.setWrapperTransition(0), void 0 === e && (e = !0), w.lazy && w.lazy.onTransitionEnd(), e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex), w.params.hashnav && w.hashnav && w.hashnav.setHash()
                    }, w.slideNext = function(e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)
                    }, w._slideNext = function(e) {
                        return w.slideNext(!0, e, !0)
                    }, w.slidePrev = function(e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex - 1, t, e, i)) : w.slideTo(w.activeIndex - 1, t, e, i)
                    }, w._slidePrev = function(e) {
                        return w.slidePrev(!0, e, !0)
                    }, w.slideReset = function(e, t, i) {
                        return w.slideTo(w.activeIndex, t, e)
                    }, w.disableTouchControl = function() {
                        return w.params.onlyExternal = !0, !0
                    }, w.enableTouchControl = function() {
                        return w.params.onlyExternal = !1, !0
                    }, w.setWrapperTransition = function(e, t) {
                        w.wrapper.transition(e), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e), w.params.parallax && w.parallax && w.parallax.setTransition(e), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e), w.params.control && w.controller && w.controller.setTransition(e, t), w.emit("onSetTransition", w, e)
                    }, w.setWrapperTranslate = function(e, t, i) {
                        var n = 0,
                            r = 0;
                        w.isHorizontal() ? n = w.rtl ? -e : e : r = e, w.params.roundLengths && (n = s(n), r = s(r)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + n + "px, " + r + "px, 0px)") : w.wrapper.transform("translate(" + n + "px, " + r + "px)")), w.translate = w.isHorizontal() ? n : r;
                        var a = w.maxTranslate() - w.minTranslate();
                        (0 === a ? 0 : (e - w.minTranslate()) / a) !== w.progress && w.updateProgress(e), t && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, i), w.emit("onSetTranslate", w, w.translate)
                    }, w.getTranslate = function(e, t) {
                        var i, n, r, s;
                        return void 0 === t && (t = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function(e) {
                            return e.replace(",", ".")
                        }).join(", ")), s = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), w.rtl && n && (n = -n), n || 0)
                    }, w.getWrapperTranslate = function(e) {
                        return void 0 === e && (e = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], e)
                    }, w.observers = [], w.initObservers = function() {
                        if (w.params.observeParents)
                            for (var e = w.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                        l(w.container[0], {
                            childList: !1
                        }), l(w.wrapper[0], {
                            attributes: !1
                        })
                    }, w.disconnectObservers = function() {
                        for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
                        w.observers = []
                    }, w.createLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                        var t = w.wrapper.children("." + w.params.slideClass);
                        "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = t.length), w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > t.length && (w.loopedSlides = t.length);
                        var i, n = [],
                            r = [];
                        for (t.each(function(i, s) {
                                var a = e(this);
                                i < w.loopedSlides && r.push(s), i < t.length && i >= t.length - w.loopedSlides && n.push(s), a.attr("data-swiper-slide-index", i)
                            }), i = 0; i < r.length; i++) w.wrapper.append(e(r[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                        for (i = n.length - 1; i >= 0; i--) w.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
                    }, w.destroyLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index")
                    }, w.reLoop = function(e) {
                        var t = w.activeIndex - w.loopedSlides;
                        w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), e && w.slideTo(t + w.loopedSlides, 0, !1)
                    }, w.fixLoop = function() {
                        var e;
                        w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex, e += w.loopedSlides, w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides, e += w.loopedSlides, w.slideTo(e, 0, !1, !0))
                    }, w.appendSlide = function(e) {
                        if (w.params.loop && w.destroyLoop(), "object" == typeof e && e.length)
                            for (var t = 0; t < e.length; t++) e[t] && w.wrapper.append(e[t]);
                        else w.wrapper.append(e);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0)
                    }, w.prependSlide = function(e) {
                        w.params.loop && w.destroyLoop();
                        var t = w.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++) e[i] && w.wrapper.prepend(e[i]);
                            t = w.activeIndex + e.length
                        } else w.wrapper.prepend(e);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.slideTo(t, 0, !1)
                    }, w.removeSlide = function(e) {
                        w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
                        var t, i = w.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var n = 0; n < e.length; n++) t = e[n], w.slides[t] && w.slides.eq(t).remove(), t < i && i--;
                            i = Math.max(i, 0)
                        } else t = e, w.slides[t] && w.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1)
                    }, w.removeAllSlides = function() {
                        for (var e = [], t = 0; t < w.slides.length; t++) e.push(t);
                        w.removeSlide(e)
                    }, w.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var e = 0; e < w.slides.length; e++) {
                                    var t = w.slides.eq(e),
                                        i = -t[0].swiperSlideOffset;
                                    w.params.virtualTranslate || (i -= w.translate);
                                    var n = 0;
                                    w.isHorizontal() || (n = i, i = 0);
                                    var r = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    t.css({
                                        opacity: r
                                    }).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                                }
                            },
                            setTransition: function(e) {
                                if (w.slides.transition(e), w.params.virtualTranslate && 0 !== e) {
                                    var t = !1;
                                    w.slides.transitionEnd(function() {
                                        if (!t && w) {
                                            t = !0, w.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) w.wrapper.trigger(e[i])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var t = 0; t < w.slides.length; t++) {
                                    var i = w.slides.eq(t),
                                        n = i[0].progress;
                                    w.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                    var r = -180 * n,
                                        s = 0,
                                        a = -i[0].swiperSlideOffset,
                                        o = 0;
                                    if (w.isHorizontal() ? w.rtl && (r = -r) : (o = a, a = 0, s = -r, r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + w.slides.length, w.params.flip.slideShadows) {
                                        var l = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            d = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(d)), l.length && (l[0].style.opacity = Math.max(-n, 0)), d.length && (d[0].style.opacity = Math.max(n, 0))
                                    }
                                    i.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + s + "deg) rotateY(" + r + "deg)")
                                }
                            },
                            setTransition: function(t) {
                                if (w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), w.params.virtualTranslate && 0 !== t) {
                                    var i = !1;
                                    w.slides.eq(w.activeIndex).transitionEnd(function() {
                                        if (!i && w && e(this).hasClass(w.params.slideActiveClass)) {
                                            i = !0, w.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) w.wrapper.trigger(t[n])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var t, i = 0;
                                w.params.cube.shadow && (w.isHorizontal() ? (0 === (t = w.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(t)), t.css({
                                    height: w.width + "px"
                                })) : 0 === (t = w.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), w.container.append(t)));
                                for (var n = 0; n < w.slides.length; n++) {
                                    var r = w.slides.eq(n),
                                        s = 90 * n,
                                        a = Math.floor(s / 360);
                                    w.rtl && (s = -s, a = Math.floor(-s / 360));
                                    var o = Math.max(Math.min(r[0].progress, 1), -1),
                                        l = 0,
                                        d = 0,
                                        c = 0;
                                    n % 4 == 0 ? (l = 4 * -a * w.size, c = 0) : (n - 1) % 4 == 0 ? (l = 0, c = 4 * -a * w.size) : (n - 2) % 4 == 0 ? (l = w.size + 4 * a * w.size, c = w.size) : (n - 3) % 4 == 0 && (l = -w.size, c = 3 * w.size + 4 * w.size * a), w.rtl && (l = -l), w.isHorizontal() || (d = l, l = 0);
                                    var u = "rotateX(" + (w.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (w.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + d + "px, " + c + "px)";
                                    if (o <= 1 && o > -1 && (i = 90 * n + 90 * o, w.rtl && (i = 90 * -n - 90 * o)), r.transform(u), w.params.cube.slideShadows) {
                                        var p = w.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                            h = w.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), r.append(p)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(h)), p.length && (p[0].style.opacity = Math.max(-o, 0)), h.length && (h[0].style.opacity = Math.max(o, 0))
                                    }
                                }
                                if (w.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + w.size / 2 + "px"
                                    }), w.params.cube.shadow)
                                    if (w.isHorizontal()) t.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                    else {
                                        var A = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                            f = 1.5 - (Math.sin(2 * A * Math.PI / 360) / 2 + Math.cos(2 * A * Math.PI / 360) / 2),
                                            m = w.params.cube.shadowScale,
                                            g = w.params.cube.shadowScale / f,
                                            v = w.params.cube.shadowOffset;
                                        t.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (w.height / 2 + v) + "px, " + -w.height / 2 / g + "px) rotateX(-90deg)")
                                    } var y = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                                w.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (w.isHorizontal() ? 0 : i) + "deg) rotateY(" + (w.isHorizontal() ? -i : 0) + "deg)")
                            },
                            setTransition: function(e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var t = w.translate, i = w.isHorizontal() ? -t + w.width / 2 : -t + w.height / 2, n = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, r = w.params.coverflow.depth, s = 0, a = w.slides.length; s < a; s++) {
                                    var o = w.slides.eq(s),
                                        l = w.slidesSizesGrid[s],
                                        d = (i - o[0].swiperSlideOffset - l / 2) / l * w.params.coverflow.modifier,
                                        c = w.isHorizontal() ? n * d : 0,
                                        u = w.isHorizontal() ? 0 : n * d,
                                        p = -r * Math.abs(d),
                                        h = w.isHorizontal() ? 0 : w.params.coverflow.stretch * d,
                                        A = w.isHorizontal() ? w.params.coverflow.stretch * d : 0;
                                    Math.abs(A) < .001 && (A = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0);
                                    var f = "translate3d(" + A + "px," + h + "px," + p + "px)  rotateX(" + u + "deg) rotateY(" + c + "deg)";
                                    if (o.transform(f), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), w.params.coverflow.slideShadows) {
                                        var m = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                            g = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), o.append(m)), 0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(g)), m.length && (m[0].style.opacity = d > 0 ? d : 0), g.length && (g[0].style.opacity = -d > 0 ? -d : 0)
                                    }
                                }
                                w.browser.ie && (w.wrapper[0].style.perspectiveOrigin = i + "px 50%")
                            },
                            setTransition: function(e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    }, w.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(t, i) {
                            if (void 0 !== t && (void 0 === i && (i = !0), 0 !== w.slides.length)) {
                                var n = w.slides.eq(t),
                                    r = n.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                                !n.hasClass(w.params.lazyLoadingClass) || n.hasClass(w.params.lazyStatusLoadedClass) || n.hasClass(w.params.lazyStatusLoadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each(function() {
                                    var t = e(this);
                                    t.addClass(w.params.lazyStatusLoadingClass);
                                    var r = t.attr("data-background"),
                                        s = t.attr("data-src"),
                                        a = t.attr("data-srcset"),
                                        o = t.attr("data-sizes");
                                    w.loadImage(t[0], s || r, a, o, !1, function() {
                                        if (null != w && w) {
                                            if (r ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background")) : (a && (t.attr("srcset", a), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass), n.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(), w.params.loop && i) {
                                                var e = n.attr("data-swiper-slide-index");
                                                if (n.hasClass(w.params.slideDuplicateClass)) {
                                                    var l = w.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                    w.lazy.loadImageInSlide(l.index(), !1)
                                                } else {
                                                    var d = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    w.lazy.loadImageInSlide(d.index(), !1)
                                                }
                                            }
                                            w.emit("onLazyImageReady", w, n[0], t[0])
                                        }
                                    }), w.emit("onLazyImageLoad", w, n[0], t[0])
                                })
                            }
                        },
                        load: function() {
                            var t, i = w.params.slidesPerView;
                            if ("auto" === i && (i = 0), w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0), w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                                w.lazy.loadImageInSlide(e(this).index())
                            });
                            else if (i > 1)
                                for (t = w.activeIndex; t < w.activeIndex + i; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                            else w.lazy.loadImageInSlide(w.activeIndex);
                            if (w.params.lazyLoadingInPrevNext)
                                if (i > 1 || w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1) {
                                    var n = w.params.lazyLoadingInPrevNextAmount,
                                        r = i,
                                        s = Math.min(w.activeIndex + r + Math.max(n, r), w.slides.length),
                                        a = Math.max(w.activeIndex - Math.max(r, n), 0);
                                    for (t = w.activeIndex + i; t < s; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                                    for (t = a; t < w.activeIndex; t++) w.slides[t] && w.lazy.loadImageInSlide(t)
                                } else {
                                    var o = w.wrapper.children("." + w.params.slideNextClass);
                                    o.length > 0 && w.lazy.loadImageInSlide(o.index());
                                    var l = w.wrapper.children("." + w.params.slidePrevClass);
                                    l.length > 0 && w.lazy.loadImageInSlide(l.index())
                                }
                        },
                        onTransitionStart: function() {
                            w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                        },
                        onTransitionEnd: function() {
                            w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                        }
                    }, w.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(e) {
                            var t = w.scrollbar,
                                i = (w.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[w.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                n = -w.minTranslate() * t.moveDivider,
                                r = -w.maxTranslate() * t.moveDivider;
                            i < n ? i = n : i > r && (i = r), i = -i / t.moveDivider, w.updateProgress(i), w.setWrapperTranslate(i, !0)
                        },
                        dragStart: function(e) {
                            var t = w.scrollbar;
                            t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), w.params.scrollbarHide && t.track.css("opacity", 1), w.wrapper.transition(100), t.drag.transition(100), w.emit("onScrollbarDragStart", w)
                        },
                        dragMove: function(e) {
                            var t = w.scrollbar;
                            t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), w.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), w.emit("onScrollbarDragMove", w))
                        },
                        dragEnd: function(e) {
                            var t = w.scrollbar;
                            t.isTouched && (t.isTouched = !1, w.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                t.track.css("opacity", 0), t.track.transition(400)
                            }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset())
                        },
                        draggableEvents: !1 !== w.params.simulateTouch || w.support.touch ? w.touchEvents : w.touchEventsDesktop,
                        enableDraggable: function() {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).on(t.draggableEvents.start, t.dragStart), e(i).on(t.draggableEvents.move, t.dragMove), e(i).on(t.draggableEvents.end, t.dragEnd)
                        },
                        disableDraggable: function() {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).off(t.draggableEvents.start, t.dragStart), e(i).off(t.draggableEvents.move, t.dragMove), e(i).off(t.draggableEvents.end, t.dragEnd)
                        },
                        set: function() {
                            if (w.params.scrollbar) {
                                var t = w.scrollbar;
                                t.track = e(w.params.scrollbar), w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && t.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (t.track = w.container.find(w.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = w.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = w.size / w.virtualSize, t.moveDivider = t.divider * (t.trackSize / w.size), t.dragSize = t.trackSize * t.divider, w.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", w.params.scrollbarHide && (t.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (w.params.scrollbar) {
                                var e, t = w.scrollbar,
                                    i = (w.translate, t.dragSize);
                                e = (t.trackSize - t.dragSize) * w.progress, w.rtl && w.isHorizontal() ? (e = -e) > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), w.isHorizontal() ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), w.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                    t.track[0].style.opacity = 0, t.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(e) {
                            w.params.scrollbar && w.scrollbar.drag.transition(e)
                        }
                    }, w.controller = {
                        LinearSpline: function(e, t) {
                            var i, n, r = function() {
                                var e, t, i;
                                return function(n, r) {
                                    for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= r ? t = i : e = i;
                                    return e
                                }
                            }();
                            this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function(e) {
                                return e ? (n = r(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                            }
                        },
                        getInterpolateFunction: function(e) {
                            w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid))
                        },
                        setTranslate: function(e, t) {
                            function n(t) {
                                e = t.rtl && "horizontal" === t.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(t), s = -w.controller.spline.interpolate(-e)), s && "container" !== w.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (w.maxTranslate() - w.minTranslate()), s = (e - w.minTranslate()) * r + t.minTranslate()), w.params.controlInverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setWrapperTranslate(s, !1, w), t.updateActiveIndex()
                            }
                            var r, s, a = w.params.control;
                            if (Array.isArray(a))
                                for (var o = 0; o < a.length; o++) a[o] !== t && a[o] instanceof i && n(a[o]);
                            else a instanceof i && t !== a && n(a)
                        },
                        setTransition: function(e, t) {
                            function n(t) {
                                t.setWrapperTransition(e, w), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                    s && (t.params.loop && "slide" === w.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                }))
                            }
                            var r, s = w.params.control;
                            if (Array.isArray(s))
                                for (r = 0; r < s.length; r++) s[r] !== t && s[r] instanceof i && n(s[r]);
                            else s instanceof i && t !== s && n(s)
                        }
                    }, w.hashnav = {
                        onHashCange: function(e, t) {
                            var i = document.location.hash.replace("#", "");
                            i !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + i + '"]').index())
                        },
                        attachEvents: function(t) {
                            var i = t ? "off" : "on";
                            e(window)[i]("hashchange", w.hashnav.onHashCange)
                        },
                        setHash: function() {
                            if (w.hashnav.initialized && w.params.hashnav)
                                if (w.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = w.slides.eq(w.activeIndex),
                                        t = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = t || ""
                                }
                        },
                        init: function() {
                            if (w.params.hashnav && !w.params.history) {
                                w.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, i = w.slides.length; t < i; t++) {
                                        var n = w.slides.eq(t);
                                        if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(w.params.slideDuplicateClass)) {
                                            var r = n.index();
                                            w.slideTo(r, 0, w.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                w.params.hashnavWatchState && w.hashnav.attachEvents()
                            }
                        },
                        destroy: function() {
                            w.params.hashnavWatchState && w.hashnav.attachEvents(!0)
                        }
                    }, w.history = {
                        init: function() {
                            if (w.params.history) {
                                if (!window.history || !window.history.pushState) return w.params.history = !1, void(w.params.hashnav = !0);
                                w.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit), w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState: function() {
                            w.history.paths = w.history.getPathValues(), w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1)
                        },
                        getPathValues: function() {
                            var e = window.location.pathname.slice(1).split("/"),
                                t = e.length;
                            return {
                                key: e[t - 2],
                                value: e[t - 1]
                            }
                        },
                        setHistory: function(e, t) {
                            if (w.history.initialized && w.params.history) {
                                var i = w.slides.eq(t),
                                    n = this.slugify(i.attr("data-history"));
                                window.location.pathname.includes(e) || (n = e + "/" + n), w.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                            }
                        },
                        slugify: function(e) {
                            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function(e, t, i) {
                            if (t)
                                for (var n = 0, r = w.slides.length; n < r; n++) {
                                    var s = w.slides.eq(n);
                                    if (this.slugify(s.attr("data-history")) === t && !s.hasClass(w.params.slideDuplicateClass)) {
                                        var a = s.index();
                                        w.slideTo(a, e, i)
                                    }
                                } else w.slideTo(0, e, i)
                        }
                    }, w.disableKeyboardControl = function() {
                        w.params.keyboardControl = !1, e(document).off("keydown", d)
                    }, w.enableKeyboardControl = function() {
                        w.params.keyboardControl = !0, e(document).on("keydown", d)
                    }, w.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, w.params.mousewheelControl && (w.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                        var e = "onwheel" in document;
                        if (!e) {
                            var t = document.createElement("div");
                            t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                        }
                        return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                    }() ? "wheel" : "mousewheel"), w.disableMousewheelControl = function() {
                        if (!w.mousewheel.event) return !1;
                        var t = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (t = e(w.params.mousewheelEventsTarged)), t.off(w.mousewheel.event, c), w.params.mousewheelControl = !1, !0
                    }, w.enableMousewheelControl = function() {
                        if (!w.mousewheel.event) return !1;
                        var t = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (t = e(w.params.mousewheelEventsTarged)), t.on(w.mousewheel.event, c), w.params.mousewheelControl = !0, !0
                    }, w.parallax = {
                        setTranslate: function() {
                            w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                u(this, w.progress)
                            }), w.slides.each(function() {
                                var t = e(this);
                                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    u(this, Math.min(Math.max(t[0].progress, -1), 1))
                                })
                            })
                        },
                        setTransition: function(t) {
                            void 0 === t && (t = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var i = e(this),
                                    n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (n = 0), i.transition(n)
                            })
                        }
                    }, w.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: w.params.zoomMax
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        },
                        getDistanceBetweenTouches: function(e) {
                            if (e.targetTouches.length < 2) return 1;
                            var t = e.targetTouches[0].pageX,
                                i = e.targetTouches[0].pageY,
                                n = e.targetTouches[1].pageX,
                                r = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
                        },
                        onGestureStart: function(t) {
                            var i = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                                i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                            }
                            i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this), 0 === i.gesture.slide.length && (i.gesture.slide = w.slides.eq(w.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + w.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), i.isScaling = !0) : i.gesture.image = void 0
                        },
                        onGestureChange: function(e) {
                            var t = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                            }
                            t.gesture.image && 0 !== t.gesture.image.length && (w.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < w.params.zoomMin && (t.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                        },
                        onGestureEnd: function(e) {
                            var t = w.zoom;
                            !w.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), w.params.zoomMin), t.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                        },
                        onTouchStart: function(e, t) {
                            var i = e.zoom;
                            i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                        },
                        onTouchMove: function(e) {
                            var t = w.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length && (w.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = w.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = w.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), w.rtl && (t.image.startX = -t.image.startX), w.rtl && (t.image.startY = -t.image.startY));
                                var i = t.image.width * t.scale,
                                    n = t.image.height * t.scale;
                                if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                    if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                        if (w.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                        if (!w.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                    }
                                    e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function(e, t) {
                            var i = e.zoom;
                            if (i.gesture.image && 0 !== i.gesture.image.length) {
                                if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                                i.image.isTouched = !1, i.image.isMoved = !1;
                                var n = 300,
                                    r = 300,
                                    s = i.velocity.x * n,
                                    a = i.image.currentX + s,
                                    o = i.velocity.y * r,
                                    l = i.image.currentY + o;
                                0 !== i.velocity.x && (n = Math.abs((a - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (r = Math.abs((l - i.image.currentY) / i.velocity.y));
                                var d = Math.max(n, r);
                                i.image.currentX = a, i.image.currentY = l;
                                var c = i.image.width * i.scale,
                                    u = i.image.height * i.scale;
                                i.image.minX = Math.min(i.gesture.slideWidth / 2 - c / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - u / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(d).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function(e) {
                            var t = e.zoom;
                            t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                        },
                        toggleZoom: function(t, i) {
                            var n, r, s, a, o, l, d, c, u, p, h, A, f, m, g, v, y = t.zoom;
                            (y.gesture.slide || (y.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + t.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, r = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = y.image.touchesStart.x, r = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (g = y.gesture.slide[0].offsetWidth, v = y.gesture.slide[0].offsetHeight, s = y.gesture.slide.offset().left + g / 2 - n, a = y.gesture.slide.offset().top + v / 2 - r, d = y.gesture.image[0].offsetWidth, c = y.gesture.image[0].offsetHeight, u = d * y.scale, p = c * y.scale, f = -(h = Math.min(g / 2 - u / 2, 0)), m = -(A = Math.min(v / 2 - p / 2, 0)), (o = s * y.scale) < h && (o = h), o > f && (o = f), (l = a * y.scale) < A && (l = A), l > m && (l = m)) : (o = 0, l = 0), y.gesture.imageWrap.transition(300).transform("translate3d(" + o + "px, " + l + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                        },
                        attachEvents: function(t) {
                            var i = t ? "off" : "on";
                            if (w.params.zoom) {
                                var n = (w.slides, !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                });
                                w.support.gestures ? (w.slides[i]("gesturestart", w.zoom.onGestureStart, n), w.slides[i]("gesturechange", w.zoom.onGestureChange, n), w.slides[i]("gestureend", w.zoom.onGestureEnd, n)) : "touchstart" === w.touchEvents.start && (w.slides[i](w.touchEvents.start, w.zoom.onGestureStart, n), w.slides[i](w.touchEvents.move, w.zoom.onGestureChange, n), w.slides[i](w.touchEvents.end, w.zoom.onGestureEnd, n)), w[i]("touchStart", w.zoom.onTouchStart), w.slides.each(function(t, n) {
                                    e(n).find("." + w.params.zoomContainerClass).length > 0 && e(n)[i](w.touchEvents.move, w.zoom.onTouchMove)
                                }), w[i]("touchEnd", w.zoom.onTouchEnd), w[i]("transitionEnd", w.zoom.onTransitionEnd), w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom)
                            }
                        },
                        init: function() {
                            w.zoom.attachEvents()
                        },
                        destroy: function() {
                            w.zoom.attachEvents(!0)
                        }
                    }, w._plugins = [], w.plugins) {
                    var O = w.plugins[z](w, w.params[z]);
                    O && w._plugins.push(O)
                }
                return w.callPlugins = function(e) {
                    for (var t = 0; t < w._plugins.length; t++) e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, w.emitterEventListeners = {}, w.emit = function(e) {
                    var t;
                    if (w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), w.emitterEventListeners[e])
                        for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, w.on = function(e, t) {
                    return e = p(e), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), w.emitterEventListeners[e].push(t), w
                }, w.off = function(e, t) {
                    var i;
                    if (e = p(e), void 0 === t) return w.emitterEventListeners[e] = [], w;
                    if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                        for (i = 0; i < w.emitterEventListeners[e].length; i++) w.emitterEventListeners[e][i] === t && w.emitterEventListeners[e].splice(i, 1);
                        return w
                    }
                }, w.once = function(e, t) {
                    e = p(e);
                    var i = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, i)
                    };
                    return w.on(e, i), w
                }, w.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(t) {
                        13 === t.keyCode && (e(t.target).is(w.params.nextButton) ? (w.onClickNext(t), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : e(t.target).is(w.params.prevButton) && (w.onClickPrev(t), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), e(t.target).is("." + w.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion: e('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = w.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function() {
                        w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)), e(w.container).append(w.a11y.liveRegion)
                    },
                    initPagination: function() {
                        w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                            var t = e(this);
                            w.a11y.makeFocusable(t), w.a11y.addRole(t, "button"), w.a11y.addLabel(t, w.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function() {
                        w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                    }
                }, w.init = function() {
                    w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.zoom && w.zoom && w.zoom.init(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState), w.params.history && w.history && w.history.init(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w)
                }, w.cleanupStyles = function() {
                    w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && e(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && e(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
                }, w.destroy = function(e, t) {
                    w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), t && w.cleanupStyles(), w.disconnectObservers(), w.params.zoom && w.zoom && w.zoom.destroy(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState), w.params.hashnav && w.hashnav && w.hashnav.destroy(), w.emit("onDestroy"), !1 !== e && (w = null)
                }, w.init(), w
            }
        };
        i.prototype = {
            isSafari: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var e = window.navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(iPad).*OS\s([\d_]+)/),
                    n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    r = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: i || r || n,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                        if (t[i] in e) return !0
                }(),
                observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in window
            },
            plugins: {}
        };
        for (var n = function() {
                var e = function(e) {
                        var t = 0;
                        for (t = 0; t < e.length; t++) this[t] = e[t];
                        return this.length = e.length, this
                    },
                    t = function(t, i) {
                        var n = [],
                            r = 0;
                        if (t && !i && t instanceof e) return t;
                        if (t)
                            if ("string" == typeof t) {
                                var s, a, o = t.trim();
                                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (a = document.createElement(l)).innerHTML = t, r = 0; r < a.childNodes.length; r++) n.push(a.childNodes[r])
                                } else
                                    for (s = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < s.length; r++) s[r] && n.push(s[r])
                            } else if (t.nodeType || t === window || t === document) n.push(t);
                        else if (t.length > 0 && t[0].nodeType)
                            for (r = 0; r < t.length; r++) n.push(t[r]);
                        return new e(n)
                    };
                return e.prototype = {
                    addClass: function(e) {
                        if (void 0 === e) return this;
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                        return this
                    },
                    removeClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                        return this
                    },
                    hasClass: function(e) {
                        return !!this[0] && this[0].classList.contains(e)
                    },
                    toggleClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                        return this
                    },
                    attr: function(e, t) {
                        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var i = 0; i < this.length; i++)
                            if (2 === arguments.length) this[i].setAttribute(e, t);
                            else
                                for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                        return this
                    },
                    removeAttr: function(e) {
                        for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                        return this
                    },
                    data: function(e, t) {
                        if (void 0 !== t) {
                            for (var i = 0; i < this.length; i++) {
                                var n = this[i];
                                n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t
                            }
                            return this
                        }
                        if (this[0]) {
                            var r = this[0].getAttribute("data-" + e);
                            return r || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                        }
                    },
                    transform: function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                        }
                        return this
                    },
                    transition: function(e) {
                        "string" != typeof e && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                        }
                        return this
                    },
                    on: function(e, i, n, r) {
                        function s(e) {
                            var r = e.target;
                            if (t(r).is(i)) n.call(r, e);
                            else
                                for (var s = t(r).parents(), a = 0; a < s.length; a++) t(s[a]).is(i) && n.call(s[a], e)
                        }
                        var a, o, l = e.split(" ");
                        for (a = 0; a < this.length; a++)
                            if ("function" == typeof i || !1 === i)
                                for ("function" == typeof i && (n = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) this[a].addEventListener(l[o], n, r);
                            else
                                for (o = 0; o < l.length; o++) this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({
                                    listener: n,
                                    liveListener: s
                                }), this[a].addEventListener(l[o], s, r);
                        return this
                    },
                    off: function(e, t, i, n) {
                        for (var r = e.split(" "), s = 0; s < r.length; s++)
                            for (var a = 0; a < this.length; a++)
                                if ("function" == typeof t || !1 === t) "function" == typeof t && (i = arguments[1], n = arguments[2] || !1), this[a].removeEventListener(r[s], i, n);
                                else if (this[a].dom7LiveListeners)
                            for (var o = 0; o < this[a].dom7LiveListeners.length; o++) this[a].dom7LiveListeners[o].listener === i && this[a].removeEventListener(r[s], this[a].dom7LiveListeners[o].liveListener, n);
                        return this
                    },
                    once: function(e, t, i, n) {
                        var r = this;
                        "function" == typeof t && (t = !1, i = arguments[1], n = arguments[2]), r.on(e, t, function s(a) {
                            i(a), r.off(e, t, s, n)
                        }, n)
                    },
                    trigger: function(e, t) {
                        for (var i = 0; i < this.length; i++) {
                            var n;
                            try {
                                n = new window.CustomEvent(e, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (i) {
                                (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t
                            }
                            this[i].dispatchEvent(n)
                        }
                        return this
                    },
                    transitionEnd: function(e) {
                        function t(s) {
                            if (s.target === this)
                                for (e.call(this, s), i = 0; i < n.length; i++) r.off(n[i], t)
                        }
                        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            r = this;
                        if (e)
                            for (i = 0; i < n.length; i++) r.on(n[i], t);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(e) {
                        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(e) {
                        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var e = this[0],
                                t = e.getBoundingClientRect(),
                                i = document.body,
                                n = e.clientTop || i.clientTop || 0,
                                r = e.clientLeft || i.clientLeft || 0,
                                s = window.pageYOffset || e.scrollTop,
                                a = window.pageXOffset || e.scrollLeft;
                            return {
                                top: t.top + s - n,
                                left: t.left + a - r
                            }
                        }
                        return null
                    },
                    css: function(e, t) {
                        var i;
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (i = 0; i < this.length; i++)
                                    for (var n in e) this[i].style[n] = e[n];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                        }
                        if (2 === arguments.length && "string" == typeof e) {
                            for (i = 0; i < this.length; i++) this[i].style[e] = t;
                            return this
                        }
                        return this
                    },
                    each: function(e) {
                        for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                        return this
                    },
                    html: function(e) {
                        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                        for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                        return this
                    },
                    text: function(e) {
                        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t++) this[t].textContent = e;
                        return this
                    },
                    is: function(i) {
                        if (!this[0]) return !1;
                        var n, r;
                        if ("string" == typeof i) {
                            var s = this[0];
                            if (s === document) return i === document;
                            if (s === window) return i === window;
                            if (s.matches) return s.matches(i);
                            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(i);
                            if (s.mozMatchesSelector) return s.mozMatchesSelector(i);
                            if (s.msMatchesSelector) return s.msMatchesSelector(i);
                            for (n = t(i), r = 0; r < n.length; r++)
                                if (n[r] === this[0]) return !0;
                            return !1
                        }
                        if (i === document) return this[0] === document;
                        if (i === window) return this[0] === window;
                        if (i.nodeType || i instanceof e) {
                            for (n = i.nodeType ? [i] : i, r = 0; r < n.length; r++)
                                if (n[r] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                            return t
                        }
                    },
                    eq: function(t) {
                        if (void 0 === t) return this;
                        var i, n = this.length;
                        return t > n - 1 ? new e([]) : t < 0 ? new e((i = n + t) < 0 ? [] : [this[i]]) : new e([this[t]])
                    },
                    append: function(t) {
                        var i, n;
                        for (i = 0; i < this.length; i++)
                            if ("string" == typeof t) {
                                var r = document.createElement("div");
                                for (r.innerHTML = t; r.firstChild;) this[i].appendChild(r.firstChild)
                            } else if (t instanceof e)
                            for (n = 0; n < t.length; n++) this[i].appendChild(t[n]);
                        else this[i].appendChild(t);
                        return this
                    },
                    prepend: function(t) {
                        var i, n;
                        for (i = 0; i < this.length; i++)
                            if ("string" == typeof t) {
                                var r = document.createElement("div");
                                for (r.innerHTML = t, n = r.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(r.childNodes[n], this[i].childNodes[0])
                            } else if (t instanceof e)
                            for (n = 0; n < t.length; n++) this[i].insertBefore(t[n], this[i].childNodes[0]);
                        else this[i].insertBefore(t, this[i].childNodes[0]);
                        return this
                    },
                    insertBefore: function(e) {
                        for (var i = t(e), n = 0; n < this.length; n++)
                            if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]);
                            else if (i.length > 1)
                            for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r])
                    },
                    insertAfter: function(e) {
                        for (var i = t(e), n = 0; n < this.length; n++)
                            if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                            else if (i.length > 1)
                            for (var r = 0; r < i.length; r++) i[r].parentNode.insertBefore(this[n].cloneNode(!0), i[r].nextSibling)
                    },
                    next: function(i) {
                        return new e(this.length > 0 ? i ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                    },
                    nextAll: function(i) {
                        var n = [],
                            r = this[0];
                        if (!r) return new e([]);
                        for (; r.nextElementSibling;) {
                            var s = r.nextElementSibling;
                            i ? t(s).is(i) && n.push(s) : n.push(s), r = s
                        }
                        return new e(n)
                    },
                    prev: function(i) {
                        return new e(this.length > 0 ? i ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                    },
                    prevAll: function(i) {
                        var n = [],
                            r = this[0];
                        if (!r) return new e([]);
                        for (; r.previousElementSibling;) {
                            var s = r.previousElementSibling;
                            i ? t(s).is(i) && n.push(s) : n.push(s), r = s
                        }
                        return new e(n)
                    },
                    parent: function(e) {
                        for (var i = [], n = 0; n < this.length; n++) e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                        return t(t.unique(i))
                    },
                    parents: function(e) {
                        for (var i = [], n = 0; n < this.length; n++)
                            for (var r = this[n].parentNode; r;) e ? t(r).is(e) && i.push(r) : i.push(r), r = r.parentNode;
                        return t(t.unique(i))
                    },
                    find: function(t) {
                        for (var i = [], n = 0; n < this.length; n++)
                            for (var r = this[n].querySelectorAll(t), s = 0; s < r.length; s++) i.push(r[s]);
                        return new e(i)
                    },
                    children: function(i) {
                        for (var n = [], r = 0; r < this.length; r++)
                            for (var s = this[r].childNodes, a = 0; a < s.length; a++) i ? 1 === s[a].nodeType && t(s[a]).is(i) && n.push(s[a]) : 1 === s[a].nodeType && n.push(s[a]);
                        return new e(t.unique(n))
                    },
                    remove: function() {
                        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                        return this
                    },
                    add: function() {
                        var e, i, n = this;
                        for (e = 0; e < arguments.length; e++) {
                            var r = t(arguments[e]);
                            for (i = 0; i < r.length; i++) n[n.length] = r[i], n.length++
                        }
                        return n
                    }
                }, t.fn = e.prototype, t.unique = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }, t
            }(), r = ["jQuery", "Zepto", "Dom7"], s = 0; s < r.length; s++) window[r[s]] && function(e) {
            e.fn.swiper = function(t) {
                var n;
                return e(this).each(function() {
                    var e = new i(this, t);
                    n || (n = e)
                }), n
            }
        }(window[r[s]]);
        (t = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n) && ("transitionEnd" in t.fn || (t.fn.transitionEnd = function(e) {
            function t(s) {
                if (s.target === this)
                    for (e.call(this, s), i = 0; i < n.length; i++) r.off(n[i], t)
            }
            var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (e)
                for (i = 0; i < n.length; i++) r.on(n[i], t);
            return this
        }), "transform" in t.fn || (t.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
            }
            return this
        }), "transition" in t.fn || (t.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
            }
            return this
        }), "outerWidth" in t.fn || (t.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = i
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, i, n, r, s, a, o = "Close",
            l = "BeforeClose",
            d = "MarkupParse",
            c = "Open",
            u = "Change",
            p = "mfp",
            h = "." + p,
            A = "mfp-ready",
            f = "mfp-removing",
            m = "mfp-prevent-close",
            g = function() {},
            v = !!window.jQuery,
            y = e(window),
            w = function(e, i) {
                t.ev.on(p + e + h, i)
            },
            T = function(t, i, n, r) {
                var s = document.createElement("div");
                return s.className = "mfp-" + t, n && (s.innerHTML = n), r ? i && i.appendChild(s) : (s = e(s), i && s.appendTo(i)), s
            },
            b = function(i, n) {
                t.ev.triggerHandler(p + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
            },
            P = function(i) {
                return i === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = i), t.currTemplate.closeBtn
            },
            C = function() {
                e.magnificPopup.instance || ((t = new g).init(), e.magnificPopup.instance = t)
            };
        g.prototype = {
            constructor: g,
            init: function() {
                var i = navigator.appVersion;
                t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function() {
                    var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length;)
                        if (t.pop() + "Transition" in e) return !0;
                    return !1
                }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
            },
            open: function(i) {
                var r;
                if (!1 === i.isObj) {
                    t.items = i.items.toArray(), t.index = 0;
                    var a, o = i.items;
                    for (r = 0; r < o.length; r++)
                        if ((a = o[r]).parsed && (a = a.el[0]), a === i.el[0]) {
                            t.index = r;
                            break
                        }
                } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
                if (!t.isOpen) {
                    t.types = [], s = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = T("bg").on("click" + h, function() {
                        t.close()
                    }), t.wrap = T("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                        t._checkIfClose(e.target) && t.close()
                    }), t.container = T("container", t.wrap)), t.contentContainer = T("content"), t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
                    var l = e.magnificPopup.modules;
                    for (r = 0; r < l.length; r++) {
                        var u = l[r];
                        u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                    }
                    b("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(d, function(e, t, i, n) {
                        i.close_replaceWith = P(n.type)
                    }), s += " mfp-close-btn-in") : t.wrap.append(P())), t.st.alignTop && (s += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: "hidden",
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: y.scrollTop(),
                        position: "absolute"
                    }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }), t.st.enableEscapeKey && n.on("keyup" + h, function(e) {
                        27 === e.keyCode && t.close()
                    }), y.on("resize" + h, function() {
                        t.updateSize()
                    }), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
                    var p = t.wH = y.height(),
                        f = {};
                    if (t.fixedContentPos && t._hasScrollBar(p)) {
                        var m = t._getScrollbarSize();
                        m && (f.marginRight = m)
                    }
                    t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                    var g = t.st.mainClass;
                    return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), b("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                        t.content ? (t._addClassToMFP(A), t._setFocus()) : t.bgOverlay.addClass(A), n.on("focusin" + h, t._onFocusIn)
                    }, 16), t.isOpen = !0, t.updateSize(p), b(c), i
                }
                t.updateItemHTML()
            },
            close: function() {
                t.isOpen && (b(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(f), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                b(o);
                var i = f + " " + A + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                    var r = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
                }
                n.off("keyup.mfp focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, b("AfterClose")
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    t.wrap.css("height", n), t.wH = n
                } else t.wH = e || y.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), b("Resize")
            },
            updateItemHTML: function() {
                var i = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
                var n = i.type;
                if (b("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                    var s = !!t.st[n] && t.st[n].markup;
                    b("FirstMarkupParse", s), t.currTemplate[n] = !s || e(s)
                }
                r && r !== i.type && t.container.removeClass("mfp-" + r + "-holder");
                var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
                t.appendContent(a, n), i.preloaded = !0, b(u, i), r = i.type, t.container.prepend(t.contentContainer), b("AfterChange")
            },
            appendContent: function(e, i) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(P()) : t.content = e : t.content = "", b("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(i) {
                var n, r = t.items[i];
                if (r.tagName ? r = {
                        el: e(r)
                    } : (n = r.type, r = {
                        data: r,
                        src: r.src
                    }), r.el) {
                    for (var s = t.types, a = 0; a < s.length; a++)
                        if (r.el.hasClass("mfp-" + s[a])) {
                            n = s[a];
                            break
                        } r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
                }
                return r.type = n || t.st.type || "inline", r.index = i, r.parsed = !0, t.items[i] = r, b("ElementParse", r), t.items[i]
            },
            addGroup: function(e, i) {
                var n = function(n) {
                    n.mfpEl = this, t._openClick(n, e, i)
                };
                i || (i = {});
                var r = "click.magnificPopup";
                i.mainEl = e, i.items ? (i.isObj = !0, e.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? e.off(r).on(r, i.delegate, n) : (i.items = e, e.off(r).on(r, n)))
            },
            _openClick: function(i, n, r) {
                if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                    if (s)
                        if (e.isFunction(s)) {
                            if (!s.call(t)) return !0
                        } else if (y.width() < s) return !0;
                    i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), r.el = e(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), t.open(r)
                }
            },
            updateStatus: function(e, n) {
                if (t.preloader) {
                    i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                    var r = {
                        status: e,
                        text: n
                    };
                    b("UpdateStatus", r), e = r.status, n = r.text, t.preloader.html(n), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), i = e
                }
            },
            _checkIfClose: function(i) {
                if (!e(i).hasClass(m)) {
                    var n = t.st.closeOnContentClick,
                        r = t.st.closeOnBgClick;
                    if (n && r) return !0;
                    if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                    if (i === t.content[0] || e.contains(t.content[0], i)) {
                        if (n) return !0
                    } else if (r && e.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || y.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, i, n) {
                var r;
                n.data && (i = e.extend(n.data, i)), b(d, [t, i, n]), e.each(i, function(i, n) {
                    if (void 0 === n || !1 === n) return !0;
                    if ((r = i.split("_")).length > 1) {
                        var s = t.find(h + "-" + r[0]);
                        if (s.length > 0) {
                            var a = r[1];
                            "replaceWith" === a ? s[0] !== n[0] && s.replaceWith(n) : "img" === a ? s.is("img") ? s.attr("src", n) : s.replaceWith(e("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(r[1], n)
                        }
                    } else t.find(h + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: g.prototype,
            modules: [],
            open: function(t, i) {
                return C(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, i) {
                i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ti-close"></i></button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, e.fn.magnificPopup = function(i) {
            C();
            var n = e(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var r, s = v ? n.data("magnificPopup") : n[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    s.items ? r = s.items[a] : (r = n, s.delegate && (r = r.find(s.delegate)), r = r.eq(a)), t._openClick({
                        mfpEl: r
                    }, n, s)
                } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
            else i = e.extend(!0, {}, i), v ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
            return n
        };
        var S, x, E, _ = "inline",
            k = function() {
                E && (x.after(E.addClass(S)).detach(), E = null)
            };
        e.magnificPopup.registerModule(_, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(_), w(o + "." + _, function() {
                        k()
                    })
                },
                getInline: function(i, n) {
                    if (k(), i.src) {
                        var r = t.st.inline,
                            s = e(i.src);
                        if (s.length) {
                            var a = s[0].parentNode;
                            a && a.tagName && (x || (S = r.hiddenClass, x = T(S), S = "mfp-" + S), E = s.after(x).detach().removeClass(S)), t.updateStatus("ready")
                        } else t.updateStatus("error", r.tNotFound), s = e("<div>");
                        return i.inlineElement = s, s
                    }
                    return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
                }
            }
        });
        var D, I = "ajax",
            Q = function() {
                D && e(document.body).removeClass(D)
            },
            Y = function() {
                Q(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(I), D = t.st.ajax.cursor, w(o + "." + I, Y), w("BeforeChange." + I, Y)
                },
                getAjax: function(i) {
                    D && e(document.body).addClass(D), t.updateStatus("loading");
                    var n = e.extend({
                        url: i.src,
                        success: function(n, r, s) {
                            var a = {
                                data: n,
                                xhr: s
                            };
                            b("ParseAjax", a), t.appendContent(e(a.data), I), i.finished = !0, Q(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(A)
                            }, 16), t.updateStatus("ready"), b("AjaxContentAdded")
                        },
                        error: function() {
                            Q(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(n), ""
                }
            }
        });
        var j, M = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = t.st.image.titleSrc;
            if (n) {
                if (e.isFunction(n)) return n.call(t, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = t.st.image,
                        n = ".image";
                    t.types.push("image"), w(c + n, function() {
                        "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                    }), w(o + n, function() {
                        i.cursor && e(document.body).removeClass(i.cursor), y.off("resize" + h)
                    }), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var i = 0;
                        t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, b("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var i = 0,
                        n = e.img[0],
                        r = function(s) {
                            j && clearInterval(j), j = setInterval(function() {
                                return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(j), void(3 === ++i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
                            }, s)
                        };
                    r(1)
                },
                getImage: function(i, n) {
                    var r = 0,
                        s = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, b("ImageLoadComplete")) : 200 > ++r ? setTimeout(s, 100) : a())
                        },
                        a = function() {
                            i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", o.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        o = t.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var d = document.createElement("img");
                        d.className = "mfp-img", i.el && i.el.find("img").length && (d.alt = i.el.find("img").attr("alt")), i.img = e(d).on("load.mfploader", s).on("error.mfploader", a), d.src = i.src, l.is("img") && (i.img = i.img.clone()), (d = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : d.width || (i.hasSize = !1)
                    }
                    return t._parseMarkup(n, {
                        title: M(i),
                        img_replaceWith: i.img
                    }, i), t.resizeImage(), i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", o.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
                }
            }
        });
        var B;
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, i = t.st.zoom,
                        n = ".zoom";
                    if (i.enabled && t.supportsTransition) {
                        var r, s, a = i.duration,
                            d = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    s = "transition";
                                return r["-webkit-" + s] = r["-moz-" + s] = r["-o-" + s] = r[s] = n, t.css(r), t
                            },
                            c = function() {
                                t.content.css("visibility", "visible")
                            };
                        w("BuildControls" + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void c();
                                (s = d(e)).css(t._getOffset()), t.wrap.append(s), r = setTimeout(function() {
                                    s.css(t._getOffset(!0)), r = setTimeout(function() {
                                        c(), setTimeout(function() {
                                            s.remove(), e = s = null, b("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), w(l + n, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.st.removalDelay = a, !e) {
                                    if (!(e = t._getItemToZoom())) return;
                                    s = d(e)
                                }
                                s.css(t._getOffset(!0)), t.wrap.append(s), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    s.css(t._getOffset())
                                }, 16)
                            }
                        }), w(o + n, function() {
                            t._allowZoom() && (c(), s && s.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function(i) {
                    var n, r = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                        s = parseInt(n.css("padding-top"), 10),
                        a = parseInt(n.css("padding-bottom"), 10);
                    r.top -= e(window).scrollTop() - s;
                    var o = {
                        width: n.width(),
                        height: (v ? n.innerHeight() : n[0].offsetHeight) - a - s
                    };
                    return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), B ? o["-moz-transform"] = o.transform = "translate(" + r.left + "px," + r.top + "px)" : (o.left = r.left, o.top = r.top), o
                }
            }
        });
        var z = "iframe",
            O = function(e) {
                if (t.currTemplate[z]) {
                    var i = t.currTemplate[z].find("iframe");
                    i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(z), w("BeforeChange", function(e, t, i) {
                        t !== i && (t === z ? O() : i === z && O(!0))
                    }), w(o + "." + z, function() {
                        O()
                    })
                },
                getIframe: function(i, n) {
                    var r = i.src,
                        s = t.st.iframe;
                    e.each(s.patterns, function() {
                        return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                    });
                    var a = {};
                    return s.srcAction && (a[s.srcAction] = r), t._parseMarkup(n, a, i), t.updateStatus("ready"), n
                }
            }
        });
        var $ = function(e) {
                var i = t.items.length;
                return e > i - 1 ? e - i : 0 > e ? i + e : e
            },
            L = function(e, t, i) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = t.st.gallery,
                        r = ".mfp-gallery";
                    return t.direction = !0, !(!i || !i.enabled) && (s += " mfp-gallery", w(c + r, function() {
                        i.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), n.on("keydown" + r, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), w("UpdateStatus" + r, function(e, i) {
                        i.text && (i.text = L(i.text, t.currItem.index, t.items.length))
                    }), w(d + r, function(e, n, r, s) {
                        var a = t.items.length;
                        r.counter = a > 1 ? L(i.tCounter, s.index, a) : ""
                    }), w("BuildControls" + r, function() {
                        if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                            var n = i.arrowMarkup,
                                r = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                                s = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(m);
                            r.click(function() {
                                t.prev()
                            }), s.click(function() {
                                t.next()
                            }), t.container.append(r.add(s))
                        }
                    }), w(u + r, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void w(o + r, function() {
                        n.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null
                    }))
                },
                next: function() {
                    t.direction = !0, t.index = $(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = $(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, i = t.st.gallery.preload,
                        n = Math.min(i[0], t.items.length),
                        r = Math.min(i[1], t.items.length);
                    for (e = 1; e <= (t.direction ? r : n); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? n : r); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(i) {
                    if (i = $(i), !t.items[i].preloaded) {
                        var n = t.items[i];
                        n.parsed || (n = t.parseEl(i)), b("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, b("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var R = "retina";
        e.magnificPopup.registerModule(R, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            i = e.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + R, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), w("ElementParse." + R, function(t, n) {
                            n.src = e.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), C()
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        "use strict";

        function t(e) {
            var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(t)
        }

        function i(e) {
            return function(i) {
                var r = i.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (r)
                    for (var s = 0, a = r.length; s < a; ++s) {
                        var l = r[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            d = t(l[0]),
                            c = l[1] || "",
                            u = l[3] || "",
                            p = null;
                        l = l[2], o.hasOwnProperty(l) && (p = o[l], p = Number(e[p])), null !== p && ("!" === c && (p = n(u, p)), "" === c && p < 10 && (p = "0" + p.toString()), i = i.replace(d, p.toString()))
                    }
                return i.replace(/%%/, "%")
            }
        }

        function n(e, t) {
            var i = "s",
                n = "";
            return e && (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? i = e[0] : (n = e[0], i = e[1])), Math.abs(t) > 1 ? i : n
        }
        var r = [],
            s = [],
            a = {
                precision: 100,
                elapse: !1,
                defer: !1
            };
        s.push(/^[0-9]*$/.source), s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), s = new RegExp(s.join("|"));
        var o = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                d: "daysToWeek",
                w: "weeks",
                W: "weeksToMonth",
                H: "hours",
                M: "minutes",
                S: "seconds",
                D: "totalDays",
                I: "totalHours",
                N: "totalMinutes",
                T: "totalSeconds"
            },
            l = function(t, i, n) {
                this.el = t, this.$el = e(t), this.interval = null, this.offset = {}, this.options = e.extend({}, a), this.instanceNumber = r.length, r.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = e.extend({}, a, n)), this.setFinalDate(i), !1 === this.options.defer && this.start()
            };
        e.extend(l.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(), this.interval = setInterval(function() {
                    e.update.call(e)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), r[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(e) {
                this.finalDate = function(e) {
                    if (e instanceof Date) return e;
                    if (String(e).match(s)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
                    throw new Error("Couldn't cast `" + e + "` to a date object.")
                }(e)
            },
            update: function() {
                if (0 !== this.$el.closest("html").length) {
                    var t, i = void 0 !== e._data(this.el, "events"),
                        n = new Date;
                    t = this.finalDate.getTime() - n.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft !== t && i && (this.totalSecsLeft = t, this.elapsed = n >= this.finalDate, this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - n.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
                } else this.remove()
            },
            dispatchEvent: function(t) {
                var n = e.Event(t + ".countdown");
                n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = e.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n)
            }
        }), e.fn.countdown = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var i = e(this).data("countdown-instance");
                if (void 0 !== i) {
                    var n = r[i],
                        s = t[0];
                    l.prototype.hasOwnProperty(s) ? n[s].apply(n, t.slice(1)) : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, s), n.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, s))
                } else new l(this, t[0], t[1])
            })
        }
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(i, n) {
                var r, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(i),
                    appendDots: e(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, r), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var r = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= r.slideCount) return !1;
            r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : !0 === n ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                r = this;
            r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
                left: t
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: t
            }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({
                animStart: r.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === r.options.vertical ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function(t) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, n, r, s, a, o = this;
            if (n = document.createDocumentFragment(), s = o.$slider.children(), o.options.rows > 1) {
                for (a = o.options.slidesPerRow * o.options.rows, r = Math.ceil(s.length / a), e = 0; e < r; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < o.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < o.options.slidesPerRow; i++) {
                            var c = e * a + (t * o.options.slidesPerRow + i);
                            s.get(c) && d.appendChild(s.get(c))
                        }
                        l.appendChild(d)
                    }
                    n.appendChild(l)
                }
                o.$slider.empty().append(n), o.$slider.children().children().children().css({
                    width: 100 / o.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, r, s, a = this,
                o = !1,
                l = a.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === a.respondTo ? s = d : "slider" === a.respondTo ? s = l : "min" === a.respondTo && (s = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                for (n in r = null, a.breakpoints) a.breakpoints.hasOwnProperty(n) && (!1 === a.originalSettings.mobileFirst ? s < a.breakpoints[n] && (r = a.breakpoints[n]) : s > a.breakpoints[n] && (r = a.breakpoints[n]));
                null !== r ? null !== a.activeBreakpoint ? (r !== a.activeBreakpoint || i) && (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), o = r) : (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), o = r) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), o = r), t || !1 === o || a.$slider.trigger("breakpoint", [a, o])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, r, s = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                    break;
                case "next":
                    r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                    break;
                case "index":
                    var o = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(o), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e;
            this.options.rows > 1 && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, r = this,
                s = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                r = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return r
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(r, s) {
                if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
            }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            var t, i, n = this;

            function r(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, t, i])
                        })
                    }, r.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, i])
                    }, r.src = i
                })
            }!0 === n.options.centerMode ? !0 === n.options.infinite ? i = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (t > 0 && t--, i <= n.slideCount && i++)), r(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? r(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? r(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && r(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, n, r, s = this,
                a = e("img[data-lazy]", s.$slider);
            a.length ? (i = a.first(), n = i.attr("data-lazy"), (r = document.createElement("img")).onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
            }, r.onerror = function() {
                t < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(t + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
            }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, t.prototype.refresh = function(t) {
            var i, n, r = this;
            n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
                currentSlide: i
            }), r.init(), t || r.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, r = this,
                s = r.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                for (t in r.respondTo = r.options.respondTo || "window", s)
                    if (n = r.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                        for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                        r.breakpoints.push(i), r.breakpointSettings[i] = s[t].settings
                    } r.breakpoints.sort(function(e, t) {
                    return r.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                r = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, r) {
                t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(r).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(r).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, n, r, s, a = this,
                o = !1;
            if ("object" === e.type(arguments[0]) ? (n = arguments[0], o = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], r = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) a.options[n] = r;
            else if ("multiple" === s) e.each(n, function(e, t) {
                a.options[e] = t
            });
            else if ("responsive" === s)
                for (i in r)
                    if ("array" !== e.type(a.options.responsive)) a.options.responsive = [r[i]];
                    else {
                        for (t = a.options.responsive.length - 1; t >= 0;) a.options.responsive[t].breakpoint === r[i].breakpoint && a.options.responsive.splice(t, 1), t--;
                        a.options.responsive.push(r[i])
                    } o && (a.unload(), a.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, r, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, r = this;
            if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow)) {
                for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                r = parseInt(n.attr("data-slick-index"));
            if (r || (r = 0), i.slideCount <= i.options.slidesToShow) return i.setSlideClasses(r), void i.asNavFor(r);
            i.slideHandler(r)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, r, s, a, o, l, d = this;
            if (t = t || !1, (!0 !== d.animating || !0 !== d.options.waitForAnimate) && !(!0 === d.options.fade && d.currentSlide === e || d.slideCount <= d.options.slidesToShow))
                if (!1 === t && d.asNavFor(e), n = e, o = d.getLeft(n), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(a, function() {
                    d.postSlide(n)
                }) : d.postSlide(n));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(a, function() {
                d.postSlide(n)
            }) : d.postSlide(n));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), r = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, r]), s = d.currentSlide, d.currentSlide = r, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(r, function() {
                    d.postSlide(r)
                })) : d.postSlide(r), void d.animateHeight();
                !0 !== i ? d.animateSlide(o, function() {
                    d.postSlide(r)
                }) : d.postSlide(r)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, r = this;
            return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, r, s, a = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * r : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, e.fn.slick = function() {
            var e, i, n = this,
                r = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                a = n.length;
            for (e = 0; e < a; e++)
                if ("object" == typeof r || void 0 === r ? n[e].slick = new t(n[e], r) : i = n[e].slick[r].apply(n[e].slick, s), void 0 !== i) return i;
            return n
        }
    });