
import '../styles/projects.css'

const Projects: React.FC = () => {
    return(
        <div className='project-container'>
            <h1>Projects</h1>
            <div className="bento">
                <div className="row row-1">
                    <div className="col">
                        <div className="col-box"></div>
                    </div>

                    <div className="col col-2">
                        <div className="col-box"></div>
                        <div className="col-box"></div>
                    </div>
                </div>
                <div className="row row-1">
                <div className="row row-1">
                    <div className="col">
                        <div className="col-box"></div>
                    </div>

                    <div className="col col-2">
                        <div className="col-box"></div>
                        <div className="col-box"></div>
                    </div>
                </div>
                </div>
                <div className="row row-1">
                <div className="col">
                        <div className="col-box"></div>
                    </div>

                    <div className="col col-2">
                        <div className="col-box"></div>
                        <div className="col-box"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;