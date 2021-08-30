import { useState } from "react";
import { Vote } from "./Vote";
import TextField from "@material-ui/core/TextField";

export function Brands() {
  const names = [
    {
      id: 1,
      name: "Samsung",
      logo: "https://cdn.iconscout.com/icon/free/png-256/samsung-226432.png",
      model: "s21 ultra",
      specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        ram: "128GB",
        img: "https://m.media-amazon.com/images/I/91dLTREdG1L._AC_UY218_.jpg",
      },
    },
    {
      id: 2,
      name: "Apple",
      model: "iPhone 12 pro",
      specs: {
        os: "IOS",
        processor: "iphone 11",
        ram: "128GB",
        img: "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY218_.jpg",
      },
    },
    {
      id: 3,
      name: "MI",
      model: "mi 11 ultra",
      specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        ram: "128GB",
        img: "https://m.media-amazon.com/images/I/71YLjYRI7CS._AC_UY218_.jpg",
      },
    },
    {
      id: 4,
      name: "Oppo",
      model: "f11 pro",
      specs: {
        os: "Android",
        processor: "F19 Pro+",
        ram: "128GB",
        img: "https://m.media-amazon.com/images/I/71nT6xat93L._AC_UY218_.jpg",
      },
    },
  ];

  const [search, setsearch] = useState("");
  return (
    <>
      <div className="search-container">
        <TextField
          variant="outlined"
          label="Search"
          value={search}
          type="text"
          placeholder="Search..."
          onChange={(event) => setsearch(event.target.value)}
        />
      </div>
      <div className="brands">
        {names
          .filter((names) =>
            names.model.toLowerCase().includes(search.toLowerCase())
          )
          .map(({ name, model, specs, logo, id }) => (
            <Vote
              key={id}
              brandName={name}
              model={model}
              specs={specs}
              logo={logo}
            />
          ))}
      </div>
    </>
  );
}
