//@ts-check
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import HomePage from "./components/HomePage";

const App = ({ signOut, user }) => {
  
  const groups = user.signInUserSession.accessToken.payload['cognito:groups'];
  const isAdmin = !!groups ? groups.includes('admin') : false;

  return (
    <View className="App">
      <Heading level={1}>Dakeke's Studio</Heading>
      <Button onClick={signOut} variant="contained" color="primary">Sign Out</Button>
      <HomePage isAdmin={isAdmin} /> 
    </View>
  );
};

export default withAuthenticator(App);