let xhr=new XMLHttpRequest();
city='Hyderabad'
xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82977113b6fb604ef07f1ff7f879c878&units=&imperial`)
xhr.send();
xhr.onload=function()
{
    data=JSON.parse(xhr.response)
    console.log(data.main.temp)
    console.log(data.weather[0].main)
    // console.log(data)

}