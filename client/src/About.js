import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about">
      <h3>
        This site will show you the top 10 cities based on population. If you
        click on a city it will give you some nicknames and attractions for that
        city. Users will be able to add a city with the city form. Users can
        remove a city from the list on the details page.
      </h3>
      <Link to="/">Back</Link>
    </div>
  )
}
export default About
