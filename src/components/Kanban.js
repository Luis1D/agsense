import { backlogData, todoData, doingData, doneData, reviewData } from '../data/data';
import { getDateTillDue, getClockColor } from '@/helpers/help';

const Kanban = () => {
    return <div id="Kanban">
        <div className="greeting">
            <div>
                <h1>Good Morning, Jane!</h1>
                <span>Wed. Nov 28 2022</span><br />
                <span>6 Task in ques</span>
            </div>
            <div>
                <img src="./user-1.jpg" alt="user" />
                <span>IPM Lead</span>
            </div>
        </div>
        <div className="kanban">
            <div className="backlog col">
                <div className="label"><span>Backlog</span></div>
                <div className="feed">
                {
                    backlogData.map(data => {
                        return <div className="card" key={data.id}>
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
            <div className="todo col">
                <div className="label"><span>Todo</span></div>
                <div className="feed">
                {
                    todoData.map(data => {
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
            <div className="doing col">
                <div className="label"><span>Doing</span></div>
                <div className="feed">
                {
                    doingData.map(data => {
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
            <div className="done col">
                <div className="label"><span>Done</span></div>
                <div className="feed">
                {
                    doneData.map(data => {
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
            <div className="review col">
                <div className="label"><span>Review</span></div>
                <div className="feed">
                {
                    reviewData.map(data => {
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

export default Kanban;