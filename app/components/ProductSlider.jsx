import ProductSlideViewer from "./ProductSlideVeiwer";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch to products");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

const ProductSlider = async () => {
  const { products } = await getProducts();

  return (
    <div>
      <ProductSlideViewer products={products} />
    </div>
  );
};

export default ProductSlider;
