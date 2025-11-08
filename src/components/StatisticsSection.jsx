import React, { useState, useEffect } from 'react';

// Custom Hook to handle the counting animation
const useCounter = (endValue, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        // Simple linear interpolation for counting
        const stepTime = Math.abs(Math.floor(duration / endValue));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === endValue) {
                clearInterval(timer);
            }
        }, stepTime);

        // Cleanup function
        return () => clearInterval(timer);
    }, [endValue, duration]);

    return count;
};

const statisticsData = [
    { value: 2021, label: 'FOUNDING YEAR' },
    { value: 3000, label: 'HAPPY COSTUMERS' },
    { value: 50, label: 'COMPANY WORK WITH US' },
    { value: 2, label: 'OFFICES' },
    { value: 21, label: 'TEAM MEMBERS' },
    { value: 750, label: 'PROJECTS COMPLETED' },
];


const StatBlock = ({ stat, isRightEdge, isBottomRow }) => {
    // Use the custom hook to get the animated number
    const animatedValue = useCounter(stat.value); 
    
    // Logic to retain original formatting (e.g., if there's text in the number)
    // Here we assume all values are numbers for counting.
    const displayValue = stat.value >= 1000 ? animatedValue.toLocaleString() : animatedValue;

    return (
        <div 
            className={`col-6 stat-block ${isRightEdge ? 'stat-block-right-edge' : ''} ${isBottomRow ? 'stat-block-bottom-row' : ''}`}
        >
            <h2 className="display-4 fw-bold mb-1">{displayValue}</h2>
            <p className="text-uppercase fw-normal mb-0" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                {stat.label}
            </p>
        </div>
    );
};

const StatisticsSection = () => {
    const backgroundImage = 'src/assets/statistics.jpg'; 

    return (
        <div className="statistics-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container py-5">
                <div className="row">
                    
                    {/* LEFT COLUMN: HEADING AND TAGLINE */}
                    <div className="col-12 col-lg-5 p-4">
                        <p className="text-uppercase fw-bold mb-3" style={{ color: '#d9534f', fontSize: '0.8rem' }}>
                            DEVELOPED BY XTEMOS STUDIO @ 2022
                        </p>
                        <h1 className="display-4 fw-bold mb-4">
                            We work through every aspect at the planning
                        </h1>
                        <p className="text-uppercase fw-normal" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                            WE DO IT FOR YOU WITH LOVE
                        </p>
                    </div>

                    {/* RIGHT COLUMN: STATISTICS GRID */}
                    <div className="col-12 col-lg-7 d-flex align-items-center">
                        <div className="row g-0 w-100">
                            {statisticsData.map((stat, index) => (
                                <StatBlock
                                    key={index}
                                    stat={stat}
                                    isRightEdge={(index + 1) % 2 === 0} 
                                    isBottomRow={index >= 4} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;