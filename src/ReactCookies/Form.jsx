import Cookies from "js-cookie";
export default function Form() {
  const products = [
    {
      productName: "Nsaa",
      productPrice: 56,
      imgUrl: "https://tomuswear.company.site/products",
    },
    {
      productName: "Gyinaso",
      productPrice: 86,
      imgUrl: "https://tomuswear.company.site/products",
    },
    {
      productName: "Tonto",
      productPrice: 543,
      imgUrl: "https://tomuswear.company.site/products",
    },
  ];

  function setCookies() {
    Cookies.set("name", "Gyinaso", { expires: 7 });
  }

  function setCookies() {
    Cookies.set("name", "Tonto", { expires: 7 });
  }

  //   const myCookies = Cookies.get("productProps");
  //   console.log(myCookies);
  const myCookies = Cookies.get("name");

  //   function getCookies() {
  const cookieProduct = products.filter(
    (product) => product.productName === myCookies
  );

  //     console.log(cookieProduct[0].productPrice);
  //   }

  return (
    <div>
      <button onClick={() => setCookies()}>Favourite</button>
      {/* <button onClick={getCookies}>Get Value</button> */}
      <br />
      <br />

      <div>
        <p>Product Name: {cookieProduct[0].productName}</p>
        <p>Product price: {cookieProduct[0].productPrice}</p>
      </div>
    </div>
  );
}
