import React, {MouseEventHandler} from 'react';
import {Quote} from "../../types";

interface Props {
    quote: Quote;
    Edit: MouseEventHandler;
    Delete: MouseEventHandler;
}

const QuotePost: React.FC<Props> = ({quote, Edit, Delete}) => {
    return (
        <section className="">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">

                        <div className="card">
                            <div className="card-body">
                                <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                                    <div className="blockquote-custom-icon bg-info shadow-1-strong">
                                        <i className="fa fa-quote-left text-white"></i>
                                    </div>
                                    <h1 className='text-center m-0'>{quote.category}</h1>
                                    <p className="mb-0 mt-2 font-italic">
                                        {quote.quote}
                                    </p>
                                    <footer className="blockquote-footer pt-4 mt-4 border-top text-end">
                                        <p>{quote.author}</p>

                                        <button className='btn-outline-dark btn me-2' onClick={Edit}> Edit</button>
                                        <button className='btn-outline-dark btn me-2' onClick={Delete}>Delete</button>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        // <div className='container'>
        //     <div className='border-primary border border-4 rounded mb-5'>
        //         <h1 className='text-wrap text-break fst-italic'> {quote.category}</h1>
        //         <p className='border-top border-4 border-bottom'> Quote: {quote.quote}</p>
        //         <p> {quote.author}</p>
        //
        //
        //     </div>
        // </div>
    );
};

export default QuotePost;