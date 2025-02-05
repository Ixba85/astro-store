import { f as createComponent, g as createAstro, r as renderTemplate, k as renderComponent, m as maybeRenderHead, i as addAttribute } from '../../chunks/astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CNQcmg5A.mjs';
import { $ as $$ProductSlideshow } from '../../chunks/ProductSlideshow_Ccw24Vmy.mjs';
import { a as actions } from '../../chunks/_astro_actions_DWc8FMbh.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { data, error } = await Astro2.callAction(actions.getProductBySlug, slug ?? "");
  if (error) {
    return Astro2.redirect("/404");
  }
  const { product, images } = data;
  const image = images[0].image.startsWith("http") ? images[0].image : `${"http://localhost:4321"}/images/products/${images[0].image}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": product.title, "description": product.description, "image": image, "data-astro-cid-uq5bhyez": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4" data-astro-cid-uq5bhyez> ${renderComponent($$result2, "ProductSlideshow", $$ProductSlideshow, { "images": images.map((i) => i.image), "data-astro-cid-uq5bhyez": true })} <section data-astro-cid-uq5bhyez> <h2 class="text-2xl font-bold" data-astro-cid-uq5bhyez>${product.title}</h2> <h2 class="font-bold" data-astro-cid-uq5bhyez>$${product.price}</h2> <h3 class="mt-5" data-astro-cid-uq5bhyez>Tallas</h3> <ul class="flex gap-3" data-astro-cid-uq5bhyez> ${product.sizes.split(",").map((size) => renderTemplate`<li${addAttribute(size, "data-size")} data-astro-cid-uq5bhyez>${size}</li>`)} </ul> <h3 class="mt-5" data-astro-cid-uq5bhyez>Cantidad</h3> <div data-astro-cid-uq5bhyez> <button class="btn-quantity" data-astro-cid-uq5bhyez>-</button> <input type="number" min="1" value="1" data-astro-cid-uq5bhyez> <button class="btn-quantity" data-astro-cid-uq5bhyez>+</button> </div> <button class="mt-5 bg-blue-500 text-white p-3 w-full disabled:bg-gray-500" data-astro-cid-uq5bhyez>Añadir al carrito</button> <h3 class="mt-10" data-astro-cid-uq5bhyez>Descripción</h3> <p data-astro-cid-uq5bhyez>${product.description}</p> </section> </div> <input type="hidden" id="product-id"${addAttribute(product.id, "value")} data-astro-cid-uq5bhyez> ` })} `;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/products/[...slug].astro", undefined);
const $$file = "C:/Users/jordi/Desktop/Astro/07-store/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
