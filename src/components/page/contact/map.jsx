import React from 'react';
const containerStyle = {
  width: '100%',
  height: '500px' 
};

const EmbeddedMap = () => {
  const embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.44520349889757!2d79.99347152320851!3d7.111712140341763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb9db8e423ff%3A0xa53d786a539d865b!2s191%2FD%20Wathumulla%20Rd%2C%20Udugampola%2011000!5e0!3m2!1sen!2slk!4v1762662626794!5m2!1sen!2slk";

  return (
    <div className="map-overlay-container" style={containerStyle}>
      <iframe 
        src={embedSrc}
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map" 
        className="map-iframe" 
      >
      </iframe>
    </div>
  );
};

export default EmbeddedMap;