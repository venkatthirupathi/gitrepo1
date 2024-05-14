city='Hyderabad'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82977113b6fb604ef07f1ff7f879c878&units=&imperial`)



    .then((resp)=>resp.json())   
    .then((data)=>console.log(data.main.temp)
    )

