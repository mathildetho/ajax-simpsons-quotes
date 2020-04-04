    // This function loads Simpsons data from the Simpsons API
    function fetchSimpsonsJSON() {
        // Feel free to download this HTML and edit it, to use another Simpsons Quote
        const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
        axios.get(url)
          .then(response => response.data[0])
          .then(function(simpsons) {      
            // Build a block of HTML
            const simpsonsHtml = `
              <div id="quote">
                <h4>${simpsons.quote}</h4>
                <p>#${simpsons.character}</p>       
              </div>
              <img src=${simpsons.image} alt=${simpsons.character}/>
              `;
            document.querySelector('#simpsons').innerHTML = simpsonsHtml;
          });
      }
      fetchSimpsonsJSON();
