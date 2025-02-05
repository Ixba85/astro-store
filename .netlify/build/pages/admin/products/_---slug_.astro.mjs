import { f as createComponent, g as createAstro, r as renderTemplate, k as renderComponent, l as renderScript, m as maybeRenderHead, i as addAttribute } from '../../../chunks/astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_CkiM8o-B.mjs';
import { $ as $$ProductSlideshow } from '../../../chunks/ProductSlideshow_Ccw24Vmy.mjs';
import { a as actions } from '../../../chunks/image-upload_DgGxkI0E.mjs';
import { $ as $$ProductImage } from '../../../chunks/ProductImage_Bc_Rm6DD.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Mantenimiento de producto", "data-astro-cid-w7mueznz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-w7mueznz>${product.title}</h1> <a href="javascript:history.back()" class="text-blue-500" data-astro-cid-w7mueznz>← Volver</a> <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-w7mueznz> <input type="hidden" name="id"${addAttribute(product.id, "value")} data-astro-cid-w7mueznz> <!-- Datos generales --> <div class="mt-2" data-astro-cid-w7mueznz> <h2 class="text-lg font-semibold" data-astro-cid-w7mueznz>Datos generales</h2> <!-- Titulo --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="title" class="block" data-astro-cid-w7mueznz>Título</label> <input type="text" id="title" name="title"${addAttribute(product.title, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Slug --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="slug" class="block" data-astro-cid-w7mueznz>Slug</label> <input type="text" id="slug" name="slug"${addAttribute(product.slug, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Descripción --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="description" class="block" data-astro-cid-w7mueznz>Descripción</label> <textarea id="description" name="description" class="w-full p-2 border border-gray-300 rounded" rows="8" data-astro-cid-w7mueznz>${product.description}</textarea> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-5" data-astro-cid-w7mueznz> <!-- Precio --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="price" class="block" data-astro-cid-w7mueznz>Precio</label> <input type="number" id="price" name="price"${addAttribute(product.price, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Inventario --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="stock" class="block" data-astro-cid-w7mueznz>Inventario</label> <input type="number" id="stock" name="stock"${addAttribute(product.stock, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> </div> <!-- Labels --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="tags" class="block" data-astro-cid-w7mueznz>Etiquetas <small class="text-gray-500" data-astro-cid-w7mueznz>(Separado por comas)</small></label> <input type="text" id="tags" name="tags"${addAttribute(product.tags, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <div class="grid grid-cols-2 gap-4" data-astro-cid-w7mueznz> <!-- Gender --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="gender" class="block" data-astro-cid-w7mueznz>Sexo</label> <select class="w-full p-2 border border-gray-300 rounded" name="gender" data-astro-cid-w7mueznz> <option value="" data-astro-cid-w7mueznz>[ Seleccione ]</option> ${["men", "women", "unisex", "kid"].map((gender) => renderTemplate`<option${addAttribute(gender, "value")} class="capitalize"${addAttribute(gender === product.gender, "selected")} data-astro-cid-w7mueznz> ${gender.toUpperCase()} </option>`)} </select> </div> <!-- Type --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="tags" class="block" data-astro-cid-w7mueznz>Tipo</label> <select class="w-full p-2 border border-gray-300 rounded" name="type" data-astro-cid-w7mueznz> <option value="" data-astro-cid-w7mueznz>[ Seleccione ]</option> ${["shirts", "shirt", "pants", "hats", "hoodies"].map((type) => renderTemplate`<option${addAttribute(type, "value")} class="capitalize"${addAttribute(type === product.type, "selected")} data-astro-cid-w7mueznz> ${type.toUpperCase()} </option>`)} </select> </div> </div> <!-- Tallas --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="sizes" class="block" data-astro-cid-w7mueznz>Tallas</label> <div class="flex" data-astro-cid-w7mueznz> ${["XS", "S", "M", "L", "XL", "XXL"].map((size) => renderTemplate`<button type="button" onclick="this.classList.toggle('active')"${addAttribute([
    "btn-size",
    product.sizes.split(",").includes(size) ? "active" : ""
  ], "class:list")} data-astro-cid-w7mueznz> ${size} </button>`)} </div> </div> </div> <!-- Imagenes --> <div data-astro-cid-w7mueznz> <!-- File upload --> <div class="mt-4" data-astro-cid-w7mueznz> <!-- Guardar  --> <div class="flex justify-end" data-astro-cid-w7mueznz> <button class="bg-blue-500 mb-5 p-2 rounded text-white" data-astro-cid-w7mueznz>Guardar producto</button> </div> <!-- File input --> <div class="flex items-center justify-center w-full" data-astro-cid-w7mueznz> <label for="file-upload" class="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100" id="drop-zone" data-astro-cid-w7mueznz> <div class="flex flex-col items-center justify-center pt-5 pb-6" data-astro-cid-w7mueznz> <svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-w7mueznz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m-6 4l-4-4m0 0l4-4m-4 4h12" data-astro-cid-w7mueznz></path> </svg> <p class="mb-2 text-sm text-gray-500" id="lbl-selected-files" data-astro-cid-w7mueznz> <span class="font-semibold" data-astro-cid-w7mueznz>Click aquí </span> o arrastra los archivos
</p> <p class="text-xs text-gray-500" data-astro-cid-w7mueznz>
SVG, PNG, JPG or GIF (max. 800x400px)
</p> </div> <!-- class="hidden" --> <!-- accept only images --> <input id="file-upload" name="imageFiles" type="file" accept="image/*" multiple class="hidden" data-astro-cid-w7mueznz> </label> </div> <!-- Slideshow --> ${renderComponent($$result2, "ProductSlideshow", $$ProductSlideshow, { "images": images.map((i) => i.image), "data-astro-cid-w7mueznz": true })} <table class="w-full border" data-astro-cid-w7mueznz> <thead data-astro-cid-w7mueznz> <tr data-astro-cid-w7mueznz> <th data-astro-cid-w7mueznz>Imagen</th> <th data-astro-cid-w7mueznz>Eliminar</th> </tr> </thead> <tbody data-astro-cid-w7mueznz> ${images.map(({ image, id }) => renderTemplate`<tr class="border"${addAttribute(id, "id")} data-astro-cid-w7mueznz> <td class="flex justify-center" data-astro-cid-w7mueznz> ${renderComponent($$result2, "ProductImage", $$ProductImage, { "src": image, "alt": product.title, "className": "w-16 h-16 rounded", "data-astro-cid-w7mueznz": true })} </td> <td class="text-center" data-astro-cid-w7mueznz> <button type="button"${addAttribute(id, "data-id")} class="btn-delete-image" data-astro-cid-w7mueznz>
X
</button> </td> </tr>`)} </tbody> </table> </div> </div> </form>  ` })} ${renderScript($$result, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/admin/products/[...slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/pages/admin/products/[...slug].astro", undefined);

const $$file = "C:/Users/jordi/Desktop/Astro/07-store/src/pages/admin/products/[...slug].astro";
const $$url = "/admin/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
