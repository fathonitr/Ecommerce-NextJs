import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
export const metadata = {
  title: "Home",
};
const Homepage = async () => {
  const latestProduct = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProduct} title="Newest Arrivals" limit={4}></ProductList>
    </>
  );
};

export default Homepage;
