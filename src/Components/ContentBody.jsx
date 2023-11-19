import { Box, Button, Divider, Grid, Typography, colors } from "@mui/material"
import { useEffect, useState } from "react"

const PostBody = ({title, para, emotion, date, duration, view}) => (
   <>
  
   <Grid container direction="column" paddingLeft={1} width={"98%"} paddingRight={1} >
        <Typography variant="body1" paddingTop="30px"><b>
            {title}</b>
        </Typography>
        <Grid>
        <Typography variant="body1" paddingTop="20px"  style={{ whiteSpace: 'pre-line' }} >
            {para}
        </Typography>
        </Grid>
        <Grid container direction="row"  justifyContent="space-between" alignItems="center"  mt={ "30px"} >
        <Typography variant="caption">
           <Typography variant="caption" color={"skyblue"}><b>{emotion}</b></Typography> by anujgosalia
        </Typography>
    
        <Typography variant="caption"   sx={{textAlign: 'right', color: "#c9c9c9",marginTop: 'auto',marginRight: 3} }>
            {date} . {duration} mins Read . {view} Views
        </Typography>
        </Grid>

        
       
    </Grid>
    <Divider sx={{ mt: 2, Color: "#c9c9c9" }} />
    </>
)

const ContentBody = () => {

    const [postData, setPostData] = useState([]);
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + './postdata.json')
            .then((res) =>
                res.json()
            )
            .then((data) => {
                setPostData(data.posts);

            });

    }, []);

    return (
        <>
        
            <Box sx={{ height: "50px", width: "100px" ,display:'flex',alignItems:'center',justifyContent: 'center',color: "skyblue",border: "solid",borderColor: "#c9c9c9", borderBottom: 0, borderLeft:0,borderRadius:0 }}>
                <b>134 Posts</b>
            </Box>
            <Divider sx={{  ml:"100px",Color: "#c9c9c9" }} />
            <Grid>
                {console.log(postData)}
                {postData.map((data, index) => {
                 return (
                    <PostBody
                        key={index}
                        title={data.title}
                        para={data.para}
                        emotion={data.emotion}
                        date={data.Date}
                        duration={data.Duration}
                        view={data.View}
                    />
                 );
                })}
            </Grid>

        </>
    )
}

export default ContentBody;