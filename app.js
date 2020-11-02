/*var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d43f7d7cc4808d0d7c3f84fcdc67585ac1603077241");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/

const data = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try{
      const response = await fetch(url).then(response => response.json())
      setTimeout(() => {
        for(let i = 0; i < 20; i++) {
          console.log(`${i+1}: ${response[i].title}`);
        }
      },1000);
    }catch (error) {
      console.log(`Error: ${error}`);
    }
}

const responseData = () => {
  let prom = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('Informacion enviada');
    },3000);
  })
  return prom;
}

async function app(data, responseData) {
  data();
  let prueba = await responseData(); //llamado de informacion enviada 
  console.log(prueba);
}

app(data, responseData);