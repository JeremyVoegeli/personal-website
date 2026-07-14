export default function Projects(){
    return (
        <div>
            <h1>Projects</h1>
            <div name="grid" className="grid grid-cols-2 gap-2 m-2">
                <div name="project" className="bg-blue-200 min-h-50">
                    <h2>Title 1</h2>
                    <p>
                        This is a description of project 1.
                    </p>
                    <a href="https://github.com/JeremyVoegeli/JobTracker" target="_blank">GitHub</a>
                </div>
                <div name="project" className="bg-green-200">
                    <h2>Title 2</h2>
                    <p>
                        This is a description of project 2.
                    </p>
                    <a href="https://github.com/JeremyVoegeli/JobTracker" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    )
}