import React from 'react';
import axios from 'axios';

export default function getData({url: String,...props}){
    return axios.get(url).then((response) => response.data)
}