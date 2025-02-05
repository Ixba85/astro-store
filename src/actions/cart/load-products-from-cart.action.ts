import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, eq, inArray, Product, ProductImage } from 'astro:db';

export const loadProductsFromCart = defineAction({
  accept: 'json',
  input: z.array(
    z.object({
      productId: z.string(),
      size: z.string(),
      quantity: z.number(),
    })
  ),
  handler: async (cart, { cookies }) => {
    if (!cart || cart.length === 0) return { data: [], error: null }; // ✅ Always return an array

    const productIds = cart.map((item) => item.productId);

    const dbProducts = await db
      .select()
      .from(Product)
      .innerJoin(ProductImage, eq(Product.id, ProductImage.productId))
      .where(inArray(Product.id, productIds));

    const products = cart.map((item) => {
      const dbProduct = dbProducts.find((p) => p.Product.id === item.productId);
      if (!dbProduct) return null;

      return {
        productId: item.productId,
        title: dbProduct.Product.title,
        size: item.size,
        quantity: item.quantity,
        image: dbProduct.ProductImage.image.startsWith('http')
          ? dbProduct.ProductImage.image
          : `${import.meta.env.PUBLIC_URL}/images/products/${dbProduct.ProductImage.image}`,
        price: dbProduct.Product.price,
        slug: dbProduct.Product.slug,
      };
    }).filter(Boolean);

    return { data: products, error: null }; // ✅ Ensure return format is correct
  },
});
