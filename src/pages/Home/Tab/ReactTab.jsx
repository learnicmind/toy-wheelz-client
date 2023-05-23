import React, { useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ReactTab = () => {

    const [alltoys, setAllToys] = useState([])
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);
    const [currentToy, setcurrentToy] = useState([])
    console.log(currentToy);

    useEffect(() => {
        fetch('https://toy-wheelz-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            });
    }, [])

    useEffect(() => {
        if (tabIndex === 0) {
            const cardBoard = alltoys.filter(alltoy => alltoy.sub_category === 'Cardboard Toy Car')
            setcurrentToy(cardBoard);
        }
        else if (tabIndex === 1) {
            const robotics = alltoys.filter(alltoy => alltoy.sub_category === 'Robotics Toy Car')
            setcurrentToy(robotics);
        }
        else {
            const vehcle = alltoys.filter(alltoy => alltoy.sub_category === 'Vehcle')
            setcurrentToy(vehcle);
        }
    }, [tabIndex, alltoys])


    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10 mb-4'>Shop by Category</h1>

            <div className='mx-8'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                    setTabIndex(index)
                    // console.log(index)
                }
                }>

                    <TabList>
                        <Tab>CardBoard Toy Car</Tab>
                        <Tab>Robotics Toy Car</Tab>
                        <Tab>Vehicle</Tab>
                    </TabList>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-5 my-8'>
                            {
                                currentToy.map(singleToy => <TabData
                                    key={singleToy._id}
                                    tabData={singleToy}
                                >
                                </TabData>)
                            }

                        </div>

                        
                </Tabs>
            </div>



        </div>
    );
};

export default ReactTab;