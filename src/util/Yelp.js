const apiKey = 'DWEIklGCoZtBLKlnycHf_sWBGsllfrZAeTyRdjwffxTk4N4dow2U-dUMHiJf376Gwx9dZ0oC3eey9x_n0hqsAwocJQghMyi-vR4dlJ-GkL9faN3AHnMwh-hjaAkDXHYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }))
      }
    })
  }
}

export default Yelp;
