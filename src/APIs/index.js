import axios from 'axios';


export default {
  find: ({title=""}) => {
    return axios({
      method: 'get',
      url: `https://64hh6p28u2.execute-api.us-east-1.amazonaws.com/dev/articles?title=${title}`,
    })
  }
}
