var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); 
request.send();
request.onload= function (){
    var data=JSON.parse(request.response);
    console.log(data);
    for(let i=0;i<data.length;i++){
       // console.log("Country :",data[i].name,", Capital:",data[i].capital);// prints country names with their capitals in the console.
       console.log(`Country: ${data[i].name}
        Latitude: ${data[i].latlng[0]} , Longitude: ${data[i].latlng[1]}`) //prints Latitude and longitude of the countries in the console.

       console.log(`Country: ${data[i].name} 
       Flag: ${data[i].flag}`) 
    }
}