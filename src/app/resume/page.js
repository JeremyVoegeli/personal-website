export default function Resume(){
    return (
        <div className="w-full">
            <h1 className="bg-purple-200">Resume</h1>
            <p className="bg-green-200">
                Maybe a little blurb about my resume or something
            </p>
            pdf:
            <div name="flex container" className="flex justify-center">
                <object data="/JeremyVoegeliResume.pdf" type="application/pdf" className="w-4/5 h-[800px] border rounded">
                    <p className="p-4">
                    Your browser can't display PDFs directly.{' '}
                    <a href="/JeremyVoegeliResume.pdf" download="Jeremy_Voegeli_Resume.pdf" className="underline">
                        Download the PDF instead.
                    </a>
                    </p>
                </object>
            </div>
        </div>
    )
}