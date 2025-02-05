import { f as createComponent, g as createAstro, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as actions } from '../chunks/_astro_actions_DWc8FMbh.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CNQcmg5A.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Pagination } from '../chunks/Pagination_SDCFooMv.mjs';
export { renderers } from '../renderers.mjs';

const ProductCard = ({ product }) => {
  const images = (product.images ?? "default-image.jpg").split(",").map((img) => {
    return img.startsWith("http") ? img : `${"http://localhost:4321"}/images/products/${img}`;
  });
  const [currentImage, setCurrentImage] = useState(images[0]);
  return /* @__PURE__ */ jsxs("a", { href: `/products/${product.slug}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: currentImage,
        alt: product.title,
        className: "h-[350px] object-contain",
        onMouseEnter: () => setCurrentImage(images[1] ?? images[0]),
        onMouseLeave: () => setCurrentImage(images[0])
      }
    ),
    /* @__PURE__ */ jsx("h4", { children: product.title }),
    /* @__PURE__ */ jsxs("p", { children: [
      "$",
      product.price
    ] })
  ] });
};

const ProductList = ({ products }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center", children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id ?? crypto.randomUUID())) });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const searchParams = Astro2.url.searchParams;
  const pageParam = Number(searchParams.get("page") ?? 1);
  const { data, error } = await Astro2.callAction(actions.getProductsByPage, { page: pageParam });
  if (error) {
    return Astro2.redirect("/");
  }
  const { products, totalPages } = data;
  if (data.products.length === 0) {
    return Astro2.redirect(`/?page=${totalPages}`);
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl">Listado de Productos</h1> ${renderComponent($$result2, "ProductList", ProductList, { "products": products, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/jordi/Desktop/Astro/07-store/src/components", "client:component-export": "ProductList" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages })} ` })}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/index.astro", undefined);

const $$file = "C:/Users/jordi/Desktop/Astro/07-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
