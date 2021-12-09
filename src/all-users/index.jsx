import React, {useCallback, useEffect, useState} from 'react';
import { ABI, ADDRESS } from '../config';
import Web3 from 'web3';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export const AllUsers = () => {
    const [account, setAccount] = useState();
    const [contract, setContract] = useState();
    const [users, setUsers] = useState([]);

    const getData = useCallback(async () => {
        await window.ethereum.enable();
        const localNetwork = new Web3("http://127.0.0.1:7545/%22");
        const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545/%22");
        const localAccounts = await localNetwork.eth.getAccounts();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const contract = new web3.eth.Contract(ABI, ADDRESS);
        setContract(contract);
    
        localAccounts.forEach(async (account) => {
          const userRaw = await contract.methods.users(account).call();
          console.log(userRaw);
          const user = {
            address: account,
            name: userRaw.name,
            role: userRaw.role,
            date: userRaw.date,
          };
          setUsers((prev) => [...prev, user]);
        });
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(() => {
        getData();
    }, [])

    console.log(users);
    return (
        <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users.length > 0 && users.map((item, index) => (
            <>
            {item.name && (<div>
            <ListItem key={index}>
            <ListItemAvatar>
                <Avatar>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.address} />
            </ListItem>
            </div>
            )}
            </>
        ))}
        </List>
        </div>
    )
}