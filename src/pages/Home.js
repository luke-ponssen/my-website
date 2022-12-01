import image1 from '../images/image1.png';
import './Home.css';

export default function Home() {
    return (
        <>
        <display className="display">
            <ul>
                <li>Welcome to My Portfolio</li>
                <li><img src={image1} className="picture" alt="none" /></li>
            </ul>
        </display>
        </>
    )
}