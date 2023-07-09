import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ec2ee86304bf4001b01ea2aa2ac64f36',
  },
});
