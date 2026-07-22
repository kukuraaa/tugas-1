function ProductCard({ nama, harga, gambar }) {
  return (
    <div className="product-card">
      <img src={gambar} alt={nama} />

      <h3>{nama}</h3>

      <p>{harga}</p>
    </div>
  );
}

export default ProductCard;