import { json } from 'react-router-dom';

export async function productLoader({ params }) {
  const productId = params.id;
  const response = await fetch(`https://reactjr.coderslab.online/api/products/${productId}`);
  
  if (!response.ok) {
    throw new Response('Product not found', { status: 404 });
  }

  const product = await response.json();
  return json(product);
}
