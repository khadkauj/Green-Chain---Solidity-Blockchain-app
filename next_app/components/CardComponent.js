import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from "@material-ui/core/Slider";

export default function MediaCard() {

    const datas = [
        { name: "Aldi", company: "Test Corp", link: "https://www.aldi.cn/images/2018aldi/assets/images/about/about01.jpg", state: "NY" },
        { name: "REWE", company: "Test Corp", link: "https://upload.wikimedia.org/wikipedia/commons/8/8f/REWE_Neu_Isenburg.jpg", state: "CT" },
        { name: "Netto", company: "Test Corp", link: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Netto_Markt_Hannover-Ahlem.jpg", state: "FL" },
        { name: "Lidl", company: "Test Corp", link: "https://c.files.bbci.co.uk/A757/production/_124293824_gettyimages-1232577498.jpg", state: "TX" },
        { name: "James Houston", company: "Test Corp", link: "https://kaufland.media.schwarz/is/image/schwarz/hi-karriere-kaufland-entdecken-standorte?JGstbGVnYWN5LW9uc2l0ZS00JA==", state: "TX" },
    ];

    const marks = [ 77, 20, 37, 10, 48 ]
        

    return (<>
        <Grid container spacing={1}>
            {
                datas.map((data, index) =>
                (<Grid item xs={index === 4 || index === 3 ? 6 : 4} style={{ display: 'flex', justifyContent: 'center' }}  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.link}
                            alt="green iguana"
                        />
                        <CardContent>
                            <div style={{ display: 'flex' }} ><span style={{ whiteSpace: 'nowrap' }} >Green Score:</span> 
                            <Slider style={{ color: 'green', margin: '0 0 0 14px' }} disabled defaultValue={marks[index]} aria-labelledby="disabled-slider" /></div>
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