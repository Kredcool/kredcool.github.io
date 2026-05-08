import React, { useEffect, useState } from "react";

// constants
const permaLink = "https://api.magicthegathering.io";

// grab an item from magic's api
function fetchItem(extraLink) {
  let fullLink = permaLink + extraLink;
  // for fucks sake, comment this shit
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch(fullLink)
      .then((response) => response.json())
      .then((json) => setFetchedData(json))
      .catch((error) => console.error(error));
  }, [fullLink]);

  return fetchedData;
}

//
function getImage(extraLink) {
  let data = fetchItem(extraLink);
  return data.cards[0].imageUrl;
}

// what that card do
function Wtcd() {
  let image = getImage('/v1/cards?name="second_sunrise"');

  return (
    <div>
      <p>image url: {image}</p>
      {/* check if the image has been gotten and display as such*/}
      {image ? (
        <pre>
          <img src={image} alt="err" />
        </pre>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Wtcd;
