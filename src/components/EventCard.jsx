import React from 'react';

const EventCard = ({ title, date, description, type }) => {
  return (
    <div className="card">
      <div className="card-body">
        <span style={{ 
            backgroundColor: type === 'Webinar' ? '#e3f2fd' : '#fff3e0',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.8rem',
            color: '#333'
        }}>
            {type}
        </span>
        <h3 className="card-title" style={{marginTop: '10px'}}>{title}</h3>
        <span className="card-date">📅 {date}</span>
        <p>{description}</p>
        <button className="btn-primary" style={{width: '100%', marginTop: '10px'}}>Daftar Sekarang</button>
      </div>
    </div>
  );
};

export default EventCard;