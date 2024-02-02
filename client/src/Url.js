import React, {useState} from "react"
import { Box, ListItem, ListItemText, InputBase, ListItemSecondaryAction, IconButton, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import copy from 'copy-to-clipboard';
import './App.css';

const Url = (props) => {
    const [item] = useState(props.item);
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    };
      
    const onCopyClick = () => {
        copy(item.newUrl); // 클립보드에 item.newUrl 값을 복사합니다.
    }

    return(
        <Box sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0.1, 0.1)'}}>
            <ListItem sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <ListItem sx={{display: 'flex', justifyContent: 'space-between', paddingLeft: '0'}}>
                    <ListItemText>
                        <Typography variant="h6" fontWeight="bold" >
                            {item.newUrl}
                            <IconButton aria-label="Copy Url" onClick={onCopyClick}>
                                <CopyAllIcon />
                            </IconButton>
                        </Typography>
                    </ListItemText>
                </ListItem>

                <ListItemText sx={{width: '100%'}}>
                    <InputBase
                        inputProps={{"aria-label": "naked"}}
                        type="text"
                        value={item.destination}
                        multiline={true}
                        fullWidth={true}
                        sx = {{color: 'grey'}}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Url" onClick={deleteEventHandler}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Box>
    )
}
export default Url;
