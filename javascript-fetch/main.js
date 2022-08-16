const getApiAnswer = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)

    // const d = await fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => data);
    //   console.log(d);

    data.forEach(( {price, title} ) => {
      console.log(price, title)
      // const div = document.createElement("div");
      // const span1 = document.createElement("span");
      // const span2 = document.createElement("span");
      // const span3 = document.createElement("span");
      // const span4 = document.createElement("span");
      // const span5 = document.createElement("span");

      // span1.innerText = item.id;
      // span2.innerText = item.title;
      // span3.innerText = item.price;
      // span4.innerText = item.description;
      // span5.innerText = item.category;

      // div.append(span1, span2, span3, span4, span5);
      // document.body.appendChild(div);
    });
  } catch (e) {
    console.log(e);
  }
};

getApiAnswer();
