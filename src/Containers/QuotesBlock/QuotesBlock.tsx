import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axios-api";
import {Quote} from "../../types";
import QuotePost from "../../Components/QuotePost/QuotePost";
import {useNavigate, useParams} from "react-router-dom";

const QuotesBlock = () => {
    const navigate = useNavigate();

    const [spinner, setSpinner] = useState(true);

    const {category} = useParams();

    const [quotes, setQuotes] = useState<Quote[]>([]);

    let content;

    let url = 'quotes.json';

    if (category) {
        url = '/quotes.json?orderBy="category"&equalTo="' + category + '"';
    }

    const editFunc = (id: string) => {
        const url = '/quotes/' + id + '/edit'
        navigate(url);
    }

    const deleteFunc = async (id: string) => {
        const url = '/quotes/' + id + '.json';
        try {
            await AxiosApi.delete(url)
        } finally {
            getQuotes().catch(console.error);
        }
    };


    const getQuotes = useCallback(async () => {
        setSpinner(true);
        try {
            const response = await AxiosApi.get(url);
            let quote = [];
            if (response.data !== null) {
                quote = Object.keys(response.data).map(key => {
                    const quote = response.data[key];
                    quote.id = key;
                    return quote
                });
            }
            setQuotes(quote);
        } finally {
            setSpinner(false);
        }
    }, [url]);

    useEffect(() => {
        getQuotes().catch(console.error);
    }, [getQuotes]);

    if (quotes.length > 0) {
        content = (<div>
            {quotes.map(item => (<QuotePost quote={item} key={Math.random()} Edit={() => editFunc(item.id!)}
                                            Delete={() => deleteFunc(item.id!)}/>))}
        </div>);
    } else {
        content = (<><h1> There is no quotes yet</h1></>);
    }

    return (
        <>
            {spinner ? (<div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>) : (content)}
        </>
    );
};

export default QuotesBlock;


