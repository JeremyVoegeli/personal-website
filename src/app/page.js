export default function Home() {
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div name="content" className="flex w-100% mx-30 bg-red-100 items-start">
        <div name="page-text" className="flex-1">
          <h1 className="bg-purple-200">
            Welcome!
          </h1>
          <p>
            Hi, I'm Jeremy! I'm a 2026 graduate from the University of Connecticut with a B.S. in Computer Science. I have a concentration in software development and design, and my focus has been in backend design and cloud infrastructue. Outside of CS, I spend my time both playing and teaching marching percussion, at both the college band and competitive Drum Corps level.
          </p>
        </div>
        <img src="/Jeremy2026Portrait.jpg" alt="Jeremy Voegeli Headshot" className="h-140 aspect-2/3 bg-pink-200"></img>
      </div>
    </div>
  )
}
