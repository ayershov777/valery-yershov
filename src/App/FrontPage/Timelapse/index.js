import React from 'react'
import Button from 'react-bootstrap/Button'

const timelapse = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvalery.yershov.3%2Fvideos%2F2500473070013934%2F&show_text=0&width=560";

function TimelapseComponent() {
  return (
    <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '5vh',
          paddingBottom: '5vh',
        }}
      >
        <iframe
          title="timelapse"
          src={timelapse}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allowFullScreen="true"
          style={{
            border: 'none',
            overflow: 'hidden',
            width: '40%',
            height: 339/560 * 40 + 'vw' ,
          }}>
        </iframe>
        <div
          style={{
            width: '40%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'vertical',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: 'auto 0',
            fontWeight: '600',
            fontSize: '1.5vw',
            lineHeight: '2em',
            textAlign: 'center',
            fontFamily: 'Mukta, sans-serif',
            fontStyle: 'italic'
          }}
        >
          <p>Watch as Valery deploys his signature technique to develop his work. Each piece is dressed with a beautiful hand crafted frame which is seamlessly merged with a traditional canvas painting. The entire piece is then finished with a brilliant coat of resin, revealing a stunning polished texture.</p>
          <Button variant="outline-dark">learn more</Button>
        </div>
      </div>
  );
}

export default TimelapseComponent;
