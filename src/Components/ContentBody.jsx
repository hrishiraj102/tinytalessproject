import { Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const PostBody = ({title, para, emotion, date, duration, view}) => (
    <Grid>
        <Typography variant="h4">
            {title}
        </Typography>
        <Typography variant="body1">
            {para}
        </Typography>
        <Typography variant="caption">
            {emotion} by anujgosalia
        </Typography>
        <Typography variant="caption">
            {date} . {duration} mins Read . {view} Views
        </Typography>
    </Grid>
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
            <Button sx={{ height: "50px", width: "60px" }}>
                Post
            </Button>
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