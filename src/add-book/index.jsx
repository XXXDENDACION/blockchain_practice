import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './style.module.css';

export const AddBook = ({accounts, contract}) => {
    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [id, setId] = useState();

    const handleField = (e) => {

        switch (e.target.id) {
            case 'name':
                setName(e.target.value);
                break;
            case 'author':
                setAuthor(e.target.value);
                break;
            case 'id':
                setId(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleAddBook = () => {
        if(contract) {
            contract.methods.addBook(name, author, id, 1234)
              .send({ from: accounts[0], gas: 470000, gasPrice: 8000000000 })
              .then(res => console.log(res))
              .catch(err => console.log(err));
          }
        }

    return (
        <div className={styles.user__form}>
            <Box
                component="form"
                noValidate
                className={styles.user__form__wrapper}
            >
                <h1>Добавление книги</h1>
                <div className={styles.form__row}>
                    <TextField className={styles.input__row} value={name} onChange={handleField} id="name" label="Название" variant="outlined" />
                    <TextField className={styles.input__row} value={author} onChange={handleField} id="author" label="Автор" variant="outlined" />
                </div>
                <div className={styles.form__row}>
                    <TextField className={styles.input__row} value={id} onChange={handleField} id="id" label="Категория(id)" variant="outlined" />
                </div>
                <Button onClick={handleAddBook} variant="contained">Добавить</Button>
            </Box>
        </div>
    )
}