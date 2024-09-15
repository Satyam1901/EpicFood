/* eslint-disable react/prop-types */

function ResturantItemsList({ items = [] }) {
    return (
      <>
        {items.map((item) => (
          <div key={item.card.info.id}>
            <div>{item.card.info.name} </div>
            <div>{item.card.info.description} </div>
          </div>
        ))}
      </>
    );
  }
  
  export default ResturantItemsList;
  