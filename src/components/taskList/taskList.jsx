import { TaskItem } from "../taskItem/taskItem"
import styles from "./taskList.module.css"

export const TaskList = ({
    tasksList,
    incompletedTasks,
    editTask,
    deleteTasks,
}) => {

    const taskList = tasksList.map((task) =>
        <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTasks={deleteTasks} />
    );


    if (taskList && taskList.length > 0) {

        return (
            <div className="box">
                <h2 className={styles.title}>
                    {incompletedTasks > 0 && (
                        <>🎯 Il te reste encore <span className="important">{incompletedTasks}</span> tâches à accomplir !</>
                    )}

                    {incompletedTasks === 0 && (
                        <>👏 Génial, tu as accompli toutes tes tâches !</>
                    )}
                </h2>
                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>
                        {taskList}
                    </ul>
                )}

            </div>
        );
    }
    return (
        <div className="box">
            <h2 className={styles.emptyState}>
                👋 Salut, tu n'as rien à faire ! Profite de ton temps libre !
            </h2>
        </div>
    );
};