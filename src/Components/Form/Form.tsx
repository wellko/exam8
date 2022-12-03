import React, {useCallback, useEffect, useState} from 'react';
import {Quote} from "../../types";
import AxiosApi from "../../axios-api";
import {useNavigate, useParams} from "react-router-dom";


const Form = () => {
    const {id} = useParams();

    const [spinner, setSpinner] = useState(false);

    const getFunc = useCallback(async (id: string) => {
        const url = '/quotes/' + id + '.json'
        try {
            const response = await AxiosApi.get(url);
            setQuote(response.data)
        } finally {
        }
    }, [])

    useEffect(() => {
        if (id) {
            getFunc(id).catch(console.error);
        }
    }, [getFunc, id]);


    const navigate = useNavigate();

    const [quote, setQuote] = useState<Quote>({
        category: '',
        quote: '',
        author: '',
    });

    const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>) => {
        const {name, value} = e.target;
        setQuote(prev => ({...prev, [name]: value}));
    };

    const FormSent = async (e: React.FormEvent) => {
        e.preventDefault();
        setSpinner(true);
        if (quote.author.length > 2 && quote.quote.length > 2 && quote.category.length > 2) {
            try {
                await AxiosApi.post('/quotes.json', quote)
            } finally {
                setSpinner(false);
                navigate('/');
            }
        } else {
            alert('Fill all fields');
            setSpinner(false);
        }
    }

    const FormPut = async (e: React.FormEvent) => {
        e.preventDefault();
        setSpinner(true);
        const url = '/quotes/' + id + '.json'
        if (quote.author.length > 2 && quote.quote.length > 2 && quote.category.length > 2) {
            try {
                await AxiosApi.put(url, quote)
            } finally {
                setSpinner(false);
                navigate('/');
            }
        } else {
            alert('Fill all fields');
            setSpinner(false);
        }
    };


    return (
        <div className='container'>
            <form onSubmit={id ? FormPut : FormSent}>
                <div className='d-flex flex-column text-center border-primary border border-4 rounded mt-5'>
                    <h1 className='fw-bolder mb-5'>{id ? 'Edit quote' : 'Add quote'}</h1>
                    <select name='category' onChange={ChangeEvent}>
                        <option value=''>{id ? 'Click if you want to change category' : 'Select category'}</option>
                        <option value='Wisdom'>Wisdom</option>
                        <option value='Attitude'>Attitude</option>
                        <option value='Love'>Love</option>
                        <option value='Success'>Success</option>
                        <option value='Time'>Time</option>
                    </select>

                    <label htmlFor='author' className='fw-bold fs-4'>Author</label>
                    <input className='w-75 align-self-center' id='author' name='author' type='text'
                           value={quote.author}
                           onChange={ChangeEvent}/>
                    <label htmlFor='quote' className='fw-bold fs-4'>Quote</label>
                    <textarea className='w-75 align-self-center' name='quote' id='quote' rows={9} cols={90}
                              value={quote.quote}
                              onChange={ChangeEvent}/>
                    <button className='btn btn-primary mt-5' type='submit'>{spinner ? (
                            <div className="spinner-border text-dark" role="status">
                            </div>) :
                        id ? 'Edit' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;