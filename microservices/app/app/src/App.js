import React, { Component } from 'react';
import Input from './components/input';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography';

const styles=theme=>({
  grid1: {
    flexBasis: "10%",
    overflow: 'auto',
    //backgroundColor: 'white'
    //padding: '20px 20px 0px 0px',
    //border:"1px solid red"
  },
  grid2: {
    flexBasis: "90%",
    marginLeft: "20px",
    //border:"1px solid red"
  },
  grid4: {

  },
  container: {
   height: '660px',
   width: '850px',
   margin: '0 auto',
   border: '1px solid grey',
   borderRadius: '20px',
   background: '#38394D',
   //background: "url('images/neon.jpeg')",
   //backgroundSize: 'cover',
   //backgroundReapeat: 'no-repeat'
    //filter: 'opacity(90%)'
   paddingRight: "15px"
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      keys: [],
      values: [],
      input: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleSubmit(e) {

    fetch('https://api.alike68.hasura-app.io/input/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message_text: e
      })
    })
    .then( results=> results.json())
    .then( object => {
      console.log(object)
      var kes = Object.keys(object)
      var valus = Object.values(object)
      // console.log(keys)
      this.setState({
        keys: kes ,
        values: valus, 
        input: e
      })
      // console.log(this.state.keys)
});
  }
  render() {
    const {classes} =this.props
    var keys =this.state.keys;
    return (
       <Grid container className={classes.container} direction='column' justify='space-between'>
       <Grid item xs={12} style={{padding: '20px 0px 0px 20px'}} className={classes.grid1}>
          <Input onSubmit={this.handleSubmit}/>
       </Grid>
       <Grid item xs={12} className={classes.grid2} >
         <Typography variant= "title" style={{color: 'white'}} ><i>{this.state.input}</i></Typography>
         {console.log(keys)}
          {console.log(this.state.values)}
          {keys.map((item, index) => { return <Typography style={{color: "white"}} variant="headline" key={index}>{item} : {this.state.values[index]}</Typography>})}
       </Grid>
    </Grid>
    );
  }
}

export default withStyles(styles)(App);
