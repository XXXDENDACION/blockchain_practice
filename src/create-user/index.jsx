import React, {useRef, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './style.module.css';

export const CreateUser = ({accounts, contract, handleCreateUser}) => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleField = (e) => {
        console.log(e.target.value)
        switch (e.target.id) {
            case 'name':
                setName(e.target.value);
                break;
            case 'address':
                setAddress(e.target.value);
                break;
            case 'login':
                setLogin(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
        }
    }

    const handle = () => {
        handleCreateUser(name, address, login, password);
    }

    return (
        <div className={styles.user__form}>
            <Box
                component="form"
                noValidate
                className={styles.user__form__wrapper}
            >
                <h1>Создание пользователя</h1>
                <div className={styles.form__row}>
                    <TextField className={styles.input__row} value={name} onChange={handleField} id="name" label="Имя" variant="outlined" />
                    <TextField className={styles.input__row} value={address} onChange={handleField} id="address" label="Адрес" variant="outlined" />
                </div>
                <div className={styles.form__row}>
                    <TextField className={styles.input__row} value={login} onChange={handleField} id="login" label="Логин" variant="outlined" />
                    <TextField className={styles.input__row} value={password} onChange={handleField} id="password" label="Пароль" variant="outlined" />
                </div>
                <Button onClick={handle} variant="contained">Создать пользователя</Button>
            </Box>
        </div>
    )
}