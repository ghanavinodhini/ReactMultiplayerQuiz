import React from 'react';
import Form from 'react';

function AddQuestionForm() {
    return (
        <div>
            <h1 className="add__question__header"> Add Question </h1>
            <form className="add__question__form">
                <div className="add__question__container">
                    <label className="question"> Question: </label>
                    <div className="add__question">
                        <textarea
                            type="text"
                            className="question__form"
                            id="question"
                            placeholder="Enter Question"
                        />
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default AddQuestionForm
