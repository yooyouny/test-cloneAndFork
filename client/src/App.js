import './App.css';
import Url from './Url';
import React, { useState, useEffect } from "react";
import { Container, List, Paper, Box, TextField, Typography } from "@mui/material";
import AddUrl from './AddUrl';
import {call} from './service/ApiService';
import { margin } from '@mui/system';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/url", "GET", null).then((response) => {
      setItems(response);
    });
  }, []);

  const addItem = (item) => {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?(\?.*)?(#.*)?$/;

    if (!urlRegex.test(item.destination)) {
      alert('Invalid destination URL format');
      return;
    }

    call("/url", "POST", item)
    .then((response) => {
      setItems([...items, response]);
    })
    .catch((error) => {
      console.log(error);
    });
   };

   const deleteItem = (item) => {
    call("/url", "DELETE", item)
    .then((response) => setItems(response));
  };
 
  const handleLogoClick = () => {
    window.location.href = 'http://15.164.165.157:8080/';
  };

  let UrlItems = items && items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Url
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  if (items === null) {
  UrlItems = null;
}
 
  return (
    <div className='App'>
      <Container maxWidth="md">
        <Typography 
          class="App-logo" 
          variant='h1' 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}>bit.ly
        </Typography>
        <AddUrl addItem = {addItem} />
        <div className='UrlList'> {UrlItems}</div>
      </Container>
    </div>
  );
}

export default App;
