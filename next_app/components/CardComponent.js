import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard() {

    const datas = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    ];

    return (<>
        <Grid container spacing={2}>
            {
                datas.map((data, index) =>
                (<Grid item xs={index === 4 || index === 3 ? 6 : 4}  style={{display:'flex', justifyContent:'center' }}  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                            alt="green iguana"
                        />
                            <div style={{height:'50px',width:'100%',background:'green', padding:'0'} } ></div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card></Grid>)
                )
            }
        </Grid><style jsx >{`
        
        `}
            </style></>

    );
}