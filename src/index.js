import React from 'react';
import ReactDom from 'react-dom';
import SingleComponent from './SingleComponent'
import profile1 from './image/pic1.jpeg';
import profile2 from './image/pic2.jpeg';
import profile3 from './image/pic3.jpeg';
import UserCard from './UserCard'

const App = () => {
    return(
        <div className='ui comments'>
            <h1>Hello, let´s see what happens</h1>
            <UserCard>
                <SingleComponent 
                    name='ignac' 
                    date='Today at 5:00PM'
                    text='Hello Humans!!!'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComponent 
                    name='Irae' 
                    date='Today at 6:00PM'
                    text='Hello World!'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComponent 
                    name='Other user' 
                    date='Today at 7:00PM'
                    text='Other human'
                    picture={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)