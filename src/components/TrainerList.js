import React from 'react';
import './TrainerList.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TrainerList = () => {
    const data = [
        { name: 'Group 23', value: 400 },
        { name: 'Group 22', value: 300 },
        { name: 'Group 1', value: 300 },
        { name: 'Group 2', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
                <title>{data[index].name}</title>
            </text>
        );
    };

    return (
        <div className='outerdivision'>
            <div className='innerdiv'>
                <img
                    src="https://media.licdn.com/dms/image/D5603AQEbeHOxa9cdLQ/profile-displayphoto-shrink_800_800/0/1671786834091?e=1703721600&v=beta&t=GZUhFj4873GCmVBHNJMMXRzXYd-MJ-qx9fp6fJuiUzg"
                    width="200"
                    height="200"
                    className="image"
                    alt="React Bootstrap logo"
                />
                <p></p>
                <p><b>Name: </b>Reshab Kumar</p>
                <p><b>Age: </b>25</p>
                <p><b>Designation: </b>FEE Trainer</p>
                <p><b>Specialization: </b>Java, JavaScript, HTML, ReactJs, NodeJs, Python, Kotlin.</p>
                <p><b>Class: </b>G22, G23, G1, G2</p>
            </div>
            <div className='innerdivision'>
            <h2 className='paragraph'><b>Ranking According to Classes</b></h2>
                <div className='piechart'>
                    <ResponsiveContainer width={400} height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx={200}
                                cy={150}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
            </div>
        </div>
    );
}

export default TrainerList;