import { f as createComponent, g as createAstro, r as renderTemplate, m as maybeRenderHead, l as renderScript, i as addAttribute } from './astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$ProductSlideshow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductSlideshow;
  const { images } = Astro2.props;
  const fullImages = (images?.length ? images : ["default-image.jpg"]).map((image) => {
    return image.startsWith("http") ? image : `${"http://localhost:4321"}/images/products/${image}`;
  });
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper mt-10 col-span-1 sm:col-span-2" data-astro-cid-v5yllo6e> <!-- Additional required wrapper --> <div class="swiper-wrapper" data-astro-cid-v5yllo6e> <!-- Slides --> ${fullImages.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-v5yllo6e> <img${addAttribute(image, "src")} alt="Product image" class="w-full h-full object-cover px-10" data-astro-cid-v5yllo6e> </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-v5yllo6e></div> </div>  ${renderScript($$result, "C:/Users/jordi/Desktop/Astro/07-store/src/components/products/ProductSlideshow.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/components/products/ProductSlideshow.astro", undefined);

export { $$ProductSlideshow as $ };
