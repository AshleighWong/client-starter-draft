import { Button, Divider } from "@material-ui/core";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles( () => ({
    formContainer:{  
      width: '500px',
      backgroundColor: '#f0f0f5',
      borderRadius: '5px',
      margin: 'auto',
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      textDecoration: 'none'
    }, 
    customizeAppBar:{
      backgroundColor: '#11153e',
      shadows: ['none'],
    },
    formTitle:{
      backgroundColor:'#c5c8d6',
      marginBottom: '15px',
      textAlign: 'center',
      borderRadius: '5px 5px 0px 0px',
      padding: '3px'
    },
  }));

  const NewCampusView = (props) => {
    const {handleChange, handleSubmit} = props;
    const classes = useStyles();

    return (
        <div>
          <h1>New Campus</h1>
    
          <div className={classes.root}>
            <div className={classes.formContainer}>
              <div className={classes.formTitle}>
                <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                  Add a Campus
                </Typography>
              </div>
              <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
                <input type="text" name="name" onChange ={(e) => handleChange(e)} />
                <br/>
                <br/>

                <label style= {{color:'#11153e', fontWeight: 'bold'}}>imageUrl: </label>
                <input type="text" name="imageUrl" onChange ={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <label style={{color:'#11153e', fontWeight: 'bold'}}>address: </label>
                <input type="text" name="address" onChange={(e) => handleChange(e)} />
                <br/>
                <br/>

                <label style={{color:'#11153e', fontWeight: 'bold'}}>description: </label>
                <input type="text" name="description" onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                <br/>
                <br/>
              </form>
              </div>
          </div>
        </div>    
      )
  }

  export default NewCampusView