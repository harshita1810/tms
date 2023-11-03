import React, { useState } from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Cards() {
    const navigate = useNavigate();
    
    const ig = () => {
        navigate('/trainerlist')
    }

    const ig1 = () => {
      navigate('/trainerlist1')
    }

    const ig2 = () => {
      navigate('/trainerlist2')
    }

    const ig3 = () => {
      navigate('/trainerlist3')
    }

    const ig4 = () => {
      navigate('/trainerlist4')
    }

    const ig5 = () => {
      navigate('/trainerlist5')
    }

    const ig6 = () => {
      navigate('/trainerlist6')
    }

    const data = [
      {
        name: 'Reshab Kumar',
        Rating: 4.9,
      },
      {
        name: 'Amrit Singh',
        Rating: 4,
      },
      {
        name: 'Shweta Lamba',
        Rating: 4.1,
      },
      {
        name: 'Suman Kumar Das',
        Rating: 3.5,
      },
      {
        name: 'Ashok K Chitkara',
        Rating: 4.5,
      },
      {
        name: 'Madhu Chitkara',
        Rating: 3.8,
      },
      {
        name: 'Vidhu Baggan',
        Rating: 4.3,
      },
    ];

    const [chartData, setChartData] = useState(data);
    const [chartLabel, setChartLabel] = useState('Weekly-Rating');
    const [selectedOption, setSelectedOption] = useState('1');
    const [barColor, setBarColor] = useState('#79AC78');
  
    const handleDropdownSelect = (eventKey) => {
      if (eventKey === '1') {
        // User clicked "Weekly"
        setChartData(data);
        setChartLabel('Weekly-Rating'); 
        setBarColor('#79AC78');// Set the chart data to the original data
      } else if (eventKey === '2') {
        // User clicked "Monthly"
        // Replace this with the monthly data you want to display
        setChartLabel('Monthly-Rating');
        setBarColor('#7A9D54');
        const monthlyData = [
          {
            name: 'Reshab Kumar',
            Rating: 5,
          },
          {
            name: 'Amrit Singh',
            Rating: 4.3,
          },
          {
            name: 'Shweta Lamba',
            Rating: 4.5,
          },
          {
            name: 'Suman Kumar Das',
            Rating: 4.1,
          },
          {
            name: 'Ashok K Chitkara',
            Rating: 4.7,
          },
          {
            name: 'Madhu Chitkara',
            Rating: 4.1,
          },
          {
            name: 'Vidhu Baggan',
            Rating: 4.6,
          },
          
          // Add more data here...
        ];
        setChartData(monthlyData);
      }
    }
  return (
    <>
    <div className='outer'>
    <div className='wrapper'>
                <div className='item' onClick={ig}>
        <img  src="https://media.licdn.com/dms/image/D5603AQEbeHOxa9cdLQ/profile-displayphoto-shrink_800_800/0/1671786834091?e=1703721600&v=beta&t=GZUhFj4873GCmVBHNJMMXRzXYd-MJ-qx9fp6fJuiUzg"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Reshab Kumar</b></p>
            <p><b>Designation: FEE Trainer</b></p>
        </div>
        <div className='item' onClick={ig1}>
        <img  src="https://media.licdn.com/dms/image/C4D03AQEaaE_fjQr0xw/profile-displayphoto-shrink_800_800/0/1655143493030?e=1703721600&v=beta&t=mtTaPkxlhYwE1i-JnXFNty90n5jio1o6UjNGyZGe50M"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Amrit Singh</b></p>
            <p><b>Designation: PA Trainer</b></p>
        </div>
        <div className='item' onClick={ig2}>
        <img  src="https://media.licdn.com/dms/image/D4D03AQHJ97DmzlKJzw/profile-displayphoto-shrink_800_800/0/1670212504495?e=1703721600&v=beta&t=9zJ8cICA-t6oN46-Um9HqKOY0Zi0hqsyy3VM8da_dTM"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Shweta Lamba</b></p>
            <p><b>Designation: C++ Trainer</b></p>
        </div> 
        <div className='item' onClick={ig3}>
        <img  src="https://media.licdn.com/dms/image/C5603AQE_gaMjscQWkw/profile-displayphoto-shrink_800_800/0/1614754559496?e=1703721600&v=beta&t=xpvLpbPxx-DhtjB4rE_j0Um38AVOaqeRQaiT0uXf8VQ"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Ashok K Chitkara</b></p>
            <p><b>Designation: Chancellor</b></p>
        </div>
        <div className='item' onClick={ig4}>
        <img  src="https://media.licdn.com/dms/image/C5603AQETRw820WOCxw/profile-displayphoto-shrink_800_800/0/1589805682146?e=1703721600&v=beta&t=W9uw75uTSs2A4oMcC27s7k07ZnBEMF73VkEeouP2OY4"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Madhu Chitkara</b></p>
            <p><b>Designation: Chancellor2</b></p>
        </div>
        <div className='item' onClick={ig5}>
        <img  src="https://media.licdn.com/dms/image/D4D03AQFVzfVCL14bJg/profile-displayphoto-shrink_800_800/0/1695800334905?e=1703721600&v=beta&t=Tv_BsOS_gjL6ibU77CER-T21_7xcZlQFaiS9cRwq9NQ"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Vidhu Baggan</b></p>
            <p><b>Designation: CN Trainer</b></p>
        </div>
        <div className='item' onClick={ig6}>
        <img  src="https://media.licdn.com/dms/image/C5103AQHkHhNPG_Ao9A/profile-displayphoto-shrink_800_800/0/1586082847666?e=1703721600&v=beta&t=Pd0GMhcsstRK6Pp9vKYakS5SQkxJVF1Eyzzbqy-yu0Q"
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Raj Gaurang</b></p>
            <p><b>Designation: Dean</b></p>
        </div>
    </div>
    <div>
    <DropDown onSelect={handleDropdownSelect} selectedOption={selectedOption} />
    <div className='barchart'>
    <BarChart
                width={1300}
                height={400}
                data={chartData}
                margin={{
                  top: 10,
                  right: 70,
                  left: 20,
                  bottom: 50,
                }}
                barSize={40}
                
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 60, right: 60 }} />
                <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Rating" fill={barColor} background={{ fill: '#eee' }} name={chartLabel} />
              </BarChart>
              
              </div>
              
    </div>
    </div>
    {/* <Create /> */}
    </>
  );
}

export default Cards;