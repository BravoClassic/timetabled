import PropTypes from "prop-types"
const Event = (props) => {
  return (
    // Why props.event and props.color not working?
    <>
        <td className={`Event ${props.color}`}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </td>
    </>
  )
}

Event.propTypes = {
    event: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
    }
Event.defaultProps = {
    event: "No Event",
    color: "red",
    location: "No Location"
    }

export default Event