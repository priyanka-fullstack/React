import Products from "./Products";

function App() {

  const title = "props";
 
  return (
    <>
      <h1>Passing data from Parent to child component using {title}</h1>
      <h2 style={{textAlign:"center"}}>Display Products</h2>
      <Products 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Ajio"
        desc="Black sneakers from Ajio"
        price = "$30"
        />
        <Products 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Air Jordan"
        desc="he Air Jordan was the first collaboration between Nike and rising star, Michael Jordan"
        price = "$40"
        />
        <Products 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Nike"
        desc="Nike is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. "
        price = "$50"
        />
    </>
  )
}

export default App
