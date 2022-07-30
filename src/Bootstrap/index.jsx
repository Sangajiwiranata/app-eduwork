import React from "react";
import Biodata from "./Biodata";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Pengalaman from "./Pengalaman";
import './Style.css'

export default class Bootstrap extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Intro />
                <Biodata />
                <Pengalaman />
                <Contact />
                <Footer />
            </div>
        )
    }
}