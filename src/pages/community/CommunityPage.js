import { Grid, CardMedia, Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import FacebookIcon from "@mui/icons-material/Facebook";
import image from "../../components/img/community.png";
import { community } from "../../components/Community";

export default function CommunityPage() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <CardMedia
          component="img"
          height="128"
          width="128"
          image={image}
          alt="Paella dish"
          sx={{ objectFit: "contain", paddingTop: "1rem" }}
        />
      </Grid>
      <Grid item container spacint={2} marginTop={2} direction="row">
        <Grid item xs={12}>
        <Card elevation={3} sx={{ minWidth: 300, marginTop: 2 }}>
              <CardContent>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Your statistics
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6"><b>CO2</b></Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"><b>Tokens</b></Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"><b>Better than</b></Typography>
                  </Grid>
                </Grid>
               <hr/>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6">157</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">5069</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">72%</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
        </Grid>
      </Grid>

      <Grid container item direction="row">
        <Grid item xs={12}>
          {community.people.map((element, index) => (
            <Card elevation={3} sx={{ minWidth: 300, marginTop: 2 }}>
              <CardContent>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://i.pravatar.cc/150?img=${index * 15}`}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {element.name} {element.surname}
                  </Typography>
                </Grid>
                <hr />
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6">{element.CO2}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{element.points}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{element.betterThan}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Fab
          color="primary"
          aria-label="add"
          variant="extended"
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(9),
            right: (theme) => theme.spacing(2),
          }}
        >
          <FacebookIcon sx={{ mr: 1 }} style={{ fontSize: 42 }} />
          Synchronized with facebook
        </Fab>
      </Grid>
    </Grid>
  );
}
