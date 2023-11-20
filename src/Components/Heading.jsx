import { Box, Button, Grid, Typography } from "@mui/material";

const Heading = () => {
    return (
        <>
            <Grid>
                <Box width={"100%"} height={"70px"} backgroundColor={"black"} sx={{ display: 'flex', alignItems: 'center' }} >
                    <Grid ml={5}>
                        <img src="tttlogo.png" alt="logottt" height={40} width={40} />
                    </Grid>
                    <Grid >
                        <Box height={40} borderLeft={1} borderColor="#f6c359" mx={2} />
                    </Grid>


                    <Grid >
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            STORIES
                        </Typography>
                    </Grid>


                    <Grid sx={{ marginLeft: 'auto', marginRight: '5%' }}>
                        <Button variant="contained" sx={{ background: "#f6c359", color: "black", }} >
                            Courses
                        </Button>
                    </Grid>
                </Box>
            </Grid>

        </>
    )
}
export default Heading;