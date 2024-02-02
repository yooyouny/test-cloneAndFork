import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddUrl = (props) => {
    const [item, setItem] = useState({ destination: "", newUrl: ""});
    const addItem = props.addItem;

    const onButtonClick = () => {
        addItem(item);
        setItem({ destination : "", newUrl : ""});
    }

    const onInputChange = (e) => {
        setItem({ destination : e.target.value});
        console.log(item)
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    }

    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs = {11} md = {11} item style={{ paddingRight: 16 }}>
                <TextField placeholder="http://www.my_long_url.com" 
                    fullWidth
                    color="secondary"
                    onChange={onInputChange} 
                    onKeyPress={enterKeyEventHandler}
                    value={item.destination}/>
            </Grid>
        <Grid xs={1} md={1} item>
                <Button fullWidth style = {{ height: '100%' }} color = "secondary" variant="outlined"
                    onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}
export default AddUrl;