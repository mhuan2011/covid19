var weatherApi = "https://api.covid19api.com/summary";


fetch(weatherApi) 
    .then(function(response){
        return response.json();
    }) 
    .then(function(posts){
        var covidApi = posts.Countries;
        console.log(covidApi);
        var list_api="";
        for(var i=0; i<189; i++){
            //quoc gia
            var country =  covidApi[i].Country;
            //tong so ca mac
            var totalConfirmed = covidApi[i].TotalConfirmed;
            //tong so nguoi chet
            var totalDeath = covidApi[i].TotalDeaths;
            //so ca mac moi
            var NewConfirmed = covidApi[i].NewConfirmed;
            //so nguoi chet moi
            var NewDeaths = covidApi[i].NewDeaths;
            list_api += `
                <tr>
                    <th scope="row">${i}</th>
                    <td>${country}</td>
                    <td class="comfirm"> ${totalConfirmed}</td>
                    <td class="warning">${totalDeath}</td>
                    <td>${NewConfirmed}</td>
                    <td>${NewDeaths}</td>
                </tr>
            
            `;
            list_api += ' ';
        }
        document.getElementById('api_covid').innerHTML = list_api;
    })
    .catch(function(err){
        console.log(err);
    });
