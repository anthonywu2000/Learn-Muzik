import React from 'react';
import { Container } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return (
        <div>
            <NavigationBar />
            <h1 className="homepage-title">
                Learn classical music with interactive quizzes and audio aid!
            </h1>
            <Container className="homepage-subdescription">
                <p style={{textAlign: "left", justifyContent: "center"}}>
                    A suitable website for young children to pick up interests in classical music.
                    People of any age and background without any music reading knowledge are welcome to this educational site!
                    Our site experimenters reported that this application enhances their music literacy and knowledge!
                </p>
            </Container>
            <h1>
                Testimonials
            </h1>
            <Container>
                <img className="img" src = "https://images.squarespace-cdn.com/content/v1/5735ffd51d07c093e26f869d/1463527949702-4NYD1SK1GYA1Q9V27RWQ/image-asset.jpeg?format=1000w" alt = "sample1" />
                <p>
                    <i>
                        "I love this website! I've now understood everything! - Mr. Bach"
                    </i>
                </p>
                <img className="img" src = "https://images.squarespace-cdn.com/content/v1/5735ffd51d07c093e26f869d/1463527949702-4NYD1SK1GYA1Q9V27RWQ/image-asset.jpeg?format=1000w" alt = "sample2" />
                <p>
                    <i>
                        "Nice learning platform! - Mr. Ginastera"
                    </i>
                </p>
            </Container>
        </div>
    );
}


