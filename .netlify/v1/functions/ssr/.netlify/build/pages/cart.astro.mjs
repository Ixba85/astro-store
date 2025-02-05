import { f as createComponent, g as createAstro, r as renderTemplate, k as renderComponent, l as renderScript, m as maybeRenderHead, i as addAttribute } from '../chunks/astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as actions } from '../chunks/_astro_actions_DWc8FMbh.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CNQcmg5A.mjs';
import 'js-cookie';
import { F as Formatter } from '../chunks/formatter_COXD278a.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const productsInCartCookie = Astro2.cookies.get("cart")?.json() ?? [];
  const { data: products, error } = await Astro2.callAction(actions.loadProductsFromCart, productsInCartCookie);
  console.log({ products, error });
  if (error || !products) {
    return Astro2.redirect("/");
  }
  const total = Array.isArray(products) ? products.reduce(
    (acc, product) => acc + (product.price * product.quantity || 0),
    0
  ) : 0;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Carrito de compras" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Carrito</h1> <section class="grid grid-cols-1 sm:grid-cols-2"> <!-- Productos --> <div class="order-2 sm:order-1"> <h2>Productos</h2> <a href="javascript:history.back()" class="hover:underline text-blue-500">Regresar</a> ${products.data.map((product) => product && renderTemplate`<div class="flex gap-5 mt-5"> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-20 h-20"> <div> <a${addAttribute(`/products/${product.slug}`, "href")} class="hover:underline"> ${product.title} </a> <p>$${product.price}</p> <p>Cantidad: ${product.quantity}</p> <p>
Talla: <span class="font-bold">${product.size}</span> </p> <button${addAttribute(product.productId, "data-id")}${addAttribute(product.size, "data-size")} class="text-blue-500 btn-delete">
Remover
</button> </div> </div>`)} </div> <!-- Totales --> <div class="bg-black h-[330px] text-white p-6 rounded-lg shadow-lg order-1"> <h2 class="text-lg font-semibold mb-4">Resumen de compra</h2> <div class="flex justify-between text-gray-400 mb-2"> <span>Envío</span> <span>Gratis</span> </div> <div class="flex justify-between text-gray-400 mb-4"> <span>SubTotal </span> <span>${Formatter.currency(total)}</span> </div> <div class="flex justify-between text-gray-400 mb-4"> <span>Impuesto </span> <span>${Formatter.currency(total * 0.15)}</span> </div> <div class="flex justify-between text-xl font-bold"> <span>Total</span> <span>${Formatter.currency(total * 1.15)}</span> </div> <button class="mt-10 w-full bg-blue-700 text-gray-300 py-3 rounded-lg hover:bg-gray-600 transition-all">
PAGAR
</button> </div> </section> ` })} ${renderScript($$result, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/cart/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/cart/index.astro", undefined);

const $$file = "C:/Users/jordi/Desktop/Astro/07-store/src/pages/cart/index.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
