import {
  cloudyMoon,
  moon,
  newsBack,
  notify,
  temp,
  timming,
  windSpeed,
} from '../assets';
import {Primary} from '../shared/theme';

const Data = [
  {id: 0, time: 'Now', img: moon, deg: '20'},
  {id: 1, time: '1 pm', img: moon, deg: '21'},
  {id: 2, time: '2 pm', img: moon, deg: '22'},
  {id: 3, time: '3 pm', img: cloudyMoon, deg: '23'},
  {id: 4, time: '4 pm', img: cloudyMoon, deg: '24'},
  {id: 5, time: '5 pm', img: cloudyMoon, deg: '25'},
  {id: 6, time: '6 pm', img: cloudyMoon, deg: '26'},
  {id: 7, time: '7 pm', img: cloudyMoon, deg: '27'},
  {id: 8, time: '8 pm', img: moon, deg: '28'},
  {id: 9, time: '9 pm', img: moon, deg: '29'},
  {id: 10, time: '10 pm', img: moon, deg: '29'},
  {id: 11, time: '11 pm', img: moon, deg: '29'},
  {id: 12, time: '12 pm', img: moon, deg: '29'},
];
const NewsData = [
  {
    id: 0,
    title: "Today's News",
    img: 'https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVTQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    about: 'Downton Weather Report',
  },
  {
    id: 1,
    title: 'Recent News',
    img: 'https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVTQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    about: 'Downton Weather Report',
  },
  {
    id: 2,
    title: 'Recent News',
    img: 'https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVTQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    about: 'Downton Weather Report',
  },
];

const placesData = [
  {
    id: 0,
    place: 'London',
    imge: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    deg: '-12.9 C',
    latitude:51.5072,
    longitude: 0.1276
  },
  {
    id: 1,
    place: 'USA',
    imge: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    deg: '-12.7 C',
    latitude:37.0902,
    longitude: 95.7129
  },
  {
    id: 2,
    place: 'Canada',
    imge: 'https://images.unsplash.com/photo-1520967824495-b529aeba26df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    deg: '-12.7 C',
    latitude:56.1304,
    longitude: 106.3468
  },
  {
    id: 3,
    place: 'Pakistan',
    imge: 'https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFraXN0YW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    deg: '-12.7 C',
    latitude:30.3753,
    longitude: 69.3451
  },
];
const placesWeather = [
  {
    id: 0,
    title: 'Snow',
    des: '0%',
  },
  {
    id: 1,
    title: 'Humidity',
    des: '70%',
  },
  {
    id: 2,
    title: 'Wind Speed',
    des: '5.63 Mph',
  },
  {
    id: 3,
    title: 'Pressure',
    des: '1053.7 pa',
  },
  {
    id: 4,
    title: 'Cloudy',
    des: 'Yes',
  },
];

const settingsData = [
  {
    id: 0,
    name: 'Temperature',
    icon: temp,
    switch1: 'C',
    switch2: 'F',
    button1Color: Primary,
    button2Color: '#fff',
    txtColor: '#fff',
    txtColor2: '#000',
    degIcon: 'o',
  },
  {
    id: 1,
    name: 'Wind Speed',
    icon: windSpeed,
    switch1: 'KM',
    switch2: 'Mph',
    button1Color: Primary,
    button2Color: '#fff',
    txtColor: '#fff',
    txtColor2: '#000',
  },
  {
    id: 2,
    name: 'Timing Hours',
    icon: timming,
    switch1: '24hr',
    switch2: '12h',
    button1Color: Primary,
    button2Color: '#fff',
    txtColor: '#fff',
    txtColor2: '#000',
  },
  {
    id: 3,
    name: 'Notification',
    icon: notify,
    switch1: 'No',
    switch2: 'Yes',
    button1Color: Primary,
    button2Color: '#fff',
    txtColor: '#fff',
    txtColor2: '#000',
  },
];
export {Data, NewsData, placesData, placesWeather, settingsData};
