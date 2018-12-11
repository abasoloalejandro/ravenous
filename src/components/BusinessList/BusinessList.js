import React from 'react';
import './BusinessList.css';
//Import the <- Business / -> Component
import Business from '../Business/Business';

//Create the <- BusinessList / -> Component
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />;
          })
        }
      </div>
    )
  }
}

//Export the <- BusinessList / -> Component
export default BusinessList;
