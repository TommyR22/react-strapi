import './App.scss';
import {useEffect, useRef, useState} from "react";
import {useTranslation} from 'react-i18next';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Post from "./components/Post";

function App() {
    const {t, i18n} = useTranslation();
    const [loaderState, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);
    let headRef = useRef();

    const goToHead = () => {
        headRef.current.scrollIntoView({behavior: 'smooth'})
    };

    useEffect(() => {
        setLoader(true);
        fetch("http://localhost:1337/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setLoader(false);
                    setPosts(result);
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                }
            )
    }, []);

    return (
        <div className="App" ref={headRef}>
            <div style={{position: "relative", zIndex: 2, backgroundColor: "white"}}>
                <Nav className="nav"/>
                {/*<Menu goToAbout={goToAbout} goToGallery={goToGallery} goToContacts={goToContacts}></Menu>*/}
            </div>
            <div style={{paddingTop: 100}}>
                {loaderState && <Loader/>}
                {!loaderState && posts.map((el, index) => <Post info={el} index={index} value={el} key={el.id}></Post>)}
            </div>

            <Footer goToHead={goToHead}/>
        </div>
    );
}

export default App;
