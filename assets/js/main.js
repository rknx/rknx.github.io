const sSBaseUrl="https://api.semanticscholar.org/graph/v1/paper/"
apiKey="ef19d9eb6fa9bfaf37b3508d467e184cf9c7a180"
const sSApiTag="?fields=title,citationCount"
fetch(sSBaseUrl+apiKey+sSApiTag)
  .then(response => response.json())
  .then(data => console.log(data.citationCount))
