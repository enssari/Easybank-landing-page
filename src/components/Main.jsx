import React, { useState } from 'react';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import {AiOutlineMenu} from 'react-icons/ai';
import bg from '../images/bg-intro-mobile.svg';
import ob from '../images/icon-online.svg';
import budgeting from '../images/icon-budgeting.svg';
import onboard from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';
import mockups from '../images/image-mockups.png';
import money from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg';
import face from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import logoBlue from '../images/logoBlue.svg';

export const Main = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [cancelClicked, setCancelClicked] = useState(false);

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  }
  const toggleCancel = () => {
    setCancelClicked(!cancelClicked);
    setMenuClicked(!menuClicked);
  }

  return (
    <>

    {/* DESKTOP VİEW */}
    <div className="hidden md:block bg-white h-[5.2rem]" id="navbar-wrapper-pc">
        <div className="
        flex flex-row space-x-[3.3rem] z-[1000] bg-white lg:space-x-[10rem] xl:space-x-[15rem] 2xl:space-x-[20rem] justify-center p-4 mt-3
        " id="navbar-content-pc">
            <div className="" id="logo">
                <img src={logoBlue} className='h-[1.4rem] w-[8rem] 2xl:w-[10rem] mt-3'/>
            </div>
            <div className="" id="navbar-items-pc">
                <ul className='list-none space-x-6 flex flex-row text-grayishblue mt-3'>
                    <li className='
                    hover:text-black hover:border-b-solid hover:border-b-brightcyan hover:border-b-[2px] duration-150 hover:cursor-pointer
                    pb-4'>
                        Home
                    </li>
                    <li className='
                    hover:text-black hover:border-b-solid hover:border-b-brightcyan hover:border-b-[2px] duration-150 hover:cursor-pointer
                    pb-4'>
                        About
                    </li>
                    <li className='
                    hover:text-black hover:border-b-solid hover:border-b-brightcyan hover:border-b-[2px] duration-150 hover:cursor-pointer
                    pb-4'>
                        Contact
                    </li>
                    <li className='
                    hover:text-black hover:border-b-solid hover:border-b-brightcyan hover:border-b-[2px] duration-150 hover:cursor-pointer
                    pb-4'>
                        Blog
                    </li>
                    <li className='
                    hover:text-black hover:border-b-solid hover:border-b-brightcyan hover:border-b-[2px] duration-150 hover:cursor-pointer
                    pb-4'>
                        Careers
                    </li>
                </ul>
            </div>
            <div className="" id="invite-button-pc">
                <button 
                    className='
                    bg-gradient-to-r from-limegreen to-brightcyan text-white hover:from-[#b8e7b8] hover:to-[cyan]
                    rounded-full h-[2.7rem] w-[10rem] font-bold active:from-[grey] active:to-[grey] active:w-[9.9rem] 
                    active:h-[2.6rem] duration-300'>
                        Request Invite
                </button>
            </div>
        </div>
    </div>

    <div className="z-[-1] hidden md:block" id="hero-wrapper">
        <div className="flex flex-col justify-center m-auto" id="hero-content-pc">
            <div className="flex flex-row" id="invite-section-pc">
                <div 
                className="
                flex flex-col space-y-4 p-5 m-auto relative left-[0rem] lg:left-[-1.5rem] xl:left-[-2rem] 2xl:left-[-2rem]
                top-[1rem] lg:top-[2rem]" id='left-side'>
                    <div className="text-start w-[19rem] xl:w-[24rem]" id="text-wrapper">
                        <h1 className='text-[1.9rem] lg:text-[2.2rem] xl:text-[3rem] font-sans text-darkblue'>Next generation digital banking</h1>
                        <p className='text-grayishblue text-[1rem] lg:text-[1.1rem] xl:text-[1.5rem] leading-[1.8rem]'>
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                        </p>
                    </div>
                    <div className="" id="inv-button">
                        <button 
                        className='
                        bg-gradient-to-r from-limegreen to-brightcyan text-white hover:from-[#b8e7b8] hover:to-[cyan]
                        rounded-full h-[2.7rem] w-[10rem] font-bold active:from-[grey] active:to-[grey] active:w-[9.9rem] 
                        active:h-[2.6rem] duration-300'>
                            Request Invite
                        </button>
                    </div>
                </div>
                <div className="z-[-1000] relative" id="right-side">
                    <div className="h-[25rem] lg:h-[30rem]" id="img-wrapper">
                        <img src={bg} className='h-[30rem] z-[-1000] xl:ml-3 w-full lg:h-[35rem] lg:w-[37rem] xl:h-[35rem] xl:w-[40rem] 2xl:w-[50rem]'/>
                        <img src={mockups} 
                        className='
                        z-[1] relative top-[-34.5rem] lg:top-[-39.5rem] xl:top-[-39.5rem] left-12 xl:left-[5rem] 2xl:left-[7rem] h-[34rem] lg:h-[45rem] 
                        xl:h-[50rem] 2xl:h-[52rem]'/>
                    </div>
                </div>
            </div>

            <div 
            className="
            flex flex-col relative top-[5rem] lg:top-[6rem] xl:left-[-5rem] 2xl:left-[-10rem] m-auto justify-center h-[37rem] w-[47rem] lg:w-[62rem]" id="why-choose-section-pc">
                <div className="p-5 space-y-7 flex flex-col justify-center" id="why-choose-content-pc">
                    <div className="pb-7 ml-[0rem] justify-center" id="why-choose-text-pc">
                        <h1 className='text-darkblue text-[1.7rem] xl:text-[2.5rem]'>Why choose Easybank?</h1>
                        <p className='text-grayishblue text-[1rem] xl:text-[1.5rem] leading-[1.8rem] w-[35rem]'>
                        We leverage Open Banking to turn your bank account into your financial hub.Control your finances like never before
                        </p>
                    </div>
                </div>
                    <div className="flex flex-row space-x-10 ml-5 xl:ml-[8rem] 2xl:ml-[16rem] justify-center" id="why-choose-items-pc">
                        <div className="flex flex-col space-y-4" id="ob-pc">
                            <img src={ob} className='w-[3rem] xl:w-[4.5rem]'/>
                            <div className="" id="ob-text-pc">
                                <h1 className='text-darkblue text-[1.2rem] xl:text-[1.5rem]'>Online Banking</h1>
                                <p className='text-grayishblue text-[.8rem] xl:text-[1rem] xl:w-[15rem] 2xl:w-[17rem] leading-[1.3rem]'>
                                Our modern web and mobile applications allow you to keep
                                track of your finances wherever you are in the world</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4" id="budgeting-pc">
                            <img src={budgeting} className='w-[3rem] xl:w-[4.5rem]'/>
                            <div className="" id="budgeting-text-pc">
                                <h1 className='text-darkblue text-[1.2rem] w-[9.5rem] xl:w-[12rem] xl:text-[1.5rem]'>Simple Budgeting</h1>
                                <p className='text-grayishblue text-[.8rem] xl:text-[1rem] xl:w-[15rem] 2xl:w-[17rem] leading-[1.3rem]'>
                                See exactly where your money goes each month.
                                Receive notifications when you're close
                                to your hitting limits.</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4" id="onboarding-pc">
                            <img src={onboard} className='w-[3rem] xl:w-[4.5rem]'/>
                            <div className="" id="onboarding-text-pc">
                                <h1 className='text-darkblue text-[1.2rem] xl:text-[1.5rem]'>Fast Onboarding</h1>
                                <p className='text-grayishblue text-[.8rem] xl:text-[1rem] xl:w-[15rem] 2xl:w-[17rem] leading-[1.3rem]'>
                                We don't do branches.Open your account
                                in minutes online and start taking
                                control of your finances right away.</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4" id="api-pc">
                            <img src={api} className='w-[3rem] xl:w-[4.5rem]'/>
                            <div className="" id="api-text-pc">
                                <h1 className='text-darkblue text-[1.2rem] xl:text-[1.5rem]'>Open API</h1>
                                <p className='text-grayishblue text-[.8rem] xl:text-[1rem] xl:w-[15rem] 2xl:w-[17rem] leading-[1.3rem]'>
                                Manage your savings, investments, pension and much more from one account.
                                Tracking your money has never been easier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative top-[5rem] lg:top-[4.4rem] xl:top-[8rem] 2xl:top-[10rem]" id="latest-article-section-pc">
                <div className="" id="latest-article-content-pc">
                    <div className="m-auto w-[44.5rem] lg:w-[59.5rem] xl:w-[69.5rem] 2xl:w-[79.5rem]" id="header-text-pc">
                        <h1 className='text-darkblue text-[2.5rem] text-start'>Latest Articles</h1>
                    </div>
                    <div 
                    className="
                    flex flex-row m-auto w-[44.2rem] lg:w-[60.7rem] xl:w-[70rem] 2xl:w-[76rem] space-x-7 xl:space-x-7 relative lg:left-[.5rem]
                    xl:left-[0.2rem] 2xl:left-[-1.8rem]" id="section-tables">
                        <div className="" id="money-table-pc">
                            <img src={money} className='h-[6.5rem] w-[12rem] lg:h-[8rem] lg:w-[20rem] xl:h-[12rem]'/>
                            <div className="p-5 w-[10rem] lg:w-[14rem] xl:w-[16.2rem] 2xl:w-[17.7rem]" id="money-text-pc">
                                <h4 className='text-grayishblue text-[.8rem]'>By Claire Robinson</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                Receive money in any currency with no fees
                                </h1>
                                <p className='text-grayishblue'>
                                The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...
                                </p>
                            </div>
                        </div>
                        <div className="" id="restaurant-table-pc">
                            <img src={restaurant} className='h-[6.5rem] w-[12rem] lg:h-[8rem] lg:w-[20rem] xl:h-[12rem]'/>
                            <div className="p-5 w-[10.2rem] lg:w-[14.6rem] xl:w-[16.2rem] 2xl:w-[17.7rem]" id="restaurant-text-pc">
                                <h4 className='text-grayishblue text-[.8rem]'>By Wilson Hutton</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                Treat yourself without worrying about money
                                </h1>
                                <p className='text-grayishblue'>
                                Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..
                                </p>
                            </div>
                        </div>
                        <div className="" id="plane-table-pc">
                            <img src={plane} className='h-[6.5rem] w-[12rem] lg:h-[8rem] lg:w-[20rem] xl:h-[12rem]'/>
                            <div className="p-5 w-[10rem] lg:w-[14rem] xl:w-[16.2rem] 2xl:w-[17.7rem]" id="plane-text-pc">
                                <h4 className='text-grayishblue text-[.8rem]'>By Wilson Hutton</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                Take your Easybank card wherever you go
                                </h1>
                                <p className='text-grayishblue'>
                                We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.
                                We'll even show you...
                                </p>
                            </div>
                        </div>
                        <div className="" id="confetti-table-pc">
                            <img src={confetti} className='h-[6.5rem] w-[12rem] lg:h-[8rem] lg:w-[20rem] xl:h-[12rem]'/>
                            <div className="p-5 w-[10.2rem] lg:w-[14.7rem] xl:w-[16.1rem] 2xl:w-[17.6rem]" id="confetti-text-pc">
                                <h4 className='text-grayishblue text-[.8rem]'>By Claire Robinson</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                Our invite-only Beta accounts are now live!
                                </h1>
                                <p className='text-grayishblue'>
                                After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to
                                request an invite through the site...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto bg-darkblue w-full relative top-[12rem] xl:top-[15rem] 2xl:top-[17rem] pb-2" id="footer-pc">
                <div className="grid grid-cols-3 p-8 space-x-[1rem]" id="footer-content-pc">
                    <div className="flex flex-col space-y-12 w-[15rem] m-auto" id="left-side">
                        <img src={logo} className='w-[8rem]'/>
                        <div className="flex flex-row space-x-4" id="socials-pc">
                            <img src={face} className='w-[1.5rem] hover:cursor-pointer hover:bg-limegreen'/>
                            <img src={youtube} className='w-[1.5rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-full'/>
                            <img src={twitter} className='w-[1.5rem] hover:cursor-pointer'/>
                            <img src={pinterest} className='w-[1.5rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-full'/>
                            <img src={instagram} className='w-[1.5rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-lg'/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2" id="middle">
                        <div className="space-y-3 flex flex-col text-[#e3e1e1] text-[.9rem]" id="left-links">
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>About Us</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Contact</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Blog</a>
                        </div>
                        <div className="space-y-3 text-[#e3e1e1] text-[.9rem] flex flex-col w-[6rem]" id="right-links">
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Careers</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Support</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Privacy Policy</a>
                        </div>
                    </div>
                    
                    <div 
                    className="
                    flex flex-col space-y-3 w-[15rem] m-auto relative left-[2rem] lg:left-[4rem] xl:left-[9rem] 2xl:left-[17rem]" id="right-side">
                        <button 
                        className='
                        bg-gradient-to-r from-limegreen to-brightcyan text-white hover:from-[#b8e7b8] hover:to-[cyan]
                        rounded-full h-[2.8rem] w-[12.1rem] font-bold active:from-[grey] active:to-[grey] active:w-[12rem] 
                        active:h-[2.7rem] duration-300'>
                        Request Invite
                        </button>
                        <h1 className='text-grayishblue text-[1rem] m-0 pt-2 ml-[-2.5rem]'>&copy; Easybank. All Rights Reserved</h1>
                    </div>
                </div>
            </div>
            </div>

    {/* MOBİLE VİEW */}
    <div className='m-auto bg-white z-[1000] md:hidden block' id="navbar">
        <div className='flex m-auto justify-between p-6' id="navbar-content">
            <div id="logo">
                <img src={logoBlue} className='w-[10rem] h-[1.6rem]'/>
            </div>
            <div className=":hidden" id='menu&close'>
                <img src={close} onClick={toggleCancel} 
                className={`
                hover:cursor-pointer ${menuClicked ? 'flex' : 'hidden'} duration-300 w-[1.3rem]`}/>
                <AiOutlineMenu onClick={toggleMenu} size={25}
                className={`
                hover:cursor-pointer ${menuClicked ? 'hidden' : 'flex'} duration-300`}/>
            </div>
        </div>
        <div 
        className={`
        flex justify-center text-center absolute top-[6rem] sm:left-[7.5rem] left-[3.8rem] bg-white ${menuClicked ? 'flex shadow-xl shadow-black' : 'hidden'}
        w-[24rem] h-[21.3rem] rounded-lg m-auto md:hidden`} id="navbar-items">
            <ul className='list-none text-darkblue font-sans text-[1.4rem] font-medium space-y-7 m-auto'>
                <li 
                className='
                hover:cursor-pointer hover:text-blue-600 hover:font-bold duration-100 hover:bg-limegreen w-[24rem]'>
                    Home
                </li>
                <li 
                className='
                hover:cursor-pointer hover:text-blue-600 hover:font-bold duration-100 hover:bg-limegreen w-[24rem]'>
                    About
                </li>
                <li 
                className='
                hover:cursor-pointer hover:text-blue-600 hover:font-bold duration-100 hover:bg-limegreen w-[24rem]'>
                    Contact
                </li>
                <li 
                className='
                hover:cursor-pointer hover:text-blue-600 hover:font-bold duration-100 hover:bg-limegreen w-[24rem]'>
                    Blog
                </li>
                <li 
                className='
                hover:cursor-pointer hover:text-blue-600 hover:font-bold duration-100 hover:bg-limegreen w-[24rem]'>
                    Careers
                </li>
            </ul>
        </div>
    </div>

    <div className={`m-auto duration-300 md:hidden block`} id="hero">
        <div className="flex flex-col m-auto" id="content-wrapper-1">
            <div className={`space-y-[-14rem] text-center pb-5 m-auto justify-center`} id="invite-section">
                <img src={bg} className='object-cover w-[100%] h-[22rem] z-[-2] relative m-auto'/>
                <img src={mockups} 
                className='
                w-[30.2rem] h-[29.6rem] relative top-[-14.4rem] left-[0rem] z-[-1] object-contain m-auto'/>
                <div className="space-y-4 w-[26rem] pb-[4.5rem] ml-[2.5rem] m-auto" id="text-wrapper">
                    <h1 className='text-[3rem] font-sans text-darkblue m-auto'>Next generation digital banking</h1>
                    <p className='text-grayishblue text-[1.2rem] leading-[1.8rem] m-auto'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
                    saving, budgeting, investing, and much more. 
                    </p>
                </div>
                <button 
                className='
                bg-gradient-to-r from-limegreen to-brightcyan text-white hover:from-[#b8e7b8] hover:to-[cyan]
                rounded-full h-[3.7rem] w-[13rem] font-bold active:from-[grey] active:to-[grey] active:w-[12.9rem] 
                active:h-[3.6rem] duration-300'>
                    Request Invite
                </button>
            </div>
            <div className="flex justify-center text-center pb-[7rem]" id="why-choose-section">
                <div className="flex flex-col" id="content-wrapper-2">
                    <div className="w-[20.4rem] ml-6 pb-[4rem] pt-[7rem]" id="header-text">
                        <h1 className='text-darkblue text-[2.2rem]'>Why choose Easybank?</h1>
                        <p className='text-grayishblue text-[1.2rem] leading-[1.8rem]'>
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                        </p>
                    </div> 
                    <div className="flex flex-col justify-center text-center m-auto space-y-7" id="why-choose-items">
                        <div className="" id="ob">
                            <div className="flex m-auto relative justify-center" id="ob-img">
                                <img src={ob} className='w-[5.2rem] object-cover relative'/>
                            </div>
                            <div className="w-[23.5rem] ml-[0rem]" id="text-wrapper-ob">
                                <h1 className='text-darkblue text-[1.5rem]'>Online Banking</h1>
                                <p className='text-grayishblue text-[1.1rem] leading-[1.8rem]'>
                                Our modern web and mobile applications allow you to keep
                                track of your finances wherever you are in the world
                                </p>
                            </div>
                        </div>
                        <div className="" id="budgeting">
                            <div className="flex m-auto relative justify-center" id="budget-img">
                                <img src={budgeting} className='w-[5.2rem] object-cover relative'/>
                            </div>
                            <div className="w-[23.5rem] ml-[0rem]" id="text-wrapper-budget">
                                <h1 className='text-darkblue text-[1.5rem]'>Simple Budgeting</h1>
                                <p className='text-grayishblue text-[1.1rem] leading-[1.8rem]'>
                                See exactly where your money goes each month.Receive notifications when you're close
                                to your hitting limits.
                                </p>
                            </div>
                        </div>
                        <div className="" id="onboard">
                            <div className="flex m-auto relative justify-center" id="onboard-img">
                                <img src={onboard} className='w-[5.2rem] object-cover relative'/>
                            </div>          
                            <div className="w-[23.5rem] ml-[0rem]" id="text-wrapper-onboard">
                                <h1 className='text-darkblue text-[1.5rem]'>Fast Onboarding</h1>
                                <p className='text-grayishblue text-[1.1rem] leading-[1.8rem]'>
                                We don't do branches.Open your account in minutes online and start taking
                                control of your finances right away.
                                </p>
                            </div>
                        </div>
                        <div className="" id="api">
                            <div className="flex m-auto relative justify-center" id="api-img">
                                <img src={api} className='w-[5.2rem] object-cover relative'/>
                            </div>
                            <div className="w-[23.5rem] ml-[0rem]" id="text-wrapper-api">
                                <h1 className='text-darkblue text-[1.5rem]'>Open API</h1>
                                <p className='text-grayishblue text-[1.1rem] leading-[1.8rem]'>
                                Manage your savings, investments, pension and much more from one account.
                                Tracking your money has never been easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto pt-[4rem] pb-[7rem] md:hidden" id="latest-article-section">
                <div className="flex justify-center flex-col space-y-[3rem]" id="content-wrapper-3">
                    <div className="text-darkblue text-[2.5rem] text-center" id="header-text">
                        Latest Articles
                    </div>
                       <div className="" id="currency-table">
                            <img src={money} className='w-[25rem] h-[15rem] object-cover rounded-lg' />
                            <div className="w-[22rem] ml-6 p-7" id="currency-text">
                                <h4 className='text-grayishblue text-[.8rem]'>By Claire Robinson</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                    Receive money in any currency with no fees
                                </h1>
                                <p className='text-grayishblue'>
                                    The world is getting smaller and we're becoming more mobile. So why should you be
                                    forced to only receive money in a single ..
                                </p>
                            </div>
                        </div>
                        <div className="" id="restaurant-table">
                            <img src={restaurant} className='w-[25rem] h-[15rem] object-cover rounded-lg' />
                            <div className="w-[22rem] ml-6 p-7" id="currency-text">
                                <h4 className='text-grayishblue text-[.8rem]'>By Wilson Hutton</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                    Receive money in any currency with no fees
                                </h1>
                                <p className='text-grayishblue'>
                                    Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..
                                </p>
                            </div>
                        </div>    
                        <div className="" id="plane-table">
                            <img src={plane} className='w-[25rem] h-[15rem] object-cover rounded-lg' />
                            <div className="w-[22rem] ml-6 p-7" id="plane-text">
                                <h4 className='text-grayishblue text-[.8rem]'>By Wilson Hutton</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                    Take your Easybank card wherever you go
                                </h1>
                                <p className='text-grayishblue'>
                                    We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad.
                                    We'll even show you...
                                </p>
                            </div>
                        </div>
                        <div className="" id="confetti-table">
                            <img src={confetti} className='w-[25rem] h-[15rem] object-cover rounded' />
                            <div className="w-[22rem] ml-6 p-7" id="confetti-text">
                                <h4 className='text-grayishblue text-[.8rem]'>By Claire Robinson</h4>
                                <h1 className='text-darkblue font-sans text-[1.2rem] hover:cursor-pointer hover:text-limegreen duration-100'>
                                    Our invite-only Beta accounts are now live!
                                </h1>
                                <p className='text-grayishblue'>
                                    After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to
                                    request an invite through the site...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="m-auto bg-darkblue w-full md:hidden block" id="footer">
                <div className='text-center justify-center flex flex-col space-y-12 px-[7.5rem] py-11' id="content-wrapper-4">
                    <div className="justify-center flex" id="logo-2">
                        <img src={logo} className='w-[10rem]'/>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center" id="social-icons">
                        <img src={face} className='w-[2rem] hover:cursor-pointer hover:bg-limegreen'/>
                        <img src={youtube} className='w-[2rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-full'/>
                        <img src={twitter} className='w-[2rem] hover:cursor-pointer'/>
                        <img src={pinterest} className='w-[2rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-full'/>
                        <img src={instagram} className='w-[2rem] hover:cursor-pointer hover:bg-limegreen hover:rounded-lg'/>
                    </div>
                    <div className="" id="linked-items">
                        <ul className='list-none text-[#e3e1e1] text-[1.1rem] space-y-5 flex flex-col'>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>About Us</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Contact</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Blog</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Careers</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Support</a>
                            <a href="" className='hover:cursor-pointer hover:text-limegreen hover:font-medium'>Privacy Policy</a>
                        </ul>
                    </div>
                    <div className="" id="invite-button-footer">
                        <button 
                        className='
                        bg-gradient-to-r from-limegreen to-brightcyan text-white hover:from-[#b8e7b8] hover:to-[cyan]
                        rounded-full h-[3.7rem] w-[13rem] font-bold active:from-[grey] active:to-[grey] active:w-[12.9rem] 
                        active:h-[3.6rem] duration-300'>
                        Request Invite
                        </button>
                    </div>
                    <div className="m-auto flex justify-center w-[16rem]" id="copyright">
                        <h1 className='text-grayishblue text-[1.1rem] m-0'>&copy; Easybank. All Rights Reserved</h1>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}
