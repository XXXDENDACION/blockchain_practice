import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { ABI, ADDRESS } from './config';
import Web3 from 'web3';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CreateUser } from './create-user';
import { AllUsers } from './all-users';
import { AddBook } from './add-book';


function App() {
  const [accounts, setAccounts] = useState();
  const [contract, setContract] = useState();
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getData = useCallback(async () => {
      await window.ethereum.enable();
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
      const accounts = await web3.eth.getAccounts();
      const checksummedAccounts = accounts.map((account) =>
       web3.utils.toChecksumAddress(account)
      );
      web3.defaultAccount = checksummedAccounts[0];
      
      setAccounts(checksummedAccounts);
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      setContract(contract);

    }, []);
    
    const handleCreateUser = (name, address, login, password) => {
      if(contract) {
          contract.methods.createUser(name, login, password, address, 124124)
            .send({ from: accounts[0], gas: 470000, gasPrice: 8000000000 })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
  }

    useEffect(() => {
      getData();
    }, [getData]);

   

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="App">
      <div>
      {!success ? (
        <>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Приветственный экран" {...a11yProps(0)} />
            <Tab label="Админка" {...a11yProps(1)} />
            <Tab label="Создание пользователя" {...a11yProps(2)} />
            <Tab label="Добавление книги" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
              <h1>
                Добро пожаловать в библиотеку
              </h1>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <AllUsers />
            </TabPanel>
        <TabPanel value={value} index={2}>
          <CreateUser handleCreateUser={handleCreateUser} accounts={accounts} contract={contract}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AddBook  accounts={accounts} contract={contract}/>
        </TabPanel>
      </>) : (
        <div>HI</div>
      )}
      </div>
    </div>
  );
}

function TabPanel({value, index, children}) {
  return (
    <div>
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

export default App;
