import React from 'react';
import { Container } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigationBar';
import scale from '../assets/scale.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return (
        <div>
            <NavigationBar />
            <h1 className="homepage-title" style={{backgroundImage: "url(https://thumbs.dreamstime.com/z/violin-over-music-score-sheet-134768786.jpg)"}}>
                Learn classical music with interactive quizzes and audio aid!
            </h1>
            <Container className="homepage-subdescription">
                <p style={{textAlign: "left", justifyContent: "center"}}>
                    A suitable website (and completely free too!) for anyone to pick up interests in classical music.
                    People of any age and background without any music reading knowledge are welcome to this educational site!
                    Our site experimenters reported that this application enhances their music literacy and knowledge!
                </p>
                <img src={scale} alt="scale" classname="homepage-gif" />
            </Container>
            <h1 className="homepage-title">
                Testimonials
            </h1>
            <Container className="homepage-testimonial">
                <div style={{padding: "0.75rem"}}>
                <img className="img" src="https://images.squarespace-cdn.com/content/v1/5735ffd51d07c093e26f869d/1463527949702-4NYD1SK1GYA1Q9V27RWQ/image-asset.jpeg?format=1000w" alt="sample1" />
                <p>
                    <i>
                        "I love this website! I've now understood everything!" - Mr. X
                    </i>
                </p>
                <img className="img" src="https://images.squarespace-cdn.com/content/v1/5735ffd51d07c093e26f869d/1463527949702-4NYD1SK1GYA1Q9V27RWQ/image-asset.jpeg?format=1000w" alt="sample2" />
                <p>
                    <i>
                        "Nice learning platform!" - Mr. Y
                    </i>
                </p>
                <img className="img" src="https://images.squarespace-cdn.com/content/v1/5735ffd51d07c093e26f869d/1463527949702-4NYD1SK1GYA1Q9V27RWQ/image-asset.jpeg?format=1000w" alt = "sample3" />
                <p>
                    <i>
                        "I feel inspired to learn more music and to find a teacher!" - Mr. Z
                    </i>
                </p>
                </div>
            </Container>
        </div>
    );
}


