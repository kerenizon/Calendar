import axios from 'axios';


export default axios.create({
  baseURL: 'https://www.hebcal.com/converter?cfg=json'
});

