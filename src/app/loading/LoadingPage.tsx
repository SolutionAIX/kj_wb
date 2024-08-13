import './LoadingPage.css';

function LoadingPage() {
    return (
        <div className="loading-cover bg-opacity-25 bg-white dark:bg-background backdrop-blur-md">
            <div className="pyramid-loader">
                <div className="wrapper">
                    <span className="side side1"></span>
                    <span className="side side2"></span>
                    <span className="side side3"></span>
                    <span className="side side4"></span>
                    <span className="shadow"></span>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
