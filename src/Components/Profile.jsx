import { Box, Button, Grid, Link, Typography } from "@mui/material";



const Profile = () => {

    //Dp, cover page, Name, Followers, Following
    //about, link
    return (

        <div>
            <Grid>
                <img src='coverimgt.jpeg' alt="Cover Pic" position="absolute" width="100%" height="200" />
            </Grid>
            <Grid container direction="row">
                <Box
                    component="img"
                    src="profile1.png"
                    alt="Profile Pic"
                    width="150px" // Adjust the size as needed
                    height="150px" // Adjust the size as needed
                    sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        bottom: "50px",
                        left: "25px"
                    }}
                />

                <Grid>
                <Typography variant="h6" position={"relative"} mt={2} sx={{left: "50px"}}><b>Anuj Gosalia</b></Typography>


                {/* Followers  */}
                <Grid container direction="row">
                <Grid sx={{position: "relative",left: "50px"}} align={"center"}>
                    <Box sx={{borderStyle:"solid", borderColor:"#c9c9c9",borderRadius:2}}>
                        <Typography variant="button">
                            6482
                        </Typography>
                    </Box>
                    <Typography variant="caption">Followers</Typography>
                </Grid>

                <Grid sx={{position: "relative",left: "70px"}} align={"center"}>
                    <Box sx={{borderStyle:"solid", borderColor:"#c9c9c9",borderRadius:2}}>
                        <Typography variant="button">
                            245
                        </Typography>
                    </Box>
                    <Box>
                    <Typography variant="caption" >Following</Typography>
                    </Box>
                   
                </Grid>
                </Grid>
                </Grid>

            </Grid>

            {/* About me & link */}
            <Grid ml={2}>
                <Typography variant="body1" >Co-founder & CEO at Terribly Tiny Tales</Typography>
                <Link href='http://www.instagram.com/anujgosalia'> http://www.instagram.com/anujgosalia</Link>
            </Grid>
        </div>
    )
}

export default Profile;