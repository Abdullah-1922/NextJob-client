
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const HomeCategoryJobs = () => {
    const handleTab=(e)=>{
        const category=e.target.innerText;
          console.log(category);
          fetch(`http://localhost:5000/alljob?category=${category}`)
          .then(res=>res.json())
          .then(data=>console.log(data))
        
        
        }
    return (
        <div>
            <Tabs>
    <TabList onClick={handleTab}>
      <Tab  >Web Development</Tab>
      <Tab>Digital Marketing </Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content </h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default HomeCategoryJobs;