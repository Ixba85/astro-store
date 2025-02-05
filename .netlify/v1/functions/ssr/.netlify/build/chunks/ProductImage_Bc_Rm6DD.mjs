import { f as createComponent, g as createAstro, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$ProductImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductImage;
  const { src, alt, className } = Astro2.props;
  const currentImage = src.startsWith("http") ? src : `/images/products/${src}`;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(currentImage, "src")}${addAttribute(alt, "alt")}${addAttribute([className], "class:list")}>`;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/components/products/ProductImage.astro", undefined);

export { $$ProductImage as $ };
