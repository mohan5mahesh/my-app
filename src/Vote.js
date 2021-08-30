import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Specification } from "./Specification";

export function Vote({ brandName, model, specs, logo }) {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  const [opened, setopened] = useState(false);

  const incClick = () => setLike(like + 1);
  const disClick = () => setdisLike(dislike + 1);

  return (
    <Card
      className="vote"
      style={{
        background: like >= dislike ? "white" : "crimson",
        color: "black",
      }}
    >
      {/* <h1 style={{ textTransform: "uppercase" }}>{brandName}</h1> */}
      {/* <img className="logo" src={logo}></img> */}

      <img className="phone-image" alt="samsung" src={specs.img}></img>
      <h1 className="brand-model">{model}</h1>
      <div>
        <IconButton aria-label="like" variant="contained" onClick={incClick}>
          <Badge
            badgeContent={like}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            👍
          </Badge>
        </IconButton>
        <IconButton aria-label="dislike" variant="contained" onClick={disClick}>
          <Badge
            badgeContent={dislike}
            color="secondary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            👎
          </Badge>
        </IconButton>
      </div>
      <Button
        onClick={() => setopened(!opened)}
        variant="outlined"
        color="primary"
      >
        {opened ? "Show less" : "Show more"}
      </Button>
      {opened ? <Specification specs={specs} /> : ""}
    </Card>
  );
}
