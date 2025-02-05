import { f as createComponent, g as createAstro, r as renderTemplate, m as maybeRenderHead, k as renderComponent, l as renderScript, p as createTransitionScope, i as addAttribute, n as renderHead, o as renderSlot } from './astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { atom } from 'nanostores';
import Cookies from 'js-cookie';
import './image-upload_DgGxkI0E.mjs';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
/* empty css                             */
import 'clsx';

const itemsInCart = atom(0);

class CartCookiesClient {
  static getCart() {
    return JSON.parse(Cookies.get("cart") ?? "[]");
  }
  static addItem(cartItem) {
    const cart = CartCookiesClient.getCart();
    const itemInCart = cart.find(
      (item) => item.productId === cartItem.productId && item.size === cartItem.size
    );
    if (itemInCart) {
      itemInCart.quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }
    Cookies.set("cart", JSON.stringify(cart));
    return cart;
  }
  static removeItem(productId, size) {
    const cart = CartCookiesClient.getCart();
    const updatedCart = cart.filter(
      (item) => !(item.productId === productId && item.size === size)
    );
    Cookies.set("cart", JSON.stringify(updatedCart));
    return updatedCart;
  }
}

const CartCounter = () => {
  const $itemsInCart = useStore(itemsInCart);
  useEffect(() => {
    const cart = CartCookiesClient.getCart();
    itemsInCart.set(cart.length);
  }, []);
  return /* @__PURE__ */ jsxs("a", { href: "/cart", className: "relative inline-block", children: [
    $itemsInCart > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 flex justify-center items-center bg-blue-600 text-white text-xs rounded-full w-5 h-5", children: $itemsInCart }),
    /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1.5em",
        height: "1.5em",
        viewBox: "0 0 512 512",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "black",
            d: "M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"
          }
        )
      }
    )
  ] });
};

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { isLoggedIn, isAdmin } = Astro2.locals;
  return renderTemplate`<!-- component -->${maybeRenderHead()}<nav class="flex justify-between px-20 py-10 items-center fixed top-0 w-full z-10 h-20" style="background-color: #e7e0e0;"> <h1 class="text-xl text-gray-800 font-bold"> <a href="/">AstroStore</a> </h1> <div class="flex items-center"> <ul class="flex items-center space-x-6"> ${renderComponent($$result, "CartCounter", CartCounter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/jordi/Desktop/Astro/07-store/src/components/cart/CartCounter", "client:component-export": "CartCounter", "data-astro-transition-persist": createTransitionScope($$result, "jzawfqn3") })} <li class="font-semibold text-gray-700"> <a href="/">Home</a> </li> ${isAdmin && renderTemplate`<li class="font-semibold text-gray-700"> <a href="/admin/dashboard">Admin</a> </li>`} ${!isLoggedIn ? renderTemplate`<li class="font-semibold text-gray-700"> <a href="/login">Ingresar</a> </li>` : renderTemplate`<li id="logout" class="font-semibold text-gray-700"> <a href="#">Salir</a> </li>`} </ul> </div> </nav> ${renderScript($$result, "C:/Users/jordi/Desktop/Astro/07-store/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/components/shared/Navbar.astro", "self");

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/jordi/Desktop/Astro/07-store/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "Astro Store",
    description = "Mi tienda",
    image = "http://localhost:4321/images/products/1740507-00-A_0_2000.jpg"
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Meta tags --><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="container m-auto max-w-5xl px-5 mt-20"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/layouts/MainLayout.astro", undefined);

export { $$MainLayout as $ };
