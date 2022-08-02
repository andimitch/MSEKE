import { useState } from 'react';
import React from "react";
import { Icon } from '@iconify/react';
import "../css/header";

export default function SearchForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form  onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="Search" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
      {/* <input type="submit" className="search-icon"/>
      <Icon icon="ion:search-outline" color="white" width="1.5em" /> */}
   
    </form>
  )
}

