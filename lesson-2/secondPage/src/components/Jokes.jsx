
function Jokes({punchline, setup}) {
  return (
    <div className="jokes">
        <article className="jokesArt">
            <p className="para">setup: {setup}</p>
            <p>punchline:  {punchline}</p>
            <hr />

        </article>
    </div>
  )
}

export default Jokes