import React from 'react';

const SingleComponent = (props) => {
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={props.picture}  alt="Profile" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.date}
                        </span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComponent;