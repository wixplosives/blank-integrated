import styles from './app.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Hello, world!</h1>
            <p className="text-2xl text-center py-3">
                Double-click this component to drill-in and edit this component
            </p>
        </div>
    );
}

export default App;
