import styles from './app.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <h2>Welcome to the Codux Playground 🎉</h2>
            <p className={styles.subtitle}>
                Double click to edit the App component
                <br />
                &amp; drag here elements or components from the &quot;+ Add&quot; Panel
            </p>
            <p className={styles.subtitle}>
                To enable Tailwind CSS, uncomment the directives at the top of the index.css file
            </p>
        </div>
    );
}

export default App;
