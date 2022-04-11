import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import piza from "./piza.png";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/actions";

const CardInfo = ({ product }) => {
  // const products = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  // const addItem = (product) => {
  //   dispatch(addCard(product));

  // };


  return (
    <div className="card">
      <Card sx={{ display: "flex", margin: "10px" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={piza}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {product?.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Shrimp, squid
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {product?.category}
            </Typography>
            <Typography component="div" variant="p">
              Price: LE {product?.price}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
            disabled={product.qty ? false : true}
              aria-label="previous"
              onClick={() => {dispatch(decrement(product))}}>
              <RemoveIcon />
            </IconButton>
            <div className="square">{product.qty}</div>
            <IconButton
              onClick={() => {dispatch(increment(product))}} aria-label="next">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default CardInfo;
