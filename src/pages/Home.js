import '../index.css';
import React from 'react';

import { Navbar } from '../navbar';
import {Header} from '../Header';
import {Howitworks} from '../Howitworks';
import {Aboutus} from '../Aboutus';
import {Services} from '../Services';
import {Contact} from '../Contact';
import {Footer} from '../Footer';

export function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Howitworks/>
    <Aboutus/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}


