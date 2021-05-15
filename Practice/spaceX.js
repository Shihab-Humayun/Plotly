const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults =>
  console.log(spaceXResults[0].location.latitude));

d3.json("samples.json").then(function(data){
  console.log(data);
});

// To load the page, navigate to the directory where samples.json and index.html, 
// as well as the script file, plots.js, are located.
// Open the command line (Terminal or Git Bash) and type the following:
// python -m http.server

d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
  filteredWfreq = wfreq.filter(element => element != null);
  console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});