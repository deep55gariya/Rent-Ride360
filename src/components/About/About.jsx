import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCarAlt } from 'react-icons/fa';

function RentgoSteps(){
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>3 Working Steps</h2>
      <div style={styles.steps}>
        {/* Choose a location */}
        <div style={styles.step}>
          <FaMapMarkerAlt style={styles.icon} />
          <p style={styles.stepText}>Choose a location</p>
          <p>Select your desired rental location from our extensive network of car rental spots.</p>
        </div>

        {/* Pick-up date */}
        <div style={styles.step}>
          <FaCalendarAlt style={styles.icon} />
          <p style={styles.stepText}>Pick-up date</p>
          <p>Specify the date and time you wish to pick up your car with flexible scheduling options.</p>
        </div>

        {/* Book your car */}
        <div style={styles.step}>
          <FaCarAlt style={styles.icon} />
          <p style={styles.stepText}>Book your car</p>
          <p>Browse through our wide range of vehicles and choose the one that best suits your needs.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '600',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',  // Allow items to wrap on smaller screens
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '250px', // Limit max width for better fit
    margin: '10px',  // Add some margin between items
  },
  icon: {
    fontSize: '3rem',
    color: '#FFD700',  // Change icon color to yellow (Hex code for yellow)
    marginBottom: '10px',
  },
  stepText: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '10px',
  },

  // Media Queries for responsiveness
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2rem',
    },
    steps: {
      gap: '20px',  // Reduce gap between steps on smaller screens
    },
    stepText: {
      fontSize: '1rem',  // Adjust font size for smaller screens
    },
  },
  
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.5rem',  // Smaller heading for very small screens
    },
    steps: {
      gap: '10px',  // Further reduce gap between steps
    },
    icon: {
      fontSize: '2rem',  // Reduce icon size on small screens
    },
    stepText: {
      fontSize: '0.9rem',  // Adjust font size for very small screens
    },
  },
};

export default RentgoSteps;
