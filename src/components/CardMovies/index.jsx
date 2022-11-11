import {
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,
  } from "@mui/material";
const CardMovie=({movies}) =>{
    return(
        <Box>
            <Grid container spacing={3} mt={3}>
                
                {movies.length > 0 &&
                    movies.map(({title, images, description}) => (
                        <Grid item xs ={8} sm={4}>
                            <Card >
                                <CardMedia className="container"
                                component ="img"
                                width={150}
                                heigh={150}
                                image={`${images.posterArt.url}`}
                                />
                                <p>{title}</p>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>

    )
};

export default CardMovie;