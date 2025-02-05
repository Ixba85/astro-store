import { f as createComponent, g as createAstro, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_DHY1K0at.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { totalPages } = Astro2.props;
  const url = Astro2.url;
  const pageParam = Number(url.searchParams.get("page") ?? 1);
  const currentPage = Math.max(
    pageParam > totalPages ? totalPages : pageParam,
    1
  );
  const path = url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between my-32" data-astro-cid-qz4fk72h> <a${addAttribute(`${path}?page=${Math.max(currentPage - 1, 1)}`, "href")} class="button" href="" data-astro-cid-qz4fk72h>
Anteriores
</a> <span data-astro-cid-qz4fk72h>Página ${currentPage} de ${totalPages}</span> <a${addAttribute(`${path}?page=${Math.min(currentPage + 1, totalPages)}`, "href")} class="button" href="" data-astro-cid-qz4fk72h>
Siguientes
</a> </div> `;
}, "C:/Users/jordi/Desktop/Astro/07-store/src/components/shared/Pagination.astro", undefined);

export { $$Pagination as $ };
