import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { createContext as n, useContext as r, useState as i } from "react";
//#region src/components/Button/Button.tsx
function a({ variant: n = "primary", size: r = "default", roundness: i = "default", leftIcon: a, rightIcon: o, children: s, className: c, disabled: l, ...u }) {
	return /* @__PURE__ */ t("button", {
		className: [
			"btn",
			`btn--${n}`,
			`btn--${r}`,
			i === "round" ? "btn--round" : "",
			c ?? ""
		].filter(Boolean).join(" "),
		disabled: l,
		...u,
		children: [
			a && /* @__PURE__ */ e("span", {
				className: "btn-icon",
				children: a
			}),
			s,
			o && /* @__PURE__ */ e("span", {
				className: "btn-icon",
				children: o
			})
		]
	});
}
//#endregion
//#region src/components/Accordion/Accordion.tsx
var o = n(null), s = n(null);
function c() {
	let e = r(o);
	if (!e) throw Error("AccordionItem must be inside Accordion");
	return e;
}
function l() {
	let e = r(s);
	if (!e) throw Error("AccordionTrigger/Content must be inside AccordionItem");
	return e;
}
function u({ style: t }) {
	return /* @__PURE__ */ e("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		"aria-hidden": !0,
		style: t,
		children: /* @__PURE__ */ e("path", {
			d: "M3.5 5.5L8 10L12.5 5.5",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function d({ type: t = "single", defaultValue: n, children: r, style: a, className: s }) {
	let [c, l] = i(n ? new Set([n]) : /* @__PURE__ */ new Set());
	function u(e) {
		l((n) => {
			let r = new Set(n);
			return r.has(e) ? r.delete(e) : (t === "single" && r.clear(), r.add(e)), r;
		});
	}
	return /* @__PURE__ */ e(o.Provider, {
		value: {
			openItems: c,
			toggle: u
		},
		children: /* @__PURE__ */ e("div", {
			style: a,
			className: s,
			children: r
		})
	});
}
function f({ value: n, children: r, variant: i = "line", position: a = "single", style: o }) {
	let { openItems: l } = c(), u = l.has(n), d = i === "bordered" ? a === "single" ? {
		borderRadius: 16,
		border: "1px solid var(--generalBorder)"
	} : a === "first" ? {
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderTop: "1px solid var(--generalBorder)",
		borderLeft: "1px solid var(--generalBorder)",
		borderRight: "1px solid var(--generalBorder)"
	} : a === "last" ? {
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
		borderBottom: "1px solid var(--generalBorder)",
		borderLeft: "1px solid var(--generalBorder)",
		borderRight: "1px solid var(--generalBorder)"
	} : {
		borderLeft: "1px solid var(--generalBorder)",
		borderRight: "1px solid var(--generalBorder)"
	} : {};
	return /* @__PURE__ */ e(s.Provider, {
		value: {
			value: n,
			isOpen: u,
			variant: i,
			position: a
		},
		children: /* @__PURE__ */ t("div", {
			style: {
				background: "var(--generalBackground)",
				position: "relative",
				...d,
				...o
			},
			children: [r, i === "bordered" && (a === "first" || a === "middle") && /* @__PURE__ */ e("div", {
				style: {
					position: "absolute",
					bottom: 0,
					left: -1,
					right: -1,
					height: 1,
					background: "var(--generalBorder)"
				},
				"aria-hidden": !0
			})]
		})
	});
}
function p({ children: n }) {
	let { toggle: r } = c(), { value: i, isOpen: a, variant: o } = l();
	return /* @__PURE__ */ t("button", {
		onClick: () => r(i),
		"aria-expanded": a,
		style: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			padding: "16px",
			background: "var(--generalBackground)",
			border: "none",
			borderBottom: o === "line" ? "1px solid var(--generalBorder)" : "none",
			cursor: "pointer",
			gap: 16,
			textAlign: "left",
			color: "var(--generalForeground)",
			transition: "background 150ms ease"
		},
		onMouseEnter: (e) => {
			e.currentTarget.style.background = "var(--generalAccent)";
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.background = "var(--generalBackground)";
		},
		children: [/* @__PURE__ */ e("span", {
			style: {
				flex: "1 0 0",
				fontSize: 14,
				fontWeight: 500,
				lineHeight: "20px",
				letterSpacing: 0,
				minWidth: 0,
				wordBreak: "break-word"
			},
			children: n
		}), /* @__PURE__ */ e(u, { style: {
			flexShrink: 0,
			transition: "transform 200ms ease",
			transform: a ? "rotate(180deg)" : "rotate(0deg)"
		} })]
	});
}
function m({ children: t }) {
	let { isOpen: n, variant: r } = l();
	return /* @__PURE__ */ e("div", {
		style: {
			display: "grid",
			gridTemplateRows: n ? "1fr" : "0fr",
			transition: "grid-template-rows 200ms ease",
			overflow: "hidden",
			paddingLeft: r === "bordered" ? 16 : 0,
			paddingRight: r === "bordered" ? 16 : 0
		},
		children: /* @__PURE__ */ e("div", {
			style: { overflow: "hidden" },
			children: /* @__PURE__ */ e("div", {
				style: {
					paddingBottom: 16,
					paddingTop: 0,
					fontSize: 14,
					fontWeight: 400,
					lineHeight: "20px",
					color: "var(--generalForeground)"
				},
				children: t
			})
		})
	});
}
//#endregion
export { d as Accordion, m as AccordionContent, f as AccordionItem, p as AccordionTrigger, a as Button };
