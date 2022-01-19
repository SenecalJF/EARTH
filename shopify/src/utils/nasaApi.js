import axios from 'axios';

const fetchNasa = async () => {
  const data = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=Foa3nUA0eYsL2kNrkySZi0wEd6mwC7xkxDzKsgNC`
  );
  return data;
};

export default fetchNasa;
