import "./App.css";

function App() {
  const products = [
    { name: "Fancy Products", price: "$40.00 -%80.00" },
    { name: "Special Item", price: "$20.00 -%18.00" },
    { name: "Sale Item", price: "$50.00 -%25.00" },
    { name: "Popular Item", price: "$40.00 " },
    { name: "Sale Item", price: "$50.00 -%25.00" },
    { name: "Fancy Products", price: "$120.00 -%280.00" },
    { name: "Special Item", price: "$20.00 -%18.00" },
    { name: "Popular Item", price: "$40.00" },
  ];
  return (
    <div>
      {/* <Navbar />
      <Head /> */}
      <div className="container">
        {products.map(({ name, price }) => (
          <ProductList brandName={name} price={price} />
        ))}
      </div>
    </div>
  );
}
// function Head() {
//   return (
//     <div className="title">
//       <h1>Shop in Style</h1>
//       <p>With this shop hompeage template</p>
//     </div>
//   );
// }
// function Navbar() {
//   return (
//     <div className="App">
//       <nav className="nav_bar">
//         <ul className="nav_bar_list">
//           <li>Start Bootstrap </li>
//           <li>Home</li>
//           <li>About</li>
//           <li>Shop</li>
//         </ul>
//         <button>cart</button>
//       </nav>
//     </div>
//   );
// }

function ProductList({ brandName, price }) {
  return (
    <div className="card">
      <div className="Sale">
        <button className="salebutton">Sale</button>
      </div>
      <div className="image-background">
        <div className="image">450 x 300</div>
      </div>

      <div>
        <h2>{brandName}</h2>
        <div className="rating"></div>
        <p className="price">{price}</p>
      </div>
      <Addtocart />
    </div>
  );
}
function Addtocart() {
  return (
    <div>
      <button>Add to cart</button>
    </div>
  );
}

export default App;
