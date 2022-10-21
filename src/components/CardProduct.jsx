import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/Productos/thunkProductos";


export default function CardProduct() {

  const dispatch = useDispatch();

  const {isLoading, productos = []} = useSelector(state=> state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  

  return (
    isLoading
    ? (<CircularProgress/>)
  
    :
    <div>
    {
      productos.map((producto) => {
        return(
        <Card sx={{ maxWidth: 345 }} key={producto.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="420"
            image={producto.image}
            alt="producto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comprar
          </Button>
          <Link href="#" variant="body2">{producto.category}</Link>
        </CardActions>
      </Card>)
      })

    }
    </div>
  )
}
