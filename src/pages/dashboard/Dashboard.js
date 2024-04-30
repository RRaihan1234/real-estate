import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import './dashboard.css'

function Dashboard() {

    const data1 = [
        {
          name: '2017',
          short_term_rented_apartment_in_a_year: 10,
          long_term_rented_apartment_in_a_year: 20,
          amt: 2400,
        },
        {
          name: '2018',
          short_term_rented_apartment_in_a_year: 15,
          long_term_rented_apartment_in_a_year: 23,
          amt: 2210,
        },
        {
          name: '2019',
          short_term_rented_apartment_in_a_year: 24,
          long_term_rented_apartment_in_a_year: 9,
          amt: 2290,
        },
        {
          name: '2020',
          short_term_rented_apartment_in_a_year: 12,
          long_term_rented_apartment_in_a_year: 30,
          amt: 2000,
        },
        {
          name: '2021',
          short_term_rented_apartment_in_a_year: 50,
          long_term_rented_apartment_in_a_year: 21,
          amt: 2181,
        },
        {
          name: '2022',
          short_term_rented_apartment_in_a_year: 40,
          long_term_rented_apartment_in_a_year: 23,
          amt: 2500,
        },
        {
          name: '2023',
          short_term_rented_apartment_in_a_year: 45,
          long_term_rented_apartment_in_a_year: 8,
          amt: 2100,
        },
      ];

    const data2 = [
        {
          name: '2017',
          sold_apartment_in_a_year: 10,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2018',
          sold_apartment_in_a_year: 23,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '2019',
          sold_apartment_in_a_year: 15,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '2020',
          sold_apartment_in_a_year: 30,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '2021',
          sold_apartment_in_a_year: 40,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2022',
          sold_apartment_in_a_year: 50,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '2023',
          sold_apartment_in_a_year: 43,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
           
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>APARTMENTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>64</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>04</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

       
                <div className='charts'>
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={data1}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="short_term_rented_apartment_in_a_year" fill="#8884d8" />
                        <Bar dataKey="long_term_rented_apartment_in_a_year" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                
       
       
        
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data2}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sold_apartment_in_a_year" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
           
        </div>
    </main>
  )
}

export default Dashboard;