import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about">
      <h3>
        This site will show you the top 10 cities based on population. If you
        click on a city it will give you some nicknames and attractions for that
        city. Users will also be able to like each city and add a city with the
        city form.
      </h3>
      <Link to="/">Back</Link>
    </div>
  )
}
export default About
