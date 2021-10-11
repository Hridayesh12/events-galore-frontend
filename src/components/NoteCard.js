import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";
import {Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import Chip from "@material-ui/core/Chip";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import RoomIcon from "@material-ui/icons/Room";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {useHistory} from 'react-router-dom';
import EventPage from './EventPage';
const useStyles = makeStyles((theme) => ({
  media: {
    height: 240,
    marginTop: 0,
  },
  btn: {
    marginRight: 10,
    marginBottom: 10,
    float: "right",
  },
  margins: {
    marginLeft: 2,
    marginBottom: 5,
  },
  date:{
    width: "97%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "1%",
    justifyContent: "space-between",
    marginBottom:"2%",
  },
  lastBox:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function NoteCard({note}) {
  const history=useHistory();
  const id=note
  console.log(id);
  function event_page()
  {
        <EventPage data={id} />
        history.push('/eventpage');
  }
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea sx={{backgroundColor: '#eeeeee'}}>
        <CardMedia
          className={classes.media}
          image={note.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" underline="always">
            {note.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{note.description}
          </Typography>
        </CardContent>
        <div className={classes.date}>
          <Chip icon={<TodayIcon/>} label={note.date}/>
          <Chip icon={<QueryBuilderIcon/>} label={note.time}/>
        </div>
          <Chip className={classes.margins} icon={<RoomIcon />} label={note.isoffline}/>
          <Chip className={classes.margins} icon={<AttachMoneyIcon />} label={note.ispaid}/>
          <Button variant="contained" color="primary" className={classes.btn}  onClick={event_page}>
            Register
          </Button>
      </CardActionArea>
      <CardActions sx={{border: 1,borderColor: '#eeeeee'}} className={classes.cardActions}>
        <div className={classes.lastBox}>
          <Chip icon={<PersonIcon />} label="username" />
          <Chip icon={<PeopleAltIcon />} label="registercount"/>
        </div>
      </CardActions>
    </Card>
  );
}