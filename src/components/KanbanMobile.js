import { useState } from 'react';
import { backlogData, todoData, doingData, doneData, reviewData } from '../data/data';
import { getDateTillDue, getClockColor } from '@/helpers/help';

const KanbanMobile = () => {
    const [task, setTask] = useState(backlogData);
    return <div id="KanbanMobile">
        <div className="greeting">
            <div>
                <h1>Good Morning, Jane!</h1>
                <span>Wed. Nov 28 2022</span><br />
                <span>IPM Lead</span>
            </div>
            <div>
                <img src="./user-1.jpg" alt="user" />
            </div>
        </div>

        <div className="kanban">
            <div>
                <div className="label">
                    <span onClick={ () => setTask(backlogData) }>Backlog</span>
                    <span onClick={ () => setTask(todoData) }>Todo</span>
                    <span onClick={ () => setTask(doingData) }>Doing</span>
                    <span onClick={ () => setTask(doneData) }>Done</span>
                    <span onClick={ () => setTask(reviewData) }>Review</span>
                </div>
                <div className="feed">
                {
                    task.map(data => {
                        return <div className="card" key={ data.id }>
                            <div className="top-of-card">
                                <div className={ `marker ${ getDateTillDue(data.dueDate) }` }></div>
                                <img src="./dots.png" alt="edit" />
                            </div>
                            <span className="title">{ data.title }</span>
                            <div className="date-member-container">
                                <div className={ `due-date ${ getDateTillDue(data.dueDate) }` }>
                                    <img src={ `${getClockColor(getDateTillDue(data.dueDate))}` } />
                                    <span>{ `In ${data.dueDate - new Date().getDate()} day @ ${data.dueTime}` }</span>
                                </div>
                                <div className="member-container">
                                    { data.members.map(user => <img key={ user.indexOf(user) } src={ `./${user}` } className="member-photos"/>) }
                                </div>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        </div>

    </div>
}

export default KanbanMobile;