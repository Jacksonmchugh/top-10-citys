import CommentCard from '../components/CommentCard'

const CityDetails = ({ selectedCity }) => {
  return (
    <section className="page">
      {!selectedCity ? (
        <div>
          <h1>No City details found!</h1>
        </div>
      ) : (
        <div>
          <h1>{selectedCity.name}</h1>
          <img src={selectedCity.image} alt={selectedCity.name} />
          <h1>{selectedCity.state}</h1>
          <h3>{selectedCity.description}</h3>
          <h4>{selectedCity.population}</h4>
          <h4>{selectedCity.visits}</h4>
          <div className="comments">
            <h1>Comments</h1>
            {selectedCity.comments.length === 0 ? (
              <h4>No comments here.</h4>
            ) : (
              <div>
                {selectedCity.comments.map((comment) => (
                  <CommentCard key={comment._id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default CityDetails
