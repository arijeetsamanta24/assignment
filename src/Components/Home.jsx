import React from 'react'


const getDate = () => {
    const today = new Date();
    const month = today.toLocaleString('default',{month:'long'});
    const year = today.getFullYear();
    const date = today.getDate();
    const time = today.getTime().toLocaleString();

    return `${month} ${date}, ${year} . ${time}`
}


const Home = () => {

    const Api = [
        {
            title: "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4Million",
            link: "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/",
            function: getDate(),
            },
            {
            title: "'Writing With Fire' Shines a Light on All-Women News Outlet",
            link: "https://time.com/6142628/writing-with-fire-india-documentary/",
            function: getDate(),
            },
            {
            title: "Moderna Booster May Wane After 6 Months",
            link: "https://time.com/6142852/moderna-booster-wanes-omicron/",
            function: getDate(),
            },
            {
            title: "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
            link:"https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/",
            function: getDate(),
            },
            {
            title: "The James Webb Space Telescope Is in Position—And Now We Wait",
            link: "https://time.com/6142769/james-webb-space-telescope-reaches-l2/",
            function: getDate(),
            },
            {
            title: "We Urgently Need a New National COVID-19 Response Plan",
            link: "https://time.com/6142718/we-need-new-national-covid-19-response-plan/",
            function: getDate(),
            }
    ];


    return (
        <>
            <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="light">
                <div class="bg-white p-4">
                    <h5 class="text-body-emphasis h4">Collapsed content</h5>
                    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-white bg-white">
                <div class="container-fluid">
                    <div className='d-flex'>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h2 className='navheading text-danger'>TIME</h2>
                    </div>
                    <div className='bg-subtle me-2'>
                    <i class="fa-solid fa-magnifying-glass text-dark-50 me-1"></i>
                    <input type="text" placeholder='search...' />
                    </div>
                </div>
            </nav>
            <hr className='text-dark'/>

            <div className='container d-flex justify-content-center'>
                <div className='container'>
                    <h3 className=''  style={{textAlign:'left'}}>FEATURED VOICES</h3>
                    <div className='section1'>
                    <div>
                        <h4>AnatolLieven</h4>
                        Ruusia has been warning the West about Ukraine for Decades
                    </div>
                    <div>
                        <h4>Yohanga Delgado</h4>
                        The life changing practice that will help you feel more gratitude
                    </div>
                    <div>
                        <h4>Ismat Ara</h4>
                        How It Feels To Be A Muslim Woman Sold By India's Right Wing
                    </div>
                    <div>
                        <h4>W. Kamau Bell</h4>
                        There's So Much More To Say About Bill Cosby
                    </div>
                    <div>
                        <h4>Robert J. Darvis</h4>
                        Why You Should not Excercise To Lose Weight
                    </div>
                    <div>
                        <h4>Christina Bu</h4>
                        What Norway Can Teach World About Switvhing toElectric Vehicles
                    </div>
                    </div>
                </div>
                <div className='ltestStories ps-3 pt-3'>
                    <h5>Latest Stories</h5>
                    <div>
                        {Api.map((story, index) => (
                            <div key={index} style={{textAlign:'left'}} className='mb-3'>
                                <span style={{fontWeight:'bold'}}>{story.title}</span>
                                <br />
                                <span className='date'>
                                {story.function}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home