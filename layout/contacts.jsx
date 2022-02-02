import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import styles from '../styles/Contacts.module.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Contacts({ open, handleClose }) {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const [form, setForm] = React.useState({
        name: '',
        company_name: '',
        contacts: '',
        amazon_store: '',
        advertising_budget: '',
        revenue: ''
    })
    const handleChange = (e) => {
        setForm(prev => {
            prev[e.target.name] = e.target.value
            return { ...prev }
        })
    }
 /*   const postForm = () => {
        superagent
            .post(`https://docs.google.com/forms/d/e/1FAIpQLSdFkAP7y7f101kooNeto_YBSa1ADfLvpJsLwy-PivEdVqPCaQ/viewform`)
            .type('form')
            .send({
                'entry.720086727': form.name,
                'entry.349303945': form.company_name,
                'entry.2129561643': form.contacts,
                'entry.1716331674': form.amazon_store,
                'entry.627122771': form.advertising_budget,
                'entry.1321100583': form.revenue
            })
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.error(err);
                } else {
                    console.log(res.statusCode);
                }
            });
    } */
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >

            <div className={styles.content}>
                <div className={styles.close}>
                    <img onClick={handleClose} className={styles.close__icon} src={'/close.png'} />
                </div>
                <form  className={styles.from}>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'name'}>Name</label>
                        <input
                            onChange={handleChange}
                            value={form.name}
                            required={true}
                            className={styles.from__input}
                            id={'name'}
                            placeholder={'John Doe'}
                            type={'text'}
                            name={'name'}
                        />

                    </div>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'last'} >Company Name</label>
                        <input
                            onChange={handleChange}
                            value={form.company_name}
                            name={'company_name'}
                            required={true}
                            className={styles.from__input}
                            id={'last'}
                            type={'text'}
                            placeholder={'Company Name'}
                        />

                    </div>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'contacts'}>Contacts</label>
                        <input
                            onChange={handleChange}
                            value={form.contacts}
                            name={'contacts'}
                            required={true}
                            className={styles.from__input}
                            id={'contacts'}
                            placeholder={'Email / Phone / Social'}
                            type={'text'}
                        />

                    </div>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'company'}>Amazon Store</label>
                        <input
                            onChange={handleChange}
                            value={form.amazon_store}
                            name={'amazon_store'}
                            required={true}
                            className={styles.from__input}
                            id={'company'}
                            placeholder={'Amazon Store'}
                            type={'text'}
                        />
                    </div>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'advertising_budget'}>Advertising Budget</label>
                        <input
                            onChange={handleChange}
                            value={form.advertising_budget}
                            name={'advertising_budget'}
                            required={true}
                            className={styles.from__input}
                            id={'advertising_budget'}
                            type={'text'}
                        />

                    </div>
                    <div className={styles.from__formControl}>
                        <label className={styles.from__label} htmlFor={'revenue'}>Revenue</label>
                        <input
                            onChange={handleChange}
                            value={form.revenue}
                            name={'revenue'}
                            required={true}
                            className={styles.from__input}
                            id={'revenue'}
                            type={'text'}
                        />

                    </div>
                    <div className={styles.from__btn_div}>
                        <button className={styles.button}>Send</button>
                    </div>
                </form>
            </div>
        </BootstrapDialog>
    )
}